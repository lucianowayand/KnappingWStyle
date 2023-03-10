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

  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'kubejs:unfinished_propeller',
    },
    result_fluid: {
      fluid: 'tfc:metal/cast_iron',
      amount: 400,
    },
    temperature: 1535,
  })

  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'kubejs:unfinished_whisk',
    },
    result_fluid: {
      fluid: 'tfc:metal/cast_iron',
      amount: 400,
    },
    temperature: 1535,
  })

  event.custom({
    type: 'tfc:heating',
    ingredient: {
      item: 'kubejs:unfinished_brass_hand',
    },
    result_fluid: {
      fluid: 'tfc:metal/brass',
      amount: 400,
    },
    temperature: 930,
  })
})
