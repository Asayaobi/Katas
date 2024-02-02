function checkRole(role) {
    if (role === 'admin' || role === 'editor') {
        return 'granted'
    }
    return 'denied'
}

console.log(checkRole('admin'))
console.log(checkRole('editor'))
console.log(checkRole('user'))
