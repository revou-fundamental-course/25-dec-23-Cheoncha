// JavaScript Doc - Tugas Mini Project Revou - Dwi Citra aka Cheoncha

function hitungluas() {
    
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    if (alas.trim() === '' || tinggi.trim() === '') {
        ;
        return;
      }

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var luas =(alas * tinggi) * 0.5 ;

        var resultElement = document.getElementById('hasil');
        resultElement.innerHTML = 
        "L = 1/2 x a x t<br>" + 
        "L = 1/2 x (" + alas + " x " + tinggi + ")<br>" +
        'Luas: ' + luas;
    } else {
        alert('Silahkan input angka yang valid untuk alas dan tinggi.');
    }
    
}

function resetForm() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil').innerHTML = '';
  }

function hitungkeliling(){
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;

    if (sisi1.trim() === '' || sisi2.trim() === '' || sisi3.trim() === '') {
        ;
        return;
      }
    
    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var keliling =(parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3)) ;

        var resultElement = document.getElementById('hasilkl');
        resultElement.innerHTML = 
        "K = Sisi A + Sisi B + Sisi C<br>" + 
        "K = " + sisi1 + " + " + sisi2 + " + " + sisi3 + "<br>" +
        'Keliling: ' + keliling ;
       
    } else {
        alert('Silahkan input angka yang valid untuk seluruh sisi segitiga.');
    }
}

function resetFormkl() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasilkl').innerHTML = '';
  }

  function hitungluasjg() {
    
    var alasjg = document.getElementById('alasjg').value;
    var tinggijg = document.getElementById('tinggijg').value;

    if (alasjg.trim() === '' || tinggijg.trim() === '') {
        ;
        return;
      }

    if (!isNaN(alasjg) && !isNaN(tinggijg)) {
        var luasjg =(alasjg * tinggijg) ;

        var resultElement = document.getElementById('hasiljg');
        resultElement.innerHTML = 
        "L = a x t<br>" + 
        "L = " + alasjg + " x " + tinggijg + "<br>" +
        'Luas: ' + luasjg;
    } else {
        alert('Silahkan input angka yang valid untuk alas dan tinggi.');
    }
    
}

function resetFormjg() {
    document.getElementById('alasjg').value = '';
    document.getElementById('tinggijg').value = '';
    document.getElementById('hasiljg').innerHTML = '';
  }

function hitungkljg(){
    var sisid = document.getElementById('sisid').value;
    var sisim = document.getElementById('sisim').value;

    if (sisid.trim() === '' || sisim.trim() === '') {
        ;
        return;
      }
    
    if (!isNaN(sisid) && !isNaN(sisim)) {
        var kelilingjg =(parseInt(sisid)+parseInt(sisim)) * 2 ;

        var resultElement = document.getElementById('hasilkljg');
        resultElement.innerHTML = 
        "K = 2 x (AB+BC)<br>" + 
        "K = 2 x (" + sisid + " + " + sisim + ")<br>" +
        'Keliling: ' + kelilingjg ;
       
    } else {
        alert('Silahkan input angka yang valid untuk sisi sejajar Jajar genjang.');
    }
}

function resetFormkljg() {
    document.getElementById('sisid').value = '';
    document.getElementById('sisim').value = '';
    document.getElementById('hasilkljg').innerHTML = '';
  }

