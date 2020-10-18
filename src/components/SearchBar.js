import React, {Component} from 'react';

/**
 * Props:
 *
 * onChange - a listener for when the text area has a keyboard event
 * value - the value to display in the text area
 * start - A boolean value to tell whether this is the start building field.
 */
class SearchBar extends Component {
    render() {
        // IntelliJ might complain about "this.props.onChange" not existing.
        // Don't worry, inside <App /> we're passing something in as an onChange prop, so it exists.
        // IntelliJ just isn't quite smart enough to understand how props work in React.
        return (
            <div id="search-bar">
                <label>
                    {this.buildType()}:
                    <input
                        value={this.props.value}
                        onChange={this.props.onChange}
                        type="string"
                    />
                </label>
                <span> </span>
            </div>
        );
    }
}

export default SearchBar;