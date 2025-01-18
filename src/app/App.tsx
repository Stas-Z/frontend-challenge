import { Suspense } from 'react'

import { HStack } from '@/shared/ui/Stack'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'

import { ErrorBoundary } from './providers/ErrorBoundary'
import AppRouter from './providers/router/ui/AppRouter'

export const App = () => {
    return (
        <div id="app" className="app">
            <HStack gap="60" justify="center">
                <Navbar />
                <ErrorBoundary>
                    <Suspense fallback={<PageLoader />}>
                        <AppRouter />
                    </Suspense>
                </ErrorBoundary>
            </HStack>
        </div>
    )
}
