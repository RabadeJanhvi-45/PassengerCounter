//document.getElementById("count").innerText=5

// function log(){
//     console.log("42");
// // }
let saveEL=document.getElementById("save-el")
let countEl=document.getElementById("count-el")

let count=0

console.log(saveEL)

function increment(){
     count+=1
    countEl.innerText=count
      
}

function save()
{
    let countStr=count +" - "
    saveEL.textContent+=countStr
    countEl.textContent=0
    count=0

}


// let name="Ram"
// let greeting="Hello"
// let mygreetings= greeting  +" " +  name
// console.log(mygreetings)