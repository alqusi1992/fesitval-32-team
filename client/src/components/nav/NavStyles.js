import { makeStyles } from "@mui/styles/";

export const useStyles = makeStyles((theme, prop) => {
  return {
    appBar: {
      backgroundColor: "#fff !important",
      position: "absolute",
    },
    logoContainer: {
      alignItems: "center",
    },
    listItemContainer: {
      justifyContent: "flex-end",
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
    drawerContainer: {
      height: "90vh",

      // marginTop: "80px",
    },
  };
});
