var stepTracker = "";
var currValidActions = [];

$(document).ready(function() {

  showApp();
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
          case "enter-baggage-claim":
            tellStep24();
            break;
          case "find-luggage":
            tellStep25();
            break;
          case "leave-airport":
            tellStep26();
            break;
        }
      }, 1000);  

    }
  });

});

$(document).on("click", ".procedure-action", function() {
  if (!$(this).hasClass("disabled")) {
    $("input.submission").val($(this).html());
    $("input.submission").focus();
    $("input.submission").trigger($.Event('keypress', { which: 13 } ));
  }
});

Array.prototype.remove = function(e) {
  var t, _ref;
  if ((t = this.indexOf(e)) > -1) {
    return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
  }
};

function showApp() {
  $(".container").fadeIn(1000);
}

function hideApp() {
  $(".container").fadeOut(1000);
}

function newStoryLog(content) {
  $("<div class=\"story-log\">" + content + "</div>").hide()
    .prependTo(".story-content")
    .fadeIn("slow");
}

function clearStory() {
  $("<hr>").hide()
    .prependTo(".story-content")
    .fadeIn("slow"); 
}

function updateContextLocation(content) {
  $(".context-location").fadeOut("fast", function() {
    $(".context-location").html(content)
      .fadeIn("fast");
  });
}

function updateContextTime(content) {
  $(".context-time").fadeOut("fast", function() {
    $(".context-time").html(content)
      .fadeIn("fast");
  });
}

function newContextNote(content) {
  $("<div class=\"context-note\">" + content + "</div>").hide()
    .prependTo(".context-notes")
    .fadeIn("slow");
}

function clearContextNotes() {
  $(".context-notes").fadeOut("fast", function() {
    $(this).empty()
      .show();
  });
}

function updateProcedure(contents) {
  currValidActions = [];
  for (var i=0; i<contents.length; i++) {
    var id = formatAction(contents[i]);
    currValidActions.push(id);
    $("<div class=\"procedure-action\" id=\"" + id + "\">" + contents[i] + "</div>").hide()
      .prependTo(".procedure-content")
      .fadeIn("fast");
  }
}

function newProcedureAction(content) {
  var id = formatAction(content);
  currValidActions.push(id);
  $("<div class=\"procedure-action\" id=\"" + id + "\">" + content + "</div>").hide()
      .prependTo(".procedure-content")
      .fadeIn("fast");
}

function clearProcedure() {
  currValidActions = [];
  $(".procedure-content").fadeOut("fast", function() {
    $(this).empty()
      .show();
  });
}

function disableProcedureAction(id) {
  $(".procedure-action#" + id).addClass("disabled");
  currValidActions.remove(id);
}

function clearSubmission() {
  $("input.submission").val("");
  hideLoadingGif();
}

function displayAlert(content) {
  $(".alert-text").html(content);
  $(".alert-text").fadeIn("fast", function() {
    setTimeout(function() {
      $(".alert-text").fadeOut("fast");
    }, 1000);
  });
}

function showLoadingGif() {
  $("img.loading-gif").fadeIn("fast");
}

function hideLoadingGif() {
  $("img.loading-gif").fadeOut("fast");
}

function formatAction(action) {
  return action.toLowerCase()
    .replace(/^[.\s]+|[.\s]+$/g, "")
    .replace(/\s+/g, '-');
}

function showEnding() {
  $(".ending").fadeIn("slow");
}

function tellStep1() {
  displayAlert("Chapter 1 &mdash; The Room");
  newStoryLog("A dark room.");
  setTimeout(function() {
    newContextNote("A dark room.");
    setTimeout(function() {
      updateContextLocation("Unknown");
      updateContextTime("Unknown");
      setTimeout(function() {
        tellStep2();
      }, 5000);
    }, 1000);
  }, 1000);
}

function tellStep2() {
  newStoryLog("A distant drone of traffic.");
  setTimeout(function() {
    newContextNote("Sounds like a nearby highway.");
    setTimeout(function() {
      updateProcedure(["Feel around."]);
    }, 1000);
  }, 1000);
}

function tellStep3() {
  newStoryLog("There's a lamp here.");
  setTimeout(function() {
    updateProcedure(["Feel around more.", "Flick lamp on."]);
    clearSubmission();
  }, 1000);
}

function tellStep4a() {
  if (stepTracker == "4b") {
    setTimeout(function() {
      clearSubmission();
      tellStep5();
    }, 1000);
  }
  else {
    newStoryLog("A bright and blurry room.");
    setTimeout(function() {
      newContextNote("The room is bright, but blurry.");
      stepTracker = "4a";
      clearSubmission();
    }, 1000);
  }
}

function tellStep4b() {
  newStoryLog("A pair of glasses.");
  if (stepTracker == "4a") {
    setTimeout(function() {
      clearSubmission();
      tellStep5();
    }, 1000);
  }
  else {
    stepTracker = "4b";
    clearSubmission();
  }
}

function tellStep5() {
  newStoryLog("The hotel room comes into focus.");
  setTimeout(function() {
    newContextNote("A quiet hotel room. Where am I?");
    setTimeout(function() {
      updateProcedure(["Look around."]);
    }, 1000);
  }, 1000);
}

function tellStep6() {
  newStoryLog("A bag on the carpeted floor.");
  setTimeout(function() {
    newStoryLog("A window with drawn curtains.");
    setTimeout(function() {
      updateProcedure(["Draw curtains.", "Investigate bag."]);
      clearSubmission();
    }, 1000);
  }, 1000);
}

function tellStep7a() {
  newStoryLog("\"Jane Street\".");
  setTimeout(function() {
    newStoryLog("There's a smartphone in here.");
    setTimeout(function() {
      newProcedureAction("Investigate smartphone.");
      clearSubmission();
    }, 1000);
  }, 1000);
}

function tellStep7b() {
  newStoryLog("A busy Wall Street morning.");
  setTimeout(function() {
    updateContextLocation("Wall Street - New York, NY");
    if (stepTracker == "7c") {
      clearSubmission();
      tellStep8();
    }
    else {
      stepTracker = "7b";
      clearSubmission();
    }
  }, 1000);
}

function tellStep7c() {
  newStoryLog("\"10:30 A.M. EDT\".");
  setTimeout(function() {
    updateContextTime("10:30 A.M. EDT");
    setTimeout(function() {
      newContextNote("Hope I won't miss my flight.");
      if (stepTracker == "7b") {
        clearSubmission();
        tellStep8();
      }
      else {
        stepTracker = "7c";
        clearSubmission();
      }
    }, 1000);
  }, 1000);
}

function tellStep8() {
  setTimeout(function() {
    updateProcedure(["Leave hotel."]);
  }, 1000);
}

function tellStep9() {
  newStoryLog("Packed and ready to go.");
  setTimeout(function() {
    clearSubmission();
    tellStep10();
  }, 1000);
}

function tellStep10() {
  displayAlert("Chapter 2 &mdash; JFK International Airport");
  clearStory();
  clearContextNotes();
  clearProcedure();
  setTimeout(function() {
    updateContextLocation("JFK Airport - New York, NY");    
    updateContextTime("11:20 A.M. EDT");
    setTimeout(function() {
      tellStep11();
    }, 1000);
  }, 1000);
}

function tellStep11() {
  newStoryLog("The subway doors close and the train departs.");
  setTimeout(function() {
    newContextNote("Looks like a busy day at the airport.");
    setTimeout(function() {
      updateProcedure(["Enter airport."]);
    }, 1000);
  }, 1000);
}

function tellStep12() {
  newStoryLog("A blast of cool airport AC.");
  setTimeout(function() {
    newContextNote("Feeling a little thirsty...");
    setTimeout(function() {
      updateProcedure(["Open bag.", "Check in luggage."]);
      clearSubmission();
    }, 1000);
  }, 1000);
}

function tellStep13a() {
  newStoryLog("A long check-in line.");
  setTimeout(function() {
    if (stepTracker == "13c") {
      clearSubmission();
      updateProcedure(["Finish check-in."]);
    }
    else {
      newContextNote("Looks like a long wait...");
      setTimeout(function(){
        stepTracker = "13a";
        clearSubmission();
      }, 1000);
    }
  }, 1000);
}

function tellStep13b() {
  newStoryLog("No water, but a slip of paper.");
  setTimeout(function() {
    newProcedureAction("Investigate slip of paper.");
    clearSubmission();  
  }, 1000);
}

function tellStep13c() {
  newStoryLog("A boarding pass printed last night.");
  setTimeout(function() {
    newContextNote("I can use this to skip the line.");
    setTimeout(function() {
      if (stepTracker == "13a") {
        clearSubmission();
        updateProcedure(["Finish check-in."]);
      }
      else {
        stepTracker = "13c";
        clearSubmission();
      }
    }, 1000);
  }, 1000);
}

function tellStep14() {
  updateContextTime("11:45 A.M. EDT");
  setTimeout(function() {
    newStoryLog("A distant security checkpoint.");
    setTimeout(function() {
      clearSubmission();
      updateProcedure(["Enter security checkpoint.", "Investigate boarding pass."]);
    }, 1000);
  }, 1000);
}

function tellStep15a() {
  updateContextTime("12:15 P.M. EDT");
  setTimeout(function() {
    if (stepTracker == "15b") {
      newStoryLog("Security check successful.");
      setTimeout(function() {
        clearSubmission();
        updateProcedure(["Proceed to terminal."]);
      }, 1000);
    }
    else {
      newStoryLog("Security check successful.");
      setTimeout(function() {
        newContextNote("Where to now?");
        setTimeout(function() {
          stepTracker = "15a";
          clearSubmission();
        }, 1000);
      }, 1000);
    }
  }, 1000);
}

function tellStep15b() {
  newStoryLog("\"JetBlue Airways Corporation\"... Terminal 4.");
  setTimeout(function() {
    newContextNote("Looks like the flight is at Terminal 4.");
    setTimeout(function() {
      if (stepTracker == "15a") {
        clearSubmission();
        updateProcedure(["Proceed to terminal."]);
      }
      else {
        stepTracker = "15b";
        clearSubmission();
      }
    }, 1000);
  }, 1000);
}

function tellStep16() {
  displayAlert("Chapter 3 &mdash; Home");
  clearSubmission();
  clearStory();
  clearContextNotes();
  clearProcedure();
  setTimeout(function() {
    updateContextLocation("Californian skies");    
    updateContextTime("4:00 P.M. PDT");
    setTimeout(function() {
      tellStep17();
    }, 1000);
  }, 1000);
}

function tellStep17() {
  newStoryLog("INTERCOM: \"Folks, we have begun our descent into San Francisco. We will arrive at the gate in roughly 20 minutes. Thank you for flying today with JetBlue.\"");
  setTimeout(function() {
    newContextNote("A beautiful view of the San Francisco Bay Area.");
    setTimeout(function() {
      tellStep18();
    }, 7000);
  }, 1000);
}

function tellStep18() {
  updateContextTime("4:15 P.M. PDT");
  setTimeout(function() {
    newStoryLog("INTERCOM: \"Please fasten your seat belts and raise your chairs to the upright position. We will be landing shortly.\"");
    setTimeout(function() {
      updateProcedure(["Fasten seat belt."]);
    }, 1000);
  }, 1000);
}

function tellStep19() {
  newStoryLog("Seat belt fastened.");
  setTimeout(function() {
    newStoryLog("The plane descends...");
    setTimeout(function() {
      clearSubmission();
      tellStep20();
    }, 5000);
  }, 1000);
}

function tellStep20() {
  updateContextTime("4:20 P.M. PDT");
  setTimeout(function() {
    newStoryLog("INTERCOM: \"We have landed at San Francisco International Airport. The time is 4:20 PM, and the temperature is 72 degrees Fahrenheit.\"");
    setTimeout(function() {
      updateContextLocation("SFO - San Francisco, CA");
      setTimeout(function() {
        tellStep21();
      }, 5000);
    }, 1000);
  }, 1000);
}

function tellStep21() {
  newStoryLog("A text from Dad.");
  setTimeout(function() {
    updateProcedure(["Check text.", "Exit plane."]);
  }, 1000);
}

function tellStep22a() {
  newStoryLog("A busy SFO terminal.");
  setTimeout(function() {
    newContextNote("Finally home...");
    setTimeout(function() {
      if (stepTracker == "22b") {
        clearSubmission();
        tellStep23();
      }
      else {
        newContextNote("Better check Dad's text, though...");
        setTimeout(function() {
          stepTracker = "22a";
          clearSubmission();
        }, 1000);
      }
    }, 1000);
  }, 1000); 
}

function tellStep22b() {
  newStoryLog("DAD: \"Just arrived at the airport with Yoyo.\"");
  setTimeout(function() {
    newContextNote("Just in time.");
    setTimeout(function() {
      if (stepTracker == "22a") {
        clearSubmission();
        tellStep23();
      }
      else {
        stepTracker = "22b";
        clearSubmission();
      }
    }, 1000);
  }, 1000);
}

function tellStep23() {
  newContextNote("I should find my luggage.");
  setTimeout(function() {
    updateProcedure(["Enter baggage claim."]);
  }, 1000);
}

function tellStep24() {
  newStoryLog("A long conveyer belt littered with colorful luggage.");
  setTimeout(function() {
    updateProcedure(["Find luggage."]);
    clearSubmission();
  }, 1000);
}

function tellStep25() {
  updateContextTime("4:45 P.M. PDT");
  setTimeout(function() {
    newStoryLog("Good to go.");
    setTimeout(function() {
      newContextNote("It's been real, New York.");
      setTimeout(function() {
        updateProcedure(["Leave airport."]);
        clearSubmission();
      }, 1000);
    }, 1000);
  }, 1000);
}

function tellStep26() {
  clearSubmission();
  hideApp();
  setTimeout(function() {
    showEnding();
  }, 1000);
}