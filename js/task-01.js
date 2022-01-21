const itemRef = document.querySelectorAll('.item')

itemRef.forEach(item=>{
    const title= item.querySelector('h2').textContent
    console.log(`category: ${title}`);
    const itemsLength= item.querySelectorAll('li').length
    console.log(`Elements: ${itemsLength}`);
})