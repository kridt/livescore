let url = new URLSearchParams(window.location.search);


if(url.has("ligaid")){

    fetch(`https://livescore-api.com/api-client/teams/list.json?key=yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4&${url.get("ligaid")}`)
    .then(res => res.json())
    .then(function (data){
        
        let ligaer = data;
        let ligaList = document.querySelector(".league")

            /* ligaer.forEach(function(liga) {
            const leagues = document.createElement("li");
            leagues.classList.add("ligaen");
            leagues.innerHTML = `
            <a href="ligaer.html?ligaid=${liga.id}">${liga.name}</a>
            `
            ligaerList.appendChild(leagues)
          });  */
        
        console.log(data);
})
};