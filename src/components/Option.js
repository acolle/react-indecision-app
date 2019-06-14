import React from 'react';

const Option = (props) => {
  return (
    <div>
      <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
          onClick={(e) => {
            props.deleteOption(props.optionText);
          }}
          className="button button--link"
        >
        Delete
        </button>
      </div>
    </div>
  );
}

export default Option;
