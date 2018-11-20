(function(exports) {
  function Note() {

    this.text = "test"

    this.array = []
  };

   Note.prototype.addNote = function () {

    this.array += this.text

  };

  exports.Note = Note;
})(this);
