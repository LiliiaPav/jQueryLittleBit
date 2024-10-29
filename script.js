// function sayHello(){
//     if($('#title').html()=='Hello'){
//         $('#title').html('Goodbye')
//     }
//     else {
//         $('#title').html('Hello')
//     }

    
// }


function sayBye(){
    $('#title').html('Goodbye');
    $('#title').click(function(){
        $('#title').html('Hello');
        $('#title').off('click');
    });
    console.log( $('#title').html());
    
}


$(".crop-img").click(function(){
    $("#bigImage").attr('src', 
        $(this).attr('src'));
});