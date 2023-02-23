import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    --font-family: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
  }
`

export default Global
