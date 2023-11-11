
// declaring the main vars
let form = document.getElementById('form');
let buttons = document.querySelectorAll('.container .buttons button');
let submitBtn = document.getElementById('submitBtn');
let youSelect = document.querySelector('.thankyou button .gap');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('clicked'))
        btn.classList.add('clicked')
        youSelect.textContent = btn.dataset.count
    })
})



form.addEventListener('submit', (e) => {
    buttons.forEach(btn => {
        if (btn.classList.contains('clicked') == false) {
            e.preventDefault()
            return false;
        } else {
            document.querySelector('.container').classList.add('hide');
            document.querySelector('.thankyou').classList.add('show');
            return true;
        }
    })
})

console.log(youSelect)
