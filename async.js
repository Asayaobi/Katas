// Turn the following into an "async" function:
// const add = async (a, b) => a + b

const add = async (a, b) => {
    let add = a + b
    await add
}

// The function getMessages reads data from a different server. 
//Write the correct code so that the function waits for it before continuing.

const search = async () => {
  let messages = getMessages()
  await messages
}

// The following function is wrong, fix it.
// const filterArray = () await => {
//   let data = async getData()
//   return data
// }

const filterArray = async () => {
    let data = async getData()
    await data
  }

//   The function getResults() returns an error. 
//   Collect the error and log it in the console.
// const search = async () => {
//   let results = await getResults()
// }

const search = async () => {
    let results = await getResults()
    try {
        getResults()
    } catch (error) {
        console.log("An error occurred:", error.message) 
    }
  }

//   One of the 2 functions getResults() and getPages() returns an error. 
//   You don't know which one. Collect any of the 2 errors and log them in the console.

//   const search = async () => {
//     let results = await getResults()
//     let pages = await getPages()
//   }

  const search = async () => {
    let results = await getResults()
    let pages = await getPages()
    try {
        getResults()
        getPages()
    } catch (error) {
        console.log("An error occurred:", error.message) 
    }
  }

  //axios
  const getFirstTodo = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response.data
  }
  
  console.log(await getFirstTodo())

//   Create an async function getTodo that:

// receives a parameter number
// uses axios to make a request to the url https://jsonplaceholder.typicode.com/todos/1 replacing the last 1 with the parameter function
// returns the data of the response object
// Test your code on the Simulation Platform.

// Test the following:

// getFirstTodo(1) // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// getFirstTodo(2) // { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
// getFirstTodo(3)