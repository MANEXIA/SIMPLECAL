"use-strict";

class Calculator{
    
    ui = document.getElementById('userinput')

    displayvals(disval){
       this.ui.value += disval 
    }
    clear(){
       this.ui.value = null
   }
    equal(){
       this.ui.value = eval(this.ui.value)
    } 
    checkdot(){
        if(this.ui.value.includes(".")){
            cnt = 1
        }else{
            cnt = 0
        }
    }
} 

const cal = new Calculator();
let cnt = 0;
const x = document.querySelectorAll(".btn")

// console.log(document.querySelectorAll(".btn"))

x.forEach((v, i, arr) => {
    const btn = v
    btn.addEventListener("click", (e) => {
        const val = e.target.dataset.martin
        if(val == "clear"){
            cnt = 0
            cal.clear();
        }else if(val == "equal"){    
            cal.equal();
            cal.checkdot();
        }
        else if(val == "."){  
            if(cnt == 0){
                cnt = 1
                cal.displayvals(e.target.dataset.martin);
            }else{

            }     
        }
        else if(val == "/" || val == "-" || val == "+" || val == "*"){
            cnt = 0
            cal.displayvals(e.target.dataset.martin);
        }
        else { cal.displayvals(e.target.dataset.martin); }
        
    })
})
