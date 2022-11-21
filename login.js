let nameInput='',pass='';
let username ='';
const register = document.getElementById('register');
const login = document.getElementById('login');
const bt = document.querySelectorAll('.bt');
const loginpage = document.querySelector('.login');
const registerpage = document.querySelector('.register');
const regsuccess = document.querySelector('.regsuccess');

bt.forEach(btn=>btn.addEventListener('click',()=>{
    loginpage.classList.toggle('displaynone');
    registerpage.classList.toggle('displaynone');
}))

login.addEventListener('click',()=>{
    username = document.querySelector('#logusername').value;
    pass = document.querySelector('#logpass').value;

    localStorage.setItem('username', username);
    localStorage.setItem('pass',pass);

    username = localStorage.getItem('username');
    pass = localStorage.getItem('pass');    

    if(username!='' && pass!='') {
        h.search(username,pass);
        // console.log(username,pass);
        // console.log(table);
    }
    else alert('Enter All Fields')
    console.log(table[385])
})



document.addEventListener('DOMContentLoaded',()=>{
    for(let i=0;i<data.length;i++)
    {   
        // console.log(data[i].nameInput);
        h.insert(data[i].nameInput,data[i].username,data[i].password);
    }
})


register.addEventListener('click',()=>{
   
    nameInput = document.querySelector('#name').value;
    username = document.querySelector('#username').value;
    pass = document.querySelector('#password').value;

    localStorage.setItem('name',nameInput);
    localStorage.setItem('username', username);
    localStorage.setItem('pass',pass);

    nameInput = localStorage.getItem('name');
    username = localStorage.getItem('username');
    pass = localStorage.getItem('pass');

    if(nameInput!='' && username!='' && pass!='') {
        if(h.insert(nameInput,username,pass)){
            regsuccess.innerHTML='<h2>Registered Successfully!</h2>';
            setTimeout(()=>{regsuccess.innerHTML=''},1500);
        }
        // console.log(nameInput,username,pass);
        // console.log(table);
    }
    else alert('Enter All Fields')
})