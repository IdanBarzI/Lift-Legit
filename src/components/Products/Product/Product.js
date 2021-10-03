import React from 'react'
import useStyles from './styles';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Card >
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h4" gutterBottom>
                    {product.name}
                    </Typography>
                    <Typography variant="h4">
                    {product.price.formatted}₪
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h6" color="textSecondary"/>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart fontSize="large" color="action"/>
                    <Typography>Add To Car</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
