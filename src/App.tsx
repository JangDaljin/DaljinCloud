import * as React from 'react'
import './App.scss'

interface AppProps {
    name : string,
}

const App : React.FC<AppProps> = props => {
    const { name } = props
    return <div>{name} HELLO, WEBPACK</div>
}


export default App;