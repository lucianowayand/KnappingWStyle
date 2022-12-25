onEvent('recipes', event => {
    event.remove({output: 'create_jetpack:jetpack'})
	event.recipes.createMechanicalCrafting('create_jetpack:jetpack', [
		' BSB ',
        'BMTMB',
        'BCLCB',
        ' C C '
	], {
		B:'tfc:metal/sheet/brass',
        S:'create:shaft',
        M:'create:precision_mechanism',
        C:'create:chute',
        T:'create:copper_backtank',
        L:'create:large_cogwheel'
	})
})