import { updateUnvisited, getUnvisitedNeighbours } from "./Helpers";

export function BFS(startNode, finishNode, grid) {
  let visitedNodes = [];
  let unvisitedNodes = [startNode];
  startNode.distance = 0;

  while (unvisitedNodes.length > 0) {
    let currentNode = unvisitedNodes.shift();

    if (currentNode.isVisited) continue;

    
    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNodes.push(currentNode);

    
    if (currentNode === finishNode) break;

    
    let neighbourNodes = getUnvisitedNeighbours(currentNode, grid);
    updateUnvisited(currentNode, grid);

    
    unvisitedNodes = unvisitedNodes.concat(neighbourNodes);
    console.log(unvisitedNodes);
  }
  return visitedNodes;
}
