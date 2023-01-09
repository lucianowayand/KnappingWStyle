onEvent('recipes', (event) => {
  event.shaped('create:andesite_alloy', ['AB', 'BA'], {
    A: 'tfc:rock/loose/andesite',
    B: 'create:zinc_nugget',
  })

  // another option is rhyolite thats generated from lava
  event.shaped('create:andesite_alloy', ['AB', 'BA'], {
    A: 'tfc:rock/loose/rhyolite',
    B: 'create:zinc_nugget',
  })

  event
    .shaped('create:rope_pulley', [' A ', ' B ', ' C '], {
      A: 'create:copper_casing',
      B: 'minecraft:lead',
      C: 'tfc:metal/sheet/wrought_iron',
    })
    .noMirror()
    .noShrink()

  event
    .shaped('create:hose_pulley', [' A ', ' B ', ' C '], {
      A: 'create:copper_casing',
      B: 'minecraft:leather',
      C: 'tfc:metal/sheet/copper',
    })
    .noMirror()
    .noShrink()

  event.shaped('waystones:waystone', [' A ', 'ABA', 'CCC'], {
    A: '#forge:stone_bricks',
    B: '#forge:gems',
    C: 'tfc:metal/sheet/black_bronze',
  }).noMirror().noShrink()
})
