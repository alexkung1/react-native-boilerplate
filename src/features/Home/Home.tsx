import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import CardsContainer from './containers/Cards'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
    },
})

const Home: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <CardsContainer />
            </View>
        </SafeAreaView>
    )
}

export default Home
