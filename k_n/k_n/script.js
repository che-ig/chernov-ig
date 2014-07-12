var i, j,
    raz, sekt = 1, centr, sumUser = true,
    hod = true, propuskHod = true,
    mas = [], sektor = [], mySum = [[],[]];

$(function(){
    $('.next_gane').on('click', function(e){
        e.preventDefault();
        raz = $('input[name=razmer]').val();
        if(raz <= 0 || raz > 10){
            raz = 3;
        }
        raz = parseInt(raz, 10);
        var pole = "";

        for(i = 0; i<raz; i++){
            pole += '<tr>';
            for(j = 0; j<raz; j++){
                pole += '<td><input type="checkbox" name='+i+''+j+'></td>';
            }
            pole += '</tr>';
        }
        $('.pole_game').html(pole);
        $('.pole_game input').each(function(){
                $(this).on('click', function(e){
                    if(hod){
                        if($(this).prop("checked")){
                            $(this).attr('disabled', true);
                        }
                        fun($(this));
                    }else{
                        e.preventDefault();
                    }
                });
            }
        );
        $('.krtestiki').fadeOut(500, function () {
            $('.hiden').fadeIn(500);
        });

        if(raz % 2 == 1){
            sektor[0] = [0];
            sektor[1] = [(raz-1)/2+''+(raz-1)/2];
            centr = 1;
        }else{
            sektor[0] = [0, 0, 0, 0];
            sektor[1] = [(raz/2-1)+''+(raz/2-1), raz/2+''+raz/2, raz/2-1+''+raz/2, (raz/2)+''+(raz/2-1)];
            centr = 4;
        }
        var vetv = raz*2 + 2;
        for(var v = 0; v < vetv; v++){
            mas[v] = [];
            mas[v][0] = ["_", "_", []];
            for(i = 0; i < raz; i++) {
                mas[v][0][2].push(0);
            }
            mas[v][1] = [];
        }
        for(i = 0; i<raz; i++){
            for(var k = 0; k<raz; k++){
                mas[i][1].push(i + '' + k);
            }
        }
        for(var t = 0, i = raz; t<raz, i < 2*raz; t++, i++){
            for(j = 0; j<raz; j++){
                mas[i][1][j] = mas[j][1][t];
            }
        }
        for(i = 2*raz; i < 2*raz + 2; i++){
            if(i === 2*raz){
                for(j = 0; j<raz; j++){
                    mas[i][1][j] = mas[j][1][j];
                }
            }else{
                for(j = 0; j<raz; j++){
                    mas[i][1][j] = mas[raz - 1 - j][1][j];
                }
            }
        }
    });
});

function fun (t) {
    var position, sektorElem, sektorElemPos;
    t.parent().addClass('nol');
    position = t.attr('name');
    hod = false;
    propuskHod = false;
    provHodUser(position, 1, -1);

    if(sekt <= centr){
        sektorElem = sektor[0].indexOf(0);
        sektorElemPos = sektor[1][sektorElem];
        myHod(sektorElemPos);
    }else{
        myHod();
    }
}

function provHodUser(position, v1, v2) {
    var n, sun = 0, over, indOver, elem, k = true;
    var s, pustoe;
    if(sekt <= centr){
        s = sektor[1].indexOf(position);
        if(s != -1){
            sektor[0][s] =  -1;
            sekt++;
        }
    }
    pro (position, 1, -1);
}

function myHod(position){

    var n = 0, vv = 0, len, index, elem, elemName, k = true, max = [0, 0], min = [0, 0];
    var s, pustoe = 0;

    if(sekt <= centr && sumUser){
        s = sektor[1].indexOf(position);
        if(s != -1){
            sektor[0][s] =  1;
            sekt++;
        }
        elem = $('.pole_game input[name ='+position+']');
        elem.parent().addClass('krest');
        elem.attr('disabled', true);

        pro (position, -1, 1);
        hod = true;

    }else{

        for(i = 0, len = mas.length; i < len; i++){
            if(mas[i][0][0] === 1){
                if(mas[i][0][1] >= max[0]){
                    max[0] = mas[i][0][1];
                    max[1] = i;
                }
                vv += 1;
            }
            if(mas[i][0][0] === -1){
                if(mas[i][0][1] <= min[0]){
                    min[0] = mas[i][0][1];
                    min[1] = i;
                }
            }
            if(mas[i][0][0] === 0){
                n++;
                if(n === (2*raz + 2)){
                    $('.finish.user_ii').fadeIn(500);
                }
            }
            if(mas[i][0][0] === "_"){
                pustoe = i;
            }
        }

        if(max[0] === (raz -1)){
            index = mas[max[1]][0][2].indexOf(0);
            elemName = mas[max[1]][1][index];
            element(elemName);
            hod = true;
            return;
        }
        if(min[0] === -(raz -1)){
            index = mas[min[1]][0][2].indexOf(0);
            elemName = mas[min[1]][1][index];
            element(elemName);
            hod = true;
            return;
        }

        if(vv !== 0){
            if(mas[max[1]][0][2][0] === 0){
                index = 0;
            }else if(mas[max[1]][0][2][raz -1] === 0){
                index = raz -1;
            }else{
                index = mas[max[1]][0][2].indexOf(0);
            }
            elemName = mas[max[1]][1][index];
            element(elemName);

        }else{
            if(pustoe != 0){
                index = mas[pustoe][0][2].indexOf(0);
                elemName = mas[pustoe][1][index];
            }
            else{
                if(mas[min[1]][0][2][0] === 0){
                    index = 0;
                }else if(mas[min[1]][0][2][raz -1] === 0){
                    index = raz -1;
                }else{
                    index = mas[min[1]][0][2].indexOf(0);
                }
                elemName = mas[min[1]][1][index];
            }
            element(elemName);
        }
        hod = true;
    }
}
function pro(position, user, ii) {

    var len, sum = 0;
    for(i = 0, len = mas.length; i < len; i++){
        n = mas[i][1].indexOf(position);
        if(n != -1){
            if( mas[i][0][2][n] === 0){
                mas[i][0][2][n] = ii;
            }
            if(mas[i][0][2].indexOf(user) != -1){
                mas[i][0][0] = 0;
            }else{
                mas[i][0][0] = ii;
            }
            for (j = 0; j < raz; j++) {
                sum +=  mas[i][0][2][j];
            }
            mas[i][0][1] = sum;
            if(sum === -(raz -1) ){
                sumUser = false;
            }
            if(mas[i][0][1] === raz){
                $('.finish.ii').fadeIn(500);
            }
            if(mas[i][0][1] === -raz){
                $('.finish.user').fadeIn(500);
            }
            sum = 0;
        }
    }
}
function element(elemName){
    var elem;
    elem = $('.pole_game input[name ='+elemName+']');
    elem.parent().addClass('krest');
    elem.attr('disabled', true);
    pro(elemName, -1, 1);
}