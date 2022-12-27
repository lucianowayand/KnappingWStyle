onEvent('recipes', (event) => {
  event
    .shapeless('9x create:zinc_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/zinc',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')

  event
    .shapeless('9x minecraft:iron_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/wrought_iron',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')

  event
    .shapeless('9x minecraft:gold_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/gold',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')

  event
    .shapeless('9x create:brass_nugget', [
      '#tfc:hammers',
      'tfc:metal/ingot/brass',
    ])
    .damageIngredient(0)
    .keepIngredient('#tfc:hammers')

  event.shapeless('create:sand_paper', ['#forge:sand', 'minecraft:paper'])
})
