const React = require('react');
const pokemon = require('../models/pokemon');

class Show extends React.Component {
    render() {
        const {name, img} = this.props;
        return(
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{name}, I choose you!</h2>
                <img src={img} alt={"Picture of " + name} />
                <br />
                <a href="/pokemon">Back to Pokedex</a>
            </div>
        )
    }
}

module.exports = Show;