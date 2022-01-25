function randomize() {
    return Math.floor(Math.random() * 1000)
}
function wait(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    })
}

async function timer() {
    while(true){
        let seconds = new Date().getSeconds()
        if(seconds === 59){
            await wait(1000);
            postMessage(randomize());
        }
    }
}
timer();