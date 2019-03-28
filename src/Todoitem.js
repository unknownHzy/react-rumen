import React from 'react';

class Todoitem extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const {onDelete, index} = this.props;
        onDelete(index);
    }

    render() {
        const {content} = this.props;
        return (
            <li onClick={this.handleDelete}>
                {content}
            </li>
        );
    }
}

export default Todoitem