function loadRegister(){
    $("#content").load("html/register.html");
}


$(document).ready(function() {

    $("#navRegister").click(function() {
       
             loadRegister();
     });

    $("#register").click(function(){


                    var nm = document.getElementById('inputName').value;
                    var pass  = document.getElementById('inputPassword4').value;
                    var eml = document.getElementById('inputEmail4').value;
                    var add =document.getElementById('inputAddress').value;
                    var cnt = document.getElementById('inputContact').value;



              
                    var  reg={
                    "name" :nm,
                    "emailid" :eml,
                    "contact" :cnt,
                    "pass" :pass,
                    "addrs":add
                        };
               
                   $.ajax({
                    url: "localhost:8080/register",
                    type: "POST",
                    data: reg,
                    contentType: "application/json",
                    success: function (data) {
                        callback(data);
                        }
                    });





    });

  })






