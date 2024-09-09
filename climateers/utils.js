function collisionDet({ block1, block2 }) {
  return (
    block1.attackBox.position.x <= block2.position.x + block2.width &&
    block1.attackBox.position.x + block1.attackBox.width >= block2.position.x &&
    block1.attackBox.position.y + block1.attackBox.height >=
      block2.position.y &&
    block1.attackBox.position.y <= block2.position.y + block2.height
  );
}
function determineWinner(player1, player2, timerId) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player1.health == player2.health) {
    document.querySelector("#displayText").innerHTML = "tie";
    console.log("tie");
  } else if (player1.health > player2.health) {
    document.querySelector("#displayText").innerHTML = "Player Win";
  } else {
    document.querySelector("#displayText").innerHTML = "Game Over";
  }
}
