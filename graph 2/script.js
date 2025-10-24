
const nodes = {1: (300, 50), 2: (220, 100), 3: (380, 100), 4: (160, 170), 5: (300, 170), 6: (440, 170), 7: (120, 250), 8: (220, 250), 9: (300, 250), 10: (380, 250), 11: (480, 250), 12: (180, 330), 13: (260, 330), 14: (340, 330), 15: (420, 330), 16: (260, 410), 17: (340, 410), 18: (180, 490), 19: (300, 490), 20: (420, 490), 21: (120, 570), 22: (240, 570), 23: (360, 570), 24: (480, 570), 25: (300, 650)};
const edges = [(1, 2), (1, 3), (2, 4), (2, 5), (3, 5), (3, 6), (4, 7), (4, 8), (5, 8), (5, 9), (6, 9), (6, 10), (7, 12), (8, 12), (8, 13), (9, 13), (9, 14), (10, 14), (10, 15), (11, 15), (12, 16), (13, 16), (13, 17), (14, 17), (15, 17), (16, 18), (16, 19), (17, 19), (17, 20), (18, 21), (18, 22), (19, 22), (19, 23), (20, 23), (20, 24), (21, 22), (22, 23), (23, 24), (22, 25), (23, 25)];

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
