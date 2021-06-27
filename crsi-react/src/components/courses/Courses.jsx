import React from "react";
import SingleCourse from "./SingleCourse";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import courseService from "./../../services/CoursesService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
    marginTop:"130px",
    padding:"43px",
  
  },

  coursestyling:{
     marginTop:"50px"
  },

  coursehd:{
    marginTop:"40px",
    fontFamily:"timesnewroman",
    fontSize:"40px",

 }
}));



const Courses = (props) => {

  const[courses,setCourses] = React.useState([]);
  const style = useStyles();

  const getData = () => {
    courseService
      .getCourse()
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData,[]);
  //console.log("Inside Courses Components");

  //NEW COURSE HANDLER
  const handleNewCourseClick = () => {
    console.log(props);
    props.history.push("/courses/new");
  };


return (

    <div>
      <h1 className={style.coursehd}>Courses</h1> 
      <hr />
      
{/*SHOW ADD BUTTON only to logged in user who is Admin */}
<>
      {(userService.isLoggedIn() && userService.isAdmin() ) &&  ( 
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewCourseClick}>
        Add Courses
      </Fab>
      )}
</>

<> 
  {courses.length === 0 ? (<p>There are no courses</p>) 
        :
        (
            <div className={style.coursestyling}>
              {courses.map((course,index) => 
                  (
                      <SingleCourse key={index} course = {course} onDelete={getData} />
                  )
              )}
           </div>
        )
  }
</>
  
</div>   
  
);
};

export default Courses;
