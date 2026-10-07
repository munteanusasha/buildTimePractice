import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Calculator from "./calculator.jsx";
import Form from "./form.jsx";
// import ShoppingList from  "./shoppingList.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*  <Calculator />*/}
      <Form />
    {/*<ShoppingList />*/}
  </StrictMode>,

)
