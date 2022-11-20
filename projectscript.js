const projects =[
    {   
        id: 1,
        img: "./Images/color_flipper.png",
        title: "Random Color Flipper",
        description: "It a two page website which changes its background color to a random color on clicking a button.",
        technology: "javascript",
        url: "Projects/color_flipper/index.html",
    },
    {   
        id: 2,
        title: "Menu Page",
        img: "./Images/onlinemenu.png",
        description: "This is a dynamic menu page of a restaurant which filter items on clicking buttons.",
        technology: "javascript",
        url: "Projects/menu_page/index.html",
    },
    {   
        id: 3,
        title: "FAQ Page",
        img: "./Images/faq.png",
        description: "A page that contains FAQs and displays and hide answers on clicking buttons.",
        technology: "javascript",
        url: "Projects/faq_page/index.html",
    },
    {   
        id: 4,
        title: "Reviews Page",
        img: "./Images/review.png",
        description: "A dynamic page which shows reviews and contains buttons to slide reviews.",
        technology: "javascript",
        url: "Projects/reviews_page/index.html",
    },
    {   
        id: 5,
        title: "Tour Guide Company",
        img: "./Images/tour_guide.png",
        description: "It's a single website of a hypothetical tour guide company.",
        technology: "css",
        url: "Projects/Tour_Guide/index.html",
    },

]

const projectItemContainer = document.querySelector('.projectItemsContainer');
const filterBtnContainer = document.querySelector(".filterBtns");
window.addEventListener('DOMContentLoaded', function(){
    displayProjects(projects);

    let technologies = projects.reduce(function(values,item){
        if(!values.includes(item.technology)){
            values.push(item.technology);
        }
        return values;
    },['all']);

    makeButtons(technologies);

    const filterBtn = document.querySelectorAll('.filterBtn');

    filterTheButtons(filterBtn);
})

//To make & display project items
function displayProjects(projectArr){
    console.log(projectArr);
    let jointProjects = projectArr.map(function(item){
        console.log("Item is"+item);
        return `
        <div class="projectItem">
        <a href=${item.url} target="_blank" ><img src=${item.img} alt="${item.title}" class="projectImg"></a>
        <div class="projectData">
                         <div class="itemHeader"><h4>${item.title}</h4>
                         </div>
                         <p class="projectDesc">${item.description}</p>
        </div>

      </div>
        `
    });
    jointProjects= jointProjects.join("");
    projectItemContainer.innerHTML =jointProjects;
    console.log(projectItemContainer);

}

//To make and display buttons for Filtering
function makeButtons(technologies){
    const buttons = technologies.map(function(value){
       return `
       <button class="filterBtn btn-sm btn" data-technology = ${value}>${value}</button>`
    }).join('');

    filterBtnContainer.innerHTML= buttons;
}

//To filter projects on the basis of buttons
function filterTheButtons(Btn){
    Btn.forEach(function(btn){

            btn.addEventListener('click',function(e){

                    const currtechnology= e.currentTarget.dataset.technology

                         const projectsTechnology = projects.filter(function(element)
                         {
                             if(element.technology===currtechnology){
                                return element;
                             }        
                         })

                         if(currtechnology=='all'){
                           displayProjects(projects);
                         }
                         else{
                         displayProjects(projectsTechnology);
                         }
            })
    })
}