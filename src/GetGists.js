import React, { Component } from 'react'; 


export default class GetGists extends Component { 
    constructor(){ 
        super()
        this.state = {
            username: '',
            gists: [],
        }
    }
    handleUsernameChange = username =>  { 
        this.setState({ username });
    }

    handleSubmit = async event => { 
        event.preventDefault(); 
        console.log('submit: ', this.state.username); 
        try { 
            const gists = await fetch(`${process.env.GITHUB_URL}${this.state.username}/gists`)
                .then(res=> res.json()); 
            debugger
        } catch (err) { 
            console.log('error')
        }
        
    }



    render() { 
        return (
            <form>
                <fieldset>
                    <label>Get Gists</label>
                    <input onChange={({ target: { value } }) => this.handleUsernameChange(value)}type="text" name="username" />
                </fieldset>
                <fieldset>
                    <button type="submit" onClick={event => this.handleSubmit(event)}>Search</button> 
                </fieldset> 
            </form>
        )
    }


}