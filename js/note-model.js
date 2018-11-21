(function(exports) {
  function Note() {

    this.text = "test"

    this.array = []
  };

   Note.prototype.addNote = function (text) {

    this.array.push(text)

  };

  Note.prototype.printArray = function () {

   return this.array

 };

  exports.Note = Note;
})(this);
