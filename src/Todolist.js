import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todolist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };

        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    handleInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    deleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list}); //不建议 直接this.state.list.splice这样直接更改this.state.list
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                //Todoitem是一个子组件， 父组件向子组件传递：通过属性
                //                    子组件向父组件传递： 父组件传递 function给子组件，子组件调用该function
                return (
                    <Todoitem
                        key={index}
                        content={item}
                        index={index}
                        onDelete={this.deleteItem}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleInputValue}/>
                <button onClick={this.handleBtnClick}>add</button>
                <ul>{this.getTodoItems()}</ul>
            </div>
        );
    }
}

export default Todolist;
