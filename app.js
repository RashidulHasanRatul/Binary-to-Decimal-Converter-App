
// Select Input Tag

const getvalue = document.querySelector('#number');
const result = document.querySelector('#result');
const submit = document.querySelector('#submit');
let resultvalue = document.getElementById('result2');


function binary(e){
    e.preventDefault();

    if(getvalue.value==="" || getvalue.value<0){
    
        alert('Please Enter a Number');
       
    } else {
        
        resultvalue.style.visibility = 'visible';
    
    }

    // Converting

let binaryNumber = Number(getvalue.value).toString(2);

resultvalue.innerText = binaryNumber;

}



submit.addEventListener('click',binary);