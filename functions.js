function showMenu() {
 document.getElementById("menu").style.display='block';
}
function hideMenu() {
 document.getElementById("menu").style.display='none';
}
var bg_colors = ['coral', 'blue', 'yellow'];
var current = 0;
setInterval(function(){
    document.querySelector('body').style.background = bg_colors[current];
    current++;
    if (current == bg_colors.length) current = 0;
}, 5000);
localStorage.setItem("likes", likes);
function addLike(){
     var likes = localStorage.getItem("likes");
     likes++;
     localStorage.setItem("likes", likes);
     document.getElementById("like_count").innerHTML = likes;
   
}
