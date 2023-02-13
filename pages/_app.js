import '../styles/globals.css'
//import '../styles/formInput.css'
import  { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import NoSSRWrapper from '../NoSSRWrapper'
function MyApp({ Component, pageProps }) {
  let persistor =persistStore(store)
  return (
    
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>  
 
  )
}

export default MyApp
