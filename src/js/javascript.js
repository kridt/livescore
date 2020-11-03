let key = "yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4"

fetch(`https://livescore-api.com/api-client/countries/list.json?&key=yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4`)
.then(response => response.json())
.then(function(data){
  
  let countries = data.data.country;
  let countriesList = document.querySelector(`.countriesList`);
  let kampeSpilletListe = document.querySelector(".kampeSpillet");
  
  countries.forEach(function(lande) {
    const land = document.createElement("li");
    land.classList.add("land");
    land.innerHTML = `
    <a href="ligaer.html?id=${lande.id}">${lande.name}</a>
    `
    countriesList.appendChild(land)
  });
  console.log(data);

});