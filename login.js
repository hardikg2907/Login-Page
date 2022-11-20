let nameInput='',pass='';
let username ='';
// const submit = document.querySelector('button');
const register = document.getElementById('register');
const login = document.getElementById('login');
const bt = document.querySelectorAll('.bt');
const loginpage = document.querySelector('.login');
const registerpage = document.querySelector('.register');
const regsuccess = document.querySelector('.regsuccess');

// const newHandle = window.showSaveFilePicker();

// // create a FileSystemWritableFileStream to write to
// const writableStream = newHandle.createWritable();
h.insert('h','h','h');

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
        console.log(username,pass);
        console.log(table);
    }
    else alert('Enter All Fields')
})



document.addEventListener('DOMContentLoaded',()=>{
    // fetch('./MOCK_DATA.json')
    // .then(resp=>{console.log(1)})
    // .then(data=>{obj = data;
    // console.log(data)})
    // console.log(data);
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
        h.insert(nameInput,username,pass);
        data.push({"nameInput":name,"username":username,"password":pass});
        localStorage.setItem('data',data);
        data = localStorage.getItem('data');
        console.log(nameInput,username,pass);
        console.log(table);
    }
    else alert('Enter All Fields')
})