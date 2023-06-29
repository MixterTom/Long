import { useEffect } from "react";
import "./Backdot.scss";
function Backdot(){
    useEffect(() => {
        const scrollTrigger = 60;
        window.onscroll =function(){
          const header = document.querySelector(".backdot");
          console.log(header)
          if(window.scrollY >= scrollTrigger)
          {
            header.classList.add("showback")
          }else{
            header.classList.remove("showback")
          }
        }
      })
    return(     
        <>
         <div className="backdot">
            <a href="#">
            <i className="bi bi-chevron-up"></i>
            </a>
   
        </div>
        </>
    )
}
export default Backdot;