import { createGlobalStyle } from 'styled-components'

//Fonts
import jua from '../Assets/Fonts/Jua-Regular.ttf'
import noto from '../Assets/Fonts/NotoSansKR-Regular.otf'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Jua';
        src: url('${jua}') format('truetype');
    }

    @font-face {
        font-family: 'Noto';
        src: url('${noto}') format('opentype');
    }

    html,body {
        margin: 0px;
        font-family: 'noto';
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyles 