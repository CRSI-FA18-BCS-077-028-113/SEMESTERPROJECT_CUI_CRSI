import React from 'react';
import { Button } from "@material-ui/core";
import assignementService from "../../services/AssignmentsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const SingleQuiz = (props) => {
  const{assignement,onDelete,history} = props;
  console.log(props);
    return (
    <div>
    <h2>{assignement.coursename} 
        {userService.isAdmin() && (
        <>
        <Button
         variant="contained" color="primary"

         onClick={(e) => {
          console.log("navigate to update");
          history.push("/assignments/update/" + assignement._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary"
        onClick={(e) => {
          assignementService
            .deleteQuiz(assignement._id)
            .then((data) => {
              console.log(data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
         >
        Delete 
        </Button>
        </>
         )}
    </h2>

        <p>{assignement.coursecode}</p>
        <p>{assignement.assignementnumber}</p>
        <p>{assignement.syllabus}</p>
        <p>{assignement.date}</p>
       <hr />
    </div>

  );
}
 
export default withRouter(SingleQuiz);
