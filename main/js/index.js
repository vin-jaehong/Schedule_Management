// 페이지 로딩
$(document).ready(function()
{
    /* 날짜 데이터 */
    var toDay = new Date();
    var toYear = toDay.getFullYear();
    var toMonth = toDay.getMonth()+1;
    /* select box option 동적 생성 */
    $(".year_sel").append("<option value='"+toYear+"'>"+toYear+"년</option>");
    $(".year_sel").append("<option value='"+(Number(toYear)+1)+"'>"+(Number(toYear)+1)+"년</option>");
    for( var i = 1; i <= 12; i++ )
    {
        if( i == toMonth )
        {
            $(".month_sel").append("<option value='"+i+"' selected='selected'>"+i+"월</option>");
        }
        else if( i != toMonth ) $(".month_sel").append("<option value='"+i+"'>"+i+"월</option>");
    }
    scheduleListPrint();
    
});

/* 달력 표시 함수 */
var scheduleListPrint = function()
{
    /* 현재 선택 되어 있는 날짜 데이터 */
    var selYear = $(".year_sel option:selected").val();
    var selMonth = $(".month_sel option:selected").val();
    /* 선택된 년, 월에 대한 마지막 일 수 */
    var selMonthLastDay = new Date(selYear,selMonth,0).getDate();
    
    /*firstDay==week를 위한 blink 값 */
    var firstWeek = new Date(selYear+"-"+selMonth+"-01").getDay();
    for( var i = 0; i < firstWeek; i++ )
    {
        var tag = $("<div class='prev_month_day'></div>");
        $(".schedule_list").append(tag);
    }
    /* 선택된 년, 월에 대한 달력 동적으로 생성 */
    for( var i = 1; i <= selMonthLastDay; i++ )
    {
        /* 요일이 토,일 일 때 color : red  */
        if( new Date(selYear+"-"+selMonth+"-"+i).getDay() == 0 || new Date(selYear+"-"+selMonth+"-"+i).getDay() == 6  ) 
        {
            var tag = $("<div id='_"+selYear+"_"+selMonth+"_"+i+"' class='schedule_box'><div class='schedule_contents'><p class='day_number'>"+i+"</p></div></div>");
            $(".day_number").css("color","red");
        }
        else
        {
            var tag = $("<div id='_"+selYear+"_"+selMonth+"_"+i+"' class='schedule_box'><div class='schedule_contents'><p>"+i+"</p></div></div>");
        }
        $(".schedule_list").append(tag);
    }
}

/* select box 값 변경시(달력 날짜 변경시) */
$(function()
{
    $(".year_sel").change(function()
    {
        $(".schedule_list div").remove();
        scheduleListPrint();         
    });
    $(".month_sel").change(function()
    {
        $(".schedule_list div").remove();
        scheduleListPrint();         
    });
})

/* schedule_box click event */
$(function()
{
    $(".schedule_box").click(function()
    {
        alert(this.id);
    });
})






