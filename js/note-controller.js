// function changeText(){
//   document.getElementById("text").innerHTML = "Howdy";
// }

function Output(){
  var note = new Note
  document.getElementById("btn").onclick  = function() {
      var text = document.getElementById("user_input").value;
      note.addNote(text)
      document.getElementById("note").innerHTML = text;
      for (var I = 0; I < note.array.length; I++){
       var noteList = "<li>" + note.array[I] + "</li>";
       document.getElementById("note").innerHTML += noteList;
      }

  }



}
