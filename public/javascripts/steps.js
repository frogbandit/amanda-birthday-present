function tellStep1() {
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
    hideLoadingGif();
  }, 1000);
}

function tellStep4a() {
  if (stepTracker == "4b") {
    setTimeout(function() {
      stepTracker = "4a";
      hideLoadingGif();
      tellStep5();
    }, 1000);
  }
  else {
    newStoryLog("A bright and blurry room.");
    setTimeout(function() {
      newContextNote("The room is bright, but blurry.");
      stepTracker = "4a";
      hideLoadingGif();
    }, 1000);
  }
}

function tellStep4b() {
  newStoryLog("A pair of glasses.");
  if (stepTracker == "4a") {
    setTimeout(function() {
      stepTracker = "4b";
      hideLoadingGif();
      tellStep5();
    }, 1000);
  }
  else {
    stepTracker = "4b";
    hideLoadingGif();
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
      hideLoadingGif();
    }, 1000);
  }, 1000);
}

function tellStep7a() {
  newStoryLog("\"Jane Street\".");
  setTimeout(function() {
    newStoryLog("There's a smartphone in here.");
    setTimeout(function() {
      newProcedureAction("Investigate smartphone.");
      hideLoadingGif();
    }, 1000);
  }, 1000);
}

function tellStep7b() {
  newStoryLog("A busy morning at Wall Street.");
  setTimeout(function() {
    updateContextLocation("Wall Street - New York, NY");
    if (stepTracker == "7c") {
      stepTracker = "7b";
      hideLoadingGif();
      tellStep8();
    }
    else {
      stepTracker = "7b";
      hideLoadingGif();
    }
  }, 1000);
}

function tellStep7c() {
  newStoryLog("\"10:30 AM\".");
  setTimeout(function() {
    updateContextTime("10:30 AM");
    setTimeout(function() {
      newContextNote("Hope I won't miss my flight.");
      if (stepTracker == "7b") {
        stepTracker = "7c";
        hideLoadingGif();
        tellStep8();
      }
      else {
        stepTracker = "7c";
        hideLoadingGif();
      }
    }, 1000);
  }, 1000);
}

function tellStep8() {
  setTimeout(function() {
    updateProcedure(["Prepare to leave."]);
  }, 1000);
}

function tellStep9() {
  newStoryLog("Packed and ready to go.");
  setTimeout(function() {
    hideLoadingGif();
    tellStep10();
  }, 1000);
}

function tellStep10() {
  clearStory();
  clearContextNotes();
  clearProcedure();
  setTimeout(function() {
    updateContextLocation("JFK Airport - New York, NY");    
    updateContextTime("Unknown");
    setTimeout(function() {
      displayAlert("End of Chapter One.")
    }, 1000);
  }, 1000);
}