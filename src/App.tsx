import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/tehme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  )
}

export default App