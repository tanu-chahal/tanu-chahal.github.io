//using selectors inside the element
// traversing the dom

//My not very efficient method
// const questionBtn = document.querySelectorAll('.question-btn');
// const questionText = document.querySelectorAll('.question-text');
// const plusIcon = document.querySelectorAll('.plus-icon');
// const minusIcon = document.querySelectorAll('.minus-icon');
// console.log(questionBtn);
// console.log(questionText);
// console.log(plusIcon[0].style.display);

//    function showAnswer(i){
//         if(minusIcon[i].style.display=='none'){
//          minusIcon[i].style.display ='inline';
//          plusIcon[i].style.display ='none';
//          questionText[i].style.display='block';
//         }
//         else{
//         minusIcon[i].style.display ='none';
//          plusIcon[i].style.display ='inline';
//          questionText[i].style.display='none'
//         } 
        
//     }


//Their method very efficient
    //using selectors inside the element
// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

// traversing the dom
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
