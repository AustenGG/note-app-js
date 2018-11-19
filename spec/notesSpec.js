(function(exports) {
  function testNoteIsCreated() {
    var note = new Note;

    if (note.text !== 'test') {
      throw new Error("Note was not created");
    }
};

testNoteIsCreated();
})(this);
