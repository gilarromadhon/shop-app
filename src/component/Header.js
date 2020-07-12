import React from 'react';
import ilustrasi from '../img/ilustrasi.png'
import '../App.css';


class Header extends React.Component{
    render(){
        return(

            <div>
                <header>
                    <div className="navbar">
                        <div class="container">
                            <div className="logo">
                                <h1>Baakol</h1>
                            </div>
                            <label for="menu-toggle" className="header-left">
                                <span className="fa fa-bars menu-icon"></span>
                            </label>
                            <input type="checkbox" id="menu-toggle"/>
                            <div className="subs">
                                <a href="#wanita">Wanita</a>
                                <a href="#pria">Pria</a>
                                <a > Keranjang</a>
                                <a className="login">Login</a>
                            </div>
                        </div>
                    </div>
                    <div class="jumbotron">
                        <div class="container">
                            <div class="gambar">
                                <img src={ilustrasi} alt=""/>     
                            </div>
                            <div class="teks">
                                <h2>Belanja Mudah dan Murah di Baakol.</h2>
                                <p>Temukan fashion terbaru  yang tidak ada ditempat lain.</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;


