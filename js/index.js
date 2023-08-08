
function Submit_01(){

    // BÀI TẬP VỀ NHÀ 01 - TÍNH TIỀN LƯƠNG NHÂN VIÊN
    // B1: Xác định đầu vào
    // - luongMotNgay: Lương 1 ngày
    // - soNgayLam: Số ngày làm
    var luongMotNgay = +document.getElementById('luongMotNgay').value;
    var soNgayLam = +document.getElementById('soNgayLam').value;
    
    var tongTienLuong;

    // B2: Công thức tính lương
    // - tongTienLuong = luongMotNgay*soNgayLam
    tongTienLuong = luongMotNgay*soNgayLam;

    // B3: In kết quả đầu ra
    document.getElementById('result_01').innerHTML = `
    <div class ="result">
    <span>Tiền lương của</span> ${soNgayLam} <span>ngày làm việc là:</span> <b>${tongTienLuong}<span>đ</span></b>
    </div>
    `
};


// BÀI TẬP VỀ NHÀ 02 - TÍNH GIÁ TRỊ TRUNG BÌNH

function Submit_02(){
    // B1: Xác định đầu vào
    // - so1
    // - so2
    // - so3
    // - so4
    // - so5
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;
    var so4 = +document.getElementById('so4').value;
    var so5 = +document.getElementById('so5').value;

    var diemTrungBinh;

    // B2: Công thức tính giá trị trung bình
    // - trungbinh = Tong/n
    diemTrungBinh = (so1+so2+so3+so4+so5)/5;

    // B3: In kết quả đầu ra
    document.getElementById('result_02').innerHTML = `
    <div class ="result">
    <span>Giá trị trung bình của các số trên là:</span><b> ${diemTrungBinh} </b>
    </div>
    `

}



// BÀI TẬP VỀ NHÀ 03 - QUY ĐỔI TIỀN

function Submit_03(){
    // B1: Xác định đầu vào
    // - TI_GIA_USD
    // - soTienDolar
    const TI_GIA_USD = 23500;
    var soTienDolar = +document.getElementById('soTienDolar').value;
    var soTienVND;

    // B2: Công thức tính tiền quy đổi
    // - soTienVND = TI_GIA_USD*soTienDolar
    soTienVND = TI_GIA_USD*soTienDolar;

    // B3: In kết quả đầu ra
    document.getElementById('result_03').innerHTML = `
    <div class ="result">
    <span>$</span>${soTienDolar} <span> tương đương với: </span> <b>${soTienVND}<span>đ</span></b>
    </div>
    `
}


// BÀI TẬP VỀ NHÀ 04 - TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT

function Submit_04(){
    // B1: Xác định đầu vào
    // - chieuDai
    // - chieuRong
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var dienTich;
    var chuVi;

    // B2: Công thức tính diện tích và chu vi
    // - dienTich = chieuDai*chieuRong
    // - chuVi = (chieuDai+chieuRong)*2
    dienTich = chieuDai*chieuRong;
    chuVi = (chieuDai+chieuRong)*2

    // B3: In kết quả đầu ra
    document.getElementById('result_04').innerHTML = `
    <div class ="result">
    <span>Diện tích: </span> <b>${dienTich} </b>
    <br>
    <span>Chu vi: </span> <b>${chuVi}</b>
    </div>
    `
}

// BÀI TẬP VỀ NHÀ 05 - TÍNH TỔNG 2 KÝ SỐ

function Submit_05(){

    // B1: Xác định đầu vào
    // - so
    var soA = +document.getElementById('soA').value;
    var tongKySoA

    // B2: 
    // Lấy số hàng đơn vị: So%10
    // Lấy số hàng chục: làmTrònXuống(So/10)
    // Tổng = đơnVị + hàngChục
    tongKySoA = soA%10 + Math.floor(soA/10);


    // B3: In kết quả đầu ra
    if (soA <= 99 && soA >= 10){
        document.getElementById('result_05').innerHTML = `
        <div class ="result">
        <span>Tổng 2 ký số: </span><b> ${tongKySoA} </b>
        </div>
        `

    } else {
        document.getElementById('result_05').innerHTML = `
        <div class ="result">
        <span>Vui lòng nhập số khác có 2 chữ số!</span>
        </div>
        `
    }
}