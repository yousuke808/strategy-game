
// ノード数（仮に25個）を描画
const board = document.getElementById("game-board");
for (let i = 1; i <= 25; i++) {
  const node = document.createElement("div");
  node.className = "node";
  node.textContent = i;
  board.appendChild(node);
}
