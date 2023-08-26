const listRef = document.querySelectorAll(".item");
console.log("Number of categories:", listRef.length);

listRef.forEach(el=>console.log(`\nCategory:${el.firstElementChild.textContent} \nElements: ${el.lastElementChild.childElementCount
}`))