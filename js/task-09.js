function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef=document.querySelector('.change-color')
const textRef=document.querySelector('.color')
buttonRef.addEventListener("click",()=>{
  const color=getRandomHexColor()
  textRef.textContent=color
  document.body.style.backgroundColor=color
})