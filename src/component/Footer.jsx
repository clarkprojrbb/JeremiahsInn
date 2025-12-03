import React from 'react'

const year = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Clark University Movie Club</p>
            <p>All rights reserved @ {year}</p>
        </footer>
    )
}

export default Footer;