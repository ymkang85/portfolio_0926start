import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './styles/theme'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header'
import Routes from './pages/Routes'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ScrollToTop>
          <Header />
          <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  )
}

export default App