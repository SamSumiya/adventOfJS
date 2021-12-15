const ringColor = document.querySelector('.ring')
const startBtn = document.querySelector('.start')
const ONESECOND = 1
const TOTALMINUTES = 15
const MINUTESTOSECONDS = 60
let minutes = document.querySelector('.minutes').children[0]
let seconds = document.querySelector('.seconds').children[0]
let totalSeconds = 1 * 5



function displayTime() {
    seconds.value = totalSeconds % MINUTESTOSECONDS
    minutes.value = 0
    if (seconds.value < 10 || minutes.value < 10) {
        seconds.value = '0' + seconds.value
        minutes.value = '0' + minutes.value
    } 
}


startBtn.addEventListener('click', () => displayTime())

/* 
const runPomodoro = () => {
    if (ringColor.classList.contains('ending')) {
        ringColor.classList.remove('ending')
        myIntervalFunc()
    } else {
        ringColor.classList.add('ending')
        myIntervalFunc()
    }
}

const myIntervalFunc = () => {
    if (minutes.value == '00' && seconds.value == '00') {
        ringColor.classList.add('ending')
        minutes.value = '1'
        seconds.value = '5'
        totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
        const secondInterval = setInterval(() => {
            if (totalSeconds > ONESECOND) {
                totalSeconds -= ONESECOND
                remainingMinutes = Math.floor(totalSeconds / MINUTESTOSECONDS)
                remainngSeconds = totalSeconds % MINUTESTOSECONDS
                minutes.value = remainingMinutes
                seconds.value = remainngSeconds
            } else if (totalSeconds === ONESECOND) {
                minutes.value = '00'
                seconds.value = '00'
                ringColor.classList.remove('ending')
                startBtn.textContent = 'reset'
            }
        }, 1000)
        // myClearIntervalFunc(firstInterval)
        if (startBtn.textContent === 'start') {
            myClearIntervalFunc(secondInterval)
            startBtn.textContent = 'pause'
            
            // myClearIntervalFunc(firstInterval)
        } else if (startBtn.textContent === 'pause') {
            myClearIntervalFunc(secondInterval)
            // myClearIntervalFunc(secondInterval)
            startBtn.textContent = 'start'
            // myClearIntervalFunc(firstInterval)
        } else if (startBtn.textContent === 'reset') {
            // myClearIntervalFunc(firstInterval)
            myClearIntervalFunc(secondInterval)
            startBtn.textContent = 'pause'
            // myClearIntervalFunc(secondInterval)
        }
        // myClearIntervalFunc(secondInterval)
    }
    // else if (minutes.value == '00' || seconds.value != '00') {
    //     minutes.value = '00'
    //     seconds.value = totalSeconds - 1
    //     totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
    //     setInterval(() => { 
    //         if (totalSeconds > ONESECOND) {
    //             totalSeconds -= ONESECOND
    //             remainingMinutes = Math.floor(totalSeconds / MINUTESTOSECONDS)
    //             remainngSeconds = totalSeconds % MINUTESTOSECONDS
    //             minutes.value = remainingMinutes
    //             seconds.value = remainngSeconds
    //         }   
    //     }, 1000)
    // } 
    else {
        const firstInterval = setInterval(() => {
            if (totalSeconds > ONESECOND) {
                totalSeconds -= ONESECOND
                remainingMinutes = Math.floor(totalSeconds / MINUTESTOSECONDS)
                remainngSeconds = totalSeconds % MINUTESTOSECONDS
                minutes.value = remainingMinutes
                seconds.value = remainngSeconds
            } else if (totalSeconds === ONESECOND) {
                // totalSeconds -= ONESECOND
                minutes.value = '00'
                seconds.value = '00'
                ringColor.classList.remove('ending')
                startBtn.textContent = 'reset'
            }
        }, 1000)
        if (startBtn.textContent === 'start') {
            startBtn.textContent = 'pause'
            // clearInterval(firstInterval)
        } else if (startBtn.textContent === 'pause') {
            startBtn.textContent = 'start'
            myClearIntervalFunc(firstInterval)
        }
        // clearInterval(firstInterval)
    }
}

function myClearIntervalFunc(x) {
    // if (minutes.value === '00' && seconds.value === '00') {
    //     startBtn.textContent = 'reset'
    // }
    // if (startBtn.textContent === 'pause') {
    // if (startBtn.textContent === 'pause') {
    //     startBtn.textContent = 'start'
    //     clearInterval(x)
    // } else {
        clearInterval(x)
    // }
}

startBtn.addEventListener('click', () => runPomodoro())


*/ 