const ft = new food_trucks();


document.addEventListener('DOMContentLoaded', () => {
    ft.viewLocations();
})


const search = document.querySelector('#search input');

search.addEventListener('input', () => {
    // for debug
    console.log(search.value.length);

    if (search.value.length > 3) {
        ft.searchFood(search.value);
    }else {
        ft.viewLocations()
    }
});