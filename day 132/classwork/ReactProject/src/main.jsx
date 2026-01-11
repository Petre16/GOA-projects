import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MyContext } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyContext.Provider value="context1">
    <App />
  </MyContext.Provider>
)