document.onkeydown = function(e){

    if (e.keyCode == 38){
        setInterval(() => {
            
            hero = document.querySelector('.hero'); 
        hero.classList.add('animateHero');
         setTimeout(() => {
             hero.classList.remove('animateHero')
         },600);    
    }
}
setInterval(() => {
    obstacle = document.querySelector('.obsctacle');


}, 100);