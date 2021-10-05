import { makeStyles } from "@mui/styles/";

export const useStyles = makeStyles((theme, prop) => {
  return {
    appBar: {
      // backgroundColor: "#fff !important",
      backgroundColor: ({ drawer }) => drawer && "#000 !important",
      height: "72px",
    },
    logoContainer: {
      alignItems: "center",
      flex: 1,
    },
    logo: {
      lineHeight: "1 !important",
    },
    navDate: {
      width: "250px",
      padding: "0px",
      [theme.breakpoints.up("s")]: {
        width: "150px",
        paddingLeft: "10px",
      },
    },
    dateText: {
      lineHeight: "1.2 !important",
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
      transition: "all 0.5s ease-in-out",
      transform: ({ drawer }) =>
        drawer ? "translateY(0px)" : "translateY(-800px)",
      backgroundColor: theme.palette.primary.main,
    },
    drawerDropDown: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
