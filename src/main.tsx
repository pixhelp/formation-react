import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App.tsx';
import { FavoriteProvider }  from './contexts/favorites-context.tsx';
import { CounterProvider } from './contexts/counter-context.tsx';
import AuthContextProvider from './provider/AuthContextProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>

      <FavoriteProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </FavoriteProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
