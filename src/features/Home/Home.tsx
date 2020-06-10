import React, { useState } from 'react'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, ScrollView } from 'react-native'
import Game from './containers/Game'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    content: {
        paddingHorizontal: 20,
    },
})

const Home: React.FC = () => {
    const [isStarted, setIsStarted] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Button title={isStarted ? 'Reset' : 'Start here!'} onPress={() => setIsStarted(!isStarted)} />
                {isStarted && (
                    <ScrollView>
                        <Game style={{ marginTop: 20 }} />
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Home
