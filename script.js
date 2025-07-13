const generateButton = document.getElementById('generateButton')
const joke = document.getElementById('joke');

function queryJoke (){
    const xhr = new XMLHttpRequest();
    // const url = 'https://api.chucknorris.io/jokes/random';

   xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);


    xhr.onreadystatechange = function () {

        if(this.readyState ===4){
                if(this.status === 200){
                    const data = JSON.parse(this.responseText);

                   joke.innerText=data.value;
                }else{
                    console.log('Something when wrong (not funny)!!!');
                }
        }
        
        }
         xhr.send();  
}









generateButton.addEventListener('click', queryJoke);
document.addEventListener('DOMContentLoaded', queryJoke);