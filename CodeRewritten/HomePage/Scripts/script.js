// Function for the searchbar 
function displayRelated(){
    var searchbar = document.getElementById('searchbar');
    var search = searchbar.value;

    // Get all the boxes
    var boxes = document.querySelectorAll('.box');

   // If input is empty, display all boxes
   if (search === '') {
    boxes.forEach(function(box) {
        box.style.display = 'block';
    });
    } else {
    // Function that hides all the boxes
    boxes.forEach(function(box) {
        box.style.display = 'none';
    });

    var tacosIntegralBox = document.getElementById('tacosIntegral');
    var tacosJulianBox = document.getElementById('tacosJulian');
    var cuberoBurguersBox = document.getElementById('cuberoBurguers');
    var tostadasOaxacaBox = document.getElementById('tostadasOaxaca');
    var hamburguesasBox = document.getElementById('marthaBurgers');


    switch(search.toLowerCase()) {
        case 'tacos':
            tacosIntegralBox.style.display = 'grid';
            tacosJulianBox.style.display = 'grid';
            break;
        case 'tostadas':
            tostadasOaxacaBox.style.display = 'grid';
            break;
        case 'hamburguesas':
            cuberoBurguersBox.style.display = 'grid'; 
            hamburguesasBox.style.display = 'grid';
            break;
        default:
            boxes.forEach(function(box) {
                box.style.display = 'grid';
            });
        }
    }
}

// Abrir el menú
document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show-menu');
  });

document.getElementById('backPage').addEventListener('click', function(){
    var menu = document.getElementById('dropdown-menu');
    menu.classList.remove('show-menu');
})
