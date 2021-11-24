import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    customButton: {
        background: "#FF8D24",
        width: "200px",
        '&:hover': {
            background: "#bf6715",
        }
    }
}));

export default useStyles;
