import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
// remove strict mode if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> 
  // </React.StrictMode>,
    <Provider store={store}>
      <App />
    </Provider>
)
