import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const test = <div>Hello</div>;

const App = () => {
  // pass in default value to useState
  const [note, setNote] = React.useState(''); // state variable + setter
  const [notes, setNotes] = React.useState([]);

  const fetchNotes = () => {
    // get all notes
    axios.get('/api/getAllNotes')
      .then((res) => {
        console.log(res);
        setNotes(res.data.notes);
      })
      .catch(console.log);
  };

  const submitNote = () => { // arrow function
    console.log(note);
    const body = {
      note: note
    };
    axios.post('/api/addNote', body)
      .then(() => setNote(''))
      .then(() => fetchNotes()) // fetch notes
      .catch(console.log);
  };

  // hook
  React.useEffect(() => {
      fetchNotes();
  }, []);

  // jsx
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <input value={note} onChange={e => setNote(e.target.value)}/>
          </div>
          <div>
            <button onClick={submitNote}>Add Note</button>
          </div>
          <div>
            {notes.map((item) => {
              // convert array
              return (
                <div>
                  {item}
                </div>
              );
            })} 
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
