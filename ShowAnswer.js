const buttons = document.querySelectorAll('.grid__wrapper--button');
const answerTexts = document.querySelectorAll('.grid__wrapper--answer--final');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    answerTexts[index].classList.toggle('visible');
  });
});

// for
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', () =>{
//     console.log('Clicked the button ' + i);
//     answerTexts[i].classList.toggle('hidden');
//   })
// }
