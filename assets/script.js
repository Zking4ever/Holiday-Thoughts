//to make the cross moveable
var cont = document.getElementsByClassName("container")[0];
cont.onmousemove = function(event){
   cont.style.transform = `rotateX(${event.clientX}deg) rotateY(${event.clientY}deg)`;
 }
 var left = document.getElementsByClassName("leftpart")[0];
 left.onmousemove = function(){
   cont.style.transform = "rotateX(-90deg) rotateZ(45deg)";
 }

 //to check whether its mobile or not

 var main = document.getElementsByTagName('main')[0];
 var mainIsFlex = window.getComputedStyle(main).display =='flex';
 //if main is block it is mobile and i just want the post to be included in the leftpart right after the inputes
 if(!mainIsFlex){
    var posts = document.getElementsByClassName('posts')[0];
    var oldParent = document.getElementsByTagName("body")[0];
    var newParent = document.getElementsByClassName('leftpart')[0];
    newParent.appendChild(posts);
    oldParent.removeChild(posts);
    
 }