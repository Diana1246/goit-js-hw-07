const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];


  const ulIngredients = document.querySelector('#ingredients');

  const liElements = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
  });
  
  ulIngredients.append(...liElements);

  