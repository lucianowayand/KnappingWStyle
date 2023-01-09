// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('coin_gold').displayName('Gold Coin')
	event.create('coin_blue_steel').displayName('Blue Steel Coin')
	event.create('coin_red_steel').displayName('Red Steel Coin')
	event.create('galvanized_steel').displayName('Galvanized Steel Ingot')
	event.create('galvanized_steel_double_ingot').displayName('Galvanized Steel Double Ingot')
	event.create('galvanized_steel_sheet').displayName('Galvanized Steel Sheet')
	event.create('galvanized_steel_double_sheet').displayName('Galvanized Steel Double Sheet')
})

onEvent('block.registry', event => {

})

onEvent('fluid.registry', event => {
	event.create('molten_galvanized_steel')
	.displayName('Molten Galvanized Steel')
    .thickTexture(0x7D93A1)
    .bucketColor(0x7D93A1)
})