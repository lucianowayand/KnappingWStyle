onEvent('recipes', (event) => {
  event.remove({ mod: '@minecraft' })
  event.remove({ type: 'minecraft:blasting' })
  event.remove({ type: 'minecraft:campfire_cooking' })
  event.remove({ type: 'minecraft:smelting' })
  event.remove({ type: 'minecraft:smithing' })
  event.remove({ type: 'minecraft:smoking' })
  event.remove({ type: 'minecraft:stonecutting' })
  event.remove({ type: 'createsifter:sifting' })
})

onEvent('recipes', (event) => {
  event.remove({ output: 'minecraft:amethyst_block' })
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
  event.remove({ output: 'create:rope_pulley' })

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
  event.remove({ input: 'minecraft:saddle' })
  event.remove({ input: 'minecraft:leather_horse_armor' })
  event.remove({ input: 'minecraft:diamond_horse_armor' })
  event.remove({ input: 'minecraft:rabbit_hide' })

  event.remove({ output: 'create:copper_nugget' })
  event.remove({ output: 'create:copper_sheet' })
  event.remove({ output: 'create:golden_sheet' })
  minecraftIngots.forEach((ingot) => {
    event.remove({ output: `minecraft:${ingot}_ingot` })
    event.remove({ output: `minecraft:${ingot}_nugget` })
    event.remove({ output: `minecraft:${ingot}_block` })
  })

  createIngots.forEach((ingot) => {
    event.remove({ output: `create:${ingot}_ingot` })
    event.remove({ output: `create:${ingot}_nugget` })
    event.remove({ output: `create:${ingot}_block` })
    event.remove({ output: `create:${ingot}_sheet` })
  })

  event.replaceInput({}, `minecraft:iron_block`, 'tfc:metal/double_sheet/wrought_iron')
  event.replaceInput({}, 'minecraft:copper_block', 'tfc:metal/double_sheet/copper')
  event.replaceInput({}, 'create:brass_block', 'tfc:metal/double_sheet/brass')

  event.replaceInput({}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
  event.replaceInput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
  event.replaceInput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')

  event.replaceInput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')
  event.replaceInput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')
  event.replaceInput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')
  event.replaceInput({}, 'create:golden_sheet', 'tfc:metal/sheet/gold')

  event.remove({ output: 'create:andesite_alloy' })
  event.remove({ output: 'create:track' })

  event.remove({ output: '@waystones' })
  event.remove({ output: 'create:andesite_alloy' })
  event.replaceInput({}, 'create:andesite_alloy', 'kubejs:galvanized_steel')

  event.remove({output: 'create:andesite_ladder'})
})
