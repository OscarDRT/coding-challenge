const ft = new food_trucks();

window.addEventListener('load', sendFood);
function sendFood() {
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){sendValue(btn1.id)});

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){sendValue(btn2.id)});

    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', function(){sendValue(btn3.id)});
}

function sendValue(id) {
    console.log(id)
    const value = document.getElementById(id)
    const search = document.getElementById('input')
    search.value = value.value;
    ft.searchFood(search.value.toLowerCase())
}

document.addEventListener('DOMContentLoaded', () => {
    ft.viewLocations();
})


const search = document.querySelector('#search input');

search.addEventListener('input', () => {
    // for debug
    console.log(search.value.length);

    if (search.value.length) {
        ft.searchFood(search.value.toLowerCase());
    }else {
        ft.viewLocations()
    }
});