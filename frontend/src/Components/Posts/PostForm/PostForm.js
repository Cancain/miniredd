import React from "react";

const PostForm = props => {
  return (
    <React.Fragment>
      <form>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={e => props.title(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            onChange={e => props.content(e.target.value)}
          />
        </div>
        <input type="button" onClick={props.submitClicked} value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default PostForm;
