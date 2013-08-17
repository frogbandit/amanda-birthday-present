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
  newStoryLog("\"Delta Air Lines\"... Terminal 4.");
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
  displayAlert("Chapter 3 &mdash; SFO");
  clearSubmission();
  clearStory();
  clearContextNotes();
  clearProcedure();
  setTimeout(function() {
    updateContextLocation("SFO - San Francisco, CA");    
    updateContextTime("4:00 P.M. PDT");
    setTimeout(function() {
      tellStep17();
    }, 1000);
  }, 1000);
}

function tellStep17() {
  
}