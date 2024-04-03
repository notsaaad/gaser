var lastScrollTop = 0;
let nav = document.getElementsByTagName("nav");
let Home = document.getElementById("home");


function ScrollTogalheader(){
    var st = document.documentElement.scrollTop;
    if (st < lastScrollTop){
      ShowHeader();
    }else{
      HideHeader();
    }
    HeaderBg(st);
    lastScrollTop = st <= 0 ? 0 : st; 
}









// =========================== Start Header functions ============================
function HeaderBg(CurentHight){
  HomeHight = Home.scrollHeight;
  
  if (CurentHight > HomeHight){
    nav[0].classList.add("header-bg");
  }else{
    nav[0].classList.remove("header-bg");
  }
  
}

function ShowHeader(){
  nav[0].classList.remove("navbar-hide-on-scroll");
}
function HideHeader(){
  nav[0].classList.add("navbar-hide-on-scroll");
}
// =========================== End Header functions ============================