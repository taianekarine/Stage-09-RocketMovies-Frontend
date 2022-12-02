import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';
import theme from './Styles/theme'
import { CreateMovie } from './Pages/CreateMovie'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
      <GlobalStyles />
     
      <CreateMovie />

    </ThemeProvider>
  </React.StrictMode>
)
