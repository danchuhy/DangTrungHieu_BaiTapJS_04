// BÀI TẬP VỀ NHÀ 01 - TÌM SỐ NGÀY TRƯỚC ĐÓ VÀ NGÀY TIẾP THEO
function Submit_01(){

    // B1: Xác định đầu vào
    // - ngay 
    // - thang
    // - nam
    var ngay = +document.getElementById('ngay').value;
    var thang = +document.getElementById('thang').value;
    var nam = +document.getElementById('nam').value;

    var soNgayTrongThang;
    var dauNam = false;
    var cuoiNam = false;
    var dauThang = false;
    var cuoiThang = false;
    
    var error;

    var truocNgay
    var truocThang
    var truocNam
    var sauNgay
    var sauThang
    var sauNam;

    
    // B2: Cách tìm
    // 1) Đầu tiên tìm số ngày trong tháng vừa nhập (cách xác định ở bài 2)
    // 2) Xác định xem ngày đó có phải là đầu tháng, cuối tháng, đầu năm, cuối năm hay không?
    // 3) Chia 2 trường hợp:
    //    - TH1: Không phải là cuối/đầu tháng hoặc cuối/đầunăm.
    //           Lấy ngày vừa nhập trừ đi / cộng thêm 1 ngày là được (Tháng, năm giữ nguyên)

    //    - TH2: Là ngày cuối/đầu tháng
    //           Tháng trừ đi / cộng thêm 1 ngày, ngày đổi sang cuói tháng trước / đầu tháng sau

    //    - TH3: Là ngày cuối/đầu năm
    //           Năm trừ đi / cộng thêm 1, ngày & tháng đổi sang ngày cuối năm trước / đầu năm sau

    // Xác định số ngày có trong tháng
    switch (thang){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgayTrongThang = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgayTrongThang = 30;
            break;
        case 2:
            if ((nam%4 == 0 && nam%100 != 0) || (nam%400 == 0)){
                soNgayTrongThang = 29;
            } else {
                soNgayTrongThang = 28;
            }
    }

    // Kiểm tra xem ngày đó có phải cuối năm / đầu năm
    switch (thang){
        case 1: 
            dauNam = true;
            break;
        case 12: 
            cuoiNam = true;
            break;
    }

    // Kiểm tra xem ngày đó có phải cuối tháng / đầu tháng
    switch (ngay){
        case 1: 
            dauThang = true;
            break;
        case soNgayTrongThang:
            cuoiThang = true;
    }


    if (ngay < 0 || ngay > soNgayTrongThang || thang < 0 || thang > 12 || nam < 0){
        error = true;
    }

    truocNgay = (ngay - 1);
    truocThang = thang;
    truocNam = nam;

    sauNgay = (ngay + 1);
    sauThang = thang;
    sauNam = nam;

    if (dauThang){
        switch (thang-1){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                truocNgay = 31;
                break;
            case 4: case 6: case 9: case 11:
                truocNgay = 30;
                break;
            case 2:
                if ((nam%4 == 0 && nam%100 != 0) || (nam%400 == 0)){
                    truocNgay = 29;
                } else {
                    truocNgay = 28;
                }
        }
        truocThang = (thang - 1)
    }
    if (cuoiThang){
        sauNgay = 1;
        sauThang = (thang + 1)
    }

    if (dauNam && dauThang){
        switch (thang-1){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                truocNgay = 31;
                break;
            case 4: case 6: case 9: case 11:
                truocNgay = 30;
                break;
            case 2:
                if ((nam%4 == 0 && nam%100 != 0) || (nam%400 == 0)){
                    truocNgay = 29;
                } else {
                    truocNgay = 28;
                }
        }
        truocThang = 12;
        truocNam = (nam - 1);
    }
    if (cuoiNam && cuoiThang){
        sauNgay = 1;
        sauThang = 1;
        sauNam = (nam + 1);
    }

    if (error){
        document.getElementById('result_01').innerHTML = `
        <div class ="result error">
            <span>Ngày bạn nhập không tồn tại, vui lòng nhập lại!</span>
        </div>
        `
    // B3: In kết quả đầu ra
    } else {
        document.getElementById('result_01').innerHTML = `
        <div class ="result">
            <p> Ngày hôm trước: <b> ${truocNgay} / ${truocThang} / ${truocNam} </b> </p>
            <p> Ngày hôm sau: <b> ${sauNgay} / ${sauThang} / ${sauNam} <b> </p>
        </div>
        `
    }
    
    

};


// BÀI TẬP VỀ NHÀ 02 - TÍNH SỐ NGÀY TRONG THÁNG

function Submit_02(){
    // B1: Xác định đầu vào
    // - thang
    // - nam
    var thangA = +document.getElementById('thangA').value;
    var namA = +document.getElementById('namA').value;

    var soNgayTrongThangA;

    // B2: Xác định ngày trong tháng:
    // Tháng 1,3,5,7,8,10,12 có: 31 ngày
    // Tháng 4,6,9,11 có: 30 ngày
    // Tháng 2:
    //    - Năm bình thường có 28 ngày
    //    - Năm nhuận có 29 ngày 
    switch (thangA){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgayTrongThangA = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgayTrongThangA = 30;
            break;
        case 2:
            if ((namA%4 == 0 && namA%100 != 0) || (namA%400 == 0)){
                soNgayTrongThangA = 29;
            } else {
                soNgayTrongThangA = 28;
            }
            break;
        default:
            document.getElementById('result_02').innerHTML = `
            <div class ="result error">
                Tháng chỉ được từ 1-12. Vui lòng nhập lại!
            </div>
            `;
            var error2 = true;
    }
    if (namA<0){
            document.getElementById('result_02').innerHTML = `
                <div class ="result error">
                    Năm không được là số âm. Vui lòng nhập lại!
                </div>
                `;
            var error2 = true;
    }

    // B3: In kết quả đầu ra
    if (!error2){
        document.getElementById('result_02').innerHTML = `
        <div class ="result">
            <span>Số ngày trong tháng:</span><b> ${soNgayTrongThangA} </b>
        </div>
        `
    }
}



// BÀI TẬP VỀ NHÀ 03 - IN CÁCH ĐỌC SỐ NGUYÊN CÓ 3 CHỮ SỐ
function Submit_03(){

    // B1: Xác định đầu vào
    // - So
    var so = +document.getElementById('so').value;

    var tram;
    var chuc;
    var donVi;

    var inTram = "";
    var inChuc = "";
    var inDonVi = "";
    
    // B2: Cách tính
    // hàng trăm: số + "trăm"
    // hàng chục: số + "mươi"; Nếu bằng 0: "linh" / "chẵn"
    // hàng đơn vị: số; Nếu 1: "Một" / "Mốt"
  
    tram = Math.floor(so/100);
    chuc = Math.floor((so%100)/10);
    donVi = so%10;

    switch (tram){
        case 1: inTram = "Một trăm"; break;
        case 2: inTram = "Hai trăm"; break;
        case 3: inTram = "Ba trăm"; break;
        case 4: inTram = "Bốn trăm"; break;
        case 5: inTram = "Năm trăm"; break;
        case 6: inTram = "Sáu trăm"; break;
        case 7: inTram = "Bảy trăm"; break;
        case 8: inTram = "Tám trăm"; break;
        case 9: inTram = "Chín trăm"; break;
    }
    switch (chuc){
        case 0: 
            if (donVi != 0){
                inChuc = "linh";
            }
            else {inChuc = "chẳn"};
            break;
        case 1: inChuc = "mười"; break;
        case 2: inChuc = "hai mươi"; break;
        case 3: inChuc = "ba mươi"; break;
        case 4: inChuc = "bốn mươi"; break;
        case 5: inChuc = "năm mươi"; break;
        case 6: inChuc = "sáu mươi"; break;
        case 7: inChuc = "bảy mươi"; break;
        case 8: inChuc = "tám mươi"; break;
        case 9: inChuc = "chín mươi"; break;
    }

    switch (donVi){
        case 1: 
            if(chuc != 0){
                inDonVi = "mốt";
            } else {
                inDonVi = "một";
            }
            break;
        case 2: inDonVi = "hai"; break;
        case 3: inDonVi = "ba"; break;
        case 4: inDonVi = "bốn"; break;
        case 5: 
            if (chuc != 0){
                inDonVi = "lăm";
            } else {
                inDonVi = "năm"
            }
            break;
        case 6: inDonVi = "sáu"; break;
        case 7: inDonVi = "bảy"; break;
        case 8: inDonVi = "tám"; break;
        case 9: inDonVi = "chín"; break;
    }

    if (so > 999 || so < 100){
        document.getElementById('result_03').innerHTML = `
        <div class ="result error">
            Vui lòng nhập lại một số nguyên dương có 3 chữ số!
        </div>
        `
        var error3 = true;
    }


    // B3: In kết quả đầu ra
    if (!error3){
    document.getElementById('result_03').innerHTML = `
    <div class ="result">
        <span></b>${inTram} ${inChuc} ${inDonVi}</b></span>
    </div>
    `
    }
};


// BÀI TẬP VỀ NHÀ 04 - TÌM SINH VIÊN XA TRƯỜNG NHẤT

function Submit_04(){
    // B1: Xác định đầu vào
    // - Tên
    // - X
    // - Y

    var sv1Ten = document.getElementById('sv1Ten').value;
    var sv1X = +document.getElementById('sv1X').value;
    var sv1Y = +document.getElementById('sv1Y').value;

    var sv2Ten = document.getElementById('sv2Ten').value;
    var sv2X = +document.getElementById('sv2X').value;
    var sv2Y = +document.getElementById('sv2Y').value;

    var sv3Ten = document.getElementById('sv3Ten').value;
    var sv3X = +document.getElementById('sv3X').value;
    var sv3Y = +document.getElementById('sv3Y').value;

    var truongX = +document.getElementById('truongX').value;
    var truongY = +document.getElementById('truongY').value;

    var khoangCachSV1;
    var khoangCachSV2;
    var khoangCachSV3;

    var kqSo;
    var kqChu;


    // B2: Cách xác định
    // 1) Tìm khoảng cách của từng SV: Khoảng cách = sqrt( (Xsinhvien-xTruong)^2 + sqrt(Ýinhvien-yTruong)^2 )
    // 2) Trong các khoảng cách, tìm ra khoảng cách ngắn nhất; Nếu có 2/3 bạn cùng khoảng cách thì xuất ra thông báo khoảng cách của các bạn bằng nhau
    khoangCachSV1 = Math.sqrt((truongX-sv1X)*(truongX-sv1X)+(truongY-sv1Y)*(truongY-sv1Y));

    khoangCachSV2 = Math.sqrt((truongX-sv2X)*(truongX-sv2X)+(truongY-sv2Y)*(truongY-sv2Y));

    khoangCachSV3 = Math.sqrt((truongX-sv3X)*(truongX-sv3X)+(truongY-sv3Y)*(truongY-sv3Y));

    if (khoangCachSV1 == khoangCachSV2 & khoangCachSV1 == khoangCachSV3){
        var trungKhoangCach = true;

        document.getElementById('result_04').innerHTML = `
        <div class ="result">
            Thật là trùng hợp, cả 3 bạn <b> ${sv1Ten}, ${sv2Ten}, ${sv3Ten} </b> có cùng khoảng cách với trường!
        </div>
        `;

    } else {

        if(khoangCachSV1 == khoangCachSV2 && khoangCachSV2 > khoangCachSV3){
            var trungKhoangCach = true;

            document.getElementById('result_04').innerHTML = `
            <div class ="result">
                Thật là trùng hợp, 2 bạn <b> ${sv1Ten}, ${sv2Ten} </b> có cùng khoảng cách với trường và xa trường!
            </div>
            `;
        }

        if(khoangCachSV2 == khoangCachSV3 && khoangCachSV3 > khoangCachSV1){
            var trungKhoangCach = true;

            document.getElementById('result_04').innerHTML = `
            <div class ="result">
                Thật là trùng hợp, 2 bạn <b> ${sv2Ten}, ${sv3Ten} </b> có cùng khoảng cách với trường và xa trường!
            </div>
            `;
        }

        if(khoangCachSV3 == khoangCachSV1 && khoangCachSV1 > khoangCachSV2){
            var trungKhoangCach = true;

            document.getElementById('result_04').innerHTML = `
            <div class ="result">
                Thật là trùng hợp, 2 bạn <b> ${sv1Ten}, ${sv3Ten} </b> có cùng khoảng cách với trường và xa trường!
            </div>
            `;
        }
    }

    if (khoangCachSV1>khoangCachSV2 && khoangCachSV1>khoangCachSV3){
        kqSo = khoangCachSV1;
        kqChu = sv1Ten;
    }
    if (khoangCachSV2>khoangCachSV3 && khoangCachSV2>khoangCachSV1){
        kqSo = khoangCachSV2;
        kqChu = sv2Ten;
    }
    if (khoangCachSV3>khoangCachSV1 && khoangCachSV3>khoangCachSV2){
        kqSo = khoangCachSV3;
        kqChu = sv3Ten;
    }
    console.log(kqChu);

    // B3: In kết quả đầu ra
    if (!trungKhoangCach){
        document.getElementById('result_04').innerHTML = `
        <div class ="result">
            Sinh viên có nhà xa trường nhất là: <b> ${kqChu}</b>
        </div>
        `
    }
}