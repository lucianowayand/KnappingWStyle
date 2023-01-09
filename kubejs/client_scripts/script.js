// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	onEvent('client.generate_assets', event => {
		const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
		
		rename('create:andesite_alloy', "Galvanized Steel")
		
	  })
})