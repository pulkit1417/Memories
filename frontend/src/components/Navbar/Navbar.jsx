import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import useStyles from './Styles';

const Navbar = () => {
    const classes = useStyles();
    const user = null;
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
                {user ? (
                  <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={() => {}}>Logout</Button>

                  </div>
                ) :(
                  <Button component={Link} to="/auth" variant="contained" color="primary" onClick={() => {}}>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;