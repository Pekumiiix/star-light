function toggleMenu() {
    const menuButton = document.querySelector('.menu-btn')
    const menu = document.querySelector('.menu')

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hide')
    })
}

toggleMenu()

let isHidden = false;

function hideBalance() {
    const hideIcons = document.querySelectorAll('.hide-icon')
    const showIcons = document.querySelectorAll('.show-icon')
    const balances = document.querySelectorAll('.money')

    hideIcons.forEach((hideIcon, index) => {
        hideIcon.addEventListener('click', () => {
            /*if (isHidden) {
                balances[index].innerHTML = "NGN" + " " + "50,000"
            } else {
                balances[index].innerHTML = "NGN" + " " + "****";
            }

            isHidden = !isHidden;*/
            balances[index].innerHTML = "NGN" + " " + "****"
            showIcons[index].style.display = 'flex'
            hideIcons[index].style.display = 'none'
        })
    })

    showIcons.forEach((showIcon, index) => {
        showIcon.addEventListener('click', () => {
            balances[index].innerHTML = "NGN" + " " + "50,000"
            showIcons[index].style.display = 'none'
            hideIcons[index].style.display = 'flex'
        })
    })
}

hideBalance()