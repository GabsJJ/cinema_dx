import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #262f33;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle
