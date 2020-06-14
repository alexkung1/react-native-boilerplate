import React from 'react'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { ShoppingBagIcon } from '../../shared/Icons'

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
                <Button title="Start here!" icon={<ShoppingBagIcon width={40} height={40} fill={'#fffbf6'} />} />
            </View>
        </SafeAreaView>
    )
}

export default Home
