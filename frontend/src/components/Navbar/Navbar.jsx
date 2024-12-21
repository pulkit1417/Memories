import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useStyles from './Styles';
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import * as actionType from '../../constants/actionTypes';
import { useEffect, useState } from "react";
const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        navigate('/auth');
    
        setUser(null);
      };
    
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = jwtDecode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography 
                    component={Link} 
                    to="/" 
                    className={classes.heading} 
                    variant="h2" 
                    align="center"
                    color="inherit"
                    underline="none"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src="/images/favicon.ico"
                    alt="memories"
                    height="60"
                    width="60"
                />
            </div>
            <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
        </AppBar>
    );
};

export default Navbar;