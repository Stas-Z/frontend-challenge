import '@/app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider'

const container = document.getElementById('root')
if (!container) {
    throw new Error("Container root not found. Can't mount react app")
}
const root = createRoot(container)

const ghPages = import.meta.env.VITE_GH_PAGES || '/'

root.render(
    <BrowserRouter basename={ghPages}>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
