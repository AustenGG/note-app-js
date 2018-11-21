(function(exports) {
  function testNoteIsCreated() {
    var note = new Note;

    if (note.text !== 'test') {
      throw new Error("Test Note was not created");
    }
    if (note.array.length > 0 ) {
        throw new Error("the array is not empty");
      }
    };

  function testPushed() {
    var note = new Note;

    note.addNote("Test2")

    if (note.array.length == 0 ) {
        throw new Error("the array is empty");
      }

  };
//
//   function testPrint() {
//     var note = new Note;
//
//     note.addNote("Test2")
//     if (console.log(note.array) != ["Test2"]);
//       throw new Error("Array incorrect")
// };



testNoteIsCreated();
testPushed();
// testPrint();
})(this);
