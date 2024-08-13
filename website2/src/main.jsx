import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './Card.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



const Main = () => {
  return (
    <main>
       <p id='maintext'>Welcome to my website!</p>
  
       <div>
         <Card 
           title="Toshifumi-portfolio" 
           content="I made this portfolio as a practice before." 
           linkUrl="https://toshifumidt.github.io/portfolio/"
         />
       </div>
    </main>
  );
};

export default Main;
