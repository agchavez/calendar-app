import React from 'react'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className='navbar-brand'>
                        Jose Chavez

                    </span>
                    <button className='btn btn-outline-danger'>
                        <i className='fas fa-sign-out-alt'></i>
                        <span> Salir</span>

                    </button>

                </div>
            </nav>
            
        </>
    )
}
