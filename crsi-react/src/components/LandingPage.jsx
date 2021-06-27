import React from "react";
import homeimg from './images/homeimg.JPG';
import { Button} from "@material-ui/core/";

const LandingPage = () => {
  return (
   
<div>
    <div>
      <img src={homeimg} alt="logo" />

         <Button
              variant="contained"
              style={{color:"black" ,backgroundColor:"lightblue", marginLeft:"290px", marginTop:"-455px" }}
              onClick={(e) => {
                window.location.reload("");
               
              }}
          >
          ...............
          </Button>
    </div>

    <div>
           <Button
              variant="contained"
              style={{color:"black" ,backgroundColor:"lightblue", marginLeft:"628px", marginTop:"-530px" }}
              onClick={(e) => {
                window.location.reload();
              }}
          >
           ...............
           </Button>
    </div>

     <div>
          <Button
            variant="contained"
            style={{color:"black" ,backgroundColor:"lightblue", marginLeft:"944px", marginTop:"-500px" }}
            onClick={(e) => {
                window.location.reload(); 
            }}
          >
         .............................
         </Button>
      </div>
</div>
  );
};

export default LandingPage;
