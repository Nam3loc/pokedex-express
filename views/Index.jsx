const React = require('react');

const myStyle = {
    backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1ab9ccb0-73f4-4354-ac3a-fbbfc224a000/d65xqm7-ac30a914-b7fb-4b71-a7dc-93d4e18ca91c.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

const secondStyle = {
    paddingTop: '165px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div style={myStyle}>
                <div style={secondStyle}>
                    <h1>Pokedex</h1>
                    <nav>
                        <a href="/pokemon/new">Create Pokemon</a>
                    </nav>
                    <ul>
                        {
                            pokemon.map((pokemon, i) => {
                                return (
                                <li key={i}>
                                    <a style={{color: 'red'}} href={`/pokemon/i${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1).toLowerCase()}</a>
                                    <br />
                                    {
                                    <img src={pokemon.img} alt={"Picture of " + pokemon.name} />
                                    }
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Index;