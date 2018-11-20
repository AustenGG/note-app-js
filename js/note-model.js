(function(exports) {
  function Note() {

    this.text = "test"

    this.array = []
  };

   Note.prototype.addNote = function (text) {

    this.array += text

  };

  exports.Note = Note;
})(this);
