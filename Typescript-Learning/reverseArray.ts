let numbers : number[]=[10,34,223,45,87,45];
//reverse array using reverse() method
let reversed:number[]=numbers.reverse();
console.log("Reverse of the array is : "+reversed);
//reverse array withoud using reverse function

let rev:number[]=[];
for(let i=reversed.length-1;i>=0;i--)
{
    rev.push(reversed[i]);
}
console.log("Reverse of the array without using reverse() method is : "+rev);
// revers a String array using reverse function 
let fruits:string[]=["Mango","Banana","Grapes","Apple"];
let reverse:string[]=fruits.reverse();
console.log("Reverse of the string array is : "+reverse);   

//reverse String without using reverse function
let revFruit:string[]=[];
for(let i=reverse.length-1;i>=0;i--)
{
    revFruit.push(reverse[i]);
}
console.log("Reverse of the string array without using reverse() method is : "+revFruit);   
//reverse using while loop 
let marks:number[]=[67,80,45,78,90,38];
let revMarks:number[]=[];
let i:number=marks.length-1;
while(i>=0)
{
    revMarks.push(marks[i]);
    i--;
}
console.log("Reverse of the marks array using while loop is : "+revMarks);

//reverse withoud changing originmal array
let originalFruits:string[]=["Mango","Apple","Banana","Grapes"];
let revOrg:string[]=[...originalFruits].reverse();
console.log("Reverse of the original fruits array without changing it is : "+revOrg);

