import { a1 } from "./demo4.js";
import { a2 } from "./demo4.js";
import { a3 } from "./demo4.js";
import { sentence } from "./demo4.js";
export class demo2 {
  printArray(): number[] {
    return a1;
  }
  addElement(a: number): number[] {
    a1.push(a);
    return a1;
  }
  deleteElement(): number[] {
    a1.pop();
    return a1;
  }
  foreach() {
    a1.forEach((element) => {
      console.log(element + " ");
    });
  }
  mapArray() {
    //the map function modifies the array with given function and stores it in new variable array..
    //it must return a value it is compulsury
    const a1Map = a1.map(function (element) {
      return element + 10;
    });
    console.log("a1 Array is " + a1);
    console.log("new mapped array with modification is " + a1Map);
  }
  filterArray() {
    const a1Filter = a1.filter(function (element) {
      return element % 2 == 0;
    });
    console.log("a1 is " + a1);
    console.log("a1 Filter is " + a1Filter);
  }
  someAndEvery() {
    //every returns TRUE if all elements satisfies the condition else FALSE
    const a1Every = a1.every((element) => {
      return element > 5;
    });
    //some returns true even if one element satisfies the condition..
    const a1Some = a1.some((element) => {
      return element > 5;
    });
    console.log("a1 is " + a1);
    console.log("Every : " + a1Every);
    console.log("Some : " + a1Some);
  }
  sortArray() {
    //sort function works well with string array but not with number array because JS turns the number array to string and solvess it in alphabetical order...
    //so for sorting number we take the compare function and the compare two adjacent elements and sort them
    //let say a and b are elements if (a-b > 0) b is smaller then a and vice versa... for ASCENDING
    //for DECSENDING do b-a...
    a2.sort();
    a1.sort((a, b) => {
      return a - b;
    });
    console.log("a2 is " + a2);
    console.log("a1 is " + a1);
    //sort an array of objects according to name and balance

    //Ascending sort WRT name
    a3.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    a3.forEach((element) => {
      console.log(element.name + " " + element.bal);
    });
    //decending sort WRT balance
    a3.sort((a, b) => {
      return b.bal - a.bal;
    });
    a3.forEach((element) => {
      console.log(element.name + " " + element.bal);
    });
  }
  spreadOperatorArray() {
    //copy a1 in a1Spread
    const a1Spread = [...a1];
    console.log(a1Spread);
    //string to array
    const sentenceArray = sentence.split("");
    console.log(sentenceArray);
    //merge two arrays
    const mergeArray = [...a1, ...a2];
    console.log(mergeArray);
  }
  //find function needs the ES6 platform to be changed in tsconfig.json.....
  // findArray(){
  //     const search = a1.find(function(element){
  //         return(element>24);
  //     });
  //     console.log("Search element is "+search);
  // }

  xyz(): string {
    return "function executed";
  }
}
