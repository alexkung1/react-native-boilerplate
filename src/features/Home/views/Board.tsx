import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
// import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler'
import GestureRecognizer from 'react-native-swipe-gestures'
export type Cell = 'O' | '*' | null

export type Board = Cell[][]
export type Direction = [0, 1] | [1, 0] | [0, -1] | [-1, 0]

interface Props {
    board?: Board
    onChangeDirection: (dir: Direction) => void
}

const styles = StyleSheet.create({
    col: {
        flex: 1,
        flexDirection: 'column-reverse',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: 'black',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: 'black',
    },
    cell: {
        flex: 1,
        backgroundColor: 'lightgreen',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Board: React.FC<Props> = ({ board, onChangeDirection }: Props) => {
    return (
        <GestureRecognizer
            config={{
                velocityThreshold: 0.1,
                directionalOffsetThreshold: 10,
            }}
            onSwipeDown={() => onChangeDirection([0, -1])}
            onSwipeUp={() => onChangeDirection([0, 1])}
            onSwipeLeft={() => onChangeDirection([-1, 0])}
            onSwipeRight={() => onChangeDirection([1, 0])}
        >
            <View style={{ flexDirection: 'row', height: 400, marginTop: 20 }}>
                {board?.map((col, i) => (
                    <View key={i} style={styles.col}>
                        {col.map((cell, j) => (
                            <View key={j} style={styles.cell}>
                                <Text>{cell && cell}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </GestureRecognizer>
    )
}

export default Board
