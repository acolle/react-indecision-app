import React from 'react';

// Import components
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // Randomly pick one option
  pickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: option })); // Option string is converted to boolean using !!
  };

  // Add new option
  addOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  // Delete all the options
  deleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  // Delete a select option
  deleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };

  // Clear selected option
  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // Invoked immediately after a component is mounted (inserted into the three)
  componentDidMount() {
    try {
      // Fetch the data
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      // Update the state
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  // Invoked immediately after updating occurs (not called for initial render)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving data');
    }
  }

  // Invoked immediately before a component is unmounted and destroyed
  componentWillUnmount() {

  }

  render() {
    const subtitle = 'Let the computer chooses for you';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            pickOption={this.pickOption}
          />
          <div className="widget">
            <Options
            options={this.state.options}
            deleteOptions={this.deleteOptions}
            deleteOption={this.deleteOption}
            />
            <AddOption
              addOption={this.addOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

// Default props values for IndecisionApp
IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
