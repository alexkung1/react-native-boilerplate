import React from 'react'
import RootNavigator from './src/features/RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import StorybookUI from './storybook'

const App = (): React.ReactElement => {
    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    )
}

// export default StorybookUI
export default App
