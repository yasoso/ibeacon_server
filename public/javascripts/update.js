$(function() {

    // var host = location.origin.replace(/^http/, 'ws')
    // var ws = new WebSocket(host);
    var ws = new WebSocket("ws://desolate-dusk-67291.herokuapp.com:8443");
    //var ws = new WebSocket("ws://localhost:8443");
    var stock_request = {
        "stocks": ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16"]
    };

    var stocks = {
        "1": 0,
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
    
    //toggleClass 指定したCSSクラスが要素に無ければ追加し、あれば削除する。
    //$('#TOYOTA span').toggleClass('label-success');
    ws.onopen = function(e) {
        console.log('Connection to server opend');
        ws.send(JSON.stringify(stock_request));
    }
    var changeStockEntry = function(symbol, originalValue, newValue) {
        var valElem = $('#' + symbol + ' span');
        var style1 ={
            position:"absolute",
            top:"170px",
            left:"300px",
            size :"6"
        }
        
        //valElem.html(newValue.toFixed(2));
        //$('#' +'seat1' + ' span').html('在席');
       
        //オリジナルより上がっていたら緑。下がっていたら赤
        if(newValue == 0) {
            //if(symbol =="1"){
                //$("1").css(style1);
            //}
            valElem.addClass('label-danger');
            valElem.css('font-size','24px');
            valElem.removeClass('label-success');
            valElem.html('離席')
       
        } else if (newValue == 1) {
            valElem.addClass('label-success');
            valElem.css('font-size','24px');
            valElem.removeClass('label-danger');
            valElem.html('在席')
        }
    }

    ws.onmessage = function(e) {
        var stocksData = JSON.parse(e.data);
        for(var symbol in stocksData) {
            if (stocksData.hasOwnProperty(symbol)) {
                changeStockEntry(symbol, stocksData[symbol], stocks[symbol]);
                stocks[symbol] = stocksData[symbol];
                
            }
        }
    }

    ws.onclose = function(e) {
        console.log("Connection closed");
        for (var symbol in stocks) {
            if (stocks.hasOwnProperty(symbol)) {
                stocks[symbol] = 0;
            }
        }
    }
})