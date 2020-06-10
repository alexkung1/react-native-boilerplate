import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { axiosClient } from '../../../shared/utils'
import CardsView, { Card } from '../views/Cards'

const DEFAULT_DECK_SIZE = 52

const CardsContainer: React.FC = () => {
    // deck id
    const [deck, setDeck] = useState<string>()

    // remaining cards
    const [remaining, setRemaining] = useState<number>(DEFAULT_DECK_SIZE)

    // cards
    const [cards, setCards] = useState<Card[]>()

    // useEffect(()=>{
    //     axiosClient.get()
    // }, [])

    const onDrawCards = (count: number) => {
        // draw all the remaining cards if more cards requested than remain
        const drawCount = Math.min(remaining, count)
        if (!drawCount) {
            alert('No cards left to draw!')
            return
        }
        axiosClient.get(`/${deck || 'new'}/draw/?count=${drawCount || 1}`).then(response => {
            console.log(response.data)
            if (response?.data?.cards) {
                setCards(response.data.cards)
                setDeck(response?.data?.deck_id)
                setRemaining(response?.data?.remaining)
            }
        })
    }

    return <CardsView cards={cards} onDrawCards={onDrawCards} remaining={remaining} />
}

export default CardsContainer
