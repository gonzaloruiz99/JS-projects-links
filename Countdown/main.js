


const deadline = document.querySelector('.countdown');
const items = document.querySelectorAll('.box h3');


/*
1. Crear variables de tiempo futuro con Input
2. Crear variables de tiempo actual
3. Restar ambas variables y sacar los restos de cada variable + redondear resultado
4. ForEach en cada h3
5. If si se llega a 0.

*/


const closeBtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const messagge = document.querySelector(".title h1");

modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal");
})



const submitBtn = document.querySelector(".submit-btn");
const getDate = document.querySelector(".get-date");

/*
FALTA HACER:
. darkmode
. Guardar en localStorage
. Responsive
. Opcion de quitar countdown o llegar a 0
. Msg al llegar a 0

*/

/*
countdown logic:
. Variables del horario actual
. Variables del horario dado x el usuario
. Calculo de tiempo restante
. Mostrar tiempo restante, y resarlo por segundo.
*/
//const futureTime = 0;





function getuserDate(){ //Toma la data recibida por el "datetime-local" y lo transforma en valor utilizable.
    const userDate = document.querySelector(".get-date").value;

    const year = userDate.slice(0, 4);
     const month = userDate.slice(5, 7) ;
     const day =  userDate.slice(8, 10);
     const hour = userDate.slice(11, 13);
     const minute = userDate.slice(14, 16);


    const futureDate = new Date(year, month, day, hour, minute); // valor utilizable
    const futureTime = futureDate.getTime();
    getRemaindingTime(futureTime);
    
}



 function getRemaindingTime(futureT) { //Toma un tiempo futuro por parametro, y lo resta con el tiempo actual.
    const futureTime = futureT;
    const today = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 60 * 1000 * 60 * 24;
    const oneHour = 60 * 1000 * 60;
    const oneMinute = 60 * 1000;
    
    //get final values
    let days = t / oneDay;
    days = Math.floor(days) -30;
    let hours = Math.floor((t % oneDay) /oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 0){
          return item = '00';
        }
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    })

    if (t < 0) {
        clearInterval(countdown);
        messagge.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }

    let countdown = setInterval(getuserDate,1000);
  }
  












/*
 let tempDate = new Date();
 let tempYear = tempDate.getFullYear();
 let tempMonth = tempDate.getMonth();
 let tempDay = tempDate.getDate();
//console.log(tempDate, tempYear, tempMonth, tempDay);

 // months are ZERO index based;
 const futureDate = new Date(tempYear, tempMonth, tempDay + 01, 10, 20, 10);

 // let futureDate = new Date(2020, 3, 24, 11, 30, 0);

 
 const year = futureDate.getFullYear();
 const hours = futureDate.getHours();
 const minutes = futureDate.getMinutes();
 const month = futureDate.getMonth();


 const futureTime = futureDate.getTime();
 function getRemaindingTime() {
   const today = new Date().getTime();

   const t = futureTime - today;
   // 1s = 1000ms
   // 1m = 60s
   // 1hr = 60m
   // 1d = 24hr
   // values in miliseconds
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;
   // calculate all values
   let days = t / oneDay;
   days = Math.floor(days);
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinute);
   let seconds = Math.floor((t % oneMinute) / 1000);

   // set values array
   const values = [days, hours, minutes, seconds];
   function format(item) {
     if (item < 10) {
       return (item = `0${item}`);
     }
     return item;
   }

   items.forEach(function (item, index) {
     item.innerHTML = format(values[index]);
   });

   if (t < 0) {
     clearInterval(countdown);
     deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
 }
// countdown;
 let countdown = setInterval(getRemaindingTime, 1000);
 //set initial values
 getRemaindingTime();
 */