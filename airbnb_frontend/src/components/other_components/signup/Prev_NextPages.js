import React, { Component } from 'react'
import Signup from '../../other_components/signup/Signup';

/**
 * In this page is navigating next page and prev page
 */
export default class Prev_NextPages extends Component {
    state={
        step:1,
        values
    }
    //proceed to next step
     nextPage = () =>{
        const {step} = this.state;
        this.setPage({
          step : step + 1
        })
      }

      //proceed to prev step
     prevPage = () =>{
        const {step} = this.state;
        this.setPage({
          step : step- 1
        })
      }

      //Handle fields change
      handleChange = input => e =>{
        this.setState({input: e.target.values});
      }

    render() {
        const {step} = this.state;
        return (
            <div>
                
            </div>
        )
    }
}
