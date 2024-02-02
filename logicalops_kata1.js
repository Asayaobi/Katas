function checkCredentials(username, password) {
    if (username === 'admin' && password === '12345') {
        return 'granted'
        } 
        return 'denied'
    }
console.log(checkCredentials('admin', '12345'))
console.log(checkCredentials('admin', '0000'))
console.log(checkCredentials('user', '12345'))
console.log(checkCredentials('user', '0000'))