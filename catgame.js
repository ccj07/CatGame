var score = 0;
var time = 15;
var timer;
var cat;

// 做一個cells的陣列方便後面找cell
var cells = [];
for (let i = 0; i < 9; ++i) {
    var cell = document.getElementById("cell" + i);
    cells.push(cell);
    // 每一格加上事件監聽器
    // 如果是貓貓就會加分 //得分後也要清空貓貓
    cell.addEventListener("click", (e) => {
        if (e.target.textContent === "😺") {
            score++;
            document.getElementById("score").textContent = score;
            e.target.textContent = "";
        }
    });
}

function startgame() {
    document.getElementById("result").textContent = "";
    score = 0;
    time = 15;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = time;
    // setInterval 每隔一段時間就執行一次某個動作
    timer = setInterval(() => {
        time--
        document.getElementById("time").textContent = time;
        if (time <= 0) {
            clearCat()
            clearInterval(timer);
            clearInterval(cat);
            //結果分數判斷
            document.getElementById("result").textContent = `你抓到了 ${score} 隻卯咪:D`;
            // score >= 5 ? "好耶!你成功抓回你的貓:D" : "你的貓在資料夾裡睡得很好:)掰掰";
            document.getElementById("result_block").style.display = "flex";
        }
    }, 1000);

    // 貓貓出現
    cat = setInterval(() => {
        // 先把貓貓清空
        clearCat();
        //要產生0~8要乘9!!
        let catwhere = [];
        while (catwhere.length < 2) {
            let rand = Math.floor(Math.random() * 9);
            if (!catwhere.includes(rand)) {
                catwhere.push(rand);
            }
        }
        catwhere.forEach(index => {
            cells[index].textContent = "😺";
        });
    }, 800);
}

function clearCat() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
}

function closeResult() {
    document.getElementById("result_block").style.display = "none";
}