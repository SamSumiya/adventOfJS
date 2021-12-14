const ringColor = document.querySelector('.ring')
const startBtn = document.querySelector('.start')
const ONESECOND = 1
const TOTALMINUTES = 15
const MINUTESTOSECONDS = 60
let minutes = document.querySelector('.minutes').children[0]
let seconds = document.querySelector('.seconds').children[0]
let totalSeconds = 1 * 3

// console.log(startBtn);

const runPomodoro = () => {
    if (ringColor.classList.contains('ending')) {
        ringColor.classList.remove('ending')
        // console.log(startBtn.textContent);
        myIntervalFunc()
    } else {
        ringColor.classList.add('ending')
        myIntervalFunc()
    }
}

const myIntervalFunc = () => {
    if (minutes.value == '00' && seconds.value == '00') {
        if (startBtn.textContent === 'start') {
            console.log(startBtn.textContent);
            startBtn.textContent = 'stop' 
            console.log(startBtn.textContent);
        } else if (startBtn.textContent === 'stop') {
            startBtn.textContent = 'start'
        } else if (startBtn.textContent === 'reset') {
            startBtn.textContent = 'stop'
        }
        ringColor.classList.add('ending')
        minutes.value = '00'
        seconds.value = '03'
        totalSeconds = Number(minutes.value * MINUTESTOSECONDS) + Number(seconds.value)
        setInterval(myClearIntervalFunc, 1000) // Why does this work?
    } else {
        setInterval(() => {
            {
                if (totalSeconds > ONESECOND) {
                    
                    totalSeconds -= ONESECOND
                    remainingMinutes = Math.floor(totalSeconds / MINUTESTOSECONDS)
                    remainngSeconds = totalSeconds % MINUTESTOSECONDS
                    minutes.value = remainingMinutes
                    seconds.value = remainngSeconds
                    // console.log(totalSeconds, minutes, seconds)
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
    if (minutes.value == '00' && seconds.value == '00') {
        startBtn.textContent = 'reset'
    }
    clearInterval(myIntervalFunc)
}

startBtn.addEventListener('click', () => runPomodoro())
