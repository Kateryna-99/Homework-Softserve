let data=$('#ident').serialize();
$.ajax({
    type:"POST",
    url: "http://127.0.0.1:5000/",
    data: data,
    success:function(msg){
        alert(msg);
    }

})