$(function(){

  
  // var chordDropdowns = $("li.keySelect1");
  // var chordBtns = $("button.keyBtn");

  


  // var chordMenuArr = [];
  // var chordDivArr = [];

  // function showHide(){
    
  //   $("a.chords").on("click", function(){
  //     $("a.chords").each(function(){
  //       chordMenuArr.push($(this).attr("data-val"));
  //     });
  //   });
  // }
  // showHide();

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

  function clearCells(){
    
        var defaultKeyHTML = 'key<span class="caret"></span>';
        var defaultTypeHTML = 'type<span class="caret"></span>';
        var defaultShapeHTML = 'shape<span class="caret"></span>';
        // $("button#keyDropdown1").prop("selected", function() {
        //     return this.defaultSelected;
        // });

        $("button#keyDropdown1").html(defaultKeyHTML);
        $("button#keyDropdown2").html(defaultKeyHTML);
        $("button#keyDropdown3").html(defaultKeyHTML);
        $("button#keyDropdown4").html(defaultKeyHTML);
        $("button#keyDropdown5").html(defaultKeyHTML);
        $("button#keyDropdown6").html(defaultKeyHTML);

        $("button#typeDropdown1").html(defaultTypeHTML);
        $("button#typeDropdown2").html(defaultTypeHTML);
        $("button#typeDropdown3").html(defaultTypeHTML);
        $("button#typeDropdown4").html(defaultTypeHTML);
        $("button#typeDropdown5").html(defaultTypeHTML);
        $("button#typeDropdown6").html(defaultTypeHTML);

        $("button#shapeDropdown1").html(defaultShapeHTML);
        $("button#shapeDropdown2").html(defaultShapeHTML);
        $("button#shapeDropdown3").html(defaultShapeHTML);
        $("button#shapeDropdown4").html(defaultShapeHTML);
        $("button#shapeDropdown5").html(defaultShapeHTML);
        $("button#shapeDropdown6").html(defaultShapeHTML);

  }


  //KEY SELECT DROPDOWNS
  $("a.keySelect1").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown1").text($(this).text());
  });

  $("a.keySelect2").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown2").text($(this).text());
  });

  $("a.keySelect3").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown3").text($(this).text());
  });

  $("a.keySelect4").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown4").text($(this).text());
  });

  $("a.keySelect5").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown5").text($(this).text());
  });

  $("a.keySelect6").on("click", function(e){
    e.preventDefault();
    $("button#keyDropdown6").text($(this).text());
  });

  //TYPE SELECT DROPDOWNS
  $("a.typeSelect1").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown1").text($(this).text());
  });

  $("a.typeSelect2").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown2").text($(this).text());
  });

  $("a.typeSelect3").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown3").text($(this).text());
  });

  $("a.typeSelect4").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown4").text($(this).text());
  });

  $("a.typeSelect5").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown5").text($(this).text());
  });

  $("a.typeSelect6").on("click", function(e){
    e.preventDefault();
    $("button#typeDropdown6").text($(this).text());
  });

  //SHAPE SELECT DROPDOWNS
  $("a.shapeSelect1").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown1").text($(this).text());
  });

  $("a.shapeSelect2").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown2").text($(this).text());
  });

  $("a.shapeSelect3").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown3").text($(this).text());
  });

  $("a.shapeSelect4").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown4").text($(this).text());
  });

  $("a.shapeSelect5").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown5").text($(this).text());
  });

  $("a.shapeSelect6").on("click", function(e){
    e.preventDefault();
    $("button#shapeDropdown6").text($(this).text());
  });

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


  // var divArr = $(".lgContainer").attr("dataDiv");

  // for(var i = 0; i <= 6; i++){
  //   if($(".buttonSize").eq(i).is(":visible")){
  //     return i;
  //   }
    
  // }


  // $("#ex4").slider({
  //   reversed : true
  // });

  // var chordMenu = $("a.chords").attr("data-val");




  $("a.chord2").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay
    $(".hideEl").hide();
    //revert cell names to default
    clearCells();
    //add class "clicked" to elements
    // $("li a.chords").addClass("clicked");
    $("div.lgContainer1").fadeIn(400, function(){
      $("hr.hrElement2").fadeIn(400);
      $("div.lgContainer2").fadeIn(400);
    });
  });
  
  $("a.chord3").click(function(e) {
    
    e.preventDefault();
      //hide chord elements before redisplay 
      
      $(".hideEl").hide();
      clearCells();
      $("div.lgContainer1").fadeIn(400, function(){
        $("hr.hrElement2").fadeIn(400);
        $("div.lgContainer2").fadeIn(400, function(){
          $("hr.hrElement3").fadeIn(400);
          $("div.lgContainer3").fadeIn(400);
        });
      });   
    });
  

  $("a.chord4").click(function(e) {
    e.preventDefault();
    //hide chord elements before redisplay 
    
    $(".hideEl").hide();
    
    clearCells();
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
    clearCells();
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
    clearCells();
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


  // var intervalReference = 0;

  // var metronomeTick = function() {
  //     $(".chordImg").stop(); // stops previous animations
  //     $(".chordImg").animate({opacity: 1},
  //                             30,                            
  //                             function() { $(this).animate({opacity:0.5}); }
  //     );
  // };

  // $(function() {
  //     var slider = $("#bpm").slider({
  //         min: 40,
  //         max: 240,
  //         value: 120,
  //         slide: function( event, ui ) {
  //             clearInterval(intervalReference);
  //             intervalReference = setInterval(metronomeTick, 1000*60/ui.value);
  //             $("#bpmshow").text("Current beats per minute: " + ui.value);
  //         }
  //     });
  // });

  //JOGDIAL
  var options = {wheelSize:'115px', knobSize:'40px', minDegree:0, maxDegree:360, degreeStartAt: 0};
  var dialTempo = JogDial(document.getElementById("jogDial"), options);

  dialTempo.on("mousemove", function(evt){
    var bpm = Math.floor(150/360*(Math.round(evt.target.rotation)+122));
    $("div.bpm").text(bpm);
  });

  

  var intervalReference = 0;

  var metronomeTick = function() {
      $("img.chordImg").stop(); // stops previous animations
      $("img.chordImg").animate({opacity: 1}, 30, function(){
        $(this).animate({opacity:0.5}); 
      });
  };

  $(function() {
    var slider = $("#bpm").slider({
      min: 40,
      max: 240,
      value: 120,
      slide: function( event, ui ) {
        // console.log(ui);
        clearInterval(intervalReference);
        intervalReference = setInterval(metronomeTick, 1000*60/ui.value);
        $("#bpmshow").text("Current beats per minute: " + ui.value);
      }
    });
  });


});