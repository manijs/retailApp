var React = require('react'),
    ReactDOM = require('react-dom');

var Main = React.createClass({
    render : function(){
        return (
            <div>
                "Hello World"
            </div>    
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));