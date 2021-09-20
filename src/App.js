import './App.css';
import useStyles from './styles';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
function App() {

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ borderRadius: '0' }}>
      <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2017/07/28/16/30/bee-pollen-2549125_960_720.jpg"
          title="Product"
                />
      <CardContent>
        <Typography variant='h5' gutterBottom>
          Product
        </Typography>
        <Typography variant='h4' gutterBottom>
          28,99 zł
        </Typography>
        <Typography variant="body2" color="textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to       make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button className={classes.button} variant="outlined" aria-label="Dodaj do koszyka">Dodaj do koszyka</Button>
      </CardActions>
    </Card>
        
  );
}

export default App;
