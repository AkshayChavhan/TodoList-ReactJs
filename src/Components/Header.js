import React from 'react'
import PropTypes from 'prop-types'

// export default function Header(props) {
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// STRICT CHECKING THAT TITLE MUST BE STRING
Header.propTypes = {
    title :PropTypes.string.isRequired
}

// .isRequired is given to get value but no empty value is allowed 


//defaultProps is for the getting default props if no props is enter in Header in App.js
//if null value is passed or no value or wrong values passed then default will occurs
Header.defaultProps ={
    title :"Default Title"
}