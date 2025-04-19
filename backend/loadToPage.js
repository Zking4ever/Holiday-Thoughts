var postHolder = document.getElementsByClassName('posts')[0];
load();
function load(){
    var ajaxRequest = new XMLHttpRequest;
    ajaxRequest.onload = function(){
        if(ajaxRequest.readyState==4){
           var response = ajaxRequest.response;
            response = response.split('postEnd');
            for(var i=0;i<response.length -1 ;i++){
                //prepare the postbox
                var item = document.createElement('div');
                item.className = "item";
                //divide the title and the message
                var contents = response[i].split("Title_message");
                var title = document.createElement('h3');
                title.className = "title";
                title.innerHTML = contents[0];
                var message = document.createElement('h4');
                message.className ="msg";
                message.innerHTML = contents[1];
                message.style.overflowWrap = "break-word";
                item.appendChild(title); item.appendChild(message);
                postHolder.appendChild(item);
            }
        }
    }
    
    var url = "http://localhost/by%20astawus/trying%20by%20file%20method/backend/read.php";
    ajaxRequest.open('GET',url,true);
    ajaxRequest.send();
}

//posting and giving notification
var notif = document.getElementById('notification');
var postBtn = document.getElementById('submit');

//to remove notif after being displayed
var intervalID;

postBtn.onclick = function post(){
    var ajaxRequest = new XMLHttpRequest;
    ajaxRequest.onload = function(){
            if(ajaxRequest.readyState==4){
                notif.innerHTML = 'posted';
                notif.style.color ="green";
                notif.style.display = "block";
                notif.style.animation = "notif 5s ease";
                intervalID = setInterval(removeInter,5000);
            }
    }
    var path = "http://localhost/by%20astawus/trying%20by%20file%20method/backend/write.php";
    var title = document.getElementById('titlein').value;
    var msg = document.getElementById('msg').value;
    //checking inputs
    if(msg == "🎉Happy Easter! Lets share feelings, coincidences, thoughts and anything.."){
        notif.innerHTML = 'Please insert your contents first..';
        notif.style.color = "red";
        notif.style.display = "block";
        notif.style.animation = "notif 5s ease";
        intervalID = setInterval(removeInter,5000);
    }
    else{
        var request = path +'?title='+title +"&msg="+msg;
        ajaxRequest.open('GET',request,true);
        ajaxRequest.send();
    }
}

function removeInter(){
    notif.style.display = "none";
    notif.style.animation = "";
    clearInterval(intervalID);
}