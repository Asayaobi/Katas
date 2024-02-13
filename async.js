// Turn the following into an "async" function:
// const add = (a, b) => a + b

const add = async (a, b) => a + b

console.log(add(1, 2));

// The function getMessages reads data from a different server. 
//Write the correct code so that the function waits for it before continuing.
// const search = () => {
//   let messages = getMessages()
//   return messages

const search = async () => {
  let messages = await getMessages()
  return messages
}

console.log(search());

// The following function is wrong, fix it.
// const filterArray = () await => {
//   let data = async getData()
//   return data
// }

const filterArray = async () => {
  let data = await getData()
  return data
}

// The function getResults() returns an error. 
// Collect the error and log it in the console.
// const search = async () => {
//   let results = await getResults()
// }

const search = async () => {
  try {
    let results = await getResults()
  } catch (error) {
    console.log("An error occurred:", error.message)
  }
}
console.log(search())

// One of the 2 functions getResults() and getPages() returns an error. 
// You don't know which one. Collect any of the 2 errors and log them in the console.
// const search = async () => {
//   let results = await getResults()
//   let pages = await getPages()
// }

const search = async () => {
  let results
  let pages
  try {
    results = await getResults()
  } catch (error) {
    console.log("An error occured while getting results data", error.message)
  }
  try {
    pages = await getPages()
  } catch (error) {
    console.log("An error occured while getting pages data", error.message)
  }
}
console.log(search());

// Create an async function getFirstTodo that uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 and returns the data of the response object.
// Test your code on the Simulation Platform.

// Test the following:
const getFirstToDo = async () => {
  let response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  return response.data;
};

console.log(await getFirstToDo());

// Create an async function getTodo that:

// receives a parameter number
// uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 replacing the last 1 with the parameter function
// returns the data of the response object
// Test your code on the Simulation Platform.

// Test the following:
// const getFirstToDo = async (n) => {
//   let response = await axios.get(
//     'https://jsonplaceholder.typicode.com/todos/1'
//   );
//   return response.data;
// };

const getTodo = async (number) => {
  let response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/' + number
  );
  return response.data;
};

getTodo(1) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
getTodo(2) // { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
getTodo(3) // { userId: 1, id: 3, title: 'fu

// Create an async function getComments that:
// uses axios to make a request to the url https://jsonplaceholder.typicode.com/posts/1/comments
// returns the data of the response object
// Test your code on the Simulation Platform.
// Test the following:

const getComments = async () => {
  let response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1/comments'
  )
  return response.data
}