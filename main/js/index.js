// 페이지 로딩
$(document).ready(function()
{
    /* 날짜 데이터 */
    var toDay = new Date();
    var toYear = toDay.getFullYear();
    var toMonth = toDay.getMonth();
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
    /* 현재 선택 되어 있는 날짜 데이터 */
    var selYear = $(".year_sel option:selected").val();
    var selMonth = $(".month_sel option:selected").val();
    /* 선택된 년, 월에 대한 마지막 일 수 */
    var selMonthLastDay = new Date(selYear,selMonth,0).getDate();
    /* 선택된 년, 월에 대한 달력 동적으로 생성 */
    for( var i = 1; i <= selMonthLastDay; i++ )
    {
        $(".schedule_list").append("");
    }
    
    
    

    

});





