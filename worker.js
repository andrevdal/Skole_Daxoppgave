function randomize() {
    return Math.floor(Math.random() * 1000)
}
while(true){
    let seconds = new Date().getSeconds()
    if(seconds === 20){
        postMessage(randomize());
        break
    }
}