import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  topBar: {
    backgroundColor: "rgb(3,0,54)",
    width: "100%",
    padding: "15px 0",
    color: "#fff",
    fontFamily: 'Oxygen, sans-serif',
    position: "fixed",
    bottom: 0,
    left: 0,
    textAlign: "center",
    fontSize: "1.2em",
    fontWeight: "500",
    zIndex: 0,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  },
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    cursor: 'pointer',
    padding: '0 5%',
    marginTop: "5%",
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '27vmin',
    borderRadius: '15%',
    padding: '0',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
}));