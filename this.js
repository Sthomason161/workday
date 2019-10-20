
  $(document).ready(function () {

    //DATE MOMENT.JS
        let m = moment();
        
        $("#currentDay").text(m.format("dddd, MMMM D, YYYY, h:mm:ss a"));
            // console.log(m.format("dddd MMM Mo YYYY"));



   //code for row to change colors
    $(".saveButton").on("click", function() {

        let value = $(this).siblings(".userInput").val();
        let time = $(this).parent().attr("id");
       // save in localStorage
        localStorage.setItem(time, value);
        window.localStorage.getItem('userInput')
    //    console.log(time)
    //    console.log(value)
    });
    
    function updateTime() {
        let currentHour = moment().hours();
        

        $(".timeBlock").each( function() {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {
            //    console.log(blockHour)
           $(this).addClass("past");
           }
           else if (blockHour === currentHour) {
            //    console.log(currentHour)
            $(this).removeClass("past");
            $(this).addClass("present");
          }
          else {
           $(this).removeClass("past");
           $(this).removeClass("present");
           $(this).addClass("future");
      }
   });}
   updateTime();
   
   
   
   // Local Storae
   
   
   })
