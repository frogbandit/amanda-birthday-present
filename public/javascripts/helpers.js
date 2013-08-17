Array.prototype.remove = function(e) {
  var t, _ref;
  if ((t = this.indexOf(e)) > -1) {
    return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
  }
};

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

$(document).on("click", ".procedure-action", function() {
  if (!$(this).hasClass("disabled")) {
    $("input.submission").val($(this).html());
    $("input.submission").focus();
    $("input.submission").trigger($.Event('keypress', { which: 13 } ));
  }
});