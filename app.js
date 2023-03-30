const categoryList = document.querySelectorAll('.categories');
const categories = document.querySelectorAll('.item')
console.log(categories.length);

const listEl = document.querySelectorAll('.item');

for (let item of listEl){
    const itemName = item.querySelector('h2');
    const itemNumber = item.querySelectorAll('li');
    const itemCount = itemNumber.length;
    console.log( itemName,itemCount);
}
