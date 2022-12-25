onEvent('recipes', (event) => {
  tfcMetal.forEach((metal) => {
    event.recipes.createPressing(
      [
        'tfc:metal/ingot/' + metal,
        Item.withChance('tfc:ceramic/ingot_mold', 0.6),
      ],
      Item.of(
        'tfc:ceramic/ingot_mold',
        '{heat:{heat:0.0f,ticks:0L},tank:{Amount:100,FluidName:"tfc:metal/' +
          metal +
          '"}}',
      ),
    )
  })
  event.recipes.createPressing(
    [
      'firmalife:metal/ingot/chromium',
      Item.withChance('tfc:ceramic/ingot_mold', 0.6),
    ],
    Item.of(
      'tfc:ceramic/ingot_mold',
      '{heat:{heat:0.0f,ticks:0L},tank:{Amount:100,FluidName:"firmalife:metal/chromium"}}',
    ),
  )
})

onEvent('recipes', (event) => {
  event.recipes.createPressing(
    'tfc:metal/ingot/high_carbon_steel',
    'tfc:metal/ingot/pig_iron',
  )
  event.recipes.createPressing(
    'tfc:metal/ingot/steel',
    'tfc:metal/ingot/high_carbon_steel',
  )
})