function consoleList() {
    const listOfCategories = document.querySelector('ul#categories');
    // console.log(listOfCategories);
    const listOfItems = listOfCategories.querySelectorAll('li.item');
    // console.log(listOfItems);
    console.log('Number of categories: ', listOfItems.length);

    listOfItems.forEach(item => {
        console.log("Category: ", item.firstElementChild.textContent);
        console.log("Elements: ", item.querySelectorAll('li').length);
    });
}

consoleList();