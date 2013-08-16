$(document).ready(function() {

  setTimeout(function() {
    tellStep1();
  }, 7000);

  $("input.submission").keypress(function (e) {
    if (e.which === 13 && $(this).val() && !$(".loading-gif").is(":visible") && !$(".alert-text").is(":visible")) {
      var submission = formatAction($(this).val());
      clearSubmission();
      showLoadingGif();

      if ($.inArray(submission, currValidActions) === -1) {
        displayAlert("Action not recognized.");
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

      else if (submission === "prepare-to-leave") {
        disableProcedureAction("prepare-to-leave");
        setTimeout(function() {
          tellStep9();
        }, 1000);
      }

    }
  });

});