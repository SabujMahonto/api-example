// when input text or search btn click 
const searchFood = () =>{
   const searchField = document.getElementById('search-field')   
    const searchText = searchField.value ;
    // console.log(searchText)
    searchField.value = ''

    // mealDb api 
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res =>res.json())
    .then(data => displaySearchResult(data.meals))
}


// after search then show meals 
const displaySearchResult = (meals) =>{
    const searchResult = document.getElementById('search-result')
            searchResult.textContent = ''
    meals.forEach(meal =>{
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML= `<div onclick ="showMealsDetail(${meal.idMeal})" class="card h-100">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                            </div>
                         </div>`;

      searchResult.appendChild(div)

    })
  
}

const showMealsDetail = (mealId) =>{
    const url  = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetail(data.meals[0]))
}


const displayMealDetail = (singleMeal)=>{
    // console.log(singleMeal)
    const showDetail = document.getElementById('single_meal');
    showDetail.innerText = ''
    const div = document.createElement('div')
        div.classList.add('card');

        div.innerHTML = ` 
        
            <img src="${singleMeal.strMealThumb}" class="card-img-top" alt="meal">
            <div class="card-body">
                <h5 class="card-title">${singleMeal.strMeal}</h5>
                <p class="card-text">${singleMeal.strInstructions.slice(0,200)}</p>
                <a href="${singleMeal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
         `;
        showDetail.appendChild(div)
}

