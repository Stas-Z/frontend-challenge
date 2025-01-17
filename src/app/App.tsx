import { MainPage } from '@/pages/MainPage'
import { HStack } from '@/shared/ui/Stack'
import { Navbar } from '@/widgets/Navbar'

export const App = () => {
    return (
        <div id="app" className="app">
            <HStack gap="60" justify="center">
                <Navbar />
                <MainPage />
            </HStack>
        </div>
    )
}
