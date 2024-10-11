//B1
function submit_1() {
    let in_1 = parseFloat(document.querySelector(".in_1").value);
    let ndf = in_1 * ( 9 / 5 ) + 32
    if (!isNaN(in_1)) {
        document.querySelector(".result_1").innerHTML = "°F = " + ndf.toFixed(2);
    } else {
        document.querySelector(".result_1").innerHTML = "please input number";
    }
}

//B2
function submit_2() {
    let in_2 = parseFloat(document.querySelector(".in_2").value);
    let ft = in_2 * 3.2808;
    if (!isNaN(in_2)) {
        document.querySelector('.result_2').innerHTML = "Feet = " + ft;
    } else {
        document.querySelector(".result_2").innerHTML = "please input number";
    }
}

//B3
function submit_3() {
    let in_3 = parseFloat(document.querySelector(".in_3").value);
    let S = in_3 * in_3;
    if (!isNaN(in_3)) {
        document.querySelector('.result_3').innerHTML = "S = " + S;
    } else {
        document.querySelector('.result_3').innerHTML = "please input a";
    }
}

//B4
function submit_4() {
    let in_4a = parseFloat(document.querySelector(".in_4a").value);
    let in_4b = parseFloat(document.querySelector(".in_4b").value);
    let S = in_4a * in_4b;
    if (!isNaN(in_4a) && !isNaN(in_4b)) {
        document.querySelector('.result_4').innerHTML = "S = " + S;
    } else {
        document.querySelector('.result_4').innerHTML = "please input a and b";
    }
}

//B5
function submit_5() {
    let in_5a = parseFloat(document.querySelector(".in_5a").value);
    let in_5b = parseFloat(document.querySelector(".in_5b").value);
    let S = (in_5a * in_5b) / 2;
    if (!isNaN(in_5a) && !isNaN(in_5b)) {
        document.querySelector('.result_5').innerHTML = "S = " + S;
    } else {
        document.querySelector('.result_5').innerHTML = "please input a and b";
    }
}

//B6
function submit_6() {
    let in_5a = parseFloat(document.querySelector(".in_6a").value);
    let in_5b = parseFloat(document.querySelector(".in_6b").value);
    let pt = -in_5b / in_5a;
    let result = "";
    if (in_5a == 0) {
        if (in_5b == 0) {
            result = "PT vô số nghiệm"
        } else {
            result = "PT vô nghiệm"
        }
    } else {
        result = "PT có nghiệm là: " + pt;
    }
    document.querySelector('.result_6').innerHTML = result;
}

//B7
function submit_7() {
    let in_7a = parseFloat(document.querySelector(".in_7a").value);
    let in_7b = parseFloat(document.querySelector(".in_7b").value);
    let in_7c = parseFloat(document.querySelector(".in_7c").value);
    let in_7d = parseFloat(document.querySelector(".in_7d").value);
    let result = "";

    if (in_7a == 0) {
        if (in_7b == 0) {
            if (in_7b == 0) {
                result = 'PT có vô số nghiệm!';
            } else {
                result = 'PT vô nghiệm';
            }
        } else {
            result = 'PT có nghiệm duy nhất là: ' + (-in_7c / in_7b );
        }
    } else {
        numd = in_7b *in_7b - 4 * in_7a * in_7c;
        if (in_7d < 0) {
            result = 'PT vô nghiệm';

        } else if (in_7d == 0) {
            result = 'PT có nghiệm kép là: ' + (-in_7b / ( 2 * in_7a));
        } else {
            result = 'PT có 2 nghiệm phân biệt là: ' + (-in_7b + numd) / ( 2 * in_7a) + ' , ' + (-in_7b - numd) / ( 2 * in_7a);
        }
    }
    document.querySelector('.result_7').innerHTML = result;
}


//B8
function submit_8() {
    let in_8 = parseFloat(document.querySelector(".in_8").value);
    if (!isNaN(in_8) && in_8 > 0 && in_8 < 120) {
        document.querySelector('.result_8').innerHTML = 'True';
    } else {
        document.querySelector('.result_8').innerHTML = 'False';
    }
}

//B9
function submit_9() {
    let in_9a = parseFloat(document.querySelector(".in_9a").value);
    let in_9b = parseFloat(document.querySelector(".in_9b").value);
    let in_9c = parseFloat(document.querySelector(".in_9c").value);
    let result = "";
    let total_1 = in_9a + in_9b;
    let total_2 = in_9b + in_9c;
    let total_3 = in_9a + in_9c;
    if (in_9a > 0 && in_9b > 0 && in_9c > 0) {
        if (total_1 > in_9c) {
            if (total_2 > in_9a) {
                if (total_3 > in_9b) {
                    result = `3 số ${in_9a}, ${in_9b}, ${in_9c} là cạnh của tam giác`;
                } else
                    result = `3 số ${in_9a}, ${in_9b}, ${in_9c} không phải cạnh của tam giác`;
            } else {
                result = `3 số ${in_9a}, ${in_9b}, ${in_9c} không phải cạnh của tam giác`;
            }
        } else {
            result = `3 số ${in_9a}, ${in_9b}, ${in_9c} không phải cạnh của tam giác`;
        }
    } else {
        result = `3 số ${in_9a}, ${in_9b}, ${in_9c} không phải cạnh của tam giác`;
    }
    document.querySelector('.result_9').innerHTML = result;
}

//B10
function submit_10() {
    let in_10 = parseFloat(document.querySelector(".in_10").value);
    let result = "";
    if (!isNaN(in_10) && in_10 <= 50) {
        result = 'Tiền điện tháng này là: ' + (in_10 * 2000).toLocaleString('vi-VN') + ' VND';
    } else if (in_10 <= 100) {
        result = 'Tiền điện tháng này là: ' + (in_10 * 2500).toLocaleString('vi-VN') + ' VND';
    } else if (in_10 <= 200) {
        result = 'Tiền điện tháng này là: ' + (in_10 * 3000).toLocaleString('vi-VN') + ' VND';
    } else if (in_10 <= 300) {
        result = 'Tiền điện tháng này là: ' + (in_10 * 4000).toLocaleString('vi-VN') + ' VND';
    } else {
        result = 'Tiền điện tháng này là: ' + (in_10 * 5000).toLocaleString('vi-VN') + ' VND';
    }
    document.querySelector('.result_10').innerHTML = result;
}

//B11
function submit_11() {
    let in_11 = parseFloat(document.querySelector(".in_11").value);
    let result = "";
    if (!isNaN(in_11) && in_11 < 60000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 5/100).toLocaleString('vi-VN') + ' VND';
    } else if (in_11 <= 120000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 10/100).toLocaleString('vi-VN') + ' VND';
    } else if (in_11 <= 216000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 15/100).toLocaleString('vi-VN') + ' VND';
    } else if (in_11 <= 384000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 20/100).toLocaleString('vi-VN') + ' VND';
    } else if (in_11 <= 624000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 25/100).toLocaleString('vi-VN') + ' VND';
    } else if (in_11 <= 960000000) {
        result = 'Thuế của bạn là: ' + (in_11 * 30/100).toLocaleString('vi-VN') + ' VND';
    } else {
        result = 'Thuế của bạn là: ' + (in_11 * 35/100).toLocaleString('vi-VN') + ' VND';
    }
    document.querySelector('.result_11').innerHTML = result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

//B12
function submit_12() {
    let in_12a = parseFloat(document.querySelector(".in_12a").value);
    let in_12b = parseFloat(document.querySelector(".in_12b").value) / 100;
    let in_12c = parseFloat(document.querySelector(".in_12c").value);
    let ntn = document.querySelector(".ntn");
    let result = "";
    let total_Ng = (in_12a * in_12b * in_12c) / 365;
    let total_Th = (in_12a * in_12b * in_12c) / 12;
    let total_N = (in_12a * in_12b * in_12c);

    if (!isNaN(in_12a) && !isNaN(in_12b) && !isNaN(in_12c)) {
        if (ntn.value === 'ngay') {
            result = 'Lãi xuất theo ngày là: ' + total_Ng.toLocaleString('vi-VN') + ' VND';
        } else if (ntn.value === 'thang') {
            result = 'Lãi xuất theo ngày là: ' + total_Th.toLocaleString('vi-VN') + ' VND';
        } else if (ntn.value === 'nam') {
            result = 'Lãi xuất theo ngày là: ' + total_N.toLocaleString('vi-VN') + ' VND';
        } else {
            result = 'Vui lòng chọn option';
        }
    } else {
        result = 'không hợp lệ';
    }
    document.querySelector('.result_12').innerHTML = result.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}