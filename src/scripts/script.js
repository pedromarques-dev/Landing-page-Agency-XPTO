const imagesPanel = document.querySelectorAll('.image-panel')
const arrowNext = document.getElementById('next')
const arrowPrevious = document.getElementById('previous')
let countImage = 0

arrowNext.addEventListener('click', () => {
    countImage++
    imagesPanel.forEach(image => {
        image.classList.remove('show')
    })
    
    if(countImage <= 2){
        imagesPanel[countImage].classList.add('show')
    } else {
        countImage = 0
        imagesPanel[countImage].classList.add("show")
    }
})

setInterval(() => {
    countImage++
    imagesPanel.forEach(image => {
    image.classList.remove('show')
})

if(countImage <= 2){
    imagesPanel[countImage].classList.add('show')
} else {
    countImage = 0
    imagesPanel[countImage].classList.add("show")
}

}, 5000);


arrowPrevious.addEventListener('click', () => {
    if(countImage === 0){
        return;
    }

    countImage--

    imagesPanel.forEach(image => {
        image.classList.remove('show')
    })

    imagesPanel[countImage].classList.add('show')
})