$(document).ready(function(){

// 1 - when submit is clicked add contents of textbox below button in h3

  $('#submitBtn').click(function(){
    var text = $('.textInput').val();
    console.log(text);
    $('.text-display').append('<h3>' + text + '</h3>');
  });


// 2 -  reveal hidden message when checked

  $('.chex').click(function(){
    $('#q2-message').toggleClass('hidden');
  });


// 3 - add new cat to the table

  $('#cat-table tbody:last').append('<tr><td>Cat</td><td>5</td><td>Content</td></tr>');


// 4 - make hangry red and content green


  $('#cat-table td').each(function(){
    if($(this).text() == 'Content') {
      $(this).css('color', 'green');
    }
    if($(this).text() == 'Hangry') {
      $(this).css('color', 'red');
    }
  });

// 5 - when clicked only display cats weighing 10+ lbs

  $('#heavy-cats').click(function(){

    $('#cat-table td').each(function(){
      var weight = $(this);
      if(parseInt(weight.text(),10) < 10) {
        $(this).parent().toggleClass('hidden');
      }
    });
  });


// 6 - when clicked dchange names to uppercase

  $('#yell').click(function(){
    $('#cat-table td:first-child').each(function(){
      //console.log(this); //confirm that all names are called
      var capsName = $(this).text().toUpperCase();
      //console.log(capsName);  //confirm that all are upper case
      $(this).html('<td>' + capsName + '</td>');

    })
  });
///need to figure out how to toggle back to lower case


// 7 - click to show and hide the table
// toggles bootstrap hidden class

  $('#toggle').click(function(){
    console.log('click1');
    $('#cat-table').toggleClass('hidden');

  });

// 8 - disable the input field, checkbox and link

  $('#text-box').prop('disabled',true);
  $('#checkbox').prop('disabled',true);
  $('#no-link').click(function(event){
    event.preventDefault();
  });

  // 9 - select third item from drop down and append to page

    $('#dropdown').change(function(){
      var selectedOption = ($(this).val());
      $('#dropdownDiv').append('<p>' + selectedOption + '</p>');
    })

// 10 - alert user how many items are in the list

    $('#10').click(function() {
      alert('The list has ' + $('#alertList > li').length + ' items');
    });

// 11 - add buttons for adding and removing items from list

    $('#add-item').click(function(){
      $('#alertList').append('<li>New item</li>');
    });


    $('#remove-item').click(function(){
      $('#alertList li:last').remove();
    })


// 12 - create counter to display the length of the list

    var totalItems = $('#alertList > li').length;
    $('#12').append('<p> Items in list: ' + totalItems + '</p>');

    $('.btn').click(function(){
      totalItems = $('#alertList > li').length;
      $('#12 p').html('<p> Items in list: ' + totalItems + '</p>');
    });



});
