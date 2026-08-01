let obj={
    name:"rudra",
    age:22,
    add:"cuttack",
    country:"india"
}

for (const key in obj) {
    
    console.log(key+":-"+obj[key]);
    
    
}


for (const e in obj) {
    console.log(obj);
    
}

obj.forEach(element => {
    console.log(element);
    
});