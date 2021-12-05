function Loto(){
    var q = parseInt(Math.random()*100);
    do {
        var sothamchieu = prompt("Mời nhập số tham chiếu:");
        sothamchieu = parseInt(sothamchieu);
    } while (isNaN(sothamchieu) || sothamchieu > 100 || sothamchieu < 0);
    if (sothamchieu == q) {
        console.log("Bạn đã trúng giải thưởng");
        alert("Bạn đã trúng giải");
    } else {
        console.log("Bạn đã xịt chúc may mắn lần sau");
        console.log("Số trúng giải là:" + q);
        alert(" Bạn đã xịt rất buồn, số trúng giải là: " + q);
    }
}
function Vietlot() {
    var array = [];
    var flag = 0;
    for (var i = 0; i < 5; i++) {
        array[i] = [];
        for (var j = 0; j < 6;) {
            flag = 0;
            array[i][j] = parseInt(prompt("Chọn cặp số " + i + j));
            if (array[i][j] > 45 || array[i][j] < 0 || isNaN(array[i][j])) {
                flag = 1;
            } else {
                j++;
            }
        }
    }
    console.log(array);
    var Docdac = [];
    for (var i = 0; i < 6; i++) {
        Docdac[i] = parseInt(Math.random() * 45);
    }
    console.log(Docdac);
    for (var i = 0; i < 5; i++) {
            for (var m = 0; m < array[i].length - 1; m++) {
                for (var n = 0; n < array[i].length - m - 1; n++) {
                    if (array[i][n] > array[i][n+1]) {
                        var tmp = array[i][n];
                        array[i][n] = array[i][n + 1];
                        array[i][n + 1] = tmp;
                    }
                }
            }
        }
    console.log(array);
    for( var i = 0; i<Docdac.length-1;i++){
        for( var j = 0;j<Docdac.length-i-1;j++){
            if(Docdac[j]>Docdac[j+1]){
                var temp = Docdac[j];
                Docdac[j] = Docdac[j+1];
                Docdac[j+1] = temp;
            }
        }
    }
    console.log(Docdac);
    function kiemtrave(){
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 6;) {
                if(array[i][j] == Docdac[j]){
                    j++;
                }else{
                    console.log("Vé này ko trúng giải"+ array[i]);
                    break;
                }
                if(j==6){
                    console.log("Vé này đã trúng giải"+ array[i]);
                }
            }

        }
    }
    kiemtrave();
}
Vietlot();


