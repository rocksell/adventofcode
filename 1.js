const data = ["L1", "L3", "L5", "L3", "R1", "L4", "L5", "R1", "R3", "L5", "R1", "L3", "L2", "L3", "R2", "R2", "L3", "L3", "R1", "L2", "R1", "L3", "L2", "R4", "R2", "L5", "R4", "L5", "R4", "L2", "R3", "L2", "R4", "R1", "L5", "L4", "R1", "L2", "R3", "R1", "R2", "L4", "R1", "L2", "R3", "L2", "L3", "R5", "L192", "R4", "L5", "R4", "L1", "R4", "L4", "R2", "L5", "R45", "L2", "L5", "R4", "R5", "L3", "R5", "R77", "R2", "R5", "L5", "R1", "R4", "L4", "L4", "R2", "L4", "L1", "R191", "R1", "L1", "L2", "L2", "L4", "L3", "R1", "L3", "R1", "R5", "R3", "L1", "L4", "L2", "L3", "L1", "L1", "R5", "L4", "R1", "L3", "R1", "L2", "R1", "R4", "R5", "L4", "L2", "R4", "R5", "L1", "L2", "R3", "L4", "R2", "R2", "R3", "L2", "L3", "L5", "R3", "R1", "L4", "L3", "R4", "R2", "R2", "R2", "R1", "L4", "R4", "R1", "R2", "R1", "L2", "L2", "R4", "L1", "L2", "R3", "L3", "L5", "L4", "R4", "L3", "L1", "L5", "L3", "L5", "R5", "L5", "L4", "L2", "R1", "L2", "L4", "L2", "L4", "L1", "R4", "R4", "R5", "R1", "L4", "R2", "L4", "L2", "L4", "R2", "L4", "L1", "L2", "R1", "R4", "R3", "R2", "R2", "R5", "L1", "L2"];

function getNewCoordinate(direction, x, y, length) {
    var map = {}
    map.upL = () => ({x: x -length, y, direction: "left"});
    map.upR = () => ({x: x+length, y, direction: "right"});
    map.downL = () => ({ ...map.upR(), direction: "right"});
    map.downR = () => ({ ...map.upL(), direction: "left" });
    map.leftL = () => ({x, y: y - length, direction: "down"});
    map.leftR = () => ({x, y: y + length, direction: "up"});
    map.rightL = () => ({ ...map.leftR(), direction: "up"});
    map.rightR = () => ({...map.leftL(), direction: "down"});
    console.log(direction, x, y, length)
    return map[direction]();
}

const result = data.reduce((result, current) => {
  const direction = result.direction + current.slice(0,1);
  const length = current.slice(1);
  return getNewCoordinate(direction, result.x, result.y, +length);
}, {x: 0, y:0, direction: "up"})

return Math.abs(result.x + result.y)