import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export type Tile = 'X' | 'O' | null

export type BoardType = Array<Array<Tile>>

interface Props {
    board?: BoardType
    onSelectColumn: (col: number) => void
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 400,
    },
    column: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    tile: {
        flex: 1,
        backgroundColor: 'lightyellow',
        borderStyle: 'dashed',
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Board: React.FC<Props> = ({ board, onSelectColumn }: Props) => {
    return (
        <View style={styles.container}>
            {board?.map((col, i) => (
                <TouchableOpacity
                    style={styles.column}
                    key={i}
                    activeOpacity={0.8}
                    onPress={(): void => onSelectColumn && onSelectColumn(i)}
                >
                    {col.map((tile, j) => (
                        <View key={j} style={styles.tile}>
                            {tile && <Text>{tile}</Text>}
                            <Text style={{ color: 'lightgrey', position: 'absolute' }}>{`${i}, ${j}`}</Text>
                        </View>
                    ))}
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Board
