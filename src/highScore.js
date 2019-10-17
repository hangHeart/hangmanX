import React, {Component} from 'react';
import { createSecretKey } from 'crypto';


class HighScore extends Component{
    constructor(props){
        super(props);
        this.state = {
            highScore:'loading'
        }
        
    }

    componentDidMount(){

        fetch('/highScore/topTen')
        .then(data => data.json())
        .then(data => {
            this.setState({highScore:data},() =>{
                console.log('testing state', this.state.highScore)
            })
        })
    }
    render(){
        const keysArr = Object.keys(this.state.highScore);
        console.log('testing obj.keys', keysArr)

        let testArr = [];
        for(let i = 0; i <keysArr.length; i+=1){
            testArr.push(<div>{this.state.highScore[keysArr[i]]["name"] + "    ===>" + this.state.highScore[keysArr[i]]["score"]}</div>)
        }
       
            console.log('testing here ==>',this.state.highScore[keysArr[0]]["name"])
        // this.state.highScore[keysArr[0][score]]
    
        return (
            <div>
                <p>High Score/Ranking</p>
                <div>{testArr}</div>
            </div>
        )
    }
}
export default HighScore;