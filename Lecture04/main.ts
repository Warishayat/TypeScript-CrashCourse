let a :string = "hello my name is waris";
console.log("a",a);

// lets dicuss Alias
type detailUser = {
    name:string
    age:number
    class:string
}
let waris : detailUser = {
    name:"warishayatabbasi",
    age:16,
    class:"Bs Software Enginnering"
}
console.log(waris);

// example 2
type Human = {
    name:string,
    email:string,
    password:string
}
let numan:Human = {
    name:"waris",
    email: "warishayat666@gmail.com",
    password:"Takemein"
}
console.log("Numan Detail is here");
console.log(numan);


//example 3
type Box = {
    color:string,
    weight:number
}
let daabba : Box = {
    color:"black,",
    weight:12
}
console.log("Dabby ki description");
console.log(daabba);

// Lets Dicuss Interfaces.
// type aur element ka farak kia h?

// 1: type yea btata hae k ap ka element kis trh ka hoga.
// 2: interface

interface User {
    name: string;
    email: string;
    password: string;
    catcha: boolean;
}

function getUserDetail(user: User): void {
    user.name = "waris";
    user.email = "warishayat666@gmail.com";
    user.password = "imgettingin";
    user.catcha = true;

    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    console.log(user.catcha);
}

const myUser: User = {
    name: "",
    email: "",
    password: "",
    catcha: false
};

getUserDetail(myUser);



// lets take another example of interfaces in typescriopt

interface food{
    name:string,
    price:Number;
}

interface meetahFood extends food{
    methai:string
}

interface khattafood extends food{
    imli:string
}


function getallMethaFood(food:meetahFood){
    food.methai = "gulan jamun",
    food.name = "Mango",
    food.price = 3000
}


function getallKhattaFood(food:khattafood){
    food.imli = "its bery bery sour",
    food.name = "grapes are also sour i shall not eat them",
    food.price = 222
}


// lets practise interface ==> this is something fet the suggestion which value should i pas

interface studentDetail {
    name:string,
    age:number | string , 
    rollnum : number | string , 
    section : string
    school_name : string
    major_subject_name : string
}


const Students = (student:studentDetail)=>{
    student.name = "waris hayat abbasi",
    student.age = 22,
    student.rollnum = "Sp21368",
    student.section = "A",
    student.school_name = "Harvard University",
    student.major_subject_name = "Computer Science"

    console.log(student.name);
    console.log(student.age);
    console.log(student.rollnum);
    console.log(student.section);
    console.log(student.school_name);
    console.log(student.major_subject_name);
}


let studentdata = {
    name: "",
    age: "",
    rollnum : "",
    section : "",
    school_name : "",
    major_subject_name : ""
}

console.log("Studentin data is getting printed via interfaces");
Students(studentdata);