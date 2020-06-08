import React from 'react'
import { StyleSheet } from 'react-native'
import RootNavigator from './src/features/RootNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default function App() {
    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    )
}
