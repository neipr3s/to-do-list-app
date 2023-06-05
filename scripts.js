function newItem() {
    
    //Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //Crossing an item out:
  function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
});



}