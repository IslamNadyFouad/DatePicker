
 $( document ).ready(function() {
    $(".dateClick").click(function(){
        if($(".dateDetails").css('display')=='none')
        {$(".dateDetails").css("display","block");}
        else
        {$(".dateDetails").css("display","none");}
        
        });
    
    
    var d=new Date();
    var currentDay=d.getDate();
    var currentYear=d.getFullYear();
    var currentMonth=d.getMonth();
    $("#yearId").text(currentYear);
    $("#monthId").text(currentMonth+1+" ");
    viewDate(currentDay,currentMonth,currentYear);
    var month=currentMonth,year=currentYear;
    //----------------------------------------
    $(".back2").click(function() {
        
    if(year<2022)
    {
        if(month==11)
        {
            month=0;year++;viewDate(currentDay,month,year);
        }
        else
        {
            month++;viewDate(currentDay,month,year);
        }
    }
         $("#yearId").text(year);
         $("#monthId").text(month+1+" ");
     });
   
   $(".back1").click(function() {
        
        if(year>=currentYear && month>=currentMonth+1)
        {
        if(month==0)
        {
            month=11;year--;viewDate(currentDay,month,year);
        }
        else
        {
            month--;viewDate(currentDay,month,year);
        }
        }
         $("#yearId").text(year);
         $("#monthId").text(month+1+" ");
     });
     //---------------------------------------------------------------------------
    
     $(".td").click(function() {
       if($(this).html() < currentDay-1 && month ==currentMonth)
       {}
       else{
         if($(this).html()<10)
          { $(".dateInp").text(year+" / "+(month+1)+" / 0"+$(this).html());}
         else
         { $(".dateInp").text(year+" / "+(month+1)+" / "+$(this).html());}
         $(".dateDetails").css("display","none");
       }
     });
      $(".td").mouseover(function() {
        $(this).css('background-color', '#336699');
        });
      $(".td").mouseout(function() {
        $(this).css('background-color', '#ffffff');
        });
     //--------------------------------------------------------------------------
     function viewDate(myDay,myMonth,myYear)
     {
                
       var firstDay = new Date(myYear,myMonth, 1);
       var lastDay2 = new Date(myYear, myMonth + 1, 0);
       var fd=firstDay.getDay();
            

            var i,j,c=1;
            var cls="#td",mainClass;
           for (i = 0; i < 6; i++) {
               //mainClass=cls2+i+" ";
               for(j = 0; j < 7; j++){
                mainClass=cls+i+j;
                   if(c==lastDay2.getDate()+1){$(mainClass).text(" ");}
                   else if(i==0){
                       if(fd==j || c!= 1)
                       {$(mainClass).text(c);c++; }
                       else{$(mainClass).text(" ");}
                   }
                   else{
                    $(mainClass).text(c);c++;
                    }
               }
           }
     }//--------------------------------
});