//DOM Elements 

const totalCalorieCounter = document.getElementById('totalCalorieCounter');
const dailyItemCount = document.getElementById('dailyItemCount');

const foodItemInput = document.getElementById('foodItemInput');
const calorieCountInput = document.getElementById('calorieCountInput');
const btn = document.getElementById('btn');
const resetIcon = document.getElementById('resetIcon')

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
    } else {
        alert('Please enter valid food item and calorie count');
    }

    foodItemInput.value = '';
    calorieCountInput.value = '';
});


// Reset daily count
function dailyReset(){
    totalCalories = 0;
    itemCount = 0;

    totalCalorieCounter.textContent = totalCalories;
    dailyItemCount.textContent = `${itemCount} items today`
}

resetIcon.addEventListener('click', () =>{
    dailyReset();
})


//