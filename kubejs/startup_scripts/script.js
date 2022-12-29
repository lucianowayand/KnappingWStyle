// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('coin_gold').displayName('Gold Coin')
	event.create('coin_blue_steel').displayName('Blue Steel Coin')
	event.create('coin_red_steel').displayName('Red Steel Coin')
})

onEvent('block.registry', event => {

})