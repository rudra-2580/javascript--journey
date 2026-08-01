let arr=[1,2,3,4,5,6,7,8,9,10];

let fil_arr=arr.filter((e,i,a)=>{
    console.log(e);
    return i%2==0;
    
})

console.log(fil_arr,typeof fil_arr);// object

console.log(Array.isArray(arr));// true




