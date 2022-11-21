const resize= () =>  {
    const isPrime = (num) => {
        let sqrtnum = Math.floor(Math.sqrt(num));
        let prime = num !== 1;
        for(let i = 2; i < sqrtnum + 1; i++){
           if(num % i === 0){
              prime = false;
              break;
           };
        };
        return prime;
    }
    let size = data.length;

    while(!isPrime(++size)){
    };
    return size;
}
let table = [...Array(resize()).fill(null)];

class HashTable{
    constructor(){
    }
    
    insert(name,username,pass){
        const asciiSum = (str = '') => {
            return str.split("").reduce((acc, val) => {
               return acc + val.charCodeAt(0);
            }, 0);
        };
        let ind = asciiSum(username)%table.length;
        // console.log(ind);
        if(table[ind]==null) table[ind] = new Linkedlist();
        // console.log(name,username,pass);
        if(table[ind].push(name,username,pass))return 1;
        return 0;
    }

    search(username, password)
    {
        const asciiSum = (str = '') => {
            return str.split("").reduce((acc, val) => {
               return acc + val.charCodeAt(0);
            }, 0);
        };
        let ind = asciiSum(username)%table.length;
        // console.log(ind);
        if(table[ind]==null) {
            alert('Incorrect Username');
            return;
        }
        let ll = table[ind];
        // console.log(ll);
        if(ll.search(username)==1){
            if(ll.matchPass(username, password)==1){
                localStorage.setItem('username',username);
                window.location.href = "./index.html";
            } 
            else alert('Incorrect Password');
        }
        else alert('Incorrect Username');
    }

    display()
    {
        let tablestr='';
        console.log("Hash Table: ");
        console.log("Sr.No.\tName\tUsername\tPassword");
        for(let i=0;i<table.length;i++)
        {   
            if(table[i]==null) {tablestr+=`\n${i}\t\t--\t\t\t--\t\t\t--`; continue;}
            else
            {
            let l = table[i];
            let current = l.head;
            do{
                tablestr += `\n${i}\t\t${current.name}\t${current.username}\t${current.password}`;
                current = current.next;
            }while(current!=null);
            tablestr += `\n`;
            }
        }
        console.log(tablestr);
    }
}
const h = new HashTable();