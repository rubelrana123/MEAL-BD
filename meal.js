const loadingMeal = (search) => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
		.then((res) => res.json())
		.then((data) => displayMeal(data.meals));
};

const displayMeal = (Meals) => {
  console.log(Meals);
	const mealContainer = document.getElementById('meal-container');
  mealContainer.innerText = ' ';
	Meals.forEach((meal) => {

		console.log(meal);
    const mealDiv = document.createElement('div');
		mealDiv.classList.add('col');
		mealDiv.innerHTML = `
     <div onclick ="loaddisplayDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strCategory}</h5>
        <p class="card-text">
        <p>Element : ${
					meal.strIngredient6 +
					' ' +
					meal.strIngredient5 +
					' ' +
					meal.strIngredient3
				}</p>
        
        </p>
   </div>
   </div>

    
    
    `;
		mealContainer.appendChild(mealDiv);
	});
};

const searchItem =() =>  {

 const searchField = document.getElementById('search-field');
 const searchValue = searchField.value;

loadingMeal(searchValue);
 
searchField.value = '';

}


const loaddisplayDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
		.then((res) => res.json())
		.then((details) => displayDetails(details.meals[0]));
}
const displayDetails = (meal) => {
  const mealDetails = document.getElementById('meal-details');
  mealDetails.innerText = " ";
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
  
  <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strCategory}</h5>
        <p class="card-text">
        <p>Element : ${
					meal.strIngredient6 +
					' ' +
					meal.strIngredient5 +
					' ' +
					meal.strIngredient3
				}</p>
        
        </p>
  
  `;
  mealDetails.appendChild(div);
  
}
loaddisplayDetails();
loadingMeal(' ');
