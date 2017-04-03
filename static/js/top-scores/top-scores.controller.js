angular
    .module('squares.topScores')
    .controller('TopScoresController', TopScoresController)

function TopScoresController () {
    let vm = this
    vm.scores = [
        { username: "fucker11", time: '11' },
        { username: "leDouche", time: '14' },
        { username: "Homerstein", time: '99' },
        { username: "qwerty", time: '110' },
        { username: "eeeee", time: '200' },
        { username: "jake", time: '240' },
        { username: "Jeffnen", time: '301' },
        { username: "Kert", time: '305' },
        { username: "ahbram", time: '310' },
        { username: "Twe3tie", time: '344' }
    ];
}