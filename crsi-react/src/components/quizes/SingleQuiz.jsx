import React from 'react';
import { Button } from "@material-ui/core";
import quizService from "../../services/QuizesService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";

const SingleQuiz = (props) => {
  const{quiz,onDelete,history} = props;
  console.log(props);
    return (
    <div>
    <h2>{quiz.coursename} 
        {userService.isAdmin() && (
        <>
        <Button
         variant="contained" color="primary"

         onClick={(e) => {
          console.log("navigate to update");
          history.push("/quizes/update/" + quiz._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary"
        onClick={(e) => {
          quizService
            .deleteQuiz(quiz._id)
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

        <p>{quiz.coursecode}</p>
        <p>{quiz.quiznumber}</p>
        <p>{quiz.syllabus}</p>
        <p>{quiz.date}</p>
       <hr />
    </div>

  );
}
 
export default withRouter(SingleQuiz);
