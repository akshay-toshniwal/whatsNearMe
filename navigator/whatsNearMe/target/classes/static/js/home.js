function loadRegister(){
    $("#content").load("html/register.html");
}

function acceptForm()
{
   var nm = document.getElementById('inputName').value;
   var pss = document.getElementById('inputPassword4').value;
   var eml = document.getElementById('inputEmail4').value;
   var add = document.getElementById('inputAddress').value;
   var cnt = document.getElementById('inputContact').value;
   
   var ar = new Array(nm,pss,eml,add,cnt);
   var obj = { 
        name :nm,
        emailid :eml,
        contact :cnt,
        pass:pss,
        addrs:add};

        var sendInfo = JSON.stringify(obj);
            
        console.log(sendInfo);

        $.ajax({
           type: "POST",
           url: "http://localhost:8080/register",
            contentType: "application/json;charset=utf-8",
           dataType: "text",
           success: function(data) {  
                alert(data + nm +" Successfully Registered");  
            },  
            error: function() {  
                alert('Error in Database');  
            }  ,

           data: sendInfo
       });
         
};


function validate()
{
            var nm = document.getElementById('inputName').value;
            var pss = document.getElementById('inputPassword4').value;
            var eml = document.getElementById('inputEmail4').value;
            var add = document.getElementById('inputAddress').value;
            var cnt = document.getElementById('inputContact').value;

           

           //Validation of Name text field 
                if(nm == null || nm == "")
                {
                alert("Name cannot be Empty !!!");
                return false;
                }
        
                
            //Validation of Password
                var r;
                if (pss.match(/[a-z]/g) && pss.match(/[A-Z]/g) && pss.match(/[0-9]/g) && pss.match(/[^a-zA-Z\d]/g) && pss.length>=8 ) 
                {
                r= 1;
                }
                else
                {
                r =0;
                }
                if (r==0)
                {
                alert("Invalid Format !!!!,\n    Password must contain   att least 1 uppercase , lowecase , digit, special character  of minimum size 8 ");
                return false;
                }


            //Validation of Email-id

                var atposition=eml.indexOf("@");  
                var dotposition=eml.lastIndexOf(".");  
                if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eml.length){  
                alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
                return false;
                
                }



            //validation of Address
                if(add == null || add == "")
                {
                alert("City  cannot be Empty !!!");
                return false;

                }


               
            //Validation of Contact 
                if(cnt == null || cnt== "") {
                alert("Error: Cell number must not be null.");
                return false;
                
                }

                if(cnt.length != 10) {
                alert("Phone number must be 10 digits.");
                return false;
                
                }


 acceptForm();

}

$(document).ready(function() {

    $("#navRegister").click(function() {
       
             loadRegister();
     });

    $("#register").click(function(){


                    validate();



    });
    

  })






