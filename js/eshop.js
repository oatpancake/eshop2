$('document').ready(function(){
   loadGoods(); 
});

function loadGoods(){
    //nahravame zbozi na stranku
    $.getJSON('goods.json', function(data){
        console.log(data);
    })
}

