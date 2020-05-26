import React from 'react';
import EditorView from './EditorView';

//App takes returns the Editor View Component
const App = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>React Markdown Previewer</h1>
        <h3>Enter text into the Editor Window to get the marked up text in the Previewer Window. See placeholder text in the Editor Window for an example.</h3>
      </div>
      <EditorView />
    </div>
  ) 
};


export default App;