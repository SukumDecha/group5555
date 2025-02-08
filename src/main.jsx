import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './LanguageContext';
import './index.css';
import App from './App.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from "@/components/ui/provider"
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)
=======
>>>>>>> parent of 67f5cfc (Noy Errorrrr)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </Provider>
  </StrictMode>,
);
