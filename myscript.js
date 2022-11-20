document.getElementById("close").style.display = "none";
//document.getElementById("menu").addEventListener("click", ()=>{
   // document.querySelector(".sidebar").classList.toggle('.sidebarGo');
//})
function togSidebar() 
{
     document.getElementById("sidebar").classList.toggle("sidebarGo");
          if(document.getElementById("sidebar").classList.contains("sidebarGo"))
          {
            document.getElementById("menu").style.display = 'inline';
            document.getElementById("close").style.display = "none";
          }
         else
          {
           document.getElementById("menu").style.display = 'none';
           setTimeout(() => {
            document.getElementById("close").style.display = "inline";
           }, 300);
          }
}







