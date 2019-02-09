var signos = ['<', '>', '&', '"','"', '(', ')', '/', ';'];

function clearText(){
    event.preventDefault();
let data = document.getElementById('text').value;

debugger
var res ='';
var state = false;
     for(let i = 0 ; i < data.length; i++){
        for(let j = 0 ; j < signos.length; j++){    
         if(data[i] === signos[j]){
            state = true;
             break;
          }else{
            state = false;
         }
        }
        !state ? res = res + data[i] : null;
     }
     let script = document.getElementById('script').innerHTML=res;
}

// <script>alert("Hack");</script>