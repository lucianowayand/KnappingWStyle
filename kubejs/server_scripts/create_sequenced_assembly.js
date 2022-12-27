
onEvent('recipes', (event) => {
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
