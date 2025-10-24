
const nodes = {1: (300, 50), 2: (250, 120), 3: (350, 120), 4: (200, 190), 5: (300, 190), 6: (400, 190), 7: (150, 260), 8: (250, 260), 9: (350, 260), 10: (450, 260), 11: (100, 330), 12: (200, 330), 13: (300, 330), 14: (400, 330), 15: (500, 330), 16: (150, 400), 17: (250, 400), 18: (350, 400), 19: (450, 400), 20: (200, 470), 21: (300, 470), 22: (400, 470), 23: (250, 540), 24: (350, 540), 25: (300, 610)};
const edges = [(1, 2), (1, 3), (2, 4), (2, 5), (3, 5), (3, 6), (4, 7), (4, 8), (5, 8), (5, 9), (6, 9), (6, 10), (7, 11), (7, 12), (8, 12), (8, 13), (9, 13), (9, 14), (10, 14), (10, 15), (11, 16), (12, 16), (12, 17), (13, 17), (13, 18), (14, 18), (14, 19), (15, 19), (16, 20), (17, 20), (17, 21), (18, 21), (18, 22), (19, 22), (20, 23), (21, 23), (21, 24), (22, 24), (23, 25), (24, 25)];

const board = document.getElementById("board");
const svg = document.getElementById("connections");

for (const [id, [x, y]] of Object.entries(nodes)) {
  const node = document.createElement("div");
  node.className = "node";
  node.style.left = (x - 20) + "px";
  node.style.top = (y - 20) + "px";
  node.textContent = id;
  board.appendChild(node);
}

for (const [a, b] of edges) {
  const [x1, y1] = nodes[a];
  const [x2, y2] = nodes[b];
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#999");
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);
}
