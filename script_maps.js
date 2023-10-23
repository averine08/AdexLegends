function changeMap(map){
    let arenaMap = document.getElementById('arena-map-img');
    let battleMap = document.getElementById('battle-map-img');

    if(map == 1){
        arenaMap.src = "./assets/Maps/Encore Map.svg"
    }
    else if(map == 2){
        arenaMap.src = "./assets/Maps/Drop Off Maps.svg"
    }
    else if(map == 3){
        arenaMap.src = "./assets/Maps/Overflow Maps.svg"
    }
    else if(map == 4){
        battleMap.src = "./assets/Maps/World_s Edge.svg"
    }
    else if(map == 5){
        battleMap.src = "./assets/Maps/olympus Map.svg"
    }
    else if(map == 6){
        battleMap.src = "./assets/Maps/Strom Point Maps.svg"
    }


}

let arenaLastBtn;
let arenaBtn = document.getElementsByClassName("arena-btn");

for (var i = 0; i < arenaBtn.length; i++) {
    arenaBtn[i].addEventListener("click", arenaClicked);
}

function arenaClicked() {
    if (arenaLastBtn){
        arenaLastBtn.classList.remove("arena-btn-clicked");
    }
    
    this.classList.add("arena-btn-clicked");
  
    arenaLastBtn = this;

    if(arenaBtn[1] == this || arenaBtn[2] == this){
        arenaBtn[0].removeAttribute('id');
    }
    
}

let battleLastBtn;
let battleBtn = document.getElementsByClassName("battle-btn");

for (var i = 0; i < battleBtn.length; i++) {
    battleBtn[i].addEventListener("click", battleClicked );
}

function battleClicked() {
    if (battleLastBtn){
        battleLastBtn.classList.remove("battle-btn-clicked");
    }
    
    this.classList.add("battle-btn-clicked");
  
    battleLastBtn = this;

    if(battleBtn[1] == this || battleBtn[2] == this){
        battleBtn[0].removeAttribute('id');
    }
    
}