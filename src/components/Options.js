import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your options</h3>
        <button
          onClick={props.deleteOptions}
          className="button button--link"
        >
          Remove all
        </button>
      </div>

    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
      {
        props.options.map((option, index) => {
          return (
            <Option
              key={option}
              optionText={option}
              count={index + 1}
              deleteOption={props.deleteOption}
            />
          )
        })
      }
    </div>
  );
}

export default Options;
