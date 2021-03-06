import React, { Component } from 'react'
import PostModel from "../../models/post"
class Postform extends Component {
    state = {
        title: "",
        body: "",
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        PostModel.createPost(this.state, this.props.match.params.id)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push(`/cars/${this.props.match.params.id}`);
    }
    render() {
        return (
            <div>
                <h4 style={{color:'#13b0cc'}}> Add Post </h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label style={{color:'#13b0cc'}}> Title </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label style={{color:'#13b0cc'}}> Body </label>
                        <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
                    </div>
                    <button type="submit"> Submit </button>
                </form>        
            </div>
        )
    }
}

export default Postform