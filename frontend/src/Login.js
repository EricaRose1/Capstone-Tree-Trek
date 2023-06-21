import React from 'react';

function Login() {

    return (
        <>
            <form>
                <label>Username: </label>
                <input 
                    className='username'
                    type='text'
                    placeholder='Username'/>
                <label>Password: </label>
                <input 
                    className='password'
                    type='text'
                    placeholder='Password'/>
            </form>
        </>
    )
}