import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  AppBar,
  Badge,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuBookIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.87);",
    ocacity: "0.5"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 15),
    transition: theme.transitions.create("width"),
    // marginLeft: "100px",
    // width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const AuthenticatedNavbar = ({ logout }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/ticket" style={{ textDecoration: "none" }}>
          Tickets
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/directory" style={{ textDecoration: "none" }}>
          Directory
        </Link>
      </MenuItem>
      <MenuItem onClick={logout}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Logout
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/directory">
          <IconButton color="inherit">
            <Badge>
              <MenuBookIcon />
            </Badge>
          </IconButton>

          <p>Directory</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" style={{ textDecoration: "none", color: "#F8F8F8" }}>
              Online Portal
            </Link>
          </Typography>

          <Link to="/directory" style={{ textDecoration: "none" }}>
            <MenuItem>
              <ContactMailIcon
                fontSize="small"
                style={{ color: "white", marginRight: "10px" }}
              />
              <p style={{ color: "white" }}>Directory</p>
            </MenuItem>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/dashboard" style={{ marginLeft: "10px" }}>
              <MenuItem>
                <p style={{ color: "white" }}>Dashboard</p>
              </MenuItem>
            </Link>

            <Link to="/ticket">
              <MenuItem>
                <p style={{ color: "white" }}>TicketHub</p>
              </MenuItem>
            </Link>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/profile" color="white">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon fontSize="large" style={{ color: "white" }} />
                </Badge>
              </Link>
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/profile" color="white">
                <Badge badgeContent={17} color="secondary">
                  <AccountCircle fontSize="large" style={{ color: "white" }} />
                </Badge>
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

AuthenticatedNavbar.propTypes = {
  logout: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(AuthenticatedNavbar);
