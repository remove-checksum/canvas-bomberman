import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
import { startServiceWorker } from './features/game/sw/startServiceWorker'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//   </StrictMode>
// )

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

startServiceWorker()
