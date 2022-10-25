// import { a2 } from "./demo4.js";
// interface x{
//     name: string,
//     rating: number,
// };

// class a implements x{
//     // public name: string;
//     // public rating: number;
//     // we directly initilize name and rating inside the constructer
//     public petName: string[] = [];
//     constructor(public name:string,public rating:number){
//         //here this refers to the empty object a having properties of interface it implements 
//         console.log(this);
//         this.name = name;
//         this.rating = rating;
//         //using the a2 array and adding to add function 
//         this.add(a2);
//         this.print();
//     }

//     private print = () =>{
//         console.log(`name is ${this.name} and rating is ${this.rating} has pet names ${this.petName}`);
//     }
    
//     private add = (pet: string[]) =>{
//         // spread operater to add the array
//         this.petName = [...pet];
//     }
    
// }
// // created the new object b of a 
// const b = new a("yash",10);


// GENERICS: allows function and classes to be strict and flexible
// generic generally has T symbol
class Queue<T>{
    private data: T[] = [];

    add(item: T){
        // push adds from back and unshift added from front
        this.data.unshift(item);
    }

    remove(){
        // shift removes from front and pop removes from back
        this.data.pop();
    }

    print(){
        console.log(`The array is ${this.data}`);
    }
}

const qString = new Queue<String>();
const qnumber = new Queue<number>();
qString.add("yasu");
qString.add("zack");
qnumber.add(1);
qnumber.add(2);
qString.print();
qnumber.print();
qString.remove();
qnumber.remove();
qString.print();
qnumber.print();



