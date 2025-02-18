'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2025-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-01-27T17:01:17.194Z',
    '2025-02-11T23:36:17.929Z',
    '2025-02-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2025-02-15T14:18:46.235Z',
    '2025-02-16T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

//format date
const formatDate = (date,locale) => {
  const calcDayPass = (day1, day2) => Math.round(Math.abs(day2 - day1) / (1000 * 60 *60 * 24))
  const daysPass = calcDayPass(new Date(),date)
  console.log(daysPass)

  if(daysPass === 0) return 'today'
  if(daysPass === 1) return 'yesterday'
  if(daysPass <= 7) return `${daysPass} days ago`
  else {
    return new Intl.DateTimeFormat(locale).format(date)
    /*
    const day = `${date.getDate()}`.padStart(2,0) //to get 01 instead of 1
    const month = `${date.getMonth() + 1}`.padStart(2,0)
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
    */
  }
}

//formatCurrency
const formatCurrency = (value, locale, currency) => new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: currency
}).format(value)

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //combine movements array with movement dates array in an object
  const combineMovements = acc.movements.map((mov,i) => (
    { movement: mov, 
      movementDate: acc.movementsDates.at(i)
    }
  ))

  //const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  if (sort) combineMovements.sort((a, b) => a.movement - b.movement)
  
    combineMovements.forEach(function(obj, i) {
    const {movement, movementDate} = obj
    const type = movement > 0 ? 'deposit' : 'withdrawal';

  //Add movement date 
  const date = new Date(movementDate)
  const displayDate = formatDate(date, acc.locale)

  //Add number format
  const formatNumber = formatCurrency(movement, acc.locale, acc.currency)
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatNumber}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date
    const now = new Date()
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', 
      year: 'numeric'
    }
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now) 
    /*
    const now = new Date() //new Date('2040-11-19T22:55:00.000Z')
    const day = `${now.getDate()}`.padStart(2,0) //to get 01 instead of 1
    const month = `${now.getMonth() + 1}`.padStart(2,0)
    const year = now.getFullYear()
    const hour = now.getHours()
    const mins = `${now.getMinutes()}`.padStart(2,0)
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${mins}`
    */

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Add the transfer amount 
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Add the transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add loan amount
    currentAccount.movements.push(amount);
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*click the balance to make the movement rows turn gray and white
labelBalance.addEventListener('click', function(){
  //document.querySelectorAll('.movements__row') returns Note list so we have to spead it and turn it to an array
  const rows = [...document.querySelectorAll('.movements__row')]
  rows.forEach((row,i) => {
    if (i % 2 === 0){
      row.style.backgroundColor = 'lightgray'
    }
  })
})
  

//Fake Log in
currentAccount = account1
updateUI(currentAccount)
containerApp.style.opacity = 100

//Display Date 
const now = new Date()
//mannually define locale with ISO Language Code Table -> 'en-US'2/18/2025, 'en-GB'2/18/2025
//labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now) //2/18/2025

//use options to display hours too
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //it can be numberic, 2-digit
  year: 'numeric',
  weekday: 'long'
}
//labelDate.textContent = new Intl.DateTimeFormat('en-GB',options).format(now) //Tuesday 18 February 2025 at 11:01 AM

//getting user's locale
const locale = navigator.language//en-US
labelDate.textContent = new Intl.DateTimeFormat(locale,options).format(now) //Tuesday, February 18, 2025 at 11:01 AM

*/