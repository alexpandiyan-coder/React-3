
// let a = 10

// const { type } = require("@testing-library/user-event/dist/type");


// let b = a

// b=20



// console.log(a)
// console.log(b)


// let array = [1,2,3]



// let array2=array

// array2.push(4)


// console.log(array)



// let obj={
//     name:"alex",
//     obj2:{age:23}
// }



// let user={...obj,obj2:{...obj.obj2}}



// user.obj2.age=24


// console.log(obj)


// let array =[1,2]


// function print(value){

// return value.push(3)


// }
// print(array)



// console.log(array)





// let obj ={
//     id:1,
//     name:"xxx",
//     age:23,
//     add:"zzz",
//     output:function (a){
//         console.log(this.id)
//         console.log(a)
//     },
//     print :function(){
//          console.log(this.name)
//     }
// }


// let obj2={

//     id:2,
//     name:"aaa",
//     age:24,
//     add:"aaa",
// }




// let obj3={
//     id:3,
//     name:"bbb",
//     age:23,
//     add:"bbb",
// }

// let obj4={
//     id:4,
//     name:"bbb",
//     age:23,
//     add:"bbb",
// }




// obj.output()
// obj.output.call(obj2,10)
// obj.output.apply(obj3,[30])
// let bindOut=obj.output.bind(obj4,40)
// bindOut()




// let a = 0
// let b =Boolean(0)

// Number()

// let c = Boolean(a+b)


// console.log(typeof(a))

// console.log(typeof(c))
// console.log(c)

// let array =[1,2,3,4]
// console.log(typeof(array))




// console.log(document)

// console.log("hiii")








// function print(){

//     return(["hi",(a)=>{console.log(10+a)}])
// }


// const [,fun]=print()

// fun(5)




// let print =a=>b=>c =>a+b+c



// console.log(print(1)(2)(3))



// function print(a){
   
//    return function(b){
//     return function(c){
//         return a+b+c

//     }

//    }


// }

// console.log(print(1)(2)(3))




// let obj ={id:1}


// console.log(obj.name)













let data ={name:"alex",id:1,age:10}




function fun(){
    for (const key in data) {
           return data[key]
       
       }
    }


    console.log(fun())




    






