import React from 'react'
import RootNavigator from './src/features/RootNavigator'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
// import StorybookUI from './storybook'

const App = (): React.ReactElement => {
    return <SafeAreaProvider></SafeAreaProvider>
}

// export default StorybookUI
export default App
