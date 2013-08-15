var currStep = "0";

$(document).ready(function() {

  setTimeout(function() {
    tellStep1();
  }, 5000);

  $("input.submission").keypress(function (e) {
    if (e.which === 13 && $(this).val() && !$(".alert-text").is(":visible")) {
      var submission = formatAction($(this).val());
      clearSubmission();

      if (submission === "feel-around" && currStep == "2") {
        disableProcedureAction("feel-around");
        setTimeout(function() {
          tellStep3();
        }, 1000);
      }

      else displayAlert("Action not recognized.");
    }
  });

});

function tellStep1() {
  currStep = "1";
  newStoryLog("A dark room.");
  setTimeout(function() {
    newContextNote("A dark room.");
    setTimeout(function() {
      updateContextLocation("Unknown.");
      updateContextTime("Unknown.");
      setTimeout(function() {
        tellStep2();
      }, 5000);
    }, 1000);
  }, 1000);
}

function tellStep2() {
  currStep = "2";
  newStoryLog("A distant drone of traffic.");
  setTimeout(function() {
    newContextNote("Sounds like a nearby highway.");
    setTimeout(function() {
      updateProcedure(["Feel around."]);
    }, 1000);
  }, 1000);
}

function tellStep3() {
  currStep = "3";
  newStoryLog("A lamp.");
  setTimeout(function() {
    updateProcedure(["Continue to feel around.", "Flick lamp."]);
  }, 1000);
}