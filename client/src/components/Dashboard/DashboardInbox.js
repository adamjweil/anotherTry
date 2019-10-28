import React from "react";
import { connect } from "react-redux";
import {
  List,
  Drawer,
  CssBaseline,
  Toolbar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  ListItem,
  Typography,
  Divider
} from "@material-ui/core";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import NotificationImportantOutlinedIcon from "@material-ui/icons/NotificationImportantOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import ChildFriendlyOutlinedIcon from "@material-ui/icons/ChildFriendlyOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import { loadCurrentProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // position: "inLine"
    // marginTop: "100px"
  },
  drawer: {
    width: 240,
    flexShrink: 0
    // marginTop: "100px"
    // position: "inLine"
  },
  drawerPaper: {
    width: 240,
    marginTop: "160px"
  },
  content: {
    flexGrow: 1,
    marginLeft: "240px",
    padding: theme.spacing(1)
  }
}));

const DashboardInbox = ({ loadCurrentProfile, loadUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6">Inbox</Typography>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar} />

        <List>
          <ListItem button key="newNotifications">
            <ListItemIcon>
              <NotificationImportantOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button key="notifications">
            <ListItemIcon>
              <MailOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button key="tickets">
            <ListItemIcon>
              <ConfirmationNumberOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets" />
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem button key="team">
            <ListItemIcon>
              <GroupOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Team" />
          </ListItem>
          <ListItem button key="friends">
            <ListItemIcon>
              <ChildFriendlyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItem>
          <ListItem button key="conversations">
            <ListItemIcon>
              <ForumOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Conversations" />
          </ListItem>
          <ListItem button key="me">
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile Settings" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>Content Paragraph</Typography>
        <Typography paragraph>Content Paragraph</Typography>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { loadCurrentProfile, loadUser }
)(DashboardInbox);
