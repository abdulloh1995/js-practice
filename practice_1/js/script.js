window.addEventListener('DOMContentLoaded', function (){
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCard () {

        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');


        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent = 'В нашем корзине'
        closeBtn.textContent = 'Закрыть'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)

    }
    createCard()

    let cart = document.querySelector('.cart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.cart-field')

    openBtn.addEventListener('click',  () => {
        cart.style.display = 'block'
    })
    closeBtn.addEventListener('click',  () => {
        cart.style.display = 'none'
    })

    buttons.forEach( (item, i) =>{
        item.addEventListener('click',  () => {
            let cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button');

            btn.remove()
            field.appendChild(cloneItem)
            products[i].remove()
        })
    })
})