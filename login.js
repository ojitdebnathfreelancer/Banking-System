document.getElementById('submit-btn').addEventListener('click', function(){
    console.log('clicked');
    const userMail = document.getElementById('user-mail');
    const userPassword = document.getElementById('user-password');
    if( userMail.value === 'user@gmail.com' && userPassword.value === 'userlogin'){
        window.location.href = '/deposit.html';
    } 
    else{
        alert('Please type valid mail and password');
    }
})