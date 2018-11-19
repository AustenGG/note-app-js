(function(exports) {
  function Note(text) {
    this.text = text;
  };

  exports.Note = Note;
})(this);

Note.prototype.returnNote = function () {
  return this.text
};
