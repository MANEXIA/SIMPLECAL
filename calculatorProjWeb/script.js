let nm1 = 0
let nm2 = 0
let calOP = ""
let calinput = document.getElementById("cal-input")

function calbtn(num){
    calinput.value += num.innerHTML
}

document.getElementById("cal-mul").onclick = function(){
    nm1 = calinput.value
    calinput.value = ""
    calOP = "M"
}

document.getElementById("cal-div").onclick = function(){
    nm1 = calinput.value
    calinput.value = ""
    calOP = "D"
}

document.getElementById("cal-sub").onclick = function(){
    nm1 = calinput.value
    calinput.value = ""
    calOP = "S"
}
document.getElementById("cal-add").onclick = function(){
      nm1 = calinput.value
      calinput.value = ""
      calOP = "A"
}

document.getElementById("cal-equal").onclick = function(){
      nm2 = calinput.value
      calinput.value = ""
      switch(calOP){
        case "M" :
        calinput.value = Number(nm1) * Number(nm2)
        nm1 = 0
        nm2 = 0
        break;
        case "D" :
        calinput.value = Number(nm1) / Number(nm2)
        nm1 = 0
        nm2 = 0
        break;
        case "S" :
        calinput.value = Number(nm1) - Number(nm2)
        nm1 = 0
        nm2 = 0
        break;
        case "A" :
        calinput.value = Number(nm1) + Number(nm2)
        nm1 = 0
        nm2 = 0
        break;
      }
}

document.getElementById("cal-clear").onclick = function(){
    calinput.value = ""
    nm1 = 0
    nm2 = 0
    calOP = ""
}
