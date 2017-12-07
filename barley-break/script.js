function Game() {
    arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    this.move = function(x, y) {
        let pos = y * fieldSize + x;
        if (x > 0) {
            let posLeft = y * fieldSize + x - 1;
            if (arr[posLeft] === 0) {
                arr[posLeft] = arr[pos];
                arr[pos] = 0;
            }
        }
        if (x < fieldSize - 1) {
            let posRight = y * fieldSize + x + 1;
            if (arr[posRight] === 0) {
                arr[posRight] = arr[pos];
                arr[pos] = 0;
            }
        }
        if (y > 0) {
            let posTop = (y - 1) * fieldSize + x;
            if (arr[posTop] === 0) {
                arr[posTop] = arr[pos];
                arr[pos] = 0;
            }
        }
        if (y < fieldSize - 1) {
            let posBottom = (y + 1) * fieldSize + x;
            if (arr[posBottom] === 0) {
                arr[posBottom] = arr[pos];
                arr[pos] = 0;
            }
        }
    };
    this.draw = function() {
        for (let fy = 0; fy < fieldSize; fy++) {
            for (let fx = 0; fx < fieldSize; fx++) {
                let pos = fy * fieldSize + fx;
                let num = arr[pos];
                let absX = fx * cellSize + fx + 2;
                let absY = fy * cellSize + fy + 2;
                if (num !== 0) {
                    context.fillStyle = '#98ff27';
                    context.fillRect(absX, absY, cellSize - 2, cellSize - 2);
                    context.font = '50px courier';
                    context.textAlign = 'center';
                    context.fillStyle = '#333bff';
                    context.fillText(num.toString(), absX + ((cellSize - 2) / 2), absY + ((cellSize - 2) / 2));
                } else {
                    context.clearRect(absX, absY, cellSize - 2, cellSize - 2);
                }
            }
        }
    };
    this.mix = function() {
        for (let c = 1; c < 300; c++) {
            for (let i = 0; i <=15; i++) {
                if (arr[i] === 0) {
                    x = i % fieldSize;
                    y = Math.floor(i / fieldSize);
                    let to = getNumber(1, 4);
                    if (to === 1) {
                        var y = y - 1;
                    }
                    if (to === 2) {
                        y = y + 1;
                    }
                    if (to === 3) {
                        var x = x - 1;
                    }
                    if (to === 4) {
                        x = x + 1;
                    }
                    if ((x >= 0) && (x < fieldSize) && (y >= 0) && (y < fieldSize)) {
                        this.move(x, y);
                    }
                }
            }
        }
    };
    this.victory = function() {
        if (arr.toString() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0') {
            return true;
        }
    }
}
function start() {
    let canvas = document.getElementById('canvas');
    fieldSize = 4;
    cellSize = 100;
    let countLines = fieldSize + 1;
    let gameSize = fieldSize * cellSize + countLines;
    canvas.height = gameSize;
    canvas.width = gameSize;
    context = canvas.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < countLines; i++) {
        context.fillRect(i * cellSize + i, 0, 1, canvas.height);
        context.fillRect(0, i * cellSize + i, canvas.width, 1);
    }

    let field = new Game();
    field.mix();
    field.draw();
    canvas.onclick = function(e) {
        let x = (e.pageX - canvas.offsetLeft);
        let y = (e.pageY - canvas.offsetTop);
        let posX = Math.floor(x / (cellSize + 1));
        let posY = Math.floor(y / (cellSize + 1));
        field.move(posX, posY);
        field.draw();
        if (field.victory()) {
            alert('You won :)');
        }
    };
    window.onkeydown = function() {

        if (field.victory()) {
            alert('You won :)');
        }
    }
}

function getNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}