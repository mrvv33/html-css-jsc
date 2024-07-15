document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
    } else {
        alert('Logged in successfully!');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault(); 
    alert('Password recovery instructions have been sent to your email.');
});
document.getElementById("register").addEventListener("click",function(){
    window.location.href='register.html'
    
});
document.getElementById('registerButton').addEventListener("click",function(event){
    event.preventDefault();
    alert('Your registration is completed.');
});