import { useEffect, useState } from 'react'

export default function useIntervalEnding(
  isTimerRunning: boolean,
  intervalCurrentTime: number,
  intervalDuration: number
) {
  const [isIntervalEnding, setIntervalEnding] = useState(false)

  useEffect(() => {
    if (isTimerRunning && intervalCurrentTime === intervalDuration - 1) {
      const timer = setTimeout(() => {
        setIntervalEnding(true)
      }, 650)

      return () => {
        clearTimeout(timer)
      }
    } else {
      setIntervalEnding(false)
    }
  }, [intervalCurrentTime, intervalDuration, isTimerRunning])

  return isIntervalEnding
}
