let categoriesElements = document.getElementById('categories')

console.log(`Number of categories: ${categoriesElements.children.length}`)

let itemElements = categoriesElements.getElementsByClassName('item');

let elementsArray = Array.from(itemElements)

elementsArray.forEach(element => {
    console.log(`Category: ${element.children[0].innerHTML}`)
    console.log(`Elements: ${element.children[1].children.length}`)
});
