require('../stylesheets/styles.css')
require('./grid/grid.module')

angular
    .module('squares', ['squares.grid'])
