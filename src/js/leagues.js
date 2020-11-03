let url = new URLSearchParams(window.location.search);


if(url.has("id")){

    fetch(`https://livescore-api.com/api-client/competitions/list.json?key=yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4&country_id=${url.get("id")}`)
    .then(res => res.json())
    .then(function (data){
        
        let ligaer = data.data.competition;
        let ligaerList = document.querySelector(".leagues")

            ligaer.forEach(function(liga) {
            const leagues = document.createElement("li");
            leagues.classList.add("liga");
            leagues.innerHTML = `
            <a href="#">${liga.name}</a>
            `
            ligaerList.appendChild(leagues)
          }); 
        
        console.log(ligaer);
})
};