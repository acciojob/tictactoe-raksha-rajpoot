//your JS code here. If required.
  document.getElementById('submit').addEventListener('click', function() {
            const player1 = document.getElementById('player-1').value;
            const player2 = document.getElementById('player-2').value;
            if (player1 && player2) {
                document.getElementById('player-input').style.display = 'none';
                document.getElementById('game').style.display = 'block';
                document.getElementById('message').textContent = `${player1}, you're up!`;
                startGame(player1, player2);
            }
        });
        
        function startGame(player1, player2) {
            let currentPlayer = player1;
            let symbol = 'X';
            const board = document.getElementById('board');
            const message = document.getElementById('message');
            
            board.addEventListener('click', function(event) {
                if (event.target.classList.contains('cell') && event.target.textContent === '') {
                    event.target.textContent = symbol;
                    if (checkWin(symbol)) {
                        message.textContent = `${currentPlayer} congratulations, you won!`;
                        board.style.pointerEvents = 'none';
                        return;
                    }
                    currentPlayer = currentPlayer === player1 ? player2 : player1;
                    symbol = symbol === 'X' ? 'O' : 'X';
                    message.textContent = `${currentPlayer}, you're up!`;
                }
            });
        }
        
        function checkWin(symbol) {
            const cells = Array.from(document.getElementsByClassName('cell'));
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            return winningCombinations.some(combination =>
                combination.every(index => cells[index].textContent === symbol)
            );
        }