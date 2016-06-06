var React = require('react');
var ReactDOM = require('react-dom');

var listOfItems = <ul className="list-of-items">
                    <li className="item-1">Item1</li>
                    <li className="item-2">Item2</li>
                    <li className="item-3">Item3</li>
                </ul>


ReactDOM.render(listOfItems,document.getElementById('react-application'))
