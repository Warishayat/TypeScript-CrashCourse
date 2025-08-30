var a = "hello my name is waris";
console.log("a", a);
var waris = {
    name: "warishayatabbasi",
    age: 16,
    class: "Bs Software Enginnering"
};
console.log(waris);
var numan = {
    name: "waris",
    email: "warishayat666@gmail.com",
    password: "Takemein"
};
console.log("Numan Detail is here");
console.log(numan);
var daabba = {
    color: "black,",
    weight: 12
};
console.log("Dabby ki description");
console.log(daabba);
function getUserDetail(user) {
    user.name = "waris";
    user.email = "warishayat666@gmail.com";
    user.password = "imgettingin";
    user.catcha = true;
    console.log(user.name);
    console.log(user.email);
    console.log(user.password);
    console.log(user.catcha);
}
var myUser = {
    name: "",
    email: "",
    password: "",
    catcha: false
};
getUserDetail(myUser);
function getallMethaFood(food) {
    food.methai = "gulan jamun",
        food.name = "Mango",
        food.price = 3000;
}
function getallKhattaFood(food) {
    food.imli = "its bery bery sour",
        food.name = "grapes are also sour i shall not eat them",
        food.price = 222;
}
var Students = function (student) {
    student.name = "waris hayat abbasi",
        student.age = 22,
        student.rollnum = "Sp21368",
        student.section = "A",
        student.school_name = "Harvard University",
        student.major_subject_name = "Computer Science";
    console.log(student.name);
    console.log(student.age);
    console.log(student.rollnum);
    console.log(student.section);
    console.log(student.school_name);
    console.log(student.major_subject_name);
};
var studentdata = {
    name: "",
    age: "",
    rollnum: "",
    section: "",
    school_name: "",
    major_subject_name: ""
};
console.log("Studentin data is getting printed via interfaces");
Students(studentdata);
