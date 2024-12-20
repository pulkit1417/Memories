import { Container, createTheme, Grow, useMediaQuery } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { useEffect, useState } from "react";
import useStyles from "../../Styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container className={classes.mainContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flex: isMobile ? "0 0 100%" : "0 0 65%",
              width: "100%",
            }}
          >
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div
            style={{
              flex: isMobile ? "0 0 100%" : "0 0 30%",
              width: "100%",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </Container>
    </Grow>
  );
};

export default Home;
