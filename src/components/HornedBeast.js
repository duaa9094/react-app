import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
          <div>

<h2>{this.props.title}</h2>
<p>{this.props.description}</p>
<img src={this.props.imageurl}/>

          </div>


        )
    }
}

export default HornedBeast;