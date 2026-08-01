  
        function totalfee() {
            let course = document.getElementById('course').value;
            let fee = document.getElementById('fee');

            //alert('working')
            if (course == "java") {
                fee.setAttribute('value', 30000);
                
            }
            else if (course == "python") {
                fee.setAttribute('value', 29000);
                fees=3000;
            }
            else if (course == "mern") {
                fee.setAttribute('value', 29500);
                fees=3000;
            }
           
     
        }
       
        
        
        let Caste1 = document.querySelector('#cast1');
        let Caste2 = document.querySelector('#cast2');
        let Caste3 = document.querySelector('#cast3');
        let Caste4 = document.querySelector('#cast4');


        let consfee=document.getElementById('confee');

        Caste1.addEventListener('change', function () {
           consfee.setAttribute('value',1000)
        })
        Caste2.addEventListener('change', function () {
           consfee.setAttribute('value',1100)
        })
        Caste3.addEventListener('change', function () {
           consfee.setAttribute('value',1200)
        })
        Caste4.addEventListener('change', function () {
           consfee.setAttribute('value',1500)
        })


        let calbtn=document.getElementById('btn');
        calbtn.addEventListener('click',function(){
           let fee = document.getElementById('fee');
           let consfee=document.getElementById('confee');
           let paidfee=document.getElementById('pfee');
           let duefee=document.getElementById('dfee')
           //console.log("fees =",);
           let calfee=Number(fee.value)-(Number(consfee.value)+Number(paidfee.value))

           let ptag=document.querySelector('p');
           
         if(Number(fee.value)==0){
              
              ptag.innerText="(*)select the above details";
         }else{
             duefee.setAttribute('value',calfee);
              ptag.innerText="";
         }
            event.preventDefault();

        })

    console.log(document.getElementById('course').value);
    
     