// adds a recipe for zinc nuggets from zinc ingots
onEvent('recipes', (event) => {
  event.remove({ output: 'create:zinc_ingot' })
  event.remove({ output: 'create:zinc_nugget' })
  event.remove({ output: 'create:zinc_block' })

  event
    .shapeless('9x create:zinc_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/zinc',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')
})
onEvent('recipes', (event) => {
  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'create:zinc_nugget',
    },
    result_fluid: {
      fluid: 'tfc:metal/zinc',
      amount: 10,
    },
    temperature: 420,
  })
})

// adds a recipe for iron nuggets from wrought iron ingots
onEvent('recipes', (event) => {
  event.remove({ output: 'minecraft:iron_ingot' })
  event.remove({ output: 'minecraft:iron_nugget' })
  event.remove({ output: 'minecraft:iron_block' })

  event
    .shapeless('9x minecraft:iron_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/wrought_iron',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')
})
onEvent('recipes', (event) => {
  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'minecraft:iron_nugget',
    },
    result_fluid: {
      fluid: 'tfc:metal/cast_iron',
      amount: 10,
    },
    temperature: 1535,
  })
})

// adds a recipe for gold nuggets from gold ingots
onEvent('recipes', (event) => {
  event.remove({ output: 'minecraft:gold_ingot' })
  event.remove({ output: 'minecraft:gold_nugget' })
  event.remove({ output: 'minecraft:gold_block' })

  event
    .shapeless('9x minecraft:gold_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/gold',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')
})
onEvent('recipes', (event) => {
  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'minecraft:gold_nugget',
    },
    result_fluid: {
      fluid: 'tfc:metal/gold',
      amount: 10,
    },
    temperature: 1060,
  })
})

// adds a recipe for brass nuggets from brass ingots
onEvent('recipes', (event) => {
  event.remove({ output: 'create:brass_ingot' })
  event.remove({ output: 'create:brass_nugget' })
  event.remove({ output: 'create:brass_block' })

  event
    .shapeless('9x create:brass_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/brass',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')
})
onEvent('recipes', (event) => {
  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'create:brass_nugget',
    },
    result_fluid: {
      fluid: 'tfc:metal/brass',
      amount: 10,
    },
    temperature: 930,
  })
})

// replace all create iron with wrought iron
onEvent('recipes', (event) => {
  event.replaceOutput(
    {},
    'minecraft:iron_ingot',
    'tfc:metal/ingot/wrought_iron',
  )
  event.replaceInput({}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

  event.replaceOutput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')
  event.replaceInput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')

  event.replaceInput(
    {},
    'minecraft:iron_block',
    'tfc:metal/double_sheet/wrought_iron',
  )
})

// replace all create copper with tfc copper
onEvent('recipes', (event) => {
  event.replaceOutput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
  event.replaceInput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')

  event.replaceOutput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')
  event.replaceInput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')

  event.replaceInput(
    {},
    'minecraft:copper_block',
    'tfc:metal/double_sheet/copper',
  )
})

// replace all create brass with tfc brass
onEvent('recipes', (event) => {
  event.replaceOutput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')
  event.replaceInput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')

  event.replaceOutput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')
  event.replaceInput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')

  event.replaceInput({}, 'create:brass_block', 'tfc:metal/double_sheet/brass')
})

// replace all create gold sheet with wrought gold sheet
onEvent('recipes', (event) => {
  event.replaceOutput({}, 'create:golden_sheet', 'tfc:metal/sheet/gold')
  event.replaceInput({}, 'create:golden_sheet', 'tfc:metal/sheet/gold')
})
