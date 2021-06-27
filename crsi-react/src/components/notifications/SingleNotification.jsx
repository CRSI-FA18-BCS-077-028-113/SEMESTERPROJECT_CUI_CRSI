import React from 'react';
import { Button } from "@material-ui/core";
import notificationService from "../../services/NotificationsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Btn:{
    float: 'right'
  },
  mainh:{
  fontFamily:"timesnewroman",
  fontSize:"20px",
  fontWeight:"bold",
  marginTop:"50px"
  },
  genh:{
    fontFamily:"calibri",
    fontSize:"17px",
    }
  }));

const SingleNotification = (props) => {
  const{notification,onDelete,history} = props;
  console.log(props);
  const style = useStyles();
    return (
      
    <div>
        <h2 className={style.mainh}>
        <br />
          {notification.title} 
        {userService.isAdmin() && (
        <>
        <Button
         variant="contained" color="primary"
         className={style.Btn}
         style={{backgroundColor:"#88e916"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/notifications/update/" + notification._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          notificationService
            .deleteNotification(notification._id)
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
        <p className={style.genh}>{notification.body}</p>
        <p className={style.genh}>{notification.date}</p>
        <p className={style.genh}>{notification.links}</p>
        
       <hr />
    </div>

  );
}
 
export default withRouter(SingleNotification);
