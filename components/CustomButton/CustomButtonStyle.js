import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    customButton: {
        background: "#FF8D24",
        width: "200px",
        '&:hover': {
            background: "#bf6715",
        }
    }
});

export default useStyles;
