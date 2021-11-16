const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall" 
];

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", 
    "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House",
    "Farm", "Marketplace", "Post Office"
]

function buildRoadGraph(roads) {
    let graph = {};
    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else graph[from].push(to);
    }
    for(let [from, to] of roads.map(r => r.split("-"))) {
        addEdge(to, from);
        addEdge(from, to);
    }
    return graph;
}

const roadGraph = buildRoadGraph(roads);

class VillageState {
    location="";
    parcels = [];
    
    constructor(location, parcels) {
        this.location = location;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.location].includes(destination)) return this;
        console.log("Moving to:", destination);
        return new VillageState(destination, this.parcels.filter(p => p.destination != destination))
    }

    static intialize(parcelCount = 5) {
        let parcels = [];
        for(let i = 0; i < parcelCount; i++) {
            parcels.push({destination: randomDestination(Object.keys(roadGraph))})
        }
        return new VillageState("Post Office", parcels)
    }
}

function randomDestination(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

let village = VillageState.intialize();
// console.log("Parcels:", village.parcels);

function fixedRouteRobot(memory) {
    if(memory.length == 0) memory = mailRoute;
    return {destination: memory[0], memory: memory.slice(1)};
}

function shortestRouteRobot(village) {
    let turns = 0;
    console.log("Parcels:", village.parcels)
    while(village.parcels.length > 0) {
        let nextDestination = village.parcels.pop().destination;
        console.log("Next parcel destination:", nextDestination);
        let bestRoute = findShortestRoute(village.location, nextDestination);
        while(bestRoute.length > 0) {
            village = village.move(bestRoute[0]);
            bestRoute = bestRoute.slice(1)
            turns++;
        }
        // console.log("Parcels left:", village.parcels)
    }
    console.log("Done in", turns, "turns");
    console.log("All delivered:", village.parcels)
    return turns;
}

function findShortestRoute (currentLoc, destination) {
    let route = [currentLoc];
   for(let i = 0; i < route.length; i++) {
       let r = route[i];
       let nextLocs = roadGraph[r];
        if(nextLocs.includes(destination)) return [...route, destination]
        route.push(nextLocs.filter(e => !route.includes(e))[0])
    }
}

function compareRobots(robotOne, robotTwo) {

    const testVillage = VillageState.intialize(100);
    const robotOneNumberOfTurns = robotOne(testVillage);
    const robotTwoNumberOfTurns = robotTwo(testVillage);
    console.log("It took robot one", robotOneNumberOfTurns, "turns to complete the given tasks");
    console.log("It took robot two", robotTwoNumberOfTurns, "turns to complete the given tasks");
}

shortestRouteRobot(village);
compareRobots(shortestRouteRobot, shortestRouteRobot);

