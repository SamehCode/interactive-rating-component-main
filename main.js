
// declaring the main vars
let buttons = document.querySelectorAll('.container .buttons button');
let submitBtn = document.getElementById('submitBtn');
let youSelect = document.querySelector('.thank you button span');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('clicked'))
        btn.classList.add('clicked')
        youSelect.innerHTML = btn.innerHTML
        
    })
})

submitBtn.addEventListener('click', () => {
    document.querySelector('.container').classList.add('hide');
    document.querySelector('.thankyou').classList.add('show');
    
})