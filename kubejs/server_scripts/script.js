// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info(
  'Hello, World! (You will see this line every time server resources reload)',
)
onEvent('player.logged_in', (event) => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give(
      Item.of(
        'patchouli:guide_book',
        '{"patchouli:book":"patchouli:knapping_with_style"}',
      ),
    )
  }
})


