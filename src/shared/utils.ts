import Axios from 'axios'
import { useEffect, useRef } from 'react'

export const axiosClient = Axios.create({
    // baseURL: '',
    // headers: {
    //     Authorization: `Bearer ${token}`
    // }
})

export const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback: any = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            if (savedCallback.current !== undefined) {
                savedCallback.current()
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}
