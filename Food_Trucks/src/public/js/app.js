const ft = new food_trucks();


//After the document is fully uploaded along with images and static files
window.addEventListener('load', sendFood);

// function to make use of the buttons on the navbar
function sendFood() {
    // click event, send button value to sendValue function
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){sendValue(btn1.id)});

    // click event, send button value to sendValue function
    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){sendValue(btn2.id)});

    // click event, send button value to sendValue function
    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(){sendValue(btn3.id)});
}

// predefined food truck search
function sendValue(id) {
    console.log(id)
    const value = document.getElementById(id)
    const search = document.getElementById('input')
    search.value = value.value;
    // call to the searchFood method of searching for food trucks  
    ft.searchFood(search.value.toLowerCase())
}

//After the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Call to the method that loads all the food trucks on the map
    ft.viewLocations();
})



const search = document.querySelector('#search input');
// event input
search.addEventListener('input', () => {
    // for debug
    console.log(search.value.length);
    // when the user types in the search bar
    if (search.value.length) {
        // Calling the method that loads on the map only the food trucks that match the user's search
        ft.searchFood(search.value.toLowerCase());
    }else { // The search bar is cleaned
        // Call to the method that loads all the food trucks on the map
        ft.viewLocations()
    }
});