import './App.css';
import useStyles from './styles';
import { Container, Typography } from '@material-ui/core';
function App() {

  const classes = useStyles();

  return (
    <>
      {/*<div className={classes.toolbar}></div>*/}
      <Container maxWidth="sm">
        <img src="https://cdn.pixabay.com/photo/2017/07/28/16/30/bee-pollen-2549125_960_720.jpg" alt="productPhoto"></img> 
        <Typography variant='h4' gutterBottom>Product</Typography>
        <Typography variant='h5' gutterBottom>25.90 zł</Typography>
        <Typography variant='body1' gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
      </Container>
    </>
  );
}

export default App;
