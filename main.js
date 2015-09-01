$(function(){

  
  var chordDropdowns = $("li.keySelect1");
  var chordBtns = $("button.keyBtn");

  

  //DEFAULT DISABLE PROGRESSION CHORDS DROPDOWN
  // $("button#progDropdown").prop("disabled", true);

  //ENABLE PROGRESSION CHORDS DROPDOWN ON BUILD BUTTON CLICK
  // $("button#buildBtn").on("click", function(){
  //   $("button#progDropdown").prop("disabled", false);
  // });

  //KEY DROPDOWN SELECT

  // function preventDefaultSubmit (e){
  //   e.preventDefault();
  // }

  // preventDefaultSubmit();


  // function clickDropDown(menuBtn, menuItem){
    
  //   $(menuItem).on("click", function(){
  //     $(menuBtn).text(this.text());
      
  //   });
  // }
  
  // clickDropDown(chordBtns, chordDropdowns);



  // $("a.keySelect2").on("click", function(e){
  //   e.preventDefault();
  //   $("button#keyDropdown2").text($(this).text());
  // });

  // $("a.keySelect3").on("click", function(e){
  //   e.preventDefault();
  //   $("button#keyDropdown3").text($(this).text());
  // });

  // $("a.keySelect4").on("click", function(e){
  //   e.preventDefault();
  //   $("button#keyDropdown4").text($(this).text());
  // });

  // $("a.keySelect5").on("click", function(e){
  //   e.preventDefault();
  //   $("button#keyDropdown5").text($(this).text());
  // });

  // $("a.keySelect6").on("click", function(e){
  //   e.preventDefault();
  //   $("button#keyDropdown6").text($(this).text());
  // });

  //CHORD PROGRESSION DROPDOWN ANIMATION
  //show/hide chord elements when chord # is selected
  // var counter = 0;
  // var $chordsText = $("a.chords").val();

  // function showHideChords(){
  //   if(counter === 0){
  //     $("a.chords").on("click", function(){
  //       if(this.chordsText <= counter){

  //       }
  //     });
  //   }

  // }
  $("#ex4").slider({
    reversed : true
  });



  $("a.chord2").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay
    $(".hideEl").hide();
    //add class "clicked" to elements
    $("li a.chords").addClass("clicked");
    $("div.lgContainer1").fadeIn(400, function(){
      $("hr.hrElement2").fadeIn(400);
      $("div.lgContainer2").fadeIn(400);
    });
  });
  
  $("a.chord3").click(function(e) {
    
    e.preventDefault();
    
    if($("li a.chords").hasClass("clicked")){
      $("hr.hrElement3").fadeIn(400);
      $("div.lgContainer3").fadeIn(400);
    }
    
    else{
      //hide chord elements before redisplay 
      $(".hideEl").hide();
      $("div.lgContainer1").fadeIn(400, function(){
        $("hr.hrElement2").fadeIn(400);
        $("div.lgContainer2").fadeIn(400, function(){
          $("hr.hrElement3").fadeIn(400);
          $("div.lgContainer3").fadeIn(400);
        });
      });
      
    }
  });

  $("a.chord4").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay 
    $(".hideEl").hide();
    $("div.lgContainer1").fadeIn(400, function(){
      $("hr.hrElement2").fadeIn(400);
      $("div.lgContainer2").fadeIn(400, function(){
        $("hr.hrElement3").fadeIn(400);
        $("div.lgContainer3").fadeIn(400, function(){
          $("hr.hrElement4").fadeIn(400);
          $("div.lgContainer4").fadeIn(400);
        });
      });
    });
  });

  $("a.chord5").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay 
    $(".hideEl").hide();
    $("div.lgContainer1").fadeIn(400, function(){
      $("hr.hrElement2").fadeIn(400);
      $("div.lgContainer2").fadeIn(400, function(){
        $("hr.hrElement3").fadeIn(400);
        $("div.lgContainer3").fadeIn(400, function(){
          $("hr.hrElement4").fadeIn(400);
          $("div.lgContainer4").fadeIn(400, function(){
            $("hr.hrElement5").fadeIn(400);
            $("div.lgContainer5").fadeIn(400);
          });
        });
      });
    });
  });

  $("a.chord6").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay 
    $(".hideEl").hide();
    $("div.lgContainer1").fadeIn(400, function(){
      $("hr.hrElement2").fadeIn(400);
      $("div.lgContainer2").fadeIn(400, function(){
        $("hr.hrElement3").fadeIn(400);
        $("div.lgContainer3").fadeIn(400, function(){
          $("hr.hrElement4").fadeIn(400);
          $("div.lgContainer4").fadeIn(400, function(){
            $("hr.hrElement5").fadeIn(400);
            $("div.lgContainer5").fadeIn(400, function(){
              $("hr.hrElement6").fadeIn(400);
              $("div.lgContainer6").fadeIn(400);
            });
          });
        });
      });
    });
  });


});