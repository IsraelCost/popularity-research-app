import { Global as GlobalEm, css } from '@emotion/react'

const globalStyles = css`
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

const Global = () => {
  return (
    <GlobalEm
      styles={globalStyles}
    />
  )
}

export default Global
