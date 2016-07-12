// CSVモジュールを取り込む
var CSV = require('csv-lite'),
    fs = require('fs'),
    moment = require("moment");
//コマンドラインの引数を受け取る
// 引数チェック
if (process.argv.length < 3) {
    console.log('変換するCSVファイル名を入力してください。');
    return;
}

// 引数の内容を受け取る
var faileName = process.argv[2];

// meibo.csv(Shift_JIS)を読み込む
var inputData = CSV.readFileSync(faileName, 'sjis');

var MY_YEAR = 0, //CSVデータの年代　行
    MY_EVENT = 1, //CSVデータの出来事　行
    SetHTML = "";　//生成したHTMLタグを格納する文字列

for(var i=1; i<inputData.length;i++){
      //HTMLのタグを追加 -> 文字列に格納
      SetHTML += "\n<tr>\n\t<td class=\"year\">" + inputData[i][MY_YEAR] + "</td>";
      SetHTML += "\n\t<td>" + inputData[i][MY_EVENT] + "</td>\n</tr>";
}

console.log(SetHTML);
//.txtファイルに書き出し
fs.writeFile(moment().format("YYYY-MM-DD")+'keireki.txt', SetHTML);
