$().ready(function validate(){
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        }
      );
    $("#form-add").validate({
        rules: {
            first_name: {
                required: true,
                maxlength: 25
            },
            last_name: {
                required: true,
                maxlength: 25
            },
            age: {
                required: true,
                range: [15,150]
            },
            start_date: {
                required: true,
            },
            phone_number: {
                required: true,
                regex: "[+][0-9]" 
            }
        },
        messages:{
            first_name: "<br/>Enter your fisrt namme",
            last_name: "<br/>Enter your last name",
            age: 
            {
                required: "<br/>Enter your age",
                range: "<br/>In the 15-150 age range",
                // Number: "<br/>In the 15-150 age range",
            },
            start_date: 
            {
                required: "<br/>Enter your birthday"
            },
            phone_number: {
                required: "<br/>Enter your phone number",
                regex: "<br/>Only + and number"
            },
        }
    });
});