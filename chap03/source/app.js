var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
    render: function() {
        return React.createElement(
            'h1',
            {className: 'header'},
            'ReactComponent'
        );
    }
});

var reactComponentElement = React.createElement(ReactClass)

ReactDOM.render(reactComponentElement,document.getElementById('react-application'))