import { useEffect, useRef } from 'react'

export default function useSlideDirection(exerciseIndex: number) {
  const previousExerciseIndexRef = useRef(-1)
  const previousSlideDirectionRef = useRef<'left' | 'right'>('left')

  useEffect(() => {
    previousExerciseIndexRef.current = exerciseIndex
  }, [exerciseIndex])

  if (exerciseIndex > previousExerciseIndexRef.current) {
    previousSlideDirectionRef.current = 'left'
  } else if (exerciseIndex < previousExerciseIndexRef.current) {
    previousSlideDirectionRef.current = 'right'
  }
  return previousSlideDirectionRef.current
}
