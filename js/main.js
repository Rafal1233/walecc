const walec = document.querySelector('.walec')
let style = getComputedStyle(walec)

position = style.getPropertyValue('right')
positionvertical = style.getPropertyValue('top')

const handlewalec = (e) => {
    if (e.key == 'd') {
        walec.style.right = newposition - 10 + 'px'
        newposition-=5
    }
    if(e.key=='a'){
        walec.style.right = newposition - 10 + 'px'
        newposition+=5
    }
    if(e.key=='w'){
        walec.style.top = newpositionvertical - 10 + 'px'
       newpositionvertical-=5
    }
    if(e.key=='s'){
        walec.style.top = newpositionvertical - 10 + 'px'
        newpositionvertical+=5
    }

}
const handle = () => {
    walec.style.right = newposition + 10 + 'px'
    newposition++
}

window.addEventListener('keydown', handlewalec)


newposition = parseInt(position)
newpositionvertical=parseInt(positionvertical)