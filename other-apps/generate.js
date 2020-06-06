const fs = require('fs').promises

;(async () => {
  const exercisesContent = await fs.readFile('./exercises.json')
  const exerciseNames = JSON.parse(exercisesContent)

  const itwo = {
    exercises: exerciseNames.map((name, i) => ({
      favourite: false,
      iterations: 1,
      name,
      prepareTime: i > 28 ? 10 : 0,
      restTime: 10,
      workTime: i > 28 ? 40 : 30,
    })),
    plans: [
      {
        exerciseNames,
        favourite: false,
        name: 'Hockey Drills',
        planPrepareTime: 10,
        planRestTime: 10,
        useFirstExercisePrepareTime: false,
      },
    ],
  }
  await fs.writeFile('./Hockey Drills.itwo', JSON.stringify(itwo))

  const hiitmi = {
    fileversion: 1,
    timers: [
      {
        name: 'Hockey Drills',
        work: 30,
        rest: 10,
        intervals: 1,
        setsEnable: true,
        sets: 43,
        setsBreak: 20,
        labelsForSets: true,
        warmupCooldownEnable: true,
        warmup: 120,
        cooldown: 120,
        color: -435141,
        'interval names': exerciseNames.map((name, i) => ({ [i]: name })),
        unreadFlag: false,
      },
    ],
  }
  await fs.writeFile('./Hockey Drills.hiitmi', JSON.stringify(hiitmi))

  const workoutIntervals = []
  exerciseNames.forEach((name, i) => {
    if (i === 0 || i > 28) {
      workoutIntervals.push({
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        time: 10,
        type: 0,
      })
    }
    workoutIntervals.push({
      addSet: false,
      bpm: 0,
      cycle: -1,
      cyclesCount: -1,
      description: name,
      isRepsMode: false,
      reps: 0,
      tabata: -1,
      tabatasCount: -1,
      time: i > 28 ? 40 : 30,
      type: 1,
    })
    if (i !== exerciseNames.length - 1) {
      workoutIntervals.push({
        addSet: false,
        bpm: 0,
        cycle: -1,
        cyclesCount: -1,
        isRepsMode: false,
        reps: 0,
        tabata: -1,
        tabatasCount: -1,
        time: 10,
        type: 2,
      })
    }
  })
  const workout = {
    workout: {
      colorId: 7,
      coolDown: 0,
      cycles: 8,
      doNotRepeatFirstPrepareAndLastCoolDown: false,
      id: 13,
      intervals: workoutIntervals,
      intervalsSetsCount: 1,
      isFavorite: false,
      isRestRepsMode: false,
      isWorkRepsMode: false,
      prepare: 10,
      rest: 10,
      restBetweenTabatas: 0,
      restBetweenWorkoutsReps: 0,
      restBetweenWorkoutsRepsMode: false,
      restBetweenWorkoutsTime: 0,
      restBpm: 0,
      restReps: 0,
      skipLastRestInterval: true,
      skipPrepareAndCoolDownBetweenWorkouts: false,
      tabatasCount: 1,
      title: 'Hockey Drills',
      work: 30,
      workBpm: 0,
      workReps: 0,
    },
    fileVersion: 1,
    packageName: 'com.evgeniysharafan.tabatatimer',
    platform: 1,
    type: 1,
    versionCode: 502001,
    versionName: '5.2.1',
  }
  await fs.writeFile('./Hockey Drills.workout', JSON.stringify(workout))
})()
