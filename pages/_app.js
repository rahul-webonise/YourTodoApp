import React from 'react';

//local imports
import '../styles/globals.css';

import { StateContextProvider } from '../global-state-utils/globalStateContext'


export default function MyApp({ Component, pageProps }) {
  return (
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  )
}
