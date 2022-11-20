// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
    const date = document.getElementById('date');
    date.innerHTML = new Date().getFullYear();

// ********** close links ************
    const navToggle = document.querySelector(".nav-toggle");
    const linksContainer = document.querySelector(".links-container");
    const ulLinks = document.querySelector(".links");
    
    //Statically Toggling NavBar
    // navToggle.addEventListener('click',function(){
    //     linksContainer.classList.toggle('show-links'); //this can also be dynamic if height in show-links is "auto" instead of any value
    // })

    //Dynamically Adding Elements to Nav Bar - Let's go
    navToggle.addEventListener('click',function() {
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const linksHeight = ulLinks.getBoundingClientRect().height;
      
        if(linksContainerHeight==0){
            linksContainer.style.height = `${linksHeight}px`;
        }
        else{
            linksContainer.style.height = 0;
        }
    })

// ********** fixed navbar ************
      const navBar = document.querySelector('#nav');
      const topLinkBtn = document.querySelector(".top-link");

      window.addEventListener('scroll',function(){
        let scrollHeight =window.pageYOffset;
        const navBarHeight = navBar.getBoundingClientRect().height;

        if(scrollHeight>navBarHeight){
            navBar.classList.add('fixed-nav');
        }
        else{
            navBar.classList.remove('fixed-nav');
        }

        if(scrollHeight>375){
            topLinkBtn.classList.add('show-link');
        }
        else{
            topLinkBtn.classList.remove('show-link');
        }
      })

// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');
console.log(scrollLinks);

scrollLinks.forEach(function(scrollLink){
scrollLink.addEventListener('click',function(e){
       //prevent default behaviour
      e.preventDefault();
      //navigate to specific spot
      const secId =e.currentTarget.getAttribute('href').slice(1);
      const secTag = document.getElementById(secId);
      //calculating heights to navigate at exact position
      const linksContainerHeight = linksContainer.getBoundingClientRect().height;
      const navBarHeight = navBar.getBoundingClientRect().height;
      const fixedNav = navBar.classList.contains('fixedNav');
      let position = secTag.offsetTop - navBarHeight;
      if(!fixedNav){
       position = position -navBarHeight;
      }
      if(navBarHeight> 82){
        position+=linksContainerHeight;
      }
      
    window.scrollTo({
        left: 0,
        top: position,
      })
      //toggle navbar
    linksContainer.style.height = 0;
})
})
