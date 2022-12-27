var screen = document.getElementsByClassName('screen')[0];
// var screenValue = document.getElementById('screen').value;
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var clear = document.getElementById('clear');
var equal = document.getElementById('equal');

one.addEventListener('click',
    function () { document.getElementById('screen').value += 1; });
two.addEventListener('click',
    function () { document.getElementById('screen').value += 2; });
three.addEventListener('click',
    function () { document.getElementById('screen').value += 3; });
four.addEventListener('click',
    function () { document.getElementById('screen').value += 4; });
five.addEventListener('click',
    function () { document.getElementById('screen').value += 5; });
six.addEventListener('click',
    function () { document.getElementById('screen').value += 6; });
seven.addEventListener('click',
    function () { document.getElementById('screen').value += 7; });
eight.addEventListener('click',
    function () { document.getElementById('screen').value += 8; });
nine.addEventListener('click',
    function () { document.getElementById('screen').value += 9; });
zero.addEventListener('click',
    function () { document.getElementById('screen').value += 0; });
multiply.addEventListener('click',
    function () { document.getElementById('screen').value += '*'; });
divide.addEventListener('click',
    function () { document.getElementById('screen').value += '/'; });
plus.addEventListener('click',
    function () { document.getElementById('screen').value += '+'; });
minus.addEventListener('click',
    function () { document.getElementById('screen').value += '-'; });
clear.addEventListener('click',
    function () { document.getElementById('screen').value = null; });

equal.addEventListener('click',
    function()
    {
        screen.value = eval(screen.value);
    }
);

screen.addEventListener('input',
    function () {
        var inputString = screen.value;
        if(42 > inputString.charCodeAt(inputString.length - 1) || 57 < inputString.charCodeAt(inputString.length - 1))
	    {
            console.log('ho gaya');
            newText = inputString.replace(inputString.slice(-1),'');
            screen.value = newText;
        }
});
