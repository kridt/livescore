let url = new URLSearchParams(window.location.search);


if(url.has("ligaid")){

    fetch(`https://livescore-api.com/api-client/leagues/table.json?&key=yxPQMOgJcIm1E7g4&secret=RobvBuNt4CY6rF00dQQ0F6JRO5Ttcax4&competition_id=${url.get("ligaid")}`)
    .then(res => res.json())
    .then(function (data){
        
        let ligaHold = data.data.table;
        let ligaList = document.querySelector(".stilling");
        let kampeSpilletListe = document.querySelector(".kampeSpillet");
        let pointListe = document.querySelector(".point");
        let winListe = document.querySelector(".win");
        let drawListe = document.querySelector(".draw");
        let lossListe = document.querySelector(".loss");

        ligaHold.forEach(stilling => {
          const ligaStilling = document.createElement("li");
          ligaStilling.innerHTML = `
          ${stilling.name}
          `
          ligaList.appendChild(ligaStilling)
        });

        ligaHold.forEach(kampeSpillet => {
          const ks = document.createElement("li");
          ks.innerHTML = `
          ${kampeSpillet.matches}
          `
          kampeSpilletListe.appendChild(ks)
        });

        ligaHold.forEach(point => {
          const points = document.createElement("li");
          points.innerHTML = `
          ${point.points}
          `
          pointListe.appendChild(points)
        });

        ligaHold.forEach(win => {
          const kampe = document.createElement("li");
          kampe.innerHTML = `
          ${win.won}
          `
          winListe.appendChild(kampe)
        });

        ligaHold.forEach(draw => {
          const kampeD = document.createElement("li");
          kampeD.innerHTML = `
          ${draw.drawn}
          `
          drawListe.appendChild(kampeD)
        });

        ligaHold.forEach(loss => {
          const kampeL = document.createElement("li");
          kampeL.innerHTML = `
          ${loss.lost}
          `
          lossListe.appendChild(kampeL)
        });

           /*  data.data.table.forEach(function(stilling) {
            const ligaStilling = document.createElement("li");
            ligaHold.innerHTML = `
            <a href="#">${stilling.name}</a>
            `
            ligaList.appendChild(ligaHold)
          });   */
        
        console.log(ligaHold);
})
};