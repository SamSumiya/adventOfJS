const ringColor = document.querySelector('.ring')
const startBtn = document.querySelector('.start')
const ONESECOND = 1
const TOTALMINUTES = 15
const MINUTESTOSECONDS = 60
let minutes = document.querySelector('.minutes').children[0]
let seconds = document.querySelector('.seconds').children[0]
let totalSeconds = 1 * 3

const runPomodoro = () => {
    if (ringColor.classList.contains('ending')) {
        ringColor.classList.remove('ending')
        myClearIntervalFunc()
    } else {
        ringColor.classList.add('ending')
        myClearIntervalFunc()
    }
}

const myIntervalFunc = () => {
    if (minutes.value == '00' && seconds.value == '00') {
        if (startBtn.textContent === 'start') {
            startBtn.textContent = 'stop'
        } else if (startBtn.textContent === 'stop') {
            startBtn.textContent = 'start'
        } else if (startBtn.textContent === 'reset') {
            startBtn.textContent = 'stop'
        }
        ringColor.classList.add('ending')
        minutes.value = '00'
        seconds.value = '03'
        totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
    } else if (minutes.value == '00' && seconds.value != '00') {
        minutes.value = '00'
        seconds.value = totalSeconds - 1
        totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
    } else {
        if (startBtn.textContent === 'start') {
            startBtn.textContent = 'stop'
        } else if (startBtn.textContent === 'stop') {
            startBtn.textContent = 'start'
        }
        setInterval(() => {
            {
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
            }
        }, 1000)
    }
}

function myClearIntervalFunc() {
    if (minutes.value === '00' && seconds.value === '00') {
        startBtn.textContent = 'reset'
    }
    myIntervalFunc()
}

startBtn.addEventListener('click', () => runPomodoro())
