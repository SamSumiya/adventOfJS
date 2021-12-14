const ringColor = document.querySelector('.ring')
const minutes = document.querySelector('.minutes').children[0].value
const seconds = document.querySelector('.seconds').children[0].value
const startBtn = document.querySelector('.start')



startBtn.addEventListener('click', () => {
    if(ringColor.classList.contains('ending')) {
        ringColor.classList.remove('ending')
    } else {
        ringColor.classList.add('ending')
    }
})