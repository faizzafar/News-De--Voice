import useStyles from './styles'
import { Grid, Grow } from '@material-ui/core';
import NewsCard from '../newsCard/newsCard'
import React from 'react'

const NewsCards = ({ articles, active }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <div className={classes.container}>
        <div className={classes.speech}  data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500">
          <img alt="Mic" height="50px" src="https://img.icons8.com/ios-filled/64/ffffff/microphone--v1.png" />
          <span className={classes.speech}> Give me latest news! </span>
        </div>
        <div className={classes.speech}  data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500">
          <img alt="Mic" height="50px" src="https://img.icons8.com/ios-filled/64/ffffff/microphone--v1.png" />
          <span className={classes.speech}> Give me news about Playstation5! </span>
        </div>
        <div className={classes.speech}  data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500">
          <img alt="Mic" height="50px" src="https://img.icons8.com/ios-filled/64/ffffff/microphone--v1.png" />
          <span className={classes.speech}> What's up with India? </span>
        </div>
        <div className={classes.speech}  data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500">
          <img alt="Mic" height="50px" src="https://img.icons8.com/ios-filled/64/ffffff/microphone--v1.png" />
          <span className={classes.speech}> Give me recent Technology news! </span>
        </div>
        <div className={classes.speech}  data-aos="zoom-in" data-aos-delay="100" data-aos-once="true" data-aos-duration="500">
          <img alt="Mic" height="50px" src="https://img.icons8.com/ios-filled/64/ffffff/microphone--v1.png" />
          <span className={classes.speech}> How to use this website? </span>
        </div>
      </div>
    )
  }
  console.log(articles);
  return (
    <div>
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item s={12} sm={6} lg={4}>
                    <NewsCard active={active} article={article} i={i}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    </div>
)
}

export default NewsCards
