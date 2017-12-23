$(function()
    {
        $(".p3-enter li").click(function()
        {
            $(".p3-content").hide();
            $(".p3-enter li").removeClass("color")
            $(".p3-content").eq($(this).index()).show()
            $(this).addClass("color")
        })
        
        $(".gonggao a").mouseover(function()
        {
        	 $(".gonggao a").removeClass("hover")
        	$(this).addClass("hover")
        })
        $(".jianjie p").click(function()
        {
        	$(".jianjie1").removeClass("active");
        	$(".jianjie p").removeClass("color")
        	$(this).addClass("color");
        	$(".jianjie1").eq($(this).index()).addClass("active")
        });
        var date=new Date();
        var year=date.getFullYear()+1
        $("#s").html(year)
    })