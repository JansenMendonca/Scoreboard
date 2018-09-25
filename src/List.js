import React,{Component} from 'react'

import Buttons from './Buttons'

class List extends Component{
    constructor(props){
        super(props)

        this.state={
            userInput:'',
            list:[]
        }

    }
    
    addUserInput(input){
        this.setState({
            userInput: input
        })
    }

    addPlayer(input){
       let listArray = this.state.list

       listArray.push(input)

        

       this.setState({
           list: listArray,
           userInput : ''
       })
    }

   
    render(){
        return(
            <div className='class="input-group'>
                <ul className='list-group'>
                    {this.state.list.map((val, i)=><li key={i} className='list-group-item' >{val} : <span><Buttons /></span></li>)}                    
                </ul>
                <hr />
                <input 
                    onChange={(e)=> this.addUserInput(e.target.value)}
                    value={this.state.userInput}
                    type='text' 
                    placeholder="Enter player's name..." 
                />
                <button className='btn btn-secondary' onClick={()=> this.addPlayer(this.state.userInput)} >Add PLayer</button>
                          
            </div>
        )
    }
}
export default List