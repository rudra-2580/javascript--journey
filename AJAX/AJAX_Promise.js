function getdata(){
  let p1=new Promise(function(resolve,reject){
  let xhr=new XMLHttpRequest();
  xhr.open("GET",'https://dummyjson.com/products',true);
  xhr.send();
  xhr.addEventListener("load",function(){
if(xhr.responseText) resolve(xhr.responseText);
else reject("something went to wrong");
  });
  });

  p1.then((data)=>{
    displayData(JSON.parse(data).products);
    
  });
  p1.catch((err)=>{
    console.log(err); 
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
