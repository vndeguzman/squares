angular
    .module('squares.play', ['squares.play.grid', 'squares.play.clock'])

require('./grid/grid.module')
require('./clock/clock.module')
require('./game.directive')