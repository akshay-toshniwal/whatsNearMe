function loadRegister(){
    $("#content").load("html/register.html");
}
function acceptForm()
{
  // alert("helloooooooo fhgn gg ");
   var nm = document.getElementById('inputName').value;
   var pss = document.getElementById('inputPassword4').value;
   var eml = document.getElementById('inputEmail4').value;
   var add = document.getElementById('inputAddress').value;
   var cnt = document.getElementById('inputContact').value;

   
      /*alert(nm);
      alert(pss);
      alert(eml);
      alert(add);
      alert(cnt);
   */
   var ar = new Array(nm,pss,eml,add,cnt);
   var obj = { 
        name :nm,
        emailid :eml,
        contact :cnt,
        pass:pss,
        addrs:add};

        var sendInfo = JSON.stringify(obj);
            
        alert(sendInfo);

         $.ajax({
           type: "POST",
           url: "http://localhost:8080/register",
            contentType: "application/json;charset=utf-8",
           dataType: "json",
           success: function () {
                   alert("Somebody" + nm+ " was added in list !");
               },

           data: sendInfo
       });
         alert("done");
};





  


$(document).ready(function() {

    $("#navRegister").click(function() {
       
             loadRegister();
     });

    $("#register").click(function(){


                   acceptForm();



    });

  })






