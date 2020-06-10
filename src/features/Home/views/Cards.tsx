import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'

// {
//     "image": "https://deckofcardsapi.com/static/img/KH.png",
//     "value": "KING",
//     "suit": "HEARTS",
//     "code": "KH"
// },
export interface Card {
    image: string
    value: string
    suit: string
    code: string
}

interface Props {
    cards?: Card[]
    remaining?: number
    onDrawCards: (count: number) => void
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
})

const CardsView: React.FC<Props> = ({ cards = [], onDrawCards, remaining }: Props) => (
    <View>
        <View>
            <Button
                title="Draw 1 card"
                onPress={() => {
                    onDrawCards(1)
                }}
                // style={styles.button}
            />
            <Button
                title="Draw 2 card"
                onPress={() => {
                    onDrawCards(2)
                }}
                // style={styles.button}
            />
            <Button
                title="Draw 3 card"
                onPress={() => {
                    onDrawCards(3)
                }}
                // style={styles.button}
            />
        </View>
        <View>
            {remaining ? <Text>{`Remaining cards: ${remaining}`}</Text> : null}
            {cards.map((card, index) => (
                <View key={index} style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: card.image }} resizeMode="cover" style={{ width: 50, height: 50 }} />
                    <Text>{card.code}</Text>
                </View>
            ))}
        </View>
    </View>
)

export default CardsView
