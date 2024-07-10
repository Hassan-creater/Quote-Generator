let btn = document.querySelector("#btn");

let quotes = ["\"The only way to do great work is to love what you do.\"", "\"The best way to predict your future is to create it.\"", "\"You must do the things you think you cannot do.\"","\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"","\"Don't watch the clock; do what it does. Keep going.\""]


let images = [`<img
          src="at night.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`,` <img
          src="future.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`,`<img
          src="impossible.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`,` <img
          src="bicycle.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`,` <img
          src="clock.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`,`<img
          src="clock.jpeg"
          width="300px"
          height="200px"
          alt="A boy readig at night"
        />`]



console.log(images[0]);

let i=0;
btn.addEventListener("click" , function(){
    document.querySelector("#text").innerHTML = quotes[i];
    document.querySelector(".image").innerHTML = images[i];
    i++;
    if(i>=5)
    {
        i=0;
    }
})

