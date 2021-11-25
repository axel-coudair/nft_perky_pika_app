import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    timerNumber: { textAlign: "center", fontWeight: "bold", fontSize: "80px" },
    timerLabel: { textAlign: "center", fontWeight: "bold" },
    timerContainer: { maxWidth: "800px" },
    timerLabel: { fontSize: "40px" },
    "@media (max-width: 800px)": {
        timerLabel: { fontSize: "20px" },
        timerNumber: { fontSize: "60px" }
    },
    "@media (max-width: 500px)": {
        timerLabel: { fontSize: "12px" },
        timerNumber: { fontSize: "50px" }
    }
});

export default useStyles;
