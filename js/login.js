function validatelogin(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email.trim().length === 0){
        alert('Email harus diisi');
        return false;
    }

    if(password.trim().length === 0){
        alert('Password harus diisi');
        return false;
    }
    
    alert('login success');
    return true;
}