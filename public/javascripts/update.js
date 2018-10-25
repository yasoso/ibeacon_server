// $(function() {

//     // var host = location.origin.replace(/^http/, 'ws')
//     // var ws = new WebSocket(host);
//     //var ws = new WebSocket("ws://desolate-dusk-67291.herokuapp.com:8443");
//     var ws = new WebSocket("ws://localhost:8443");
//     //socket = io.connect("http://localhost:8443");
//     var stock_request = {
//         "stocks": ["1", "2", "3", "4", "5","6", "7", "8", "9", "10","11", "12", "13", "14", "15","16"]
//     };

    
    
//     //toggleClass 指定したCSSクラスが要素に無ければ追加し、あれば削除する。
//     //$('#TOYOTA span').toggleClass('label-success');
//     ws.onopen = function(e) {
//         console.log('Connection to server opend');
//         ws.send(JSON.stringify(stock_request));
//     }
    

//     ws.onmessage = function(e) {
//         var stocksData = JSON.parse(e.data);
//         for(var symbol in stocksData) {
//             if (stocksData.hasOwnProperty(symbol)) {
//                 changeStockEntry(symbol, stocksData[symbol], stocks[symbol]);
//                 stocks[symbol] = stocksData[symbol];
                
//             }
//         }
//     }

//     ws.onclose = function(e) {
//         console.log("Connection closed");
//         for (var symbol in stocks) {
//             if (stocks.hasOwnProperty(symbol)) {
//                 stocks[symbol] = 0;
//             }
//         }
//     }
// })
$(function() {

    var POLLLING_INVERVAL_TIME_IN_MILLIS = 5000;//5.0s
    (function polling() {
        getseatUpdate();
        window.setTimeout(polling, POLLLING_INVERVAL_TIME_IN_MILLIS);
        //console.log(req.body[0].smell);
      }());
      

function getseatUpdate() {
    var changeStockEntry = function(originalValue) {
       
        //document.getElementById("1").innerHTML = <span class="label label-danger" style="position:absolute; top:220px; left:450px;"><font size="6">在席</font></span>
        //console.log(txt)
        for( var i =1 ; i<17;i++){
            var str = "" + i
            var valElem = $('#' + i);
            if(originalValue[str]== 0) {
                //if(symbol =="1"){
                    //$("1").css(style1);
                //}
                if(i == 1){
                    var style ={
                        position:"absolute",
                        top:"210px",
                        left:"450px",
                        size :"6"
                    }
                }
                else if(i ==2){
                    var style ={
                        position:"absolute",
                        top:"210px",
                        left:"550px",
                        size :"6"
                    }
                }
                else if(i ==3){
                    var style ={
                        position:"absolute",
                        top:"310px",
                        left:"550px",
                        size :"6"
                    }
                }
                else if(i ==4){
                    var style ={
                        position:"absolute",
                        top:"310px",
                        left:"450px",
                        size :"6"
                    }
                }

                else if(i ==5){
                    var style ={
                        position:"absolute",
                        top:"510px",
                        left:"450px",
                        size :"6"
                    }
                }
                else if(i ==6){
                    var style ={
                        position:"absolute",
                        top:"510px",
                        left:"550px",
                        size :"6"
                    }
                }
                else if(i ==7){
                    var style ={
                        position:"absolute",
                        top:"610px",
                        left:"450px",
                        size :"6"
                    }
                }
                else if(i ==8){
                    var style ={
                        position:"absolute",
                        top:"610px",
                        left:"550px",
                        size :"6"
                    }
                }

                else if(i ==9){
                    var style ={
                        position:"absolute",
                        top:"360px",
                        left:"600px",
                        size :"6"
                    }
                }
                else if(i ==10){
                    var style ={
                        position:"absolute",
                        top:"360px",
                        left:"700px",
                        size :"6"
                    }
                }
                else if(i ==11){
                    var style ={
                        position:"absolute",
                        top:"460px",
                        left:"600px",
                        size :"6"
                    }
                }
                else if(i ==12){
                    var style ={
                        position:"absolute",
                        top:"460px",
                        left:"700px",
                        size :"6"
                    }
                }

                else if(i ==13){
                    var style ={
                        position:"absolute",
                        top:"520px",
                        left:"750px",
                        size :"6"
                    }
                }
                else if(i ==14){
                    var style ={
                        position:"absolute",
                        top:"520px",
                        left:"850px",
                        size :"6"
                    }
                }
                else if(i ==15){
                    var style ={
                        position:"absolute",
                        top:"620px",
                        left:"750px",
                        size :"6"
                    }
                }
                else if(i ==16){
                    var style ={
                        position:"absolute",
                        top:"620px",
                        left:"850px",
                        size :"6"
                    }
                }
                valElem.addClass('label label-danger').css(style);
                valElem.css('font-size','24px');
                valElem.removeClass('label-success');
                valElem.html('離席')
                console.log("離席")
           
            } else if (originalValue[str] == 1) {
                 valElem.addClass('label label-success');
                 valElem.css('font-size','24px');
                 valElem.removeClass('label-danger');
                 valElem.html('在席')
             }
        }
        //var valElem = $('#' + 1);
       

        
        
        //valElem.addClass('label label-danger').css(style1);

        // $("#1").css('font-size','24px');
        // $("#1").removeClass('label-success');
        // $("#1").html('在席')
        //valElem.html(newValue.toFixed(2));
        //$('#' +'seat1' + ' span').html('在席');
       
        //オリジナルより上がっていたら緑。下がっていたら赤
        // if(originalValue== 0) {
        //     //if(symbol =="1"){
        //         //$("1").css(style1);
        //     //}
        //     valElem.addClass('label-danger');
        //     valElem.css('font-size','24px');
        //     valElem.removeClass('label-success');
        //     valElem.html('離席')
        //     console.log("離席")
       
        // } else if (originalValue == 1) {
        //      valElem.addClass('label-success');
        //      valElem.css('font-size','24px');
        //      valElem.removeClass('label-danger');
        //      valElem.html('在席')
        //  }
     }
    var stocks = 
             {"1": 0,
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
    $.ajax({
    type : "GET",
    url : "seatUpdate",
    content : "application/json",
    dataType : "json",
  }).done(function(data) {
    //console.log(data);
    var stocksData = (data);

    
    for(var symbol in stocksData) {
        console.log(stocksData[symbol])
                changeStockEntry(stocksData[symbol]);
                stocks[symbol] = stocksData[symbol];
                        
                     
                 }
             
    //var txt = "臭い：" + data.smell;
    //document.getElementById("smellTxt").innerHTML = txt;
    //$("dd").text(data.count);//html要素変更する
  }).fail(function(jqXHR, textStatus) {
    $("dd").text("error occured");//html要素変更する
    });
  }
});