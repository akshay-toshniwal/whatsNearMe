$(document).ready(function() {

  

    $("login").click(function() {
       
             validateLogin();


     });

    
  })


function validateLogin()
{
            var lunm = document.getElementById('uname').value;
            var lpss = document.getElementById('psw').value;
            

           //Validation of UserName text field 
                if(lunm == null || lunm == "")
                {
                alert("Username Cannot be Empty ");
                return false;
                }
        
                
            //validation of password
                if(lpss == null || lpss == "")
                {
                alert("password  cannot be Empty !!!");
                return false;
				}

        alert("hello");
		loginValidate();

}

function loginValidate()
{
    var lunm = document.getElementById('uname').value;
    var lpss = document.getElementById('psw').value;
            
   var ar = new Array(lunm,lpss);
   var obj = { 
        emailid : lunm,
        pass:lpss
    };
        alert("hello");
        var sendInfo = JSON.stringify(obj);
            
        console.log(sendInfo);
        alert("hello");

        $.ajax({
           type: "POST",
           url: "http://localhost:8080/navigator/login",
            contentType: "application/json;charset=utf-8",
           dataType: "text",
           success: function(data) {  
           			if(data == 0)
           			{
           				 alert(" Sorry No Data Found \n Username & Password not matched !!!");  
            	
           			} 
           			else
           			{
           				alert("Login Success...");
           			}
               },  
            error: function() {  
                alert('Error in Database');  
            }  ,

           data: sendInfo
       });
         
};
