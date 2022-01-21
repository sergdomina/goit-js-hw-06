const incrementRef = document.querySelector('[data-action="increment"]')
console.log(incrementRef);
const decrementRef = document.querySelector('[data-action="decrement"]')
console.log(decrementRef);
const count = document.querySelector('#value')
let counterValue=0;
const increment=()=>{
    counterValue+=1
    count.textContent=counterValue
}
const decrement = ()=>{
    counterValue-=1
    count.textContent=counterValue
}
incrementRef.addEventListener('click',increment)
decrementRef.addEventListener('click',decrement)