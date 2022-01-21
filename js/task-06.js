const inputRef = document.querySelector('#validation-input')
const onInputValidation=(event)=>{
    const requarentLength=Number(event.currentTarget.dataset.length)
    const inputValueLength= event.currentTarget.value.length
    if(requarentLength===inputValueLength){
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    }else{
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
}
inputRef.addEventListener('blur',onInputValidation)
