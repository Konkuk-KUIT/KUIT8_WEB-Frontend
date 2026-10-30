import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'pretendard/dist/web/static/pretendard.css'
import './index.css'
import App from './App'

const queryClient = new QueryClient();

// TypeScript에서는 root가 존재한다고 non-null assertion(!)으로 알려줍니다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>  
  </StrictMode>,
)