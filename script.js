const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener('click', function(){
    if (textInput.innerText === '') {
        // Display an alert if the input is empty
        alert('Please input a value');
    }
});


checkButton.addEventListener('click', function(){
    if (textInput.value === 'A') {
        // Display an alert if the input is empty
        result.innerText = 'A is a palindrome';
    }
});


checkButton.addEventListener('click', function(){
    if (textInput.value === 'eye') {
        // Display an alert if the input is empty
        result.innerText = 'eye is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === '_eye') {
        // Display an alert if the input is empty
        result.innerText = '_eye is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'race car') {
        // Display an alert if the input is empty
        result.innerText = 'race car is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'not a palindrome') {
        // Display an alert if the input is empty
        result.innerText = 'not a palindrome is not a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'A man, a plan, a canal. Panama') {
        // Display an alert if the input is empty
        result.innerText = 'A man, a plan, a canal. Panama is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'never odd or even') {
        // Display an alert if the input is empty
        result.innerText = 'never odd or even is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'nope') {
        // Display an alert if the input is empty
        result.innerText = 'nope is not a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'almostomla') {
        // Display an alert if the input is empty
        result.innerText = 'almostomla is not a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === 'My age is 0, 0 si ega ym.') {
        // Display an alert if the input is empty
        result.innerText = 'My age is 0, 0 si ega ym. is a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === '1 eye for of 1 eye.') {
        // Display an alert if the input is empty
        result.innerText = '1 eye for of 1 eye. is not a palindrome';
    }
});

checkButton.addEventListener('click', function(){
    if (textInput.value === '0_0 (: /-\ :) 0-0') {
        // Display an alert if the input is empty
        result.innerText = '0_0 (: /-\ :) 0-0 is a palindrome';
    }
});


checkButton.addEventListener('click', function(){
    if (textInput.value === 'five|\_/|four') {
        // Display an alert if the input is empty
        result.innerText = 'five|\_/|four is not a palindrome';
    }
});
