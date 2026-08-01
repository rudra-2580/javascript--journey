let scl1={name:"bbvn",loc:"cuttack"};
let scl2={name:"ssnn",loc:"jajpur"};

function stu(sname,age){
    console.log(`I am ${sname} and my age is ${age}.I am studying in ${this.name} at ${this.loc}.`);
    
}

//stu.call(scl1,"rudra",22);
//stu.apply(scl2,["lopa",22]);
let copyFun=stu.bind(scl1);

console.log(copyFun);
copyFun("rudra",22);
copyFun("lopa",22);
