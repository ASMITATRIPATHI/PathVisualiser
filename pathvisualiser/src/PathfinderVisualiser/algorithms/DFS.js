import { updateUnvisited, getUnvisitedNeighbours } from "./Helpers";


export function DFS(startNode, finishNode, grid) {
  let visitedNodes = [];
  let unvisitedNodes = [startNode];
  startNode.distance = 0;

  let currentNode;
  while (unvisitedNodes.length > 0) {

    currentNode = unvisitedNodes.pop();


    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNodes.push(currentNode);


    if (currentNode === finishNode) break;


    let neighbourNodes = getUnvisitedNeighbours(currentNode, grid);
    updateUnvisited(currentNode, grid);


    unvisitedNodes = unvisitedNodes.concat(neighbourNodes);
  }

  return visitedNodes;
}
