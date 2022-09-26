import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/newsCards/newsCards'
import './App.css';
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers'
import AOS from "aos";
import "aos/dist/aos.css";
import toastifier from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

const AlanKey = '28b26607a886b311ba58c74558346efc2e956eca572e1d8b807a3e2338fdd0dc/stage';

  const App = () => {

  const [articles, setArticles] = useState([]);
  const [active, setActive] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: AlanKey,
      onCommand: (({ command, articles, open }) => {
        if (command === 'newsFromSource') {
          toastifier("Latest News Updated", {
            styleClass: {
              background: "#fff12e"
          }})
          setArticles(articles);
          setActive(-1);
        }
        else if (command === 'highlight') {
          setActive((prev) => prev + 1);
        }
        else if (command === 'open') {
          if (open.length > 2)
            open = wordsToNumbers(open, { fuzzy: true });
          if (open > 20)
            alanBtn().playText('Try a Legit number next time');
          else
            window.open(articles[open-1].url, '_blank')
        }
      })
    })
  }, [])
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  return (
    <div className="container">
      <div className={classes.topBar}>
        Powered by AI
      </div>
      <div onClick={() => setArticles([])} className={classes.logoContainer}>
        <img src="/logo.png" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards active={active} articles={articles}/>
    </div>
  );
}

export default App;
