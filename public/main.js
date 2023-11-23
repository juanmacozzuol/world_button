
let button = document.getElementById("button")
let digits = []
let socket = io()
const getClicks = async ()=>{
    let response = await fetch('/clicks')
    let clicks = await response.json()
   return clicks.clicks
}

const counterRender =  async ()=>{
    let counter = await getClicks()
    for(let i = 0 ; i<12;i++){
        digits[i] = document.getElementById(`digit_${i}`)
        if (counter == 0){
            digits[i].innerHTML=`<p>0</p>`
        }else{
            let string_counter = counter.toString()
            console.log(string_counter)
        
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
}
button.addEventListener('click',async (e)=>{
  
    let counter = await getClicks()
    counter++
    console.log(counter)
    let string_counter = counter.toString()

    socket.emit('click',counter)
    for(let i = 0;i<digits.length;i++){
        
        if(string_counter[string_counter.length-i-1] == undefined){
            digits[i].innerHTML=`<p>0</p>`
        }
        else{
            digits[i].innerHTML=`<p>${string_counter[string_counter.length-i-1]}</p>`
        }
        
    }
    
})

socket.on('click',()=>{
    counterRender()
})

counterRender()