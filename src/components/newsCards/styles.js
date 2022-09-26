import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        padding: '5%',
        margin: '0',
        width: '100%',
        position: "relative",
        zIndex: -2
    },
    speech: {
        maxWidth: '720px',
        position: "relative",
        zIndex: -1,
        width: "100%",
        backgroundColor: "rgb(3,0,54)",
        borderRadius: "15px",
        padding: "2% 5%",
        color: "#ffffff",
        fontFamily: 'Oxygen, sans-serif',
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: "15px auto",
    }
})