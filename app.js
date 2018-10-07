//モジュールインポート
var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var csv = require('./routes/exportcsv');
var usersRouter = require('./routes/users');
var WebSocketServer = require('websocket').server;
var http = require('http');

require('date-utils');
var dateFormat = require('dateformat');
//client

var WebSocketServerclint = require('ws').Server;
//{port:4000}
var wss = new WebSocketServerclint({port:4000});
var server_client = http.createServer();
var app = express()

var stocks = {"1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0,
              "6": 0,
              "7": 0,
              "8": 0,
              "9": 0,
              "10": 0,
              "11": 0,
              "12": 0,
              "13": 0,
              "14": 0,
              "15": 0,
              "16": 0
      }
//      
var seat_list = [ 
    {seatID:1,state:0,date:null},
    {seatID:2,state:0,date:null},
    {seatID:3,state:0,date:null},
    {seatID:4,state:0,date:null},
    {seatID:5,state:0,date:null},
    {seatID:6,state:0,date:null},
    {seatID:7,state:0,date:null},
    {seatID:8,state:0,date:null},
    {seatID:9,state:0,date:null},
    {seatID:10,state:0,date:null},
    {seatID:11,state:0,date:null},
    {seatID:12,state:0,date:null},
    {seatID:13,state:0,date:null},
    {seatID:14,state:0,date:null},
    {seatID:15,state:0,date:null},
    {seatID:16,state:0,date:null}]

var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null;
var timer6 = null;
var timer7 = null;
var timer8 = null;
var timer9 = null;
var timer10 = null;
var timer11 = null;
var timer12 = null;
var timer13 = null;
var timer14 = null;
var timer15 = null;
var timer16 = null;
//server起動
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

// server.listen(12345, function() {
//     console.log((new Date()) + ' Server is listening on port 12345');
// });

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 静的ファイルは無条件に公開
app.use('/public', express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// urlencodedとjsonは別々に初期化する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(9000);
console.log('Server is online.');

app.post('/', function(req, res) {
    // リクエストボディを出力
    //console.log(req.body);
    // パラメータ名、nameを出力
    console.log(req.body.minor);
     
    if(req.body.minor == 0){
        clearTimeout(timer1);
        console.log("1番席在席")
        if(seat_list[0].state == 0){
            seat_list[0].state = 1
            seat_list[0].date = dateFormat(Date());
            exportCSV(seat_list[0]);
            stocks["1"] = 1
        }
        //離席処理
        timer1 = setTimeout(function () { 
            seat_list[0].state = 0
            seat_list[0].date = dateFormat(Date());
            stocks["1"] =0
            exportCSV(seat_list[0]);
            //ログ処理
            console.log("１番席離席しました")
        },30000);
    }

    if(req.body.minor == 2){
        clearTimeout(timer2);
        console.log("2番席在席")
        if(seat_list[1].state == 0){
            seat_list[1].state = 1
            seat_list[1].date = dateFormat(Date());
            exportCSV(seat_list[1]);
            stocks["2"] = 1
        }
        //離席処理
        timer2 = setTimeout(function () { 
            seat_list[1].state = 0
            seat_list[1].date = dateFormat(Date());
            stocks["2"] =0
            exportCSV(seat_list[1]);
            //ログ処理
            console.log("2番席離席しました")
        },30000);
    }

    if(req.body.minor == 3){
        clearTimeout(timer3);
        console.log("3番席在席")
        if(seat_list[2].state == 0){
            seat_list[2].state = 1
            seat_list[2].date = dateFormat(Date());
            exportCSV(seat_list[2]);
            stocks["3"] = 1
            }
        //離席処理
        timer3 = setTimeout(function () { 
            seat_list[2].state = 0
            seat_list[2].date = dateFormat(Date());
            stocks["3"] =0
            //ログ処理
            exportCSV(seat_list[2]);
            console.log("3番席離席しました")
        },30000);
    }

    if(req.body.minor== 4){
        clearTimeout(timer4);
        console.log("4番席在席")
        if(seat_list[3].state == 0){
            seat_list[3].state = 1
            seat_list[3].date = dateFormat(Date());
            exportCSV(seat_list[3]);
            stocks["4"] = 1
        }
        //離席処理
        timer4 = setTimeout(function () { 
            seat_list[3].state = 0
            seat_list[3].date = dateFormat(Date());
            stocks["4"] =0
            //ログ処理
            exportCSV(seat_list[3]);
            console.log("4番席離席しました")
        },30000);
    }

        if(req.body.minor == 5){
            clearTimeout(timer5);
            console.log("5番席在席")
            if(seat_list[4].state == 0){
                seat_list[4].state = 1
                seat_list[4].date = dateFormat(Date());
                exportCSV(seat_list[4]);
                stocks["5"] = 1
            }
            //離席処理
            timer5 = setTimeout(function () { 
                seat_list[4].state = 0
                seat_list[4].date = dateFormat(Date());
                stocks["5"] =0
                //ログ処理
                exportCSV(seat_list[4]);
                console.log("5番席離席しました")
            },30000);
        }

    if(req.body.minor == 6){
        clearTimeout(timer6);
        console.log("6番席在席")
        if(seat_list[5].state == 0){
            seat_list[5].state = 1
            seat_list[5].date = dateFormat(Date());
            exportCSV(seat_list[5]);
            stocks["6"] = 1
        }
        //離席処理
        timer5 = setTimeout(function () { 
            seat_list[5].state = 0
            seat_list[5].date = dateFormat(Date());
            stocks["6"] =0
            //ログ処理
            exportCSV(seat_list[5]);
            console.log("6番席離席しました")
        },30000);
    }

    //7番席
    if(req.body.minor == 7){
        clearTimeout(timer7);
        console.log("7番席在席")
        if(seat_list[6].state == 0){
            seat_list[6].state = 1
            seat_list[6].date = dateFormat(Date());
            exportCSV(seat_list[6]);
            stocks["7"] = 1
        }
        //離席処理
        timer7 = setTimeout(function () { 
            seat_list[6].state = 0
            seat_list[6].date = dateFormat(Date());;
            stocks["7"] =0
            //ログ処理
            exportCSV(seat_list[6]);
            console.log("7番席離席しました")
        },30000);
    }

    //8番席
    if(req.body.minor == 8){
        clearTimeout(timer8);
        console.log("8番席在席")
        if(seat_list[7].state == 0){
            seat_list[7].state = 1
            seat_list[7].date = dateFormat(Date());
            exportCSV(seat_list[7]);
            stocks["8"] = 1
        }
        //離席処理
        timer8 = setTimeout(function () { 
            seat_list[7].state = 0
            seat_list[7].date = dateFormat(Date());
            stocks["8"] =0
            //ログ処理
            exportCSV(seat_list[7]);
            console.log("8番席離席しました")
        },30000);
    }

    //9番席
    if(req.body.minor == 9){
        clearTimeout(timer9);
        console.log("9番席在席")
        if(seat_list[8].state == 0){
            seat_list[8].state = 1
            seat_list[8].date = dateFormat(Date());
            exportCSV(seat_list[8]);
            stocks["9"] = 1
        }
        //離席処理
        timer9 = setTimeout(function () { 
            seat_list[8].state = 0
            seat_list[8].date = dateFormat(Date());;
            stocks["9"] =0
            //ログ処理
            exportCSV(seat_list[8]);
            console.log("9番席離席しました")
        },30000);
    }

    //10番席
    if(req.body.minor== 10){
        clearTimeout(timer10);
        console.log("10番席在席")
        if(seat_list[9].state == 0){
            seat_list[9].state = 1
            seat_list[9].date = dateFormat(Date());;
            exportCSV(seat_list[9]);
            stocks["10"] = 1
        }
        //離席処理
        timer10 = setTimeout(function () { 
            seat_list[9].state = 0
            seat_list[9].date = dateFormat(Date());;
            stocks["10"] =0
            //ログ処理
            exportCSV(seat_list[9]);
            console.log("10番席離席しました")
        },30000);
    }

    //11番席
    if(req.body.minor == 11){
        clearTimeout(timer11);
        console.log("11番席在席")
        if(seat_list[10].state == 0){
            seat_list[10].state = 1
            seat_list[10].date = dateFormat(Date());;
            exportCSV(seat_list[10]);
            stocks["11"] = 1
        }
        //離席処理
        timer11 = setTimeout(function () { 
            seat_list[10].state = 0
            seat_list[10].date = dateFormat(Date());;
            stocks["11"] =0
            //ログ処理
            exportCSV(seat_list[10]);
            console.log("11番席離席しました")
        },30000);
    }

    //12番席
    if(req.body.minor== 12){
        clearTimeout(timer12);
        console.log("12番席在席")
        if(seat_list[11].state == 0){
            seat_list[11].state = 1
            seat_list[11].date = dateFormat(Date());;
            exportCSV(seat_list[11]);
            stocks["12"] = 1
        }
        //離席処理
        timer12 = setTimeout(function () { 
            seat_list[11].state = 0
            seat_list[11].date = dateFormat(Date());;
            stocks["12"] =0
            //ログ処理
            exportCSV(seat_list[11]);
            console.log("12番席離席しました")
        },30000);
    }

    //13番席
    if(req.body.minor == 13){
        clearTimeout(timer13);
        console.log("13番席在席")
        if(seat_list[12].state == 0){
            seat_list[12].state = 1
            seat_list[12].date = dateFormat(Date());;
            exportCSV(seat_list[12]);
            stocks["13"] = 1
        }
        //離席処理
        timer13 = setTimeout(function () { 
            seat_list[12].state = 0
            seat_list[12].date = dateFormat(Date());;
            stocks["13"] =0
            //ログ処理
            exportCSV(seat_list[12]);
            console.log("13番席離席しました")
        },30000);
    }

    //14番席
    if(req.body.minor == 14){
        clearTimeout(timer14);
        console.log("14番席在席")
        if(seat_list[13].state == 0){
            seat_list[13].state = 1
            seat_list[13].date = dateFormat(Date());;
            exportCSV(seat_list[13]);
            stocks["14"] = 1
        }
        //離席処理
        timer14 = setTimeout(function () { 
            seat_list[13].state = 0
            seat_list[13].date = dateFormat(Date());;
            stocks["14"] =0
            //ログ処理
            exportCSV(seat_list[13]);
            console.log("14番席離席しました")
        },30000);
    }
    
    //15番席
    if(req.body.minor == 15){
        clearTimeout(timer15);
        console.log("15番席在席")
        if(seat_list[14].state == 0){
            seat_list[14].state = 1
            seat_list[14].date = dateFormat(Date());;
            exportCSV(seat_list[14]);
            stocks["15"] = 1
        }
        //離席処理
        timer15 = setTimeout(function () { 
            seat_list[14].state = 0
            seat_list[14].date = dateFormat(Date());;
            stocks["15"] =0
            //ログ処理
            exportCSV(seat_list[14]);
            console.log("15番席離席しました")
        },30000);
    }

    //16番席
    if(req.body.minor== 16){
        clearTimeout(timer16);
        console.log("16番席在席")
        if(seat_list[15].state == 0){
            seat_list[15].state = 1
            seat_list[15].date = dateFormat(Date());;
            exportCSV(seat_list[15]);
            stocks["16"] = 1
        }
        //離席処理
        timer16 = setTimeout(function () { 
            seat_list[15].state = 0
            seat_list[15].date = dateFormat(Date());;
            stocks["16"] =0
            //ログ処理
            exportCSV(seat_list[15]);
            console.log("16番席離席しました")
        },30000);
    }

    res.send('POST request to the homepage');

})
console.log('Server is online.');

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}


