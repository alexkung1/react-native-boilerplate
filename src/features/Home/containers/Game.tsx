import React, { useState, useEffect } from 'react'
import Board, { Cell, Board as BoardType, Direction } from '../views/Board'
import { useInterval } from '../../../shared/utils'
import { Text } from 'react-native'

const BOARD_SIZE = 20
const MIN_INTERVAL = 200

type Position = number[]

const getRandomNumber = (range: number = BOARD_SIZE) => {
    return Math.floor(Math.random() * range)
}

const Game: React.FC = () => {
    const [board, setBoard] = useState<BoardType>([[]])
    const [lose, setLose] = useState(false)
    const [goal, setGoal] = useState<Position>([BOARD_SIZE, BOARD_SIZE])
    const [score, setScore] = useState(0)
    const [isLengthening, setIsLengthening] = useState(false)

    const [snake, setSnake] = useState<Position[]>([[0, 0]])

    const [sX, sY] = snake[0]
    // start at bottom left
    // const [[sX, sY], setSnakePosition] = useState<Position>()

    // default direction = right
    const [direction, setDirection] = useState<Direction>([1, 0])

    const positionGoal = () => {
        const posn = [getRandomNumber(), getRandomNumber()]
        setGoal(posn)
        return posn
    }

    const initBoard = (): void => {
        const newBoard: BoardType = Array(BOARD_SIZE)
            .fill(null)
            .map(() => Array(BOARD_SIZE).fill(null))
        newBoard[sX][sY] = 'O'
        const [gX, gY] = positionGoal()
        newBoard[gX][gY] = '*'
        setBoard(newBoard)
    }

    // Run once on mount
    useEffect(() => {
        initBoard()
    }, [])

    const canMove = ([x, y]: Position, [dX, dY]: Direction): boolean => {
        return x + dX < BOARD_SIZE && x + dX >= 0 && y + dY < BOARD_SIZE && y + dY >= 0
    }

    useInterval(() => {
        if (!canMove([sX, sY], direction)) {
            setLose(true)
            return
        }

        const tempBoard = [...board]
        const newSnake = [...snake]

        const newX = sX + direction[0]
        const newY = sY + direction[1]
        tempBoard[newX][newY] = 'O'

        if (snake.length === score + 1) {
            const emptyPosn = newSnake.pop()
            if (emptyPosn) tempBoard[emptyPosn[0]][emptyPosn[1]] = null
        }

        newSnake.unshift([newX, newY])

        setSnake(newSnake)

        if (newX === goal[0] && newY === goal[1]) {
            setScore(score + 1)
            const [gX, gY] = positionGoal()
            tempBoard[gX][gY] = '*'
        }

        setBoard(tempBoard)
    }, ~~(1000 / (score + 1)) + MIN_INTERVAL)

    const onChangeDirection = (dir: Direction) => {
        setDirection(dir)
    }

    return lose ? (
        <Text> {`YOU LOSE ! Score was: ${score}`} </Text>
    ) : (
        <Board board={board} onChangeDirection={onChangeDirection} />
    )
}

export default Game
