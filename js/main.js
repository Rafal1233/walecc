const walec = document.querySelector('.walec')
let style = getComputedStyle(walec)
const end = document.querySelector('.end')
position = style.getPropertyValue('right')
positionvertical = style.getPropertyValue('top')
let value = 50

const handlewalec = (e) => {
    if (e.key == 'd') {
        walec.style.right = newposition - 10 + 'px'
        newposition -= 5

    }
    if (e.key == 'a') {
        walec.style.right = newposition - 10 + 'px'
        newposition += 5
    }
    if (e.key == 'w') {
        walec.style.top = newpositionvertical - 10 + 'px'
        newpositionvertical -= 5
    }
    if (e.key == 's') {
        walec.style.top = newpositionvertical - 10 + 'px'
        newpositionvertical += 5
    }
    if (newposition < -185) {
        walec.style.transform = "rotate(45deg)"
        end.classList.add('ending')
    }

}


window.addEventListener('keydown', handlewalec)


newposition = parseInt(position)
newpositionvertical = parseInt(positionvertical)