import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./lib/theme"
import { GlobalStateContext } from './content/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStateContext.Provider value={"en"}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </GlobalStateContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
