import { makeStyles } from "@mui/styles/";
import { width } from "@mui/system";

export const useStyles = makeStyles((theme, prop) => {
  return {
    appBar: {
      backgroundColor: "#fff !important",
      position: "absolute",
    },
    logoContainer: {
      alignItems: "center",
      flex: 1,
    },
    navDate: {
      width: "200px",
      padding: "0px",
      backgroundColor: "pink",

      [theme.breakpoints.up("s")]: {
        width: "150px",
        paddingLeft: "10px",
      },
    },
    listItemContainer: {
      justifyContent: "flex-end",
      flex: 1,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    listItemBtn: {
      "&:hover": {
        transform: "translateX(4px)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#fff !important",
      },
    },
    drawerListButton: {
      color: theme.palette.primary.contrastText,
    },
    drawerContainer: {
      height: "100vh",
      width: "100%",

      transform: ({ drawer }) =>
        drawer ? "translateY(410px)" : "translateY(-800px)",
      backgroundColor: theme.palette.primary.main,

      position: "absolute",
      left: "0",
      transition: "all 0.5s ease-in-out",

      [theme.breakpoints.down("sm")]: {
        transform: ({ drawer }) =>
          drawer ? "translateY(362px)" : "translateY(-800px)",
      },

      // marginTop: "80px",
    },
  };
});
