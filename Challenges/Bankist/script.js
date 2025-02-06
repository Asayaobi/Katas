'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//display the array of movements in the app (movement container)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displaymovement = function (movements){
  //clear the hardcoded info on movement container
  containerMovements.innerHTML=''
  //loopthe movements array
  movements.forEach((mov,i)=> {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
` 
  //display it on the html with insertAdjacentHTML afterbegin to display order from newest to the oldest (beforeend will show the oldest to newest order)
  containerMovements.insertAdjacentHTML('afterbegin',html)

  //check the display html
  //console.log(containerMovements.innerHTML)
  })
}

//call the function
// displaymovement(movements)
//display movement from account1
//displaymovement(account1.movements)
/////////////////////////

//calculate the current balance
const calDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov)=> acc+mov, 0)
  labelBalance.innerHTML = `${balance}€`
}

// calDisplayBalance(account1.movements)

//calculate the summary in-out-interest
const calDisplaySummary = function(movements){
  const depositSum = movements
    .filter(mov => mov > 0)
    .reduce((acc,mov)=> acc + mov, 0)
  labelSumIn.textContent = `${depositSum}€`

  const withdrawalSum = movements
    .filter(mov => mov < 0)
    .reduce((acc,mov)=> acc + mov, 0)
  labelSumOut.textContent =`${Math.abs(withdrawalSum)}€`

  //add 1.2interest to every deposit
  const interest = movements
  .filter(mov => mov>0)
  .map(deposit => (deposit * 1.2)/100)
  //exclude interest that is below 1€
  .filter(interest => interest >= 1)
  .reduce((acc,interest) => acc + interest, 0)
  labelSumInterest.textContent = `${interest}€`
}
// calDisplaySummary(account1.movements)

////////////////////////////
//create username with first letter initial and add it in the account detail
// const fullname = 'Steven Thomas Williams'
// const fullnameArr = fullname.toLowerCase().split(' ')
// console.log(fullnameArr)//[ 'steven', 'thomas', 'williams' ]
// const username = fullnameArr.map(letter => letter[0]).join('')
// console.log(username)//'stw'

const createUsername = accs => {
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(letter => letter[0]).join('')
  })
}
createUsername(accounts)
console.log(accounts)



/////////////////////////////////////////////////
let currentAccount
//add function to log in button
btnLogin.addEventListener('click', function(e){
  e.preventDefault() // prevent form from reload

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)

  //if the currentAccount exist
  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)){
  //   console.log('LOGIN')
  // }
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    console.log('LOGIN')
    //Display UI & Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1

    //Display movements
    displaymovement(currentAccount.movements)

    //Display balance
    calDisplayBalance(currentAccount.movements)

    //Display summary
    calDisplaySummary(currentAccount.movements)
  }
  } )