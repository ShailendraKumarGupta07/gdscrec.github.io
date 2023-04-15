function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("menu").style.position="fixed"
   
   var x =document.getElementById("hide")
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.backgroundColor = "#eae6e0"
    x.style.height="100vh"
    x.style.width="40vh"
    x.style.marginTop="0"
    x.style.marginLeft="0"
    x.style.position="fixed"
    x.style.paddingBottom="10px"
    x.style.bottom="0"
    x.style.left="0"
  }
}



