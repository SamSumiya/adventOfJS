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
        myIntervalFunc()
    } else {
        ringColor.classList.add('ending')
        myIntervalFunc()
    }
}

const myIntervalFunc = () => {
    if (minutes.value == '00' && seconds.value == '00') {
        ringColor.classList.add('ending')
        minutes.value = '00'
        seconds.value = '03'
        totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
        setInterval(myClearIntervalFunc, 1000)
    } else {
        setInterval(() => {
            {
                if (totalSeconds > ONESECOND) {
                    totalSeconds -= ONESECOND
                    remainingMinutes = Math.floor(totalSeconds / MINUTESTOSECONDS)
                    remainngSeconds = totalSeconds % MINUTESTOSECONDS
                    minutes.value = remainingMinutes
                    seconds.value = remainngSeconds
                    console.log(totalSeconds, minutes, seconds)
                } else if (totalSeconds === ONESECOND) {
                    minutes.value = '00'
                    seconds.value = '00'
                    ringColor.classList.remove('ending')
                }
            }
        }, 1000)
    }
}

function myClearIntervalFunc() {
    clearInterval(myIntervalFunc)
}

startBtn.addEventListener('click', () => runPomodoro())
