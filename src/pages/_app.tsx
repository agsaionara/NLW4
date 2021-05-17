import '../styles/global.css'

import {ChallengesProvider} from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (     
        <Component {...pageProps} />
  )
}
//todas as telas da aplicação
export default MyApp
