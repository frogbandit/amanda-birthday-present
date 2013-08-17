$(document).ready(function() {

  setTimeout(function() {
    tellStep16();
  }, 7000);

  $("input.submission").keypress(function (e) {
    if (e.which === 13 && $(this).val() && !$(".loading-gif").is(":visible") && !$(".alert-text").is(":visible")) {
      var submission = formatAction($(this).val());
      showLoadingGif();

      if ($.inArray(submission, currValidActions) === -1) {
        displayAlert("Action not recognized.");
        clearSubmission();
        return;
      }

      disableProcedureAction(submission);
      setTimeout(function() {

        switch(submission) {
          case "feel-around":
            tellStep3();
            break;
          case "flick-lamp-on":
            tellStep4a();
            break;
          case "feel-around-more":
            tellStep4b();
            break;
          case "look-around":
            tellStep6();
            break;
          case "investigate-bag":
            tellStep7a();
            break;
          case "draw-curtains":
            tellStep7b();
            break;
          case "investigate-smartphone":
            tellStep7c();
            break;
          case "leave-hotel":
            tellStep9();
            break;
          case "enter-airport":
            tellStep12();
            break;
          case "check-in-luggage":
            tellStep13a();
            break;
          case "open-bag":
            tellStep13b();
            break;
          case "investigate-slip-of-paper":
            tellStep13c();
            break;
          case "finish-check-in":
            tellStep14();
            break;
          case "enter-security-checkpoint":
            tellStep15a();
            break;
          case "investigate-boarding-pass":
            tellStep15b();
            break;
          case "proceed-to-terminal":
            tellStep16();
            break;
          case "fasten-seat-belt":
            tellStep19();
            break;
          case "exit-plane":
            tellStep22a();
            break;
          case "check-text":
            tellStep22b();
            break;
        }

      }, 1000);  

    }
  });

});