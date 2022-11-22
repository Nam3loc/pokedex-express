const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Pokemon Entry</h1>
                <nav><a href="/pokemon">Home Page</a>
                </nav>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Image: <input type="img" name="img" /><br />
                    <input type="submit" value="Finish Entry" />
                </form>
            </div>
        )
    }
}

module.exports = New;