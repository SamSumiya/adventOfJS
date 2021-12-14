const ringColor = document.querySelector('.ring')
let minutes = document.querySelector('.minutes').children[0]
let seconds = document.querySelector('.seconds').children[0]
const startBtn = document.querySelector('.start')

let allSeconds = 1 * 5
const allMilliseconds = allSeconds * 1000

startBtn.addEventListener('click', () => {
    if (ringColor.classList.contains('ending')) {
        ringColor.classList.remove('ending')
    } else {
        ringColor.classList.add('ending')
        setInterval(() => {
            {
                if (allSeconds > 1) {
                    allSeconds -= 1
                    remainingMinutes = Math.floor(allSeconds / 60)
                    remainngSeconds = allSeconds % 60
                    // console.log(remainingMinutes, remainngSeconds)
                    minutes.value = remainingMinutes
                    seconds.value = remainngSeconds
                    console.log(allSeconds, minutes, seconds)
                } else if (allSeconds === 1) {
                    minutes.value = '00'
                    seconds.value = '00' 
                }
            }
        }, 1000)
    }
})