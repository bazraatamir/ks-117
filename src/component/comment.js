import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={comment:""}
    }
    typeChenge = (e)=>{
        this.setState({comment : e.target.value})
    }
   
    render() { 
       
        return ( 
            <div>
                <p key={1}>{this.state.comment}</p>
                    <input onChange={this.typeChenge} />
            </div>
         );
    }
}
 
export default Comment;