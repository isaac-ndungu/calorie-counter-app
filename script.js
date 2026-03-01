//DOM Elements 

const totalCalorieCounter = document.getElementById('totalCalorieCounter');
const dailyItemCount = document.getElementById('dailyItemCount');
const inputForm = document.getElementById('inputForm');
const foodItemInput = document.getElementById('foodItemInput');
const calorieCountInput = document.getElementById('calorieCountInput');
const btn = document.getElementById('btn');
const resetIcon = document.getElementById('resetIcon')
const foodList = document.getElementById('foodList');
const listItem = document.querySelectorAll('.listItem');
const deletes = document.querySelectorAll('.deleteIcon');


let foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];

displayFoodItems();

// Receive user input and update the calorie counter and item count

// update calorie counter
function updatecounters() {
    const totalCalories = foodItems.reduce((total, item) => total + item.calorieCount, 0);

    const itemCount = foodItems.length;

    totalCalorieCounter.textContent = totalCalories;
    dailyItemCount.textContent = `${itemCount} items today`;
}

// Onclick - Add food Item 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const foodItem = foodItemInput.value;
    const calorieCount = parseInt(calorieCountInput.value);

    if (foodItem && !isNaN(calorieCount)) {
        addFoodItem(foodItem, calorieCount);
        displayFoodItems();
        
    } else {
        alert('Please enter valid food item and calorie count');
    }

    

    foodItemInput.value = '';
    calorieCountInput.value = '';
    inputForm.reset();
});


// Reset daily count
function dailyReset(){
    foodItems = [];
    localStorage.removeItem("foodItems");
    displayFoodItems();
}

resetIcon.addEventListener('click', () =>{
    dailyReset();
})


// Add food
function addFoodItem(name, calories) {
    let newfoodItem = {foodItem: name, calorieCount: calories};
    foodItems.push(newfoodItem);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));

    return newfoodItem;
}

// Display food items
function displayFoodItems() {
    foodList.innerHTML = '';
    foodItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = "listItem";

        listItem.innerHTML = `
            <div> 
                <h3 id="foodItem">${item.foodItem}</h3>
                <p id="calorieCount">${item.calorieCount} calories</p>
            </div>
            <i class="deleteIcon fa-solid fa-trash-can cursor-pointer" style="color: rgb(255, 0, 0);"}"></i>
        `;
        foodList.appendChild(listItem);
    });

    updatecounters();
}

// Delete food item

foodList.addEventListener('click', function(e) {
    if(e.target.classList.contains('deleteIcon')) {
        const index = e.target.dataset.index;

        foodItems.splice(index, 1);
        localStorage.setItem("foodItems", JSON.stringify(foodItems));

        displayFoodItems();
    }
        
});



