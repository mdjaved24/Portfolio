

// TOGGLE NAVBAR 
let menu = document.getElementById('menu');
let navul = document.getElementById('navul');
let navlist = document.getElementsByClassName('navlist');
let section = document.getElementsByTagName('section');

function toggleMenu(){
    if(navul.style.display !='none'){
        navul.style.display = 'none';
        console.log("Menu toggled");
    }
    else{
        navul.style.display = 'block';
        console.log("Menu not toggled")
    }
}

menu.addEventListener('click',toggleMenu);

 // VIEW RESUME

 function viewResume(){
    let resumeWindow = window.open('resume.pdf', '_blank', 'width=1920vw, height = 820vh');
    resumeWindow.focus();
 }
