// adds a recipe for andesite alloy from andesite and zinc
onEvent('recipes', (event) => {
  event.remove({ output: 'create:andesite_alloy' })

  event.shaped('create:andesite_alloy', ['AB', 'BA'], {
    A: 'tfc:rock/loose/andesite',
    B: 'create:zinc_nugget',
  })

  // another option is rhyolite thats generated from lava
  event.shaped('create:andesite_alloy', ['AB', 'BA'], {
    A: 'tfc:rock/loose/rhyolite',
    B: 'create:zinc_nugget',
  })
})

