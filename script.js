var isim = document.getElementById("pass");
$("#btn").click(function (e) { 
    e.preventDefault();
    if(isim.value == "kuzey"){
        $("h2").text("Giriş Başarılı.");
        setTimeout(function(){
            location.replace("asko.html");
        }, 2000);
    }
    else{
        console.log(isim.value);
        $("h2").text("Giriş Başarısız.");
    }

});