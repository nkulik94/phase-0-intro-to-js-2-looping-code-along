function writeCards(array, event) {
    const messages = []
    for (let i =0; i < array.length; i++) {
        const message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
        messages[i] = message
    }
    return messages
}
function countDown(n) {
    let i = 0
    while (i <= n) {
        console.log(n)
        n--
    }
}