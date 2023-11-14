// /**
// * PHP Email Form Validation - v2.0
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
!(function ($) {
  "use strict";

  $('form.php-email-form').submit(function (e) {
    e.preventDefault();

    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');

    this_form.find('.loading').slideDown();
    php_email_form_submit(this_form, action, this_form.serialize()).then((val) => {
      if (val) {
        $("#show_success_model")[0].click();
      }
      return true;
    });


  });

  async function php_email_form_submit(this_form, action, data) {
    try {
      await $.ajax({
        type: "POST",
        url: action,
        data: data,
        timeout: 40000,
        success: function (response) {
          console.log('success');          
          this_form.find('.loading').slideUp();
          // this_form.find('.success-message').slideDown().html("Message Send Successfully 👍");
          return true;
        },
        error: function (err) {
          console.log(data);
          var error_msg = "Form submission failed! Please check your internet connection and try again!<br>";
          this_form.find('.loading').slideUp();
          this_form.find('.error-message').slideDown().html(error_msg);
          return false;
        }
      });
      return true;
    }
    catch (error) {
      return false;
    }
  }

})(jQuery);
