function displayMeal(){
    const cards= document.getElementById('displayMeal');
    cards.innerHTML="";
    const formText=document.getElementById('formInput');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${formText.value}`)
    .then(res=>res.json())
    .then(data=>{
        data.meals.forEach(meal => {
            const name=meal.strMeal,img=meal[`strMealThumb`];
            const card=document.createElement('div');
            const elements=document.createElement('ul');
            
            for(let i=0;i<20;i++){
                const element = document.createElement('li');
                const inTxt = meal[`strIngredient${i+1}`];
                if(inTxt){
                    element.innerHTML=inTxt;
                    elements.appendChild(element);                    
                }
            }
            card.className="card p-2 m-2";
            card.innerHTML=`
                <img src="${img}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${name}</h3>
                    <h5>Ingredients: </h5>
                </div>
            `;
            card.appendChild(elements);
            cards.append(card);
            card.addEventListener('click',function(){
                document.getElementById('displaySingle').innerHTML=card.innerHTML;
            })
        });
    })
    formText.value="";
}

document.getElementById('formInput').addEventListener('keypress',function(event){
    if(event.keyCode===13)displayMeal();
})