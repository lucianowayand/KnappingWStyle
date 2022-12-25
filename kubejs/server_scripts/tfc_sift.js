
const siftProcessingTime = 250
const extraDropChance = 0.1

// adds a recipe for sifting copper deposits into copper ore
onEvent('recipes', (event) => {
  event.custom({
    type: 'createsifter:sifting',
    ingredients: [
      { item: 'tfc:sand/red' },
      { item: 'createsifter:string_mesh' },
    ],
    processingTime: siftProcessingTime,
    results: [
      { chance: 0.1, item: `tfc:deposit/native_copper/chert` },
    ],
  })
  
  rockTypes.forEach((rockType) => {
    event.custom({
      type: 'createsifter:sifting',
      ingredients: [
        { item: `tfc:deposit/native_copper/${rockType}` },
        { item: 'createsifter:string_mesh' },
      ],
      processingTime: siftProcessingTime,
      results: [
        { chance: 0.25, item: 'tfc:ore/small_native_copper' },
        { chance: extraDropChance, item: 'tfc:ore/small_native_copper' },
      ],
    })
  })
})

// adds a recipe for sifting silver deposits into silver ore
onEvent('recipes', (event) => {
  event.custom({
    type: 'createsifter:sifting',
    ingredients: [
      { item: 'tfc:sand/white' },
      { item: 'createsifter:string_mesh' },
    ],
    processingTime: siftProcessingTime,
    results: [
      { chance: 0.1, item: `tfc:deposit/native_silver/chalk` },
    ],
  })

  rockTypes.forEach((rockType) => {
    event.custom({
      type: 'createsifter:sifting',
      ingredients: [
        { item: `tfc:deposit/native_silver/${rockType}` },
        { item: 'createsifter:string_mesh' },
      ],
      processingTime: siftProcessingTime,
      results: [
        { chance: 0.25, item: 'tfc:ore/small_native_silver' },
      ],
    })
  })
})

// adds a recipe for sifting gold deposits into gold ore
onEvent('recipes', (event) => {
  event.custom({
    type: 'createsifter:sifting',
    ingredients: [
      { item: 'tfc:sand/yellow' },
      { item: 'createsifter:string_mesh' },
    ],
    processingTime: siftProcessingTime,
    results: [
      { chance: 0.1, item: `tfc:deposit/native_gold/claystone` },
    ],
  })

  rockTypes.forEach((rockType) => {
    event.custom({
      type: 'createsifter:sifting',
      ingredients: [
        { item: `tfc:deposit/native_gold/${rockType}` },
        { item: 'createsifter:string_mesh' },
      ],
      processingTime: siftProcessingTime,
      results: [
        { chance: 0.25, item: 'tfc:ore/small_native_gold' },
      ],
    })
  })
})

// adds a recipe for sifting tin deposits into tin ore
onEvent('recipes', (event) => {
  event.custom({
    type: 'createsifter:sifting',
    ingredients: [
      { item: 'tfc:sand/brown' },
      { item: 'createsifter:string_mesh' },
    ],
    processingTime: siftProcessingTime,
    results: [
      { chance: 0.1, item: `tfc:deposit/cassiterite/conglomerate` },
    ],
  })

  rockTypes.forEach((rockType) => {
    event.custom({
      type: 'createsifter:sifting',
      ingredients: [
        { item: `tfc:deposit/cassiterite/${rockType}` },
        { item: 'createsifter:string_mesh' },
      ],
      processingTime: siftProcessingTime,
      results: [
        { chance: 0.25, item: 'tfc:ore/small_cassiterite' },
      ],
    })
  })
})
