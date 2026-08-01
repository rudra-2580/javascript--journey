let btn=document.getElementById('button');

async function getData(lati,long) {
  let resp=  await fetch(`http://api.weatherapi.com/v1/current.json?key=f0c3725a62984abba6a150105262303&q=${lati},${long}&aqi=yes`);
  return await resp.json();
}

 async function success(position){
    //console.log(position); 
   let data= await getData(position.coords.latitude,position.coords.longitude);
   console.log(data);
   let disText=`
   
   
    <h4>${data.location.region},${data.location.country}</h4>
    <p>Temp : ${data.current.temp_c}</p>
    <p>Humidity : ${data.current.humidity}</p>
    <p>Wind Speed : ${data.current.wind_kph}</p>
   
    <span> ${data.current.cloud},${data.current.condition.text}</span>
     <img  src="${data.current.condition.icon}">
   `

   let disBox=document.querySelector('div');
   disBox.innerHTML=disText;
   
}



function failed(){
    console.log("Something Went to wrong, you can not fetch ur location");
    let displayBox=document.querySelector('div');
    displayBox.innerText="Something Went to wrong, you can not fetch ur location";
}

btn.addEventListener('click',async()=>{
  navigator.geolocation.getCurrentPosition(success,failed);
}
    
);