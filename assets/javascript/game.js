
   $(document).ready(function() {


    var target = 19 + Math.floor(Math.random() * 120);
    $('#target').html(target);

    var cristal1= Math.floor(Math.random() * 12) + 1;
    var cristal2=Math.floor(Math.random() * 12) + 1;
    var cristal3=Math.floor(Math.random() * 12) + 1;
   var cristal4= Math.floor(Math.random() * 12) + 1;
   console.log(cristal1);
   console.log(cristal2);
   console.log(cristal3);
   console.log(cristal4);


    var wins=0;
    var losses=0;

    var total=0;
    $('#total').text(total);

    function reset() {
        total = 0;
          $('#total').text(total);
  
     var target = 19 + Math.floor(Math.random() * 120);
     $('#target').html(target);
     cristal1= 1 + Math.floor(Math.random() * 12);
   cristal2=1  + Math.floor(Math.random() * 12);
   cristal3=1 + Math.floor(Math.random() * 12);
   cristal4= 1 + Math.floor(Math.random() * 12);
      }

function win(){
    wins= wins + 1;
    $('#wins').text(wins);
    reset();
}

    function lose() {
        losses = losses + 1;
        $('#loses').text(losses);
        reset();
    }



    $('#cristal1').click(function() {
        total = total + cristal1
        console.log("User Score: " + total);

             $("#total").text(total);
             if (total === target) {
                win();

            } else if (total > target) {
                lose();


            }
        });
        $("#cristal2").click(function() {

            total = total + cristal2
               $("#total").text(total);
               if(total === target) {
                  win();


              } 
              else if (total > target) {
                  lose();


              }
            });

            $("#cristal3").click(function() {

            total = total + cristal3
               $("#total").text(total) ;
               if (total === target) {
                  win();


              } 
              else if (total > target) {
                  lose();

              }
        
            });

            $("#cristal4").click(function()  {
            total = total + cristal4
               $("#total").text(total);
               if (total === target) {
                  win();

              } 
              else if (total > target) {
                  lose();

              }
            });

            $('#btnr').click(function() {
                reset();
            });
    



});

