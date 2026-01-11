import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StudentsContext } from "./context/StudentsContext.jsx"

const students = ["Demetre", "Petre", "Beqa", "Davit", "Aleqsandre", "Nikolozi", "Lizi"]

createRoot(document.getElementById('root')).render(
  <StudentsContext.Provider value={students}>
    <App />
  </StudentsContext.Provider>
)
