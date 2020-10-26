window.addEventListener('load', function OnWindowLoaded() {
    
    const signs = [
        'C', 'CE', '.', '+',
        '7', '8', '9', '-',
        '4', '5', '6', '*',
        '1', '2', '3', '/',
        '0', '=', 
    ];
 
    
    const calc = document.getElementById('calculator');
 
    const input = document.getElementById('inputVal');
 
    
    signs.forEach(function (sign) {
        const signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
 
    
    document.querySelectorAll('#calculator-wrap .btn').forEach(function (button) {
        
        button.addEventListener('click', onButtonClick);
    });

    
    function onButtonClick(e) {
        
        if (e.target.innerHTML === 'C') {
            
            input.innerHTML = '0';
        } else if (e.target.innerHTML === "CE"){
          input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
        } else if (e.target.innerHTML === '%') {
            
            input.innerHTML = (input.innerHTML * input.innerHTML) / 100;
        } else if (e.target.innerHTML === '=') {
            
            input.innerHTML = eval(input.innerHTML);
        } else if (input.innerHTML === '0') {
            
            input.innerHTML = e.target.innerHTML;
        } else {
            
            input.innerHTML += e.target.innerHTML;
        }
    }
});
