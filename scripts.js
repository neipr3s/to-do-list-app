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

li.on("click", function crossOut() {
    li.toggleClass("strike");
});


// Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
		li.addClass("delete")
	}
// Making list sortable
$('#list').sortable();

  //enable enter key to push input to list

//   $(document).ready(function() {
//     // Enable enter key to push input to list
//     $("#input").keyup(function(event) {
//       if (event.keyCode === 13) {
//         newItem();
//         $("#input").val(''); // Clear the input box after adding an item
//       }
//     });

// });
}