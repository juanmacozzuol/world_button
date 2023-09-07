let counter = localStorage.getItem("count")!= null ? localStorage.getItem("count") : 0
let button = document.getElementById("button")
let digits = []
for(let i = 0 ; i<12;i++){
    digits[i] = document.getElementById(`digit_${i}`)
    if (counter == 0){
        digits[i].innerHTML=`<p>0</p>`
    }else{
        let string_counter = counter.toString()
        console.log(string_counter)
        localStorage.setItem("count",string_counter)
        for(let i = 0;i<digits.length;i++){
            if(string_counter[string_counter.length-i-1] == undefined){
                digits[i].innerHTML=`<p>0</p>`
            }
            else{
                digits[i].innerHTML=`<p>${string_counter[string_counter.length-i-1]}</p>`
            }
            
        }
        
    }
}

button.addEventListener('click',()=>{counter++
    let string_counter = counter.toString()
    console.log(string_counter)
    localStorage.setItem("count",string_counter)
    for(let i = 0;i<digits.length;i++){
        if(string_counter[string_counter.length-i-1] == undefined){
            digits[i].innerHTML=`<p>0</p>`
        }
        else{
            digits[i].innerHTML=`<p>${string_counter[string_counter.length-i-1]}</p>`
        }
        
    }
    
})

