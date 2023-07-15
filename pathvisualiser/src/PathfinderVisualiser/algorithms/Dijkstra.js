import { collectAllNodes, sortByDistance, updateUnvisited } from "./Helpers";


export function Dijkstra(startNode, finishNode, grid) {
  let visitedNodes = [startNode];
  startNode.distance = 0;
  let unvisitedNodes = collectAllNodes(grid);
  while (unvisitedNodes.length > 0) {
    sortByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift(); 

    
    if (closestNode.isWall) continue;

    if (closestNode.distance === Infinity) return visitedNodes;

    closestNode.isVisited = true;
    visitedNodes.push(closestNode);
    if (closestNode === finishNode) break;
    updateUnvisited(closestNode, grid);
  }
  return visitedNodes;
}
