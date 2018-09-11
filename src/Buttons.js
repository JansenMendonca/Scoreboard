import React,{Component} from 'react'


class Buttons extends Component{
    constructor(props){
        super(props)

        this.state={ 

            score: 0
        }

    }

    increment(){
        this.setState({
            score : this.state.score + 1
        })
    }

    decrement(){
        this.setState({
            score : this.state.score - 1
        })
    }
    render(){
        return(
            <div className='inline'>
                <button className='inline btn btn-danger' onClick={()=>this.decrement()}>-</button>
                <p className='inline' >  {this.state.score} </p>
                <button className='inline btn btn-success'  onClick={()=>this.increment()}>+</button>                              
            </div>
        )
    }
}
export default Buttons