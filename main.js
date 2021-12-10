
class Clock {
    constructor(out) {
        this.date = new Date()
        this.out = out
    }

    full () {
        let hour = this.date.getHours();
        let minutes = this.date.getMinutes();
        let second = this.date.getSeconds();

        if (hour < 10) hour = "0" + hour;
        if (minutes < 10) minutes = "0" + minutes;
        if (second < 10) second = "0" + second;

        let result = `${hour}:${minutes}:${second}`
        return result
    }

    short () {
        let hour = this.date.getHours();
        let minutes = this.date.getMinutes();

        if (hour < 10) hour = "0" + hour;
        if (minutes < 10) minutes = "0" + minutes;
        
        let result = `${hour}:${minutes}`
        return result
    }

    render(bool) {
        if(bool) {
            return this.full()
        } else {
            return this.short()
        }
    }

    setState(state) {
        let a = this.render(state)
        this.out.innerText = a
    }
}

const main = document.querySelector(".main");
const time = document.querySelector(".time");
const interval = 250

main.addEventListener("click", (e) => {
    if(e.target.className === "time") {
        clearInterval(start)
        setInterval(() => {
            startShort(time)
        }, interval);
    } else {
        startFull(time)
    }
     
  });

const startFull = (out) => {
    let date = new Clock(out)
    date.setState(true)
}

const startShort = (out) => {
    let date = new Clock(out)
    date.setState(false)
}

let start = setInterval(() => {
    startFull(time)
}, interval);