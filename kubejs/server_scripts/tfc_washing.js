//['tfc:ore/small_magnetite', 'tfc:ore/small_garnierite', 'tfc:ore/small_bismuthinite', 'tfc:ore/small_sphalerite']
const washingChance = 0.1

onEvent('recipes', (event) => {
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        item: 'tfc:rock/gravel/basalt',
      },
    ],
    results: [
      {
        item: 'tfc:ore/small_magnetite',
        count: 1,
        chance: washingChance,
      },
    ],
    processingTime: 150,
  })
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        item: 'tfc:rock/gravel/schist',
      },
    ],
    results: [
      {
        item: 'tfc:ore/small_bismuthinite',
        count: 1,
        chance: washingChance,
      },
    ],
    processingTime: 150,
  })
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        item: 'tfc:rock/gravel/gabbro',
      },
    ],
    results: [
      {
        item: 'tfc:ore/small_garnierite',
        count: 1,
        chance: washingChance,
      },
    ],
    processingTime: 150,
  })
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        item: 'tfc:rock/gravel/andesite',
      },
    ],
    results: [
      {
        item: 'tfc:ore/small_sphalerite',
        count: 1,
        chance: washingChance,
      },
    ],
    processingTime: 150,
  })
  
})
