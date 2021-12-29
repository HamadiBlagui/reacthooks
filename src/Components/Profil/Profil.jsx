
import React,{Component} from 'react'




class Profil extends Component {
constructor(props) {
    super(props);
    this.state={
    interval:null,
    counter:0,
    };
}
componentDidMount (){
    this.setState ({
    interval:setInterval(()=>{
        this.setState({
            counter:this.state.counter+1
        })
       
    
},1000)

})

}


componentWillUnmount () {
    clearInterval(this.state.interval)
};


render() {
    return (
        <div>
           {this.props.children}
           <h1>{this.props.FullName}</h1> 
           <h1>{this.props.Age}</h1>
           <h1>{this.props.Profession}</h1>
           <h1>{this.props.Bio}</h1>
           <h2>{this.state.counter}</h2>
           
        </div>
          )
        }
    }

export default Profil
