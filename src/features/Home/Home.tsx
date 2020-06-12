import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import Game from './containers/Game'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
    },
})

const Home: React.FC = () => {
    const [start, setStarted] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Button title={start ? 'Reset' : 'Start here!'} onPress={() => setStarted(!start)} />
                {start && <Game />}
            </View>
        </SafeAreaView>
    )
}

export default Home
