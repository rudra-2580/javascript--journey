
let amt=50;



function cashCount(){

    if(amt<100){
        console.log("minimum balance is 100");
        return;
    }

    if(amt>=2000){
        let c2000=Math.floor(amt/2000);
        console.log(`2000*${c2000}=${c2000*2000}`);
        amt-=2000*c2000;
        
    }
    if(amt>=500){
        let c500=Math.floor(amt/500);
        console.log(`500*${c500}=${c500*500}`);
        amt-=500*c500;
        
    }
    if(amt>=200){
        let c200=Math.floor(amt/200);
        console.log(`200*${c200}=${c200*200}`);
        amt-=200*c200;
        
    }
    if(amt>=100){
        let c100=Math.floor(amt/100);
        console.log(`100*${c100}=${c100*100}`);
        amt-=100*c100;
        
    }
    
}


cashCount();

    let color="";
function matchcolor(){
if(color=="red")console.log("stop and wait for green light");
else if(color=="orange")console.log("ready to go");

else if(color=="green")console.log("you can go now");

else console.log("invalid color");



}

matchcolor();