function validateregis(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('regisemail').value;
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let city = document.getElementById('city');
    let selectedcity = city.options[city.selectedIndex].value;
    let pass = document.getElementById('pass').value;
    let confirm = document.getElementById('confirm').value;
    
    //nama
    if(name.trim().length === 0){
        alert('nama harus diisi');
        return false;
    }
    
    //email
    let at = 0;
    let titik = 0;
    if(email.trim().length === 0){
        alert('email harus diisi');
        return false;
    }
    for(let i=email.trim().length-1; i>=0; i--){
        if(at != 0 && titik != 0){
            break;
        }
        if(email.charAt(i) === "@"){
            at=i;
        }
        if(titik === 0 && email.charAt(i) === "."){
            titik=i;
        } else if(titik != 0 && email.charAt(i) === "."){
            alert('email harus sesuai format');
            return false;
        }
    }
    if(at+1 === titik){
        alert('email harus sesuai format');
        return false;
    }

    //gender
    if(male.checked === false && female.checked === false){
        alert('gender harus diisi');
        return false;
    }

    //city
    if(selectedcity === "kosong"){
        alert('kota harus diisi');
        return false;
    }

    //password
    if(pass.trim().length < 8){
        alert('password minimal 8 karakter');
        return false;
    }
    let kapital = 0;
    let angka = 0;
    for(let i=0; i<pass.trim().length; i++){
        if(kapital === 1 && angka === 1){
            break;
        }
        if(pass.charAt(i) <= "Z" && pass.charAt(i) >= "A"){
            kapital=1;
        }
        if(pass.charAt(i) <= "9" && pass.charAt(i) >= "0"){
            angka=1;
        }
    }
    if(kapital === 0 || angka === 0){
        alert('setidaknya harus ada 1 huruf kapital serta 1 angka')
        return false;
    }

    //confirm password
    if(confirm.trim().length < 8){
        alert('confirm password minimal 8 karakter');
        return false;
    }
    let ctr=0;
    for(let i=0; i<confirm.trim().length; i++){
        if(confirm.charAt(i) === pass.charAt(i)){
            ctr++;
        }
    }
    if(confirm.trim().length != ctr){
        alert('harus sama persis dengan password');
        return false;
    }
    
    alert('register success');
    return true;
}