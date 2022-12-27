onEvent('recipes', (event) => {
  rockTypes.forEach((rockType) => {
    event.custom({
      type: 'create:milling',
      ingredients: [
        {
          item: `tfc:rock/cobble/${rockType}`,
        },
      ],
      results: [
        {
          item: `tfc:rock/gravel/${rockType}`,
          count: 1,
        },
      ],
      processingTime: 50,
    })
  })

  // gold sand
  event.custom({
    type: 'create:milling',
    ingredients: [
      {
        item: `tfc:rock/gravel/claystone`,
      },
    ],
    results: [
      {
        item: 'tfc:sand/yellow',
        count: 1,
      },
    ],
    processingTime: 50,
  })

  // copper sand
  event.custom({
    type: 'create:milling',
    ingredients: [
      {
        item: `tfc:rock/gravel/chert`,
      },
    ],
    results: [
      {
        item: 'tfc:sand/red',
        count: 1,
      },
    ],
    processingTime: 50,
  })

  // silver sand
  event.custom({
    type: 'create:milling',
    ingredients: [
      {
        item: `tfc:rock/gravel/chalk`,
      },
    ],
    results: [
      {
        item: 'tfc:sand/white',
        count: 1,
      },
    ],
    processingTime: 50,
  })

  // tin sand
  event.custom({
    type: 'create:milling',
    ingredients: [
      {
        item: `tfc:rock/gravel/conglomerate`,
      },
    ],
    results: [
      {
        item: 'tfc:sand/brown',
        count: 1,
      },
    ],
    processingTime: 50,
  })

  sandColors.forEach((sandColor) => {
    event.custom({
      type: 'create:milling',
      ingredients: [
        {
          item: `tfc:raw_sandstone/${sandColor}`,
        },
      ],
      results: [
        {
          item: `tfc:sand/${sandColor}`,
          count: 1,
        },
      ],
      processingTime: 50,
    })
  })

  event.remove({ output: 'minecraft:black_dye', type: 'create:milling' })
  event.custom({
    type: 'create:milling',
    ingredients: [
      {
        item: 'minecraft:charcoal',
      },
    ],
    results: [
      {
        item: 'tfc:powder/charcoal',
        count: 6,
      },
    ],
    processingTime: 50,
  })
})
