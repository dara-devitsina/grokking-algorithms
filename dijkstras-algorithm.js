// build graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;
graph.a = {};
graph.a.fin = 1;
graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;
graph.fin = {};

// build costs table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// build parents table
const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

let processed = [];

function findLowestCostNode(prices) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  Object.keys(prices).forEach((node) => {
    const cost = prices[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  })
return lowestCostNode;
}

let node = findLowestCostNode(costs);

// process all nodes unless current node is null
while (node) {
  let cost = costs[node];
  const neighbors = graph[node];
  // process all neighbors of current node
  Object.keys(neighbors).forEach((n) => {
    const newCost = cost + neighbors[n];
    // if it's cheaper to get to neighbor through current node, rewrite cost for this node
    // and mark current node as parent node for its neighbor
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  })
  //mark current node as processed
  processed.push(node);
  // find next node to process and repeat loop
  node = findLowestCostNode(costs)
  console.log(node)
}

console.log(costs)