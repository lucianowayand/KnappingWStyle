onEvent('recipes', (event) => {
  event.recipes.createCompacting(
    'tfc:powder/graphite',
    Array(8).fill('tfc:powder/charcoal'),
  )

  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        item: '9x tfc:rock/loose/quartzite',
      },
    ],
    results: [
      {
        item: 'minecraft:quartz',
        count: 1,
      },
    ],
    processingTime: 150,
  })

  tfcMetal.forEach((metal) => {
    event.recipes.createCompacting(`tfc:metal/double_ingot/${metal}`, [
      `2x tfc:metal/ingot/${metal}`,
      'tfc:powder/flux',
    ]).heated()
  })

  tfcMetal.forEach((metal) => {
    event.recipes.createCompacting(`tfc:metal/double_sheet/${metal}`, [
      `2x tfc:metal/sheet/${metal}`,
      'tfc:powder/flux',
    ]).heated()
  })

  event.recipes.createCompacting('kubejs:galvanized_steel_double_ingot', [
    "2x kubejs:galvanized_steel",
    'tfc:powder/flux',
  ]).heated()

  event.recipes.createCompacting('kubejs:galvanized_steel_double_sheet', [
    `2x kubejs:galvanized_steel_sheet`,
    'tfc:powder/flux',
  ]).heated()
})
