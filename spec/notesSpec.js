(function(exports) {
  function testNoteIsCreated() {
    var note = new Note('My favourite language is JavaScript');

    if (note.text !== 'My favourite language is JavaScript') {
      throw new Error("Note was not created");
    }
};

testNoteIsCreated();
})(this);
