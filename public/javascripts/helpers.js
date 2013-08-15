function newStoryLog(content) {
  $("<div class=\"story-log\">" + content + "</div>").hide()
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
  for (var i=0; i<contents.length; i++) {
    var id = formatAction(contents[i]);
    $("<div class=\"procedure-action\" id=\"" + id + "\">" + contents[i] + "</div>").hide()
      .prependTo(".procedure-content")
      .fadeIn("fast");
  }
}

function disableProcedureAction(id) {
  $(".procedure-action#" + id).addClass("disabled");
}

function clearSubmission() {
  $("input.submission").val("");
}

function displayAlert(content) {
  $(".alert-text").html(content);
  $(".alert-text").fadeIn("fast", function() {
    setTimeout(function() {
      $(".alert-text").fadeOut("fast");
    }, 1000);
  });
}

function formatAction(action) {
  return action.toLowerCase()
    .replace(/^[.\s]+|[.\s]+$/g, "")
    .replace(/\s+/g, '-');
}

$(document).on("click", ".procedure-action", function() {
  if (!$(this).hasClass("disabled")) {
    $(".submission").val($(this).html());
    $(".submission").focus();
  }
});