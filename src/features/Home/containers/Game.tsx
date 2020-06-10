import React, { useState, useEffect } from 'react'
import Board, { BoardType, Tile } from '../views/Board'
import { ViewProps, View, Alert } from 'react-native'

const BOARD_WIDTH = 7
const BOARD_HEIGHT = 7

const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [1, 1],
]

const reverseVector = ([x, y]: number[]): number[] => [-x, -y]

const Game: React.FC<ViewProps> = (props: ViewProps) => {
    const [board, setBoard] = useState<BoardType>()
    const [turn, setTurn] = useState<Tile>('O')

    useEffect(() => {
        const _board = Array(BOARD_WIDTH)
            .fill(null)
            .map(() => Array(BOARD_HEIGHT).fill(null))
        // console.log(_board)
        setBoard(_board)
    }, [])

    const getConnectedTiles = (direction: number[], origin: number[], board: BoardType, type: Tile): number => {
        let [currX, currY] = [origin[0] + direction[0], origin[1] + direction[1]]
        let count = 0
        while (
            currX < BOARD_WIDTH &&
            currY < BOARD_HEIGHT &&
            currX >= 0 &&
            currY >= 0 &&
            board[currX][currY] === type
        ) {
            count++
            currX += direction[0]
            currY += direction[1]
        }
        return count
    }

    const checkWin = (origin: number[], board: BoardType): boolean => {
        const tile = board[origin[0]][origin[1]]

        for (const dir of DIRECTIONS) {
            const sum =
                getConnectedTiles(dir, origin, board, tile) +
                getConnectedTiles(reverseVector(dir), origin, board, tile) +
                1
            console.log(sum, String(dir))
            if (sum >= 4) {
                return true
            }
        }
        return false
    }

    const onWin = (winner: Tile): void => {
        alert(`Winner is ${winner}`)
    }

    const onSelectColumn = (col: number): void => {
        if (board) {
            // create copy of board
            const tempBoard = [...board]

            for (let j = 0; j < BOARD_HEIGHT; j++) {
                if (tempBoard[col][j] === null) {
                    tempBoard[col][j] = turn
                    setBoard(tempBoard)
                    if (checkWin([col, j], tempBoard)) {
                        onWin(tempBoard[col][j])
                        return
                    }
                    setTurn(turn === 'X' ? 'O' : 'X')
                    return
                }
            }
            alert('Invalid move')
        }
    }

    return (
        <View {...props}>
            <Board board={board} onSelectColumn={onSelectColumn} />
        </View>
    )
}

export default Game
