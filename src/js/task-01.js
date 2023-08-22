const listRef = document.querySelectorAll(".item");
console.log("Number of categories:", listRef.length);
listRef.forEach(el=>console.log(`Category:${el.firstElementChild.textContent} Elements: ${el.lastElementChild.childElementCount
}`))