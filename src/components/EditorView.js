import React from 'react';
import './EditorView.css';
import marked from 'marked';

class EditorView extends React.Component{

  state = {
    input: placeholder,
  };

  //Sets the input state to whatever is entered in  textarea
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });

  }

  //Function that contains marked converting the input state to Marked text
  renderInput(){
    return { __html:marked(this.state.input) };
  }

  //Because the marked function returns text with html tags, i used the "dangerouslySetInnerHTML" prop to remove the tags from the renderInput function.
  
  render(){
    return(
        <div>
          <div className="container">
              <div className="container1">
                <label className="editor-label">Editor</label>
                <textarea onChange={this.handleChange} className="editor-textarea">{placeholder}</textarea> 
              </div>
                
              <div className="container2">
                <label className="prev-label">Previewer</label>           
                <div className="prev-block" dangerouslySetInnerHTML={this.renderInput()}></div>
              </div>
          </div>
        </div>
       
  

    )
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://libormarko.github.io/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

`;

export default EditorView;

