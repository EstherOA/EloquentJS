exports.buildGraph = function (roads) {
    let graph = {};
    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else graph[from].push(to);
    }
    for(let [from, to] of roads) {
        addEdge(to, from);
        addEdge(from, to);
    }
    return graph;
} 
 
