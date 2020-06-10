import React from 'react'
import RootNavigator from './src/features/RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import StorybookUI from './storybook'

// Use this API to randomly draw 1,2 or 3 cards from a deck

const App = (): React.ReactElement => {
    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    )
}

// export default StorybookUI
export default App
