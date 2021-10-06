import { makeStyles } from "@mui/styles/";

export const useStyles = makeStyles((theme, prop) => {
  return {
    appBarWhite: {
      backgroundColor: "#fff !important",
      height: "72px",
      justifyContent: "center",
      transition: "all 0.5s ease-in-out !important",
    },
    appBarBlack: {
      backgroundColor: "#000 !important",
      height: "72px",
      justifyContent: "center",
      transition: "all 0.5s ease-in-out !important",
    },
    toolBar: {
      [theme.breakpoints.up("md")]: {
        margin: "0 80px",
      },
    },
    logoContainer: {
      alignItems: "center",
      flex: 1,
    },
    logo: {
      lineHeight: "1 !important",
      cursor: "pointer",
      transition: "transform .3s !important",
      "&:hover": {
        transform: "translateX(4px)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "transparent  !important",
      },
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
      color: ({ drawer }) => (drawer ? "#fff" : "#000"),
    },
    listItemContainer: {
      justifyContent: "flex-end",
      flex: 1,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    listItemBtn: {
      padding: 0,
      transition: "transform .3s !important",
      "&:hover": {
        transform: "translateX(4px)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "transparent  !important",
      },
    },
    iconBtn: {
      marginLeft: "10px !important",
    },
    listBtn: {
      color: `${theme.palette.secondary.main} !important`,
      fontSize: "36px !important",
    },
    drawerContainer: {
      height: "100vh",
      width: "100%",
      opacity: ({ drawer }) => (drawer ? "1" : "0"),
      transition: "opacity .6s,transform .6s !important",
      transform: ({ drawer }) =>
        drawer ? "translateY(0px)" : "translateY(-800px)",
      backgroundColor: theme.palette.primary.main,
    },
    drawerDropDownOuter: {
      justifyContent: "center",
    },
    drawerDropDown: {
      height: "50vh",
      maxWidth: "600px",
      margin: "20px",
    },
    drawerDropDownInner: {
      justifyContent: "space-between",
      alignItems: "center",
      transition: "transform .3s !important",
      "&:hover": {
        transform: "translateX(4px)",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      },
    },
  };
});
