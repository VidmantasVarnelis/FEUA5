// greenBtn.addEventListener('change', function() {

// })
// redBtn.addEventListener('change', function() {

// })
// blueBtn.addEventListener('change', function() {

// })
const output = document.getElementById('output');
const outputHeading = document.querySelector('h1');
const colorRadioElements = document.querySelectorAll(
  'input[name="radio-color"]'
);

const positionYRadioElements = document.querySelectorAll(
  'input[name="radio-positions-y"]'
);
const positionXRadioElements = document.querySelectorAll(
  'input[name="radio-positions-x"]'
);

for (let i = 0; i < colorRadioElements.length; i++) {
  colorRadioElements[i].addEventListener('change', function (e) {
    outputHeading.style.color = e.target.value;
  });
}

// for(let positionElement of positionYRadioElements){

// }

for (let i = 0; i < positionYRadioElements.length; i++) {
  positionYRadioElements[i].addEventListener('change', function (e) {
    // outputHeading.style.cssText = `${e.target.value}: 0px`;
    // if(e.target.value === 'top' && outputHeading.style.bottom){
    // }
    // outputHeading.style = '';
    // if(counter > arr.length){
    // 	counter = 0
    // }
    // outputHeading.style[e.target.value] = '0px';
    // console.log(outputHeading.style[e.target.value]);
    if (
      outputHeading.classList.contains('position-top') &&
      e.target.value === 'bottom'
    ) {
      outputHeading.classList.remove('position-top');
    }
    if (
      outputHeading.classList.contains('position-bottom') &&
      e.target.value === 'top'
    ) {
      outputHeading.classList.remove('position-bottom');
    }
    outputHeading.classList.add(`position-${e.target.value}`);
  });
}

for (let i = 0; i < positionXRadioElements.length; i++) {
  positionXRadioElements[i].addEventListener('change', function (e) {
    if (
      outputHeading.classList.contains('position-left') &&
      e.target.value === 'right'
    ) {
      outputHeading.classList.remove('position-left');
    }
    if (
      outputHeading.classList.contains('position-right') &&
      e.target.value === 'left'
    ) {
      outputHeading.classList.remove('position-left');
    }
    outputHeading.classList.add(`position-${e.target.value}`);
  });
}

// [16px,24px,32px,48px,64px]
