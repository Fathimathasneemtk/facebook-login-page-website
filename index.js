$(document).ready(function(){
    $("#sign-up-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAdderss:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            Day:{
                required:true
            },
            Month:{
                required:true
            },
            Year:{
                required:true
            },
            gender:{
                required:true
            }



        },
        messages:{
            fname:{
                required:"enter pls"
            }
        }

    })
})