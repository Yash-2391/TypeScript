// // const x: number = 10;
// // const name1: String = "xyz";

// // // function xname1(x: number,name1: string){
// // //     return(x+name1);
// // // }

// // // console.log(xname1(10,'A'));


// // interface is used to create a custom type..
// // no values in interface is allowed
// interface IObj1{
//     id: number,
//     name: string,
//     bal: number,
//     status?: String,   // question mark as this is optional
//     deposit?: () => void  //this method is also optional
// };

// //created an object to push
// const o1 :IObj1 ={
//     id: 1,
//     name: "yash",
//     bal: 1000
// }
// const o2 :IObj1 ={
//     id: 2,
//     name: "xyz",
//     bal: 5000
// }
// //array of objects
// let oArray :IObj1[] = [];
// oArray.push(o1);
// oArray.push(o2);

// oArray.forEach(element => {
//     console.log(element.name);
// });
// //printing the array
// // console.log(oArray);


// console.log(this); here "this" refers to the window object
// const user = {
//     name: "yash",
//     hello(){
//         console.log(this.name);     //"this" refers to the user object
//     }
// }

// const exFunction = function(){
//     console.log(this.name);
// }

// const admin: any = {
//     name: "xyz",
// }
// admin.a = exFunction;

// admin.a();

//problem with "this" in function
// function in object is known as method.
// use the regular function syntax when creating an method in an object
// use the arrow function syntax when to create an function in an method
// const employee = {
//     name: "bobby",
//     hobby: ["sing","dance","play"],
//     greet(){
//         console.log("hello "+this.name);
        
//         const sayHello = ():string => {
//             return(this.name);
//         }
//         console.log(sayHello());
//     }
// };
// employee.greet();

// // bind, call and apply

// const a = {
//     name: "xyz",
//     rating: 10,
//     sayHello(greet: string,present: boolean){
//         console.log(greet +"=>" + this.name + "=>" + this.rating+ "=>" + present)
//     }
// };
 
// function b(greet,present){
//     // console.log(this);
//     this.sayHello(greet,present);
// };


// // 1. BIND: we can change the value of "this" by biding an object to another object,bind creates a new copy of that function
// // copy of function b() is x()
// // const x = b.bind(a);
// // x("hii",false);

// //2. CALL: same as bind but does not create an copy but changes are made with same function
// // args must be passed seperated by comma ","
// // b.call(a,"hii",true);

// // 3. APPLY: same as call but args are passed in form of array
// b.apply(a,["hii",false]);
