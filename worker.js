function randomize() {
    return Math.floor(Math.random() * 1000)
}
while(true){
    let seconds = new Date().getSeconds()
    if(seconds === 59){
        postMessage(randomize());
        break
    }
}