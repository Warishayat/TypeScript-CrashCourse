// lets start from lecture no 2:
// in todays class i will solve the problem related to the 
// intersection


//union ki example h yeh
// let a : number | string;       //yea number yea string kuch b hoskta hae guys

// a = 12;
// a = "waris hayat abbasi";

// lets create a error mean pass a a :true
// a = true;


//intersection ki bat krta hu isk liye 2 chzn n types and interface.

type Classmate = {
    section :string
}

type Student = {
    name:string
}

// intersection ka mtlib donu ko jor kar new type bna do

type ClassMateStudent = Classmate & Student;

let namee : ClassMateStudent={
   name :"waris",
   section: "b",
}
console.log(namee);


// Example 2:

type City = {
    name:string
    population:number
}

type Planet = {
    name:string
    cities : number
}


type WorldScene = City & Planet;

let values : WorldScene = {
    name:"Lahore",
    population:1000,
    cities:101
}

console.log(values)


type dob ={
    name:string,
    age:number,
    date:number
}


let arslan:dob = {
    name:"arslam",
    age:12,
    date:11
}

console.log("name is",arslan.name);
console.log("Age is",arslan.age);
console.log("date",arslan.date)



console.log("Hello iam fine");

let schoolname:string;
schoolname = "North Dakota state University";
console.log(schoolname);

// lets move on the next topic what i would covert