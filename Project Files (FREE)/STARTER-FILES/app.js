const ringColor = document.querySelector('.ring')
const startBtn = document.querySelector('.start')
const ONESECOND = 1
const TOTALMINUTES = 15
const MINUTESTOSECONDS = 60
let minutes = document.querySelector('.minutes').children[0]
let seconds = document.querySelector('.seconds').children[0]
let totalSeconds = 1 * 5

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
            if (startBtn.textContent === 'start') {
                startBtn.textContent = 'pause'
                myClearIntervalFunc(firstInterval)
        } else if (startBtn.textContent === 'pause') {
                startBtn.textContent = 'start'
                myClearIntervalFunc(secondInterval)
        } else if (startBtn.textContent === 'reset') {
                startBtn.textContent = 'pause'
                myClearIntervalFunc(secondInterval)
        }
        // clearInterval(secondInterval)
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
        clearInterval(x)
    // }
}

startBtn.addEventListener('click', () => runPomodoro())
