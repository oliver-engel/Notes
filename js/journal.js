
$(window).load(function() {

  $("#development").addClass('activeButton');

  $('#devSection').css("display", "grid");
  $('#freebieSection').hide();
  $('#graphicsSection').css("display", "none");
  $('#stockSection').css("display", "none");
  $('#toolsSection').css("display", "none");
  $('#typographySection').css("display", "none");
  $('#uxuiSection').css("display", "none");








  // if($(".textButton").is(":visible")){
  //   $(".textButton").addClass("activeButton");
  // }
  //
  // else{
  //
  //   $(".textButton").removeClass("activeButton");




    $("button").click(function(){

      var filter = this.id;
      console.log(filter);


      console.log(sectionShow);





      if (!$(this).hasClass('activeButton')) {
          $(this).addClass('activeButton');
          $(this).siblings().removeClass('activeButton');

          if($(this).is("#development")){
            $('#devSection').css("display", "grid");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#freebies")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "grid");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#graphics")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "grid");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#stock")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "grid");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#tools")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "grid");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#typography")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "grid");
            $('#uxuiSection').css("display", "none");
          }

          else if($(this).is("#uxui")){
            $('#devSection').css("display", "none");
            $('#freebieSection').css("display", "none");
            $('#graphicsSection').css("display", "none");
            $('#stockSection').css("display", "none");
            $('#toolsSection').css("display", "none");
            $('#typographySection').css("display", "none");
            $('#uxuiSection').css("display", "grid");
          }








      }

        else{
          $(this).removeClass('activeButton');

          var sectionShow = this.getAttribute("data-divvie");

          $(section.sectionShow).css("display", "none");



        }









    });

    // $("#freebies").click(function(){
    //     $("#freebieSection").slideToggle();
    //     console.log("here");
    // });


});

function toggler(filter){
  $(this).addClass('activeButton');



}
