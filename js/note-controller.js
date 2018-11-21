
function Output(){
  var note = new Note
  document.getElementById("btn").onclick  = function() {
      var text = document.getElementById("user_input").value;
      note.addNote(text)
      document.getElementById("note").innerHTML = "Notes:";
        for (var I = 0; I < note.array.length; I++){
         var noteList = "<li>" + note.array[I] + "</li>";
         var note20 = noteList.substring(0,24)
         document.getElementById("note").innerHTML += note20;
        }

  }

}
