$(document).ready(function() {

  

    $("#login").click(function() {
       
             validateLogin();


     });

    
  })

function session()
{
  var sunm = document.getElementById('uname').value;


   $.ajax({
           type: "POST",
           url: "http://localhost:8080/sessionUser",
            contentType: "text/xml",
           dataType: "text",
           success: function(data) {  
                
               },  
            error: function() {  
                alert("error in session management "); 
            }  ,
            data: sunm

           });




}

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
        
        var sendInfo = JSON.stringify(obj);
            
        console.log(sendInfo);
       

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
                  session();
           			}
               },  
            error: function() {  
                alert('Error in Database');  
            }  ,

           data: sendInfo
       });
         
};
