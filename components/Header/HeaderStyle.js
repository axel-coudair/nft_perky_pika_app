import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    block_header: {
        minHeight: "100vh",
        padding: "4rem 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('./background_header.png')",
    }
}));

export default useStyles;
