//different boxes to hold outputs
var notif = document.getElementById('notification');
var interval='';//to hold nterval of repetative functions
//handling the inputs using ajax
 function postNow(){
    var ajaxRequest = new XMLHttpRequest;
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState==4){
            notif.style.color ="green";
            notif.style.display = "block";
            notif.style.opacity = "100%";
            notif.innerHTML = ajaxRequest.responseText;
            //have to be removed after 10 seconds
            interval = setInterval(removeNotif,5000);
        }
    }
    var title = document.getElementById('titlein').value;
    var msg = document.getElementById('msg').value;
    var url = "http://localhost/by%20astawus/eastern/backend/post.php"; //point to post.php where the post is done
    url+="?title="+title+"&msg="+msg;
    ajaxRequest.open("GET",url,true);
    ajaxRequest.send();
 }
//removing notifications after they display for 10s
function removeNotif(){
        clearInterval(interval);
        notif.style.opacity = 0;
} 
//loading posts while the page opens
loadfunc();//to load everytime from the server
  function loadfunc(){
    var ajaxRequest = new XMLHttpRequest;
    ajaxRequest.onreadystatechange = function(){
      if(ajaxRequest.readyState ==4){
        var resultHolder = document.getElementsByClassName('posts')[0];
        resultHolder.innerHTML += ajaxRequest.response;
      }
    }
      var request ="http://localhost/by%20astawus/eastern/backend/load.php";

      ajaxRequest.open("POST",request,true);
      ajaxRequest.send();
  }

