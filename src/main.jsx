import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import {ThemeProvider} from 'styled-components'
import {Details} from './pages/Details'
import {Home} from './pages/Home'
import GlobalStyles from './styles/global'
import {SignIn} from './pages/Signin'
import {SignUp} from './pages/SignUp'
import {Profile} from './pages/Profile'
import {Routes} from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
