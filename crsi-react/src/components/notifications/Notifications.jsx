import React from "react";
import SingleNotification from "./SingleNotification";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import notificationService from "../../services/NotificationsService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
    marginTop:"150px"
  },

  Notification:{
     fontFamily: "timesnewroman",
     fontSize:9,
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



const Notifications = (props) => {

  const[notifications,setNotifications] = React.useState([]);
  const style = useStyles();

  const getData = () => {
    notificationService
      .getNotification()
      .then((data) => {
        setNotifications(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData,[]);
  //console.log("Inside Notifications Components");

  //NEW Notification HANDLER
  const handleNewNotificationClick = () => {
    console.log(props);
    props.history.push("/notifications/new");
  };


return (

    <div>
      <h1 className={style.coursehd}>Notifications</h1> 
      
{/*SHOW ADD BUTTON only to logged in user who is Admin */}
<>
      {(userService.isLoggedIn() && userService.isAdmin() ) &&  ( 
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewNotificationClick}>
        Add
      </Fab>
      )}
</>

<> 
  {notifications.length == 0 ? (<p>There are no Notifications</p>) 
        :
        (
            <Grid container spacing={3}>
              {notifications.map((notification,index) => 
                  (
                      
                      <SingleNotification key={index} notification = {notification} onDelete={getData} />
                  )
              )}
            </Grid>
        )
  }
</>
  
</div>   
  
);
};

export default Notifications;
