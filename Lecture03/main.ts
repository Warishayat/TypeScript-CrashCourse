// Type Alias in typeScript

// pre defined types 
let a :number;
let b:string;
let noun:true;


// type alias mean make your own types
// 1: primitive type aliases
// 2: object type alias


type login = {
    name:string
    email:string
    captcha:boolean
    password:string
    recaptcha:boolean
}

// yeh hmri apni bnai hui alias yea type hogyi hae
let user : login = {
    name: "waris hayat",
    email: "warishayat666@gmail.com",
    captcha:true,
    password: "i dont know",
    recaptcha : false
}


console.log("User is getting logged in. please confrim your identity.")
console.log(user.name);
console.log(user.email);

























































// // type alias but before that let me  practise the previous lecture


// let name:string;
// let rollnum:number;

// name = "waris hayat abbasi";
// rollnum = 1212


// console.log(name);
// console.log(rollnum);


// // lets union and intersection for now

// let noun : string | number;

// noun = "waris" ;
// noun = 420 ;

// console.log(noun);



// // lets make intersection
// type dob = {
//     name:string,
//     age:number,
//     class:string,
//     rollnumber:string
// }
 

// let person:dob = {
//     name: "waris",
//     age:22,
//     class:"bachelor in software engineering",
//     rollnumber:"SP21368",
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.class);
// console.log(rollnum);


// // typ