
const board = document.getElementById("game-board");
const role = document.body.dataset.role;

for (let i = 1; i <= 25; i++) {
  const node = document.createElement("div");
  node.className = "node";

  // ユニットの表示例（仮データ）
  let unit = null;
  if (role === "player1" && [3, 5].includes(i)) unit = "自";
  if (role === "player2" && [22, 24].includes(i)) unit = "自";
  if (role === "observer") {
    if ([3, 5].includes(i)) unit = "P1";
    if ([22, 24].includes(i)) unit = "P2";
  }

  node.textContent = unit || i;
  board.appendChild(node);
}
