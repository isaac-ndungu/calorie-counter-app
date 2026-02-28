//DOM Elements 

const totalCalorieCounter = document.getElementById('totalCalorieCounter');
const dailyItemCount = document.getElementById('dailyItemCount');

const foodItemInput = document.getElementById('foodItemInput');
const calorieCountInput = document.getElementById('calorieCountInput');
const btn = document.getElementById('btn');




// Receive user input and update the calorie counter and item count

// update calorie counter
function updateCaloriecounter(calories) {
    const counterDiv = document.createElement('div');
    counterDiv.textContent = parseInt(counterDiv.textContent) || 0 + calories;
    totalCalorieCounter.appendChild(counterDiv);
}
// update daily item count
function updateItemCount() {

    const itemCountDiv = document.createElement('div');
    itemCountDiv.textContent = parseInt(itemCountDiv.textContent) || 0 + 1;
    dailyItemCount.appendChild(itemCountDiv);

}

btn.addEventListener('click', () => {
    const foodItem = foodItemInput.value;
    const calorieCount = parseInt(calorieCountInput.value);

    if (foodItem && !isNaN(calorieCount)) {
        updateCaloriecounter(calorieCount);
        updateItemCount();
    } else {
        alert('Please enter valid food item and calorie count');
    }

    foodItemInput.value = '';
    calorieCountInput.value = '';
});
