let arr=[1,2,3,4,5,6,7,8,9,10];
let map_arr=arr.map((e,i,a)=>{
    console.log(i+":-"+e+"----"+a);
    return 10*e;
    
})

console.log(map_arr);


