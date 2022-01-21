const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
const updateOutput= (event)=>{
    // if(event.target.value.trim() !==''){
    //     output.textContent=event.target.value
    // }else{output.textContent='Anonymous'}
    const inputValue = event.target.value.trim()
    output.textContent=inputValue? inputValue : 'Anonymous'
}
input.addEventListener('input',updateOutput)