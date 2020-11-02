let key = "yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4"

fetch(`https://livescore-api.com/api-client/countries/list.json?&key=yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4`)
.then(response => response.json())
.then(function(data){
  
  let countries = data.data.country;
  let countriesList = document.querySelector(`.countriesList`);

  
  countries.forEach(function(lande) {
    const land = document.createElement("li");
    land.classList.add("land");
    land.innerHTML = `
    <a href="ligaer.html?id=${lande.id}">${lande.name}</a>
    `
    countriesList.appendChild(land)
  });
  
console.log(lande.id);


  

  /* let premierLeague = data.data.table;
  let tabeloversigt = document.querySelector(".stilling");
  let pointsTabel = document.querySelector(".points");


  premierLeague.forEach(tabel => {
    const hold = document.createElement(`li`);
    hold.classList.add(`hold`);
    hold.innerHTML = `
    <a href="#">${tabel.name}</a> 
    `
    tabeloversigt.appendChild(hold)
  });

  premierLeague.forEach(point => {
    const points = document.createElement(`li`);
    points.classList.add(`point`);
    points.innerHTML = `
    ${point.points}
    `
    pointsTabel.appendChild(points)
  }); */

});