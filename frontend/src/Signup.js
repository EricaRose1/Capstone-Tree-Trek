import React from 'react';

function SignUp() {

    return (
        <div>
            <form>
                <label> First Name:
                    <input 
                    type='text'/>
                </label>
                <label> Username:
                    <input 
                    type='text'/>
                </label>
                <label> Password:
                    <input 
                    type='password'/>
                </label>
            </form>
        </div>
    )
}

export default SignUp;