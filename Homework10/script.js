//task1
$("a[href^='https://']").attr('target', '_blank');


//task2
$("h2.head").css("background-color", "green").find(".inner").css("font-size", "35px")


//task3
$("h3").next("div").each(function(){
    $(this).insertBefore($(this).prev("h3"))
}
)  



//task4

$(".checkboxClass").on('click', function(){
if($('.checkboxClass:checked').length>=3){
 $(".checkboxClass").attr('disabled','disabled');
}
})