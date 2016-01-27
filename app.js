var btnMail         = document.querySelector('#btn-mail'),
    btnValid        = document.querySelector('#btn-valid'),
    txtForm         = document.querySelector('#txt-mail');


btnMail.addEventListener('click', function() {
    btnMail.style.webkitAnimationPlayState = "running"; // or paused
    btnMail.innerHTML = '<i class="fa fa-paper-plane-o"></i>';
    setTimeout(function(){
        btnMail.style.display = 'none';
        btnValid.style.display = 'block';
    }, 1000)
});

btnValid.addEventListener('click', function() {
    btnValid.style.webkitAnimationPlayState = "running"; // or paused
    btnValid.innerHTML = '<i class="fa fa-check"></i>';
    txtForm.value = '';
    txtForm.placeholder = '';
    setTimeout(function(){
        txtForm.style.paddingRight  = '0px';
        txtForm.style.paddingLeft   = '30px';
        txtForm.style.color         = 'black';
        txtForm.value               = 'Merci, à bientôt !';
    },500)
});