// //client
 wss.on('connection', function(ws) {
 	var clientStockUpdater;
 	var sendStockUpdates = function(ws) {
 		if (ws.readyState == 1) {
 			var stocksObj = {};

 			//サーバ側で更新した在席情報の値をクライアント側に送信する
 			for (var i=0; i<clientStocks.length; i++) {
 				symbol = clientStocks[i];
 				stocksObj[symbol] = stocks[symbol];
 			}

 			ws.send(JSON.stringify(stocksObj));
 		}
 	}

 	clientStockUpdater = setInterval(function() {
         sendStockUpdates(ws)
         console.log("send");
 	}, 1000);
     var clientStocks = [];

 	//クライアントからメッセージを受け取る
 	ws.on('message', function(message) {
		var stock_request = JSON.parse(message);

// 		//クライアントで定義したstocksオブジェクトを取り出す
         clientStocks = stock_request['stocks'];
          		sendStockUpdates(ws);
 	});

 	ws.on('close', function() {
 		if (typeof clientStockUpdater !== 'undefined') {
 			clearInterval(clientStockUpdater);
 		}
     });
 })



module.exports = app;

/*wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false
});*/

// jsonをcsvで保存するfunction
function exportCSV(content){
    Object.assign = require('object-assign')
    require('date-utils');
    const Json2csvParser = require('json2csv').Parser;
    var fs = require('fs');
    var newLine= "\r\n";
    var fields = ['seatID','date','state']
    
    const json2csvParser = new Json2csvParser({ fields:fields, header: false });
    const csv = json2csvParser.parse(content) + newLine; 
    
    fs.appendFile('log.csv', csv, 'utf8', function (err) {
        if (err) {
          console.log('保存できませんでした');
        } else {
          console.log('保存できました');
        }
      });
    }

