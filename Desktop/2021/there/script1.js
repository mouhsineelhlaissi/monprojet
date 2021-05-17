var menuItem=document.getElementById("menu").getElementsByTagName("li")
var btn=document.getElementById("bt")
var headline=document.getElementById("demo");
var myMenu=document.getElementById("menu")
var counter=1;
menuItem[0].innerHTML = "hello world"
for(i=0;i<3;i++){
    menuItem[i].addEventListener("click",selectItem);
}
function selectItem(){
   headline.innerHTML=this.innerHTML;
   
}
btn.addEventListener("click",newItem);
function newItem(){
    myMenu.innerHTML+="<li> new line" +counter+ "</li>",counter++;
}
