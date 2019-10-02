import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { AppBar, Badge, MenuItem, Menu } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuBookIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
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
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 250
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
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <Button>Profile</Button>
        </MenuItem>
      </Link>
      <Link to="/tickethub" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <Button>Tickets</Button>
        </MenuItem>
      </Link>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <Button>Dashboard</Button>
        </MenuItem>
      </Link>
      <Link to="/directory" style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMenuClose}>
          <Button>Directory</Button>
        </MenuItem>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <MenuItem>
          <Button onClick={logout}>Logout</Button>
        </MenuItem>
      </Link>
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
      <AppBar position="relative">
        <Toolbar
          style={{
            color: "linear-gradient(to right, var(--top1), var(--top2))"
          }}
        >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon onClick={handleProfileMenuOpen} />
          </IconButton>
          <Link to="/directory" style={{ textDecoration: "none" }}>
            <MenuItem>
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
            <Link to="/dashboard">
              <MenuItem>
                <p style={{ color: "white" }}>Dashboard</p>
              </MenuItem>
            </Link>

            <Link to="/tickethub">
              <MenuItem>
                <p style={{ color: "white" }}>TicketHub</p>
              </MenuItem>
            </Link>

            <MenuItem>
              <p style={{ color: "white" }}>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Profile
                </Link>
              </p>
              <Badge badgeContent={17} color="secondary">
                <AccountCircle />
              </Badge>
            </MenuItem>
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
