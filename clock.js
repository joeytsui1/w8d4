class Clock {
    constructor() {
        let date = new Date()
        this.hours = date.getHours()
        this.mins = date.getMinutes()
        this.secs = date.getSeconds()
        this.printTime()
        setInterval(this._ticks.bind(this), 1000)
    }

    printTime() {
        console.log(`${this.hours}:${this.mins}:${this.secs}`)
    }

    _ticks() {
        this.secs += 1

        if(this.secs === 60) {
            this.secs = 0
            this.mins += 1
        }

        if(this.mins === 60) {
            this.mins = 0
            this.hours += 1
        }

        if(this.hours === 24) {
            this.hours = 0
        }

        this.printTime()
    }
}

let clock = new Clock()


