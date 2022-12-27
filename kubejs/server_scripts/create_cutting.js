

const lumberProcessingTime = 100
const lumberAmount = 12

// adds a recipe for chopping logs into lumber
onEvent('recipes', (event) => {
  logTypes.forEach((logType) => {
    event.custom({
      type: 'create:cutting',
      ingredients: [{ item: `tfc:wood/log/${logType}` }],
      results: [{ item: `tfc:wood/stripped_wood/${logType}`, count: 1 }],
      processingTime: lumberProcessingTime,
    })
    event.custom({
      type: 'create:cutting',
      ingredients: [{ item: `tfc:wood/stripped_wood/${logType}` }],
      results: [{ item: `tfc:wood/lumber/${logType}`, count: lumberAmount }],
      processingTime: lumberProcessingTime,
    })
  })

  framedGlass.forEach((glass) => {
    event.custom({
      type: 'create:cutting',
      ingredients: [
        {
          item: 'minecraft:glass',
        },
      ],
      results: [
        {
          item: glass,
          count: 1,
        },
      ],
      processingTime: 50,
    })
  })
})
