import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./images/wood-bg.jpg";
const useStyles = makeStyles((theme) => ({

}));

const Departments = () => {
  return (
    <div style={{backgroundImage: 'url(' + Image + ')',}}>
      <h1 style={{fontFamily:"timesnewroman",fontWeight:"30px",marginTop:"50px"}}>Departments</h1>
<hr />
    <div style={{marginLeft:"450px",marginTop:"100px"}}>
      <img style= {{width:"60%"}}  src={require("./images/comp.jpg")} />
      <h3 style={{color:"white",marginLeft:"150px",marginTop:"-180px"}}>Computer Science <hr /></h3>
      <Button style={{color:"white",marginLeft:"150px",marginTop:"-40px"}}>View Batches</Button>
    </div>
<br />
<br />
    <div style={{marginLeft:"450px",marginTop:"100px"}}>
      <img style= {{width:"60%"}}    src={require("./images/software.jpg")} />
      <h3 style={{color:"white",marginLeft:"150px",marginTop:"-180px"}}>Software Engineering <hr /></h3>
      <Button style={{color:"white",marginLeft:"150px",marginTop:"-40px"}}>View Batches</Button>
    </div>
<br />
<br />
    <div style={{marginLeft:"450px",marginTop:"100px"}}>
      <img style= {{width:"60%"}}    src={require("./images/pharmacy.jpg")} />
      <h3 style={{color:"white",marginLeft:"150px",marginTop:"-180px"}}>Pharmacy <hr /></h3>
      <Button style={{color:"white",marginLeft:"150px",marginTop:"-40px"}}>View Batches</Button>
    </div>

    </div>
  );
};

export default Departments;
