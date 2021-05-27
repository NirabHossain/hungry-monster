function displayMeal(){
    const cards= document.getElementById('displayMeal');
    cards.innerHTML="";
    const formText=document.getElementById('formInput');
    console.log(formText.value);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${formText.value}`)
    .then(res=>res.json())
    .then(data=>{
        data.meals.forEach(meal => {
            const name=meal.strMeal,img=meal.strMealThumb,id=meal.idMeal;
            const card=document.createElement('div');
            card.className="card p-2 m-2";
            card.innerHTML=`
                <img src="${img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6>${id}</h6>
                </div>
            `;
            cards.append(card);
        });
    })
}
