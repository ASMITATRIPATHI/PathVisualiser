
export function sortByDistance(nodes) {
    nodes.sort((nodeA, nodeB) => {
      return nodeA.distance - nodeB.distance;
    });
  }
  
  
  export function collectAllNodes(grid) {
    let nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
 
  export function updateUnvisited(node, grid) {
   
    const neighbourNodes = getUnvisitedNeighbours(node, grid);
    neighbourNodes.forEach((neighbour) => {
      neighbour.distance = node.distance + 1;
      neighbour.lastNode = node;
    });
  }
  
 
  export function getUnvisitedNeighbours(node, grid) {
    let neighbourNodes = [];
    const { row, col } = node;
  
    if (row - 1 >= 0 && !grid[row - 1][col].isVisited)
      neighbourNodes.push(grid[row - 1][col]);
    if (row + 1 < grid.length && !grid[row + 1][col].isVisited)
      neighbourNodes.push(grid[row + 1][col]);
    if (col - 1 >= 0 && !grid[row][col - 1].isVisited)
      neighbourNodes.push(grid[row][col - 1]);
    if (col + 1 < grid[0].length && !grid[row][col + 1].isVisited)
      neighbourNodes.push(grid[row][col + 1]);
    return neighbourNodes;
  }
  