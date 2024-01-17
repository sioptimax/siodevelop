import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline, createTheme } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@emotion/react';

const theme = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#b500d6'
    },
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssBaseline>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
