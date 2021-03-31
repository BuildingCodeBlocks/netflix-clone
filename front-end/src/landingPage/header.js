import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <header>
                <div class="netflixLogo">
                    <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></a>
                </div>      
                <nav class="main-nav">                
                    <a href="#home">Home</a>
                    <a href="#tvShows">TV Shows</a>
                    <a href="#movies">Movies</a>
                    <a href="#originals">Originals</a>
                    <a href="#">Recently Added</a>
                    <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>        
                </nav>
                <nav class="sub-nav">
                    <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
                    <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
                    <a href="#">Account</a>        
                </nav>      
                </header>
            </div>
        )
    }
}