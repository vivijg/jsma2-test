

const books = [
    {
        isbn: "1600506460320",
        title: "Great book",
    },
    {
        isbn: "1600506460373",
        title: "Ok book",
    },
    {
        isbn: "1600506460521",
        title: "Bad book",
    },
    {
        isbn: "1600506460456",
        title: "Terrible book",
    },
];

const bookDetail = document.querySelector(".book-detail");

for (let i = 0; i < books.length; i++) {
   
bookDetail.innerHTML += `<div class="card">
<h4>${books[i].title}</h4>
<p>${books[i].isbn}</p>
<span><i class="fas fa-minus-circle" data-item="item"></i></span></div>`;
}

const items = document.querySelectorAll("p span");

    items.forEach(function (item) {
        item.addEventListener("click", handleClick);
    });


const deleteItem = document.querySelectorAll("div i");

deleteItem.forEach(function (items) {
        items.addEventListener("click", removeFromList);
});

function removeFromList() {
console.log(event);


const deleteThisItem = event.target.dataset.item;

const newList = listItems.filter(function (item) {
    if (deleteThisItem !== item) {
        return true;
    }
});

listItems = newList;

createList();
}