// Write a function that takes a word and a string of text as arguments, and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided.

// Example:

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

// PEDAC
/// input two strings - one representing a key word and one representing a wall of text.
// output integer
  // output represents the number of times the key word appears in the text argument.
  // matches regardless of case - so Sed is the same as sed or sEd

/// ALgorithm
//
//  text.match(key word as a unique word) e.g "sad" would NOT match saddle
// ignore case


function searchWord(key, text) {
  var regex = new RegExp(('\\b'+ key + '\\b'), 'gi');
  var matches = text.match(regex);

  return matches ? matches.length : 0;
}