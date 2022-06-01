class array{
    constructor(){
        this.length = 0;
        this.arr = [];
    }

    push(e){
        this.arr[this.length] = e;
        this.length++;
    }
    pop(){
        delete this.arr[this.length-1];
        this.length--;
    }
    top(){
        console.log(this.arr[this.length-1]);
    }
    print(){
        let ans = [];
        for(let x of this.arr){
            ans.push(x);
        }
        console.log(ans);
    }
    printhReverse(){
        let ans = [];
        for(let x of this.arr){
            ans.push(x);
        }
        console.log(ans.reverse());
    }
    size(){
        console.log(this.length);
    }
}

let arr1 = new array();
arr1.push(5);
arr1.push(10);
arr1.push(15);
arr1.pop();
arr1.push(3);
arr1.print();
arr1.printhReverse()
console.log(arr1);