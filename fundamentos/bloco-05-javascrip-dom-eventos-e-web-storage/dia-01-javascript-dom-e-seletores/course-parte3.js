document.getElementsByTagName('h1')[0].style.backgroundColor = '#00b068';
document.getElementsByTagName('h1')[0].style.color = 'white';
document.getElementsByTagName('h1')[0].style.textAlign ='center';

document.getElementsByTagName('h3')[0].style.color = 'white';
document.getElementsByTagName('h3')[1].style.color = 'white';
document.getElementsByTagName('h3')[0].style.backgroundColor = '#a500f4';
document.getElementsByTagName('h3')[1].style.backgroundColor = '#a500f4';

let ui = document.getElementsByClassName('emergency-tasks')
for(let i = 0; i<ui.length; i+=1){
    ui[i].style.backgroundColor = '#ffa084';
    
}

document.getElementsByTagName('h3')[2].style.backgroundColor = 'black';
document.getElementsByTagName('h3')[3].style.backgroundColor = 'black';
document.getElementsByTagName('h3')[2].style.color = 'white';
document.getElementsByTagName('h3')[3].style.color = 'white';
let nui = document.getElementsByClassName('no-emergency-tasks')
for(let i = 0; i<nui.length; i+=1){
    nui[i].style.backgroundColor = '#f9dc5e';
}

document.getElementById('footer-container').style.backgroundColor = '#013533';
document.getElementById('container').style.backgroundColor = '#f3f3f3'


