// Select color input
// Select size input
var height, width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){

  event.preventDefault();
  height = $('#input_height').val();
  width =  $('#input_weight').val();
  makeGrid(height, width);

  //console.log("height is : " + height + " width is " + width);
})



function makeGrid(x,y) {

// Your code goes here!
$('tr').remove();
for(var i = 1; i <= x; i++){
  $('#pixel_canvas').append('<tr id=table' + i +'></tr>');
  for(var j = 1; j <= y; j++){
    $('#table' + i).append('<td></td>');
  }
}
///Color picker
$('td').click(function addColor(){
  color = $('#colorPicker').val();

//checks the td attribute..style and removes any attribute found
  
  if($(this).attr('style')){
    $(this).removeAttr('style');
  }
  else{
    $(this).attr('style', 'background-color:' + color);
  }
})

}
