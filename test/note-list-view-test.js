(function(){
  describe('noteListView')

  let list = new NoteList();
  let view = new ListNoteView(list);
  console.log(view);
  it('handles a list with no notes')
  assert.isTrue(view.htmlOutput(),  "<ul></ul>");

  it('handles a list with one note')
  let text = 'My Favourite language is Javascript'
  let note = new Note(text);
  list.addNote(note);
  console.log(list.displayNotes());

  assert.isTrue(view.htmlOutput(),  `<ul><li>${text}</li></ul>`);

  it('handles a list with many notes')
  let text2 = "test"
  let note2 = new Note(text2);
  list.addNote(note2)

  assert.isTrue(view.htmlOutput(), `<ul><li>${text}</li><li>${text2}</li></ul>`)
})();
