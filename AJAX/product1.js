function getdata(){
    //Asynchronous javascript and XML (AJAX)//

    // st1-create XMLHttpRequest object
    let xhr= new XMLHttpRequest();

    //st2- create request
    xhr.open("GET",'https://dummyjson.com/products',true);

    //st3-send The request

    xhr.send();

    //st4-Once  the request has been sent,it may take some time to load the data 
    xhr.addEventListener('progress',function(){
        let loaderEle=document.getElementById('loader-ele');
        loaderEle.innerHTML="Data is loading....";

    });

    //st5-Once data is load we can fetch the data 
    xhr.addEventListener('load',function(){
        let fetchData=JSON.parse(xhr.responseText);
 displayData(fetchData.products);
  console.log(fetchData.products);
  
    });
    


}

getdata();

function displayData(items){
    if(items.length==0)return;
    let eachItem="";
    for (let item of items) {
        eachItem+=` <div class="row">
                <div class="col-4 "><img src="${item.images[0]}" alt=""></div>
                <div class="col-8 " >
                    <h3 class="title">${item.title}</h5>
                    <h6 class="desc">${item.description}</h4> 
                    <h2>⭐${item.rating}</h2>   
                    <h3>&dollar;${item.price}</h3>
                    <p>${item.shippingInformation}</p>
                    <button class="btn btn-warning">Buy Now</button>
                </div>
            </div>`;
    }
     document.getElementById('loader-ele').innerHTML=eachItem;
}
