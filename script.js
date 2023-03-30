var result = document.getElementById('result');

function calculation(value){
    result.value = result.value + value;
}

function clearResult(){
    result.value = '';
}

function calculateResult(){
    try {
        result.value = eval(result.value);
    }
    catch (error){
        result.value = 'Error'
    }
}

// Responsive
var result = document.getElementById('result1');

function calculation(value){
    result.value = result.value + value;
}

function clearResult(){
    result.value = '';
}

function calculateResult(){
    try {
        result.value = eval(result.value);
    }
    catch (error){
        result.value = 'Error'
    }
}