//DOM Elements 

const totalCalorieCounter = document.getElementById('totalCalorieCounter');
const dailyItemCount = document.getElementById('dailyItemCount');
const inputForm = document.getElementById('inputForm');
const foodItemInput = document.getElementById('foodItemInput');
const calorieCountInput = document.getElementById('calorieCountInput');
const btn = document.getElementById('btn');
const resetIcon = document.getElementById('resetIcon')
const foodList = document.getElementById('foodList');


let foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];

displayFoodItems();

// Receive user input and update the calorie counter and item count

// update calorie counter
function updateCaloriecounter(calories) {
    let currentCalories = parseInt(totalCalorieCounter.textContent) || 0;
    currentCalories += calories;
    totalCalorieCounter.textContent = currentCalories;
}
// update daily item count
function updateItemCount() {

    let currentCount = parseInt(dailyItemCount.textContent) || 0;
    currentCount++;
    dailyItemCount.textContent = `${currentCount} items today`;

}

// Onclick 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const foodItem = foodItemInput.value;
    const calorieCount = parseInt(calorieCountInput.value);

    if (foodItem && !isNaN(calorieCount)) {
        updateCaloriecounter(calorieCount);
        updateItemCount();
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
    let totalCalories = 0;
    let itemCount = 0;

    totalCalorieCounter.textContent = totalCalories;
    dailyItemCount.textContent = `${itemCount} items today`
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
        listItem.innerHTML = `
            <div> 
                <h3 id="foodItem">${item.foodItem}</h3>
                <p id="calorieCount">${item.calorieCount} calories</p>
            </div>
            <i class="fa-solid fa-trash-can" style="color: rgb(255, 0, 0);"></i>
        `;
        foodList.appendChild(listItem);
    });
}
