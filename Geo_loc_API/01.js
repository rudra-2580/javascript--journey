let btn=document.getElementById('button');



  function success(position){
    //console.log(position); 
    let displayBox=document.querySelector('div');
    displayBox.innerText=`lati :${position.coords.latitude} \n long : ${position.coords.longitude}`;
   
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