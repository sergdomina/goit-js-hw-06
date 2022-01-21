const inputRef = document.querySelector('input')
const text =document.querySelector('#text')
text.style.fontSize=`${inputRef.value}px`
inputRef.addEventListener('input',(event)=>{
    console.log(event.currentTarget.value);
    text.style.fontSize=`${event.currentTarget.value}px`
})