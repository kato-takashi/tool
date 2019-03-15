//使用例　node csvToKeireki.js sample.csv
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

var MY_EVENT = 2 //ループの止める定数
var SetHTML = "";


for(var i=1; i<inputData.length;i++){
      SetHTML += "\n<tr>\n\t<td class=\"year\">" + inputData[i][0] + "</td>";
      SetHTML += "\n\t<td>" + inputData[i][1] + "</td>\n</tr>";
}

console.log(SetHTML);
//.txtファイルに書き出し
fs.writeFile(moment().format("YYYY-MM-DD")+'keireki.txt', SetHTML,
  function(err, result) {
        if(err) console.log('error', err);
      });
