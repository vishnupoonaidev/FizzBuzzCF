function getValues() 
{
    //1. get user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    // check numbers are integers
    if (Number.isInteger(fizzValue)  && Number.isInteger(buzzValue)) {
        
     //we call fizzBuzz
      let fbData = fizzBuzzC(fizzValue,buzzValue);

    //we call displaydata
     displayData(fbData);

    }else{
        alert("Please enter only numbers into the Fizz and Buzz input boxes.")
    }



}

//work on determining the fizzbuzz of numbers
function fizzBuzz(fizzValue,buzzValue){

let returnArray =[];

for (let i = 1; i <= 100; i++){
  
if(i % fizzValue == 0 && i % buzzValue == 0){
    returnArray.push('FizzBuzz');
}else if(i % fizzValue == 0){
    returnArray.push('Fizz');
}else if(i % buzzValue == 0){
    returnArray.push('Buzz');
}else{
    returnArray.push(i);
}

}
 return returnArray;
}


function fizzBuzzA(fizzValue,buzzValue){
  let returnArray = [];
 let Fizz=  false;
 let Buzz = false;

for (let i = 0; i < 100; i++) {
    
    Fizz = i % fizzValue == 0;
    Buzz = i % buzzValue == 0;

    switch(true){
        case Fizz && Buzz:{
            returnArray.push('FizzBuzz');
            break;

        }
        case Fizz:{
            returnArray.push('Fizz');
            break;
        }
        case Buzz:{
            returnArray.push('Buzz');
            break;
        }
        default:{
            returnArray.push(i);
            break;
        }
    }
}



  return returnArray;
}



function fizzBuzzC(fizzValue,buzzValue){

    let returnArray = [];

    for (let i = 1; i <= 100; i++){
       let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);
       returnArray.push(value);
    }


    return returnArray;

}



function displayData(fbData){

    //get table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");
 
    //clear the table 
    tableBody.innerHTML = "";


    for (let index = 0; index < fbData.length; index+=5) {
       
        let tableRow = document.importNode(templateRow.content,true);

        //grab use the tds put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[index]);
        rowCols[0].textContent = fbData[index];

        rowCols[1].classList.add(fbData[index +1]);
        rowCols[1].textContent = fbData[index+1];

        rowCols[2].classList.add(fbData[index+2]);
        rowCols[2].textContent = fbData[index+2];

        rowCols[3].classList.add(fbData[index+3]);
        rowCols[3].textContent = fbData[index+3];

        rowCols[4].classList.add(fbData[index+4]);
        rowCols[4].textContent = fbData[index+4];

        tableBody.appendChild(tableRow);
    }

}