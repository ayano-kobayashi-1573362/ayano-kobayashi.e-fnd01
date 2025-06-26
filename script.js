'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 今日の日付を取得してタイトルに設定
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので1を足す
const day = today.getDate();
const title = `${year}年${month}月${day}日のToDoリスト!!!`;
document.getElementById("title").innerText = title;

//メッセージ（完了時）
const message = document.getElementById("completedMessage");

function allComplete() {
    const listItems = document.querySelectorAll("#todoList li");
    if (Array.from(listItems).every(list => list.classList.contains("completed"))) {
         return message.textContent = "おつかれさまでした～！🚶‍➡️➡🏡";
    } else {
        return message.textContent = "";
    }
}

// ToDoを追加する機能
document.getElementById("addTodo").addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value;  

    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;

        // 完了ボタン
        const completeButton = document.createElement("button");
        completeButton.textContent = "完了";
        completeButton.addEventListener("click", function() {
            li.classList.toggle("completed"); // li要素に、comletedクラス名を追加（完了/未完了を切り替え)⇒cssで呼び出すため
            allComplete();
        });
        li.appendChild(completeButton); 

        // 変更ボタン
        const editButton = document.createElement("button");
        editButton.textContent = "変更";
        editButton.addEventListener("click", function() {
            const newText = prompt("タスク内容を変更:", todoText);　　　//prompt(メッセージ, デフォルト)でポップアップ
            if (newText) {
                li.firstChild.nodeValue = newText; // テキストのみを更新（ボタンを残す）
            }
        });
        li.appendChild(editButton);

        // 削除ボタン
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", function() {
            li.remove(); // リストから削除
            allComplete();
        });
        li.appendChild(deleteButton);

        // リストを画面に追加
        document.getElementById("todoList").appendChild(li);　　 //親要素.appendChild(追加するもの)
        todoInput.value = ""; // 追加したら入力フィールドをクリア

        allComplete();
    }})
