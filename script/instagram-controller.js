console.log("NOT READ");

/*
$(document).ready(function() {

    console.log("HELLO JS");

function validateXXX(){
    console.log("Real validation");

    $('#ctr_name, #ctr_email, #ctr_message').bind('keyup', function() {
        if(allFilled()) $('#contract_btn').removeAttr('disabled');
    });

      function allFilled() {
          var filled = true;
          $('form.validator').each(function() {
              console.log("loops:" + $(this).val());
              if($(this).val() == '') filled = false;
          });
          return filled;
        }
}

});

*/

$(document).ready(function(){


  var instaFeed = new Instafeed({
              get: 'user',
              userId: 2318655595,
              accessToken: '2318655595.73542a8.379ed6304d8641b684a39cb71404601b',
              target: 'instafeed',
              sortBy: 'most-liked',
              limit: 100,
              resolution: 'thumbnail'
}); instaFeed.run();





});




function cnt_field_validation() {

    $('#ctr_name, #ctr_email, #ctr_message').bind('keyup', function() {
        if(allFilled()) $('#contract_btn').removeAttr('disabled');
    });

  console.log("are we working ? ");

}


function allFilled() {
     var filled = true;
          $('form.validator').each(function() {
              console.log("loops:" + $(this).val());
              if($(this).val() == '') filled = false;
          });
      return filled;
}



  function validateForm() {

    var x = document.forms["contactForm"]["ct_name"]["ct_email"]["ct_message"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        console.log("validate?");
        return false;
    }
}


  function validate()
      {

         if( document.contactForm.ct_name.value == "" )
         {
            alert( "Моля, попълнете Вашето име!" );
            document.contactForm.ct_name.focus() ;
            return false;
         }

         if( document.contactForm.ct_email.value == "" )
         {
            alert( "Моля, попълнете Вашият e-mail!" );
            document.contactForm.ct_email.focus() ;
            return false;
         }

         if( document.contactForm.ct_message.value == "" )
         {
            alert( "Моля, напишете съобщение!" );
            document.contactForm.ct_message.focus() ;
            return false;
         }
      }
