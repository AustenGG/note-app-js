function View() {

  this.array = ["Hello", "bye"]
};

 View.prototype.view = function () {
   var notes = this.array

   console.log(notes.join('<li><div>','</div> </li>'))

};
