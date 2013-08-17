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

      if (submission === "feel-around") {
        disableProcedureAction("feel-around");
        setTimeout(function() {
          tellStep3();
        }, 1000);
      }

      else if (submission === "flick-lamp-on") {
        disableProcedureAction("flick-lamp-on");
        setTimeout(function() {
          tellStep4a();
        }, 1000);
      }

      else if (submission === "feel-around-more") {
        disableProcedureAction("feel-around-more");
        setTimeout(function() {
          tellStep4b();
        }, 1000);
      }

      else if (submission === "look-around") {
        disableProcedureAction("look-around");
        setTimeout(function() {
          tellStep6();
        }, 1000);
      }

      else if (submission === "investigate-bag") {
        disableProcedureAction("investigate-bag");
        setTimeout(function() {
          tellStep7a();
        }, 1000);
      }

      else if (submission === "draw-curtains") {
        disableProcedureAction("draw-curtains");
        setTimeout(function() {
          tellStep7b();
        }, 1000);
      }

      else if (submission === "investigate-smartphone") {
        disableProcedureAction("investigate-smartphone");
        setTimeout(function() {
          tellStep7c();
        }, 1000);
      }

      else if (submission === "leave-hotel") {
        disableProcedureAction("leave-hotel");
        setTimeout(function() {
          tellStep9();
        }, 1000);
      }

      else if (submission === "enter-airport") {
        disableProcedureAction("enter-airport");
        setTimeout(function() {
          tellStep12();
        }, 1000);
      }

      else if (submission === "check-in-luggage") {
        disableProcedureAction("check-in-luggage");
        setTimeout(function() {
          tellStep13a();
        }, 1000);
      }

      else if (submission === "open-bag") {
        disableProcedureAction("open-bag");
        setTimeout(function() {
          tellStep13b();
        }, 1000);
      }

      else if (submission === "investigate-slip-of-paper") {
        disableProcedureAction("investigate-slip-of-paper");
        setTimeout(function() {
          tellStep13c();
        }, 1000);
      }

      else if (submission === "finish-check-in") {
        disableProcedureAction("finish-check-in");
        setTimeout(function() {
          tellStep14();
        }, 1000);
      }      

      else if (submission === "enter-security-checkpoint") {
        disableProcedureAction("enter-security-checkpoint");
        setTimeout(function() {
          tellStep15a();
        }, 1000);
      }

      else if (submission === "investigate-boarding-pass") {
        disableProcedureAction("investigate-boarding-pass");
        setTimeout(function() {
          tellStep15b();
        }, 1000);
      }

      else if (submission === "proceed-to-terminal") {
        disableProcedureAction("proceed-to-terminal");
        setTimeout(function() {
          tellStep16();
        }, 1000);
      }

      else if (submission === "wait-for-flight") {
        disableProcedureAction("wait-for-flight");
        setTimeout(function() {
          tellStep17();
        }, 1000);
      }

    }
  });

});