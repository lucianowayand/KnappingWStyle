
onEvent('recipes', (event) => {
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

  event.shapeless('create:sand_paper', [
    '#forge:sand',
    'minecraft:paper',
  ])

  //'#forge:smooth_stone_slab'
  event.recipes
    .createSequencedAssembly(
      [
        // start the recipe
        'create:precision_mechanism', // this is the item that will appear in JEI as the result
      ],
      'tfc:metal/sheet/gold',
      [
        // 'create:golden_sheet' is the input
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
          'create:incomplete_precision_mechanism',
          'create:cogwheel',
        ]),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
          'create:incomplete_precision_mechanism',
          'create:large_cogwheel',
        ]),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
          'create:incomplete_precision_mechanism',
          ['minecraft:iron_nugget', 'create:zinc_nugget'],
        ]),
      ],
    )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(1) // set the transitional item and the loops (amount of repetitions)

  event.remove({ output: 'create:track' })
  event.recipes
    .createSequencedAssembly(
      [
        // start the recipe
        'create:track', // this is the item that will appear in JEI as the result
      ],
      '#forge:smooth_stone_slab',
      [
        // 'create:golden_sheet' is the input
        // the transitional item set by "transitionalItem('create:incomplete_large_cogwheel')" is the item used during the intermediate stages of the assembly
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
          'create:incomplete_precision_mechanism',
          ['minecraft:iron_nugget', 'create:zinc_nugget'],
        ]),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying('create:incomplete_precision_mechanism', [
          'create:incomplete_precision_mechanism',
          ['minecraft:iron_nugget', 'create:zinc_nugget'],
        ]),
        event.recipes.createPressing(
          'create:incomplete_precision_mechanism',
          'create:incomplete_precision_mechanism',
        ),
      ],
    )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(1) // set the transitional item and the loops (amount of repetitions)
})
