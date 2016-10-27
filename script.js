$(document).ready(function (){
  $('.element1, .element2, .element3, .element4, .element5, .element6').draggable({
    revert: 'invalid',
  });
  $('.sachet').droppable({
    accept: '.element1, .element2, .element3, .element4, .element5, .element6',
    drop: function (event, ui){
    }
  });
});
