function canAccess(role, isActive) {
    if ((role === 'admin' || role === 'editor') && isActive === true) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log(canAccess('admin', true))
console.log(canAccess('admin', false))
console.log(canAccess('editor', true))
console.log(canAccess('editor', false))
console.log(canAccess('user', true))
console.log(canAccess('user', false))