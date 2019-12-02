import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
    super(props)

    this.state = {name: "", }
    this.handleChange = this.handleChange.bind(this)
}


handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  } 

  handleChange(e) {
      this.setState.state({ name: e.target.value, })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        required 
        placeholder="Add An Item"
        value={this.state.name}
        name="name"
        onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;