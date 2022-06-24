let disp=document.getElementById("display");

let btn=Array.from(document.getElementsByClassName("button"))
// console.log(btn);
btn.map((b)=>{
    b.addEventListener("click",(b)=>{
        // console.log(b.target.innerHTML);
        switch(b.target.innerHTML){
            case "C":
                disp.innerHTML="";
                break;
            case "←":
                if(disp.innerHTML){

                    disp.innerHTML=disp.innerHTML.slice(0,-1);
                }
                break;
            
            case "=":
               try{

                   disp.innerHTML=eval(disp.innerHTML)
               }
               catch{
                disp.innerHTML="Error";
               }
                break;
            default:
                disp.innerHTML+=b.target.innerHTML;
        }
        
    })
})
