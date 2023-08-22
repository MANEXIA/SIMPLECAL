// const x = 1
// const y = "1"

// //deep equal ===
// //truthy vs falsy value

// // if(x === 1){
// //    console.log("trow")
// // }else{
// //    console.error("pols")
// // }


// //DESTRUCTURING
// //SPREAD THE LEGS ...
// const [a, b] = [1, 2]//ARRAY
// //console.log(...[a])

// const {martin:myname} = {martin: "wow"}
// // console.log(myname)//OBJECT

// //function expression and arrow function
// const ey = () => {
//    // console.log("hello")
// }
// // ey()

// //OBJECTS

// const store = (...x) =>{
//     for(const i of x){
//         console.log(i)
//     }
// }
// // store(1, 2, 5, 10)

// const par = [
//     { name: "ian" },
//      { name: "martin" },
//       { name: "ron" },
//        { name: "mark" },
//         { name: "prince" }
//       ];
// // for(const {name} of par)console.log(name)


// //exercise 1
// const person = { name: "John", age: 25 };
// // console.log name and age

// //exercise 2
// const colors = ["red", "green", "blue"];
// // use destructuring to store the red into a firstColor variable
// // use destructuring to store the green into a secondColor variable
// // then console.log them

// // exercise 3
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // create a combinedArr variable that has arr1 and arr2 values
// // so the output will be [1,2,3,4,5,6]
// // use spread operator

// // exercise 4
// const book = { title: "To Kill a Mockingbird", author: "Harper Lee" };
// // use destructuring so that bookTitle will store the book.title
// // use destructuring so that bookAuthor will store the book.author
// // console.log(bookTitle); // should output 'To Kill a Mockingbird'
// // console.log(bookAuthor); // should output 'Harper Lee'




// class Student{
//     constructor(Name, age){
//        this.Name = Name;
//        this.age = age;
//     }

//     info(){
//         // console.log(this.Name, this.age)
//        return "hello"   
//     }
//     section(sec){
//        this.info()
//        console.log(sec)
//     }
// }
// const student1 = new Student("martin", 19)
// student1.section("Mars")



// const person = {
//      firstname : "martin",
//      age: 13,
//      show(){
//         console.log(this.firstname, this.age)
//      }
// }
// person.show();