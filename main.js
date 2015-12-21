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

        $("h1.progression").empty();
        $("img.chordImg").css("display", "");
        $("img.chordImgNext").css("display", "");

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
    $("button#keyDropdown5").text($(this).text()); //THIS.PARENT.~ USE DOM PATH TO SELECT
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


  //fadeInNext function recursion`

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
    chordArr = ["",""];
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
      chordArr = ["","",""];
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
    chordArr = ["","","",""];
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
    chordArr = ["","","","",""];
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
    chordArr = ["","","","","",""];
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
  var options = {wheelSize:'115px', knobSize:'40px', minDegree:0, maxDegree:360, degreeStartAt: 0, zindex: 0};
  var dialTempo = JogDial(document.getElementById("jogDial"), options);
  

  var bpm = 50;
  var audio = new Audio("metronome.m4a");

  var playingNow = false;

  

  //PRINT BPM ON PAGELOAD
  $("div.bpm").text(bpm);
  

  //DISPLAY BPM AND DYNAMICALLY UPDATE 
  dialTempo.on("mousemove", function(evt){
    bpm = Math.floor(150/360*(Math.round(evt.target.rotation)+122));
    $("div.bpm").text(bpm);
    if(playingNow){
      slide(bpm);
    }

  });

  
  //ANIMATE CHORD AND PLAY AUDIO
  var intervalReference = 0;
  

  //BEAT COUNTER FOR DETERMINING HOW MANY TIMES A CHORD IS SHOWN
  var beatCounter = 0;
  var chordCounter = 0;
  var progCounter = 0;

  var metronomeTick = function() {
       
      $("img.chordImg").stop(); // stops previous animations
      // audio.pause();
      $("img.chordImg").animate({opacity: 1}, 30, function(){
        $(this).animate({opacity:0.5}); 
        audio.play();
        console.log(beatCounter);
        if(beatCounter % 4 === 0){
          $("img.chordImg").attr("src", "assets/" + chordArr[0] + ".png");
          $("img.chordImgNext").attr("src", "assets/" + chordArr[chordCounter + 1] + ".png");
          chordArr.push(chordArr.shift());

          // switch(progCounter){
          //   case 0: 
          //     $(".appHeader").css("border", "");
          //     $(".appHeader .first").css("border", "1px solid #9F1212");
          //     break;
          //   case 1:
          //     $(".appHeader .first").css("border", "");
          //     $(".appHeader .second").css("border", "1px solid #9F1212");
          //     break;
          //   case 2:
          //     $(".appHeader .second").css("border", "");
          //     $(".appHeader .third").css("border", "1px solid #9F1212");
          //     break;
          //   case 3:
          //     $(".appHeader .third").css("border", "");
          //     $(".appHeader .fourth").css("border", "1px solid #9F1212");
          //     break;
          //   case 4:
          //     $(".appHeader .fourth").css("border", "");
          //     $(".appHeader .fifth").css("border", "1px solid #9F1212");
          //     break;
          //   case 5:
          //     $(".appHeader .fifth").css("border", "");
          //     $(".appHeader .sixth").css("border", "1px solid #9F1212");
          //     break;
          //   default:
          //     $("appHeader").css("border", "");
          //     progCounter = 0;
          // }
          // progCounter++;
          // chordCounter = chordCounter % (chordArr.length);
          // if(chordCounter === chordArr.length){
          //   chordCounter = 0;
          // }
          console.log(chordCounter);
        }
        
        beatCounter++;
      });
  };

  //SETS INTERVAL FROM DIAL
  function slide(bpm){
    // console.log(ui);
    clearInterval(intervalReference);
    intervalReference = setInterval(metronomeTick, 1000*60/bpm);
    console.log(bpm);
    // $("#bpmshow").text("Current beats per minute: " + ui.value);
  }


  //START STOP EVERYTHING
  $("#startStop").on("click", function(){
    playingNow = !playingNow;
    if(playingNow){
      slide(bpm);
      $("#startStop").html("<span class='glyphicon glyphicon-pause' aria-hidden='true'></span>");
    }
    else{
      clearInterval(intervalReference);
      audio.pause();
      $("img.chordImg").stop();
      $("#startStop").html("<span class='glyphicon glyphicon-play' aria-hidden='true'></span>");
    }
  });


  var chord1;
  var chord2;
  var chord3;
  var chord4; 
  var chord5; 
  var chord6;
  

  //CHORD1 SELECT
  $(".select1").on("click", function(){

    if($("button#keyDropdown1").text() !== "key" && $("button#typeDropdown1").text() !== "type" && $("button#shapeDropdown1").text() !== "shape"){
      
      var key1 = $("button#keyDropdown1").text();
      var type1 = $("button#typeDropdown1").text();
      var shape1 = $("button#shapeDropdown1").text();
      

      
      
      if(type1 === "Major"){
        type1 = "";
      }
      else if(type1 === "minor"){
        type1 = "m";
      }
      else if(type1 === "Major 7"){
        type1 = "Maj7";
      }
      else if(type1 === "minor 7"){
        type1 = "m7";
      }
      else if(type1 === "7"){
        type1 = "7";
      }
      else if(type1 === "m7b5"){
        type1 = "m7b5";
      }
      else if(type1 === "augmented"){
        type1 = "aug";
      }
      else if(type1 === "diminished"){
        type1 = "dim";
      }

      if(shape1 === "open"){
        shape1 = "-o";
      }
      else if(shape1 === "6 root"){
        shape1 = "-m-6";
      }
      else if(shape1 === "5 root"){
        shape1 = "-m-5";
      }
      else if(shape1 === "4 root"){
        shape1 = "-m-4";
      }

      
      if($(".appHeader .first")) $(".appHeader .first").remove();
      var progressionLabel1 = key1 + type1;      
      $("h1.progression").prepend("<span class='first'>" + progressionLabel1 + "</span>");

      chord1 = key1 + type1 + shape1;
      
      chordArr[0] = chord1;
      $("img.chordImg").css("display", "block");
      console.log(chordArr);
      $("img.chordImg").attr("src", "assets/" + chord1 + ".png");



      console.log(chord1);
      
    
    }

  });
  //CHORD2 SELECT
  $(".select2").on("click", function(){

    if($("button#keyDropdown2").text() !== "key" && $("button#typeDropdown2").text() !== "type" && $("button#shapeDropdown2").text() !== "shape"){
      
      var key2 = $("button#keyDropdown2").text();
      var type2 = $("button#typeDropdown2").text();
      var shape2 = $("button#shapeDropdown2").text();
      

      if(type2 === "Major"){
        type2 = "";
      }
      else if(type2 === "minor"){
        type2 = "m";
      }
      else if(type2 === "Major 7"){
        type2 = "Maj7";
      }
      else if(type2 === "minor 7"){
        type2 = "m7";
      }
      else if(type2 === "7"){
        type2 = "7";
      }
      else if(type2 === "m7b5"){
        type2 = "m7b5";
      }
      else if(type2 === "augmented"){
        type2 = "aug";
      }
      else if(type2 === "diminished"){
        type2 = "dim";
      }

      if(shape2 === "open"){
        shape2 = "-o";
      }
      else if(shape2 === "6 root"){
        shape2 = "-m-6";
      }
      else if(shape2 === "5 root"){
        shape2 = "-m-5";
      }
      else if(shape2 === "4 root"){
        shape2 = "-m-4";
      }

      if($(".appHeader .second")) $(".appHeader .second").remove();
      var progressionLabel2 = key2 + type2;
      $("h1.progression").append("<span class='second'>" + " - " + progressionLabel2 + "</span>");

      chord2 = key2 + type2 + shape2;

      chordArr[1] = chord2;
      $("img.chordImgNext").css("display", "block");
      console.log(chordArr);
      $("img.chordImgNext").attr("src", "assets/" + chord2 + ".png");


      console.log(chord2);
      
    
    }

  });
  //CHORD3 SELECT
  $(".select3").on("click", function(){

    if($("button#keyDropdown3").text() !== "key" && $("button#typeDropdown3").text() !== "type" && $("button#shapeDropdown3").text() !== "shape"){
      
      var key3 = $("button#keyDropdown3").text();
      var type3 = $("button#typeDropdown3").text();
      var shape3 = $("button#shapeDropdown3").text();
      
      

      if(type3 === "Major"){
        type3 = "";
      }
      else if(type3 === "minor"){
        type3 = "m";
      }
      else if(type3 === "Major 7"){
        type3 = "Maj7";
      }
      else if(type3 === "minor 7"){
        type3 = "m7";
      }
      else if(type3 === "7"){
        type3 = "7";
      }
      else if(type3 === "m7b5"){
        type3 = "m7b5";
      }
      else if(type3 === "augmented"){
        type3 = "aug";
      }
      else if(type3 === "diminished"){
        type3 = "dim";
      }

      if(shape3 === "open"){
        shape3 = "-o";
      }
      else if(shape3 === "6 root"){
        shape3 = "-m-6";
      }
      else if(shape3 === "5 root"){
        shape3 = "-m-5";
      }
      else if(shape3 === "4 root"){
        shape3 = "-m-4";
      }

      if($(".appHeader .third")) $(".appHeader .third").remove();
      var progressionLabel3 = " - " + key3 + type3;
      $("h1.progression").append("<span class='third'>" + progressionLabel3 + "</span>");

      chord3 = key3 + type3 + shape3;
      chordArr[2] = chord3;
      console.log(chordArr);
      // $("img.chordImg").attr("src", "assets/" + chord3 + ".png");


      console.log(chord3);
      
    
    }

  });
  //CHORD4 SELECT
  $(".select4").on("click", function(){

    if($("button#keyDropdown4").text() !== "key" && $("button#typeDropdown4").text() !== "type" && $("button#shapeDropdown4").text() !== "shape"){
      
      var key4 = $("button#keyDropdown4").text();
      var type4 = $("button#typeDropdown4").text();
      var shape4 = $("button#shapeDropdown4").text();
      
      

      if(type4 === "Major"){
        type4 = "";
      }
      else if(type4 === "minor"){
        type4 = "m";
      }
      else if(type4 === "Major 7"){
        type4 = "Maj7";
      }
      else if(type4 === "minor 7"){
        type4 = "m7";
      }
      else if(type4 === "7"){
        type4 = "7";
      }
      else if(type4 === "m7b5"){
        type4 = "m7b5";
      }
      else if(type4 === "augmented"){
        type4 = "aug";
      }
      else if(type4 === "diminished"){
        type4 = "dim";
      }

      if(shape4 === "open"){
        shape4 = "-o";
      }
      else if(shape4 === "6 root"){
        shape4 = "-m-6";
      }
      else if(shape4 === "5 root"){
        shape4 = "-m-5";
      }
      else if(shape4 === "4 root"){
        shape4 = "-m-4";
      }

      if($(".appHeader .fourth")) $(".appHeader .fourth").remove();
      var progressionLabel4 = " - " + key4 + type4;
      $("h1.progression").append("<span class='fourth'>" + progressionLabel4 + "</span>");

      chord4 = key4 + type4 + shape4;
      chordArr[3] = chord4;
      console.log(chordArr);
      // $("img.chordImg").attr("src", "assets/" + chord4 + ".png");


      console.log(chord4);
      
    
    }

  });
  //CHORD5 SELECT
  $(".select5").on("click", function(){

    if($("button#keyDropdown5").text() !== "key" && $("button#typeDropdown5").text() !== "type" && $("button#shapeDropdown5").text() !== "shape"){
      
      var key5 = $("button#keyDropdown5").text();
      var type5 = $("button#typeDropdown5").text();
      var shape5 = $("button#shapeDropdown5").text();
      
      
      if(type5 === "Major"){
        type5 = "";
      }
      else if(type5 === "minor"){
        type5 = "m";
      }
      else if(type5 === "Major 7"){
        type5 = "Maj7";
      }
      else if(type5 === "minor 7"){
        type5 = "m7";
      }
      else if(type5 === "7"){
        type5 = "7";
      }
      else if(type5 === "m7b5"){
        type5 = "m7b5";
      }
      else if(type5 === "augmented"){
        type5 = "aug";
      }
      else if(type5 === "diminished"){
        type5 = "dim";
      }

      if(shape5 === "open"){
        shape5 = "-o";
      }
      else if(shape5 === "6 root"){
        shape5 = "-m-6";
      }
      else if(shape5 === "5 root"){
        shape5 = "-m-5";
      }
      else if(shape5 === "4 root"){
        shape5 = "-m-4";
      }

      if($(".appHeader .fifth")) $(".appHeader .fifth").remove();
      var progressionLabel5 = " - " + key5 + type5;
      $("h1.progression").append("<span class='fifth'>" + progressionLabel5 + "</span>");


      chord5 = key5 + type5 + shape5;
      chordArr[4] = chord5;
      console.log(chordArr);
      // $("img.chordImg").attr("src", "assets/" + chord5 + ".png");


      console.log(chord5);
      
    
    }

  });
  //CHORD6 SELECT
  $(".select6").on("click", function(){

    if($("button#keyDropdown6").text() !== "key" && $("button#typeDropdown6").text() !== "type" && $("button#shapeDropdown6").text() !== "shape"){
      
      var key6 = $("button#keyDropdown6").text();
      var type6 = $("button#typeDropdown6").text();
      var shape6 = $("button#shapeDropdown6").text();
      
      

      if(type6 === "Major"){
        type6 = "";
      }
      else if(type6 === "minor"){
        type6 = "m";
      }
      else if(type6 === "Major 7"){
        type6 = "Maj7";
      }
      else if(type6 === "minor 7"){
        type6 = "m7";
      }
      else if(type6 === "7"){
        type6 = "7";
      }
      else if(type6 === "m7b5"){
        type6 = "m7b5";
      }
      else if(type6 === "augmented"){
        type6 = "aug";
      }
      else if(type6 === "diminished"){
        type6 = "dim";
      }

      if(shape6 === "open"){
        shape6 = "-o";
      }
      else if(shape6 === "6 root"){
        shape6 = "-m-6";
      }
      else if(shape6 === "5 root"){
        shape6 = "-m-5";
      }
      else if(shape6 === "4 root"){
        shape6 = "-m-4";
      }

      if($(".appHeader .sixth")) $(".appHeader .sixth").remove();
      var progressionLabel6 = " - " + key6 + type6;
      $("h1.progression").append("<span class='sixth'>" + progressionLabel6 + "</span>"); 

      chord6 = key6 + type6 + shape6;
      chordArr[5] = chord6;
      console.log(chordArr);
      // $("img.chordImg").attr("src", "assets/" + chord6 + ".png");


      console.log(chord6);
      
    
    }

  });
  

});