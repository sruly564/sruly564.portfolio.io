let h = document.getElementById('head');
let hr = document.getElementById('f');
let main = document.getElementById('main');
let h2 = document.getElementById('h2');
let img = document.getElementsByTagName('img');
h.onmouseover = function(){
  hr.style.transition =  'width, 1s';
  hr.style.width = '100%';
  h.style.transition = 'font-size, 1s';
  h.style.fontSize = '50px';
  h.style.transition = 'color, 1s';
  h.style.color = 'green';
  main.style.transition = 'left, 1s';
  main.style.left = '0px'; 
  main.style.transition = 'opacity, 3s, 1s';
  main.style.opacity = '1';

}
