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

  }
testNoteIsCreated();
testPushed();
})(this);
