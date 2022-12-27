onEvent('recipes', (event) => {
  tfcMetal.concat(tfcMetalUnfinished).forEach((metal) => {
    event.recipes.createPressing(
      [
        'tfc:metal/ingot/' + metal,
        Item.withChance('tfc:ceramic/ingot_mold', 0.8),
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
      Item.withChance('tfc:ceramic/ingot_mold', 0.8),
    ],
    Item.of(
      'tfc:ceramic/ingot_mold',
      '{heat:{heat:0.0f,ticks:0L},tank:{Amount:100,FluidName:"firmalife:metal/chromium"}}',
    ),
  )
  
  toolHeads.forEach((element) => {
    tfcMetalTools.concat(tfcMetalToolsHard).map((metal) => {
      if(element !== 'mace'){
        event.recipes.createPressing(
          `tfc:metal/${element}_head/${metal}`,
          Item.of(
            `tfc:ceramic/${element}_head_mold`,
            `{heat:{heat:0.0f,ticks:0L},tank:{Amount:100,FluidName:"tfc:metal/${metal}"}}`,
          ),
        )
      } else {
        event.recipes.createPressing(
          `tfc:metal/${element}_head/${metal}`,
          Item.of(
            `tfc:ceramic/${element}_head_mold`,
            `{heat:{heat:0.0f,ticks:0L},tank:{Amount:200,FluidName:"tfc:metal/${metal}"}}`,
          ),
        )
      }
    })
  })

  toolBlades.forEach((element) => {
    tfcMetalTools.concat(tfcMetalToolsHard).map((metal) => {
      if(element !== 'sword'){
        event.recipes.createPressing(
          `tfc:metal/${element}_blade/${metal}`,
          Item.of(
            `tfc:ceramic/${element}_blade_mold`,
            `{heat:{heat:0.0f,ticks:0L},tank:{Amount:100,FluidName:"tfc:metal/${metal}"}}`,
          ),
        )
      } else {
        event.recipes.createPressing(
          `tfc:metal/${element}_blade/${metal}`,
          Item.of(
            `tfc:ceramic/${element}_blade_mold`,
            `{heat:{heat:0.0f,ticks:0L},tank:{Amount:200,FluidName:"tfc:metal/${metal}"}}`,
          ),
        )
      }
    })
  })

  event.recipes.createPressing(
    'tfc:metal/ingot/high_carbon_steel',
    'tfc:metal/ingot/pig_iron',
  )
  event.recipes.createPressing(
    'tfc:metal/ingot/steel',
    'tfc:metal/ingot/high_carbon_steel',
  )

  tfcMetal.forEach((element) => {
    event.recipes.createPressing(
      `tfc:metal/sheet/${element}`,
      `tfc:metal/double_ingot/${element}`
    )
  })
})
