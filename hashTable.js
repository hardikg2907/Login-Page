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
        table[ind].push(name,username,pass);
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
        console.log(ll);
        if(ll.search(username)==1){
            if(ll.matchPass(username, password)==1){
                localStorage.setItem('username',username);
                window.location.href = "/index.html";
            } 
            else alert('Incorrect Password');
        }
        else alert('Incorrect Username');
    }

    display()
    {
        console.log("Hash Table: ");
        console.log("Name\tUsername\tPassword");
        for(let i=0;i<table.length;i++)
        {   
            if(table[i]==null) {console.log(`\n--\t\t\t--\t\t\t--`); continue;}
            let l = table[i];
            console.log(`\n${table[i].name}\t${table[i].username}\t${table[i].password}`)
        }
    }
}
const h = new HashTable();



// class Rows{
//     int data;
//     char status='E';


//     static void insert(int n,Rows[] row){
        
//         int ind = n%(row.length);
//         if(row[ind].status=='E')
//         {
//             row[ind].data =n;
//             row[ind].status ='O';
//             System.out.println("Inserted "+n);
//         }
//         else if(row[ind].status=='D' && row[ind].data==n)
//         {
//             row[ind].status='O';
//         }
//         else if(row[ind].status=='O' && row[ind].data!=n)
//         {   
//             for(int i=ind;i<row.length+ind;i++)
//             {
//                 if(row[i%row.length].status=='E'){
//                     row[i%row.length].data =n;
//                     row[i%row.length].status ='O';
//                     System.out.println("Inserted "+n);
//                     break;
//                 }
//             }
//         }
//         else System.out.println("Element can't be repeated.");
//     }

//     static void delete(int n,Rows[] row)
//     {
//         int ind = n%(row.length);
//         for(int i=ind;i<row.length+ind;i++)
//         {   
//             if(row[i%row.length].status=='O' && row[i%row.length].data==n) {
//                 row[i%row.length].status='D';
//                 System.out.println("Element deleted at "+i%row.length+"th position.");
//                 return;
//             }    
//         }
//         System.out.println("Element not found");
        

//     }

//     static int search(int n,Rows[] row)
//     {
//         int ind = n%(row.length);
//         for(int i=ind;i<row.length+ind;i++)
//         {   
//             if(row[i%row.length].status=='O' && row[i%row.length].data==n) {
//                 System.out.println("Element found at "+i%row.length+"th position.");
//                 return 1;
//             }    
//         }
//         System.out.println("Element not found");
//         return 0;
//     }

//     static void display(Rows[] row)
//     {   
//         System.out.println("Index\tStatus\tData");
//         for(int i=0;i<row.length;i++){
//             System.out.println(i+"\t"+row[i].status+"\t"+(row[i].data!=0?row[i].data:"--"));
//         }
//     }

// }
