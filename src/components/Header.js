import React from 'react';

// With Stateless Functional Component
const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

// With Class based Component
// class Header extends React.Component {
//   // The render method must be defined for every class that extends React.Component
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

export default Header;
