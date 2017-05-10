import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'color': '#635959',
    '': {
      'color': '#635959'
    }
  },
  'header': {
    'backgroundColor': '#242323',
    'color': '#EFEFEF',
    '': {
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'h3': {
    'color': '#8C1018'
  },
  'article h4': {
    'color': '#8C1018'
  },
  'article a': {
    'color': '#314052'
  },
  'header h1': {
    'fontSize': [{ 'unit': 'em', 'value': 4 }]
  },
  'main figure>figcaption': {
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'fontStyle': 'italic'
  },
  'main figure>figcaption::before': {
    'content': ''Pictured above: '',
    'fontWeight': 'bold'
  },
  'article>time': {
    'float': 'right',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'fontWeight': 'lighter'
  },
  'main>h3': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    '': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }]
    }
  },
  'header': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 50 }]
  },
  'main': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }]
  },
  'fontFace': {
    'fontFamily': ''News Cycle'',
    'src': 'url(../fonts/mod3_news_cycle.ttf) format('truetype')'
  },
  'fontFace': {
    'fontFamily': ''Contrail One'',
    'src': 'url(../fonts/mod3_contrail_one.ttf) format('truetype')'
  },
  'body': {
    'fontFamily': ''News Cycle !important''
  },
  'header': {
    'fontFamily': ''Contrail One''
  },
  // article {
    margin: 5px 0px;
    padding: 5px 5px;
    box-shadow: -1px -1px 6px #888888;
}
  // section#carousel>figure>img {
    display: none;
    margin: Opx auto;
}

section#carousel>figure.visible>img {
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: -5px -5px 6px #987698;
    /** padding: 20px 50px; *
  // }

section#carousel>figure>figcaption {
    display: none;
}

section#carousel>figure.visible>figcaption {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
}
  'carousel-inner': {
    'textAlign': 'center'
  },
  'carousel item>img': {
    'display': 'inline-block'
  }
});
