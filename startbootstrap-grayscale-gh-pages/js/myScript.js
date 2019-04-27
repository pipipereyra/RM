function showText(idDiv, button){
$("#"+idDiv).toggle(function(){
    if(button.innerHTML=='Ler mais')
        button.innerHTML = 'Menos';
    else
        button.innerHTML = 'Ler mais';
});
}