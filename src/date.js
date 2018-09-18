const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI





// export  default [
//     {
//         "id": "1",
//         "title": "First text in sait",
//         "text" : "Hello my name is Vitaliy",
//         "date": "10.09.18",
//         "comments": [
//             {
//                 "id": "1",
//                 "user": "Nazar",
//                 "comment": "Its bad"
//             },
//             {
//                 "id": "2",
//                 "user": "Nastia",
//                 "comment": "yes its bad"
//             }
//         ]
//
//     },
//     {
//         "id": "2",
//         "title": "Second text in sait",
//         "text" : "Hello my name is Vova",
//         "date": "11.09.18",
//         "comments": [
//             {
//                 "id": "1",
//                 "user": "Nazar",
//                 "comment": "Its bad 2"
//             },
//             {
//                 "id": "2",
//                 "user": "Nastia",
//                 "comment": "yes its bad 2"
//             }
//         ]
//
//     }
// ]