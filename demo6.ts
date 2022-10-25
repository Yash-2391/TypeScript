// DECORATERS : allows us to modify the code and return the same code
// decorators are written as function and will accept a class

function MenuItem(item1){
    return (target: Function)=>{
        target.prototype.item = item1;
    }
}

@MenuItem("yash")
class a{
    item: string;
}

@MenuItem(10)
class b{
    item: number; 
}

console.log(new a().item);
console.log(new b().item);