function main(){
    let a=20;
    function m1(){
        let b=10;
        console.log(a);
        
    }
    let n=m1;
    return m1;
}

let retVal=main();
console.log(retVal);
retVal();


let d=new Date();
console.log(d.getFullYear());

