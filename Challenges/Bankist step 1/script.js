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

//display the array of movements in the app (movement container)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displaymovement = function (movements, sort = false){
  const movs = sort ? movements.slice().sort((a,b)=> a-b) : movements
  //clear the hardcoded info on movement container
  containerMovements.innerHTML=''
  //loopthe movements array
  movs.forEach((mov,i)=> {
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
const calDisplayBalance = function(acc){
  const balance = acc.movements.reduce((acc, mov)=> acc+mov, 0)
  labelBalance.innerHTML = `${balance}€`
  acc.balance = balance
}

// calDisplayBalance(account1.movements)

//calculate the summary in-out-interest
const calDisplaySummary = function(acc){
  const depositSum = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc,mov)=> acc + mov, 0)
  labelSumIn.textContent = `${depositSum}€`

  const withdrawalSum = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc,mov)=> acc + mov, 0)
  labelSumOut.textContent =`${Math.abs(withdrawalSum)}€`

  //add 1.2interest to every deposit
  const interest = acc.movements
  .filter(mov => mov>0)
  .map(deposit => (deposit * acc.interestRate)/100)
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


/////////////////////////////////////////////////
//Display UI movements/ summary
const updateUI = function(acc){
      //Display movements
      displaymovement(acc.movements)
      //Display balance
      calDisplayBalance(acc)
      //Display summary
      calDisplaySummary(acc)
}


//add function to log in button
let currentAccount
btnLogin.addEventListener('click', function(e){
  e.preventDefault() // prevent form from reload

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount)

  //if the currentAccount exist
  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)){
  //   console.log('LOGIN')
  // }
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    //Display UI & Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 1
    //Clear inout field
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    //Display movements
    updateUI(currentAccount)
  }
  } )


  ////////////////////
//transfer money
btnTransfer.addEventListener('click', function(e){
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
//clear input field
inputTransferAmount.value = inputTransferTo.value = ''

//withdraw the amount out of the sender (check if sender has more money than the amount)
  if (amount > 0 &&
      currentAccount.balance >= amount &&
    //if the receiver acc exist , receiver acc isn't the same as the sender acc
    receiverAcc &&
    // receiverAcc.username !== currentAccount.username
    receiverAcc?.username !== currentAccount.username
    ){
    //deposit the amount to receiver + withdraw the amount from sender
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)
  }

//update summary to ui
  updateUI(currentAccount)
  })

//close account
btnClose.addEventListener('click', function(e){
  e.preventDefault()
  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    //Delete acount
    accounts.splice(index,1)
    //Hide UI
    containerApp.style.opacity = 0
  }
})


//loan feature
btnLoan.addEventListener('click',function(e){
  e.preventDefault()
  //if there's any deposit more that 10% of the loan amount
  const amount = Number(inputLoanAmount.value)
  if (amount > 0 && 
    currentAccount.movements.some(mov => mov >= amount * 0.1)){
    //add the amount to the movement
    currentAccount.movements.push(amount)
    //update UI
    updateUI(currentAccount)
  } else {
    console.log('loan denied')
  }
  //clear the input box
  inputLoanAmount.value = ''
})

//sort feature
let sorted = false
btnSort.addEventListener('click', function(e){
  e.preventDefault()
  displaymovement(currentAccount.movements, !sorted)
  sorted = !sorted
})
  /////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//array from : create an array from the value on the frontend display <div class="movements__value">4000€</div>

// labelBalance.addEventListener('click', function(){
//   const movementsUI = [...document.querySelectorAll('.movements__value')]
//   const arrayUI = movementsUI.map(element => element.textContent.replace('€',''))
//   console.log(arrayUI)//['4000', '-378']
// })

// labelBalance.addEventListener('click', function(){
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'))
//   console.log(movementsUI)//[div.movements__value, div.movements__value]
//   const arrayUI = movementsUI.map(element => element.textContent.replace('€',''))
//   console.log(arrayUI)//['4000', '-378']
// })

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => element.textContent.replace('€','')
  )
  console.log(movementsUI)//['4000', '-378']
})