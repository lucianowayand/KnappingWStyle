onEvent('recipes', (event) => {
  event.remove({ output: 'minecraft:amethyst_block' })
  event.replaceOutput({}, 'minecraft:amethyst_shard', 'tfc:gem/amethyst')
  event.replaceInput({}, 'minecraft:amethyst_shard', 'tfc:gem/amethyst')

  event.replaceInput({}, 'minecraft:barrel', '#tfcbarrels:barrels')

  event.remove({ output: 'minecraft:dried_kelp' })
  event.remove({ output: 'minecraft:dried_kelp_block' })
  event.replaceInput({}, 'minecraft:dried_kelp', ['tfc:jute_fiber', 'tfc:wool'])
  event.replaceInput({}, 'minecraft:dried_kelp_block', [
    'tfc:burlap_cloth',
    'tfc:silk_cloth',
    'tfc:wool_cloth',
  ])

  event.remove({ output: 'create:hose_pulley' })
  event
    .shaped('create:hose_pulley', [' A ', ' B ', ' C '], {
      A: 'create:copper_casing',
      B: 'minecraft:leather',
      C: 'tfc:metal/sheet/copper',
    })
    .noMirror()
    .noShrink()

  event.remove({ output: 'create:rope_pulley' })
  event
    .shaped('create:rope_pulley', [' A ', ' B ', ' C '], {
      A: 'create:copper_casing',
      B: 'minecraft:lead',
      C: 'tfc:metal/sheet/wrought_iron',
    })
    .noMirror()
    .noShrink()

  event.replaceInput({}, 'minecraft:slime_ball', 'tfc:glue')

  event.remove({ output: 'create:tree_fertilizer' })

  event.remove({ output: 'createsifter:custom_mesh' })
  event.remove({ output: 'createsifter:brass_mesh' })
  event.remove({ output: 'createsifter:zinc_mesh' })
  event.remove({ output: 'createsifter:andesite_mesh' })

  event.remove({ output: 'create:sturdy_sheet' })
  event.replaceInput({}, 'create:sturdy_sheet', 'tfc:metal/sheet/black_steel')

  event.remove({ output: 'minecraft:diorite' })
  event.remove({ output: 'minecraft:granite' })

  // remove all create food recipes
  event.remove({
    output: [
      'minecraft:bread',
      'create:blaze_burner',
      'create:empty_blaze_burner',
      'create:blaze_cake',
      'create:blaze_cake_base',
      'create:cinder_flour',
      'create:dough',
      'create:wheat_flour',
      'minecraft:honey_bottle',
      'create:honey_bucket',
      'create:honeyed_apple',
      'minecraft:honey_block',
      'minecraft:honeycomb_block',
      'minecraft:honeycomb',
      'minecraft:prismarine_shard',
      'minecraft:prismarine_crystals',
    ],
  }),
  event.remove({
    input: [
      'minecraft:bread',
      'create:blaze_burner',
      'create:empty_blaze_burner',
      'create:blaze_cake',
      'create:blaze_cake_base',
      'create:cinder_flour',
      'create:dough',
      'create:wheat_flour',
      'minecraft:honey_bottle',
      'create:honey_bucket',
      'create:honeyed_apple',
      'minecraft:honey_block',
      'minecraft:honeycomb_block',
      'minecraft:honeycomb',
      'minecraft:prismarine_shard',
      'minecraft:prismarine_crystals',
    ],
  })

})
