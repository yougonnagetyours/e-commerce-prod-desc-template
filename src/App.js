import './App.css';
import useStyles from './styles';

function App() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar}></div>
      <div>galeria</div>
    </>
  );
}

export default App;
