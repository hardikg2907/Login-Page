class Node{
    constructor(name,username,password){
        this.name=name;
        this.username=username;
        this.password=password;
        this.next=null;
    }
}

class Linkedlist{
    constructor(){
        this.count = 0;
        this.head = null;
    }

    getHead(){
        if (this.isEmpty()){
            return null;
        }
        return this.head;
    }

    push(name, username, password){
        const node = new Node(name, username, password);
        let current = this.head;
        if (this.count == 0) {
            this.head = node;
        }else{
            if(this.search(username)==0) {
                while (current.next != null) {
                    current = current.next
                }
                current.next = node;
                regsuccess.innerHTML='<h2>Registered Successfully!</h2>';
                setTimeout(()=>{regsuccess.innerHTML=''},1500);
            }
            else {
                alert('Username Taken!');
                return;
            }
        }
        this.count++;
        return;
    }

    search(username){
        let current = this.head;
        do{
            // console.log(current.username);
            if(current.username==username) return 1;
            current=current.next;
        }while(current!=null)
        return 0;
    }

    matchPass(username, password) {
        let current=this.head;
        do{
            if(current.username==username) break;
            current=current.next;
        }while(current!=null)
        console.log(username+":"+current.username);
        console.log(password+":"+current.password);
        if(current.password==password) return 1;
        return 0;
    }

    isEmpty() {
        return this.count == 0;
    }
}