
$(document).ready(function(){
    setInterval(function(){
      $('.trucks img').eq(0).animate({'left':'480'}, 1000);
      $('.trucks img').eq(0).animate({'left':'450'}, 1000);
    });
  });

$(document).ready(function(){
    setInterval(function(){
      $('.clouds img').eq(0).animate({'left':'530'}, 1000);
      $('.clouds img').eq(0).animate({'left':'540'}, 1000);
    });
  });

$(document).ready(function(){
    setInterval(function(){
      $('.clouds img').eq(1).animate({'left':'890'}, 1000);
      $('.clouds img').eq(1).animate({'left':'910'}, 1000);
    });
  });

$(document).ready(function(){
    setInterval(function(){
      $('.clouds img').eq(2).animate({'left':'1210'}, 1000);
      $('.clouds img').eq(2).animate({'left':'1230'}, 1000);
    });
  });


function display(){
    rtime=etime-ctime;

    if (rtime>60)
        m=parseInt(rtime/60);
    else{
        m=0;
    }
    s=parseInt(rtime-m*60);

    if(s<10)
        s="0"+s
        window.status="Time Remaining :  "+m+":"+s
        window.setTimeout("checktime()",1000)
}

function settimes(){
var time= new Date();
    hours= time.getHours();
    mins= time.getMinutes();
    secs= time.getSeconds();
    etime=hours*3600+mins*60+secs;
    etime+=4;  //10= 10초
    checktime();
}

function checktime(){
    var time= new Date();
        hours= time.getHours();
        mins= time.getMinutes();
        secs= time.getSeconds();
        ctime=hours*3600+mins*60+secs
    if(ctime>=etime){
        expired();
    }
    else
        display();
}

function expired(){
    location.href="../main.html";  //지정된 시간 이후 이동할 페이지 주소
}
//-->
