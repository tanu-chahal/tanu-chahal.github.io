//BLOG PAGE

//Adding Blogs Dynamically
const blogObj = [
    {
     idNum: 1,
     title: 'trouble making portfolio? [Sample]',
     content: "This is my first blog. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo voluptatem necessitatibus soluta, temporibus quasi odio. Tenetur fugaautem sapiente dicta, neque illum ad quidem excepturi quibusdam. Laboriosam impedit architecto quaerat eius harum, nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptatem architecto ipsa facilis consequuntur dolor. Labore tempore suscipit at numquam laborum hic recusandae nemo maiores repellendus nulla necessitatibus, amet, dolore consequuntur facilis voluptatibus consectetur quod neque cum quaerat illum fuga architecto? Porro odio fugiat nobis. Nemo quasi iusto officiis optio maxime nostrum cumque vitae perspiciatis amet dolor?"
    },
    {
     idNum: 2,
     title: 'Resources to learn web development for free. [Sample]',
     content: "This is my second blog. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo voluptatem necessitatibus soluta, temporibus quasi odio. Tenetur fuga autem sapiente dicta, neque illum ad quidem excepturi quibusdam. Laboriosam impedit architecto quaerat eius harum, nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptatem architecto ipsa facilis consequuntur dolor. Labore tempore suscipit at numquam laborum hic recusandae nemo maiores repellendus nulla necessitatibus, amet, dolore consequuntur facilis voluptatibus consectetur quod neque cum quaerat illum fuga architecto? Porro odio fugiat nobis. Nemo quasi iusto officiis optio maxime nostrum cumque vitae perspiciatis amet dolor?"
    },
    {
     idNum: 3,
     title: 'Don\'t make these mistakes while learning to code. [Sample]',
     content: "This is my third blog. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo voluptatem necessitatibus soluta, temporibus quasi odio. Tenetur fuga autem sapiente dicta, neque illum ad quidem excepturi quibusdam. Laboriosam impedit architecto quaerat eius harum, nemo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptatem architecto ipsa facilis consequuntur dolor. Labore tempore suscipit at numquam laborum hic recusandae nemo maiores repellendus nulla necessitatibus, amet, dolore consequuntur facilis voluptatibus consectetur quod neque cum quaerat illum fuga architecto? Porro odio fugiat nobis. Nemo quasi iusto officiis optio maxime nostrum cumque vitae perspiciatis amet dolor?"
    },

]
const blogContainer = document.querySelector('.blogItemsContainer');
window.addEventListener('DOMContentLoaded',function(){
makeBlogs(blogObj); //to make & display blogs in blogItemsContainer

//Right Method to toggle blog length
const blogItem= document.querySelectorAll('.blogItem');

blogItem.forEach(function(blogItemNo){                      //for toggling lengths of blogItems
const readBtn = blogItemNo.querySelector('.readBtn');

readBtn.addEventListener('click',function()
{  const blogPara = blogItemNo.querySelector('.blogPara');
 //  console.log('I am blogPara'+blogPara);

   if(blogPara.classList.contains('blogShort'))
   {
      blogPara.classList.remove('blogShort');
      readBtn.textContent= 'Read More';
   }
   else
   {
      blogPara.classList.add('blogShort');
      readBtn.textContent= 'Read Less';
   }
blogItem.forEach(function(item)
{
  // console.log('I am item'+item);
  if(item !== blogItemNo){
     const otherBlogPara = item.querySelector('.blogPara');
     const otherReadBtn = item.querySelector('.readBtn');
     otherBlogPara.classList.remove('blogShort');
     otherReadBtn.textContent= 'Read More';
  }
});
})

});

})

function makeBlogs(blogObj){
let newBlog = blogObj.map(function(blog){
return `
<div class="blogItem">
<h2>${blog.title}</h2>
<p  class="blogPara">${blog.content}</p>
<button class="btn btn-sm readBtn" >Read More</button></div>
`
});

newBlog = newBlog.join();
blogContainer.innerHTML= newBlog;
}

//Function for toggling blog lengths (Not very good)
// function togBlogLength(i){
//   document.querySelector(".blogShort"+i).classList.toggle("blogLong"+i);
//           if(document.querySelector(".blogShort"+i).classList.contains("blogLong"+i))
//           {
//             document.querySelector(".blogShort"+i).style.height = 'auto';
//             document.querySelector('.readBtn'+i).textContent = 'Read Less';
//           }
//          else
//           { document.querySelector(".blogShort"+i).style.height = '5vh';
//           document.querySelector('.readBtn'+i).textContent = 'Read More';
//          }
// }