$(document).ready(function () {

    let lost = false;
  
    $("#start").click(function () {
      $("#status").text('Click the "S" to begin');
  
      if (!lost) {
        $("div .boundary").mouseenter(
          function(){
            lostAction();
            lost = true;
          });
        $("#maze").mouseleave(
          function(){
            lostAction();
            lost = true;
          });
      }
      else {
        $("div .boundary").removeClass("youlose");
        $("#end").mouseenter(function () {
          winAction();
          lost = false;
  
        })
      }
  
    })
  
  });
  
  function lostAction(){
    $("div .boundary").addClass("youlose");
    $("#status").text("You Lose! :(");
    $("#end").unbind("mouseenter");
  }
  
  function winAction(){
    $("#status").text("You Win! :)");
    $("div .boundary").unbind("mouseenter");
    $("#maze").unbind("mouseleave");
  }