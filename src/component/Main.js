import React,{ useState, useEffect } from 'react';
import '../App.css';

function Main() {
    const [buy1, setBuy1] = useState('Masukan Keranjang');
    const [buy2, setBuy2] = useState('Masukan Keranjang');
    const [buy3, setBuy3] = useState('Masukan Keranjang');
    const [buy4, setBuy4] = useState('Masukan Keranjang');
    const [buy5, setBuy5] = useState('Masukan Keranjang');
    const [buy6, setBuy6] = useState('Masukan Keranjang');
    const [buy7, setBuy7] = useState('Masukan Keranjang');
    const [buy8, setBuy8] = useState('Masukan Keranjang');

    return (
            <div>
                <main>
                    <div className="brand">
                        <div className="container">
                            <div className="brand-wrapper">
                                <div className="merk">
                                    <img src={require("../img/brand1.png")} />
                                </div>
                                <div className="merk">
                                    <img src={require("../img/brand2.png")} />
                                </div>
                                <div className="merk">
                                    <img src={require("../img/brand3.png")} />
                                </div>
                                <div className="merk">
                                    <img src={require("../img/brand4.png")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="konten">
                        <div className="container">
                        <div className="heading_catalog" id="wanita">
                            <h2>Wanita</h2>
                        </div>
                        <div className="catalog">
                            <div className="kategori">
                                <img src={require("../img/dress_woman.jpg")} />
                                <p>Dress</p>
                                <button onClick={() => setBuy1('Telah Dimasukan')}>{buy1}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/celana_woman.jpg")} />
                                <p>Celana</p>
                                <button onClick={() => setBuy2('Telah Dimasukan')}>{buy2}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/sepatu_woman.jpg")} />
                                <p>Sepatu</p>
                                <button onClick={() => setBuy3('Telah Dimasukan')}>{buy3}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/tas_woman.jpg")} />
                                <p>Tas</p>
                                <button onClick={() => setBuy4('Telah Dimasukan')}>{buy4}</button>
                            </div>
                        </div>

                        <div className="heading_catalog" id="pria">
                            <h2>Pria</h2>
                        </div>
                        <div className="catalog">
                            <div className="kategori">
                                <img src={require("../img/kemaja_man.jpg")} />
                                <p>Kemeja</p>
                                <button onClick={() => setBuy5('Telah Dimasukan')}>{buy5}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/celana_man.jpg")} />
                                <p>Celana</p>
                                <button onClick={() => setBuy6('Telah Dimasukan')}>{buy6}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/sepatu_man.jpg")} />
                                <p>Sepatu</p>
                                <button onClick={() => setBuy7('Telah Dimasukan')}>{buy7}</button>
                            </div>
                            <div className="kategori">
                                <img src={require("../img/tas_man.jpg")} />
                                <p>Tas</p>
                                <button onClick={() => setBuy8('Telah Dimasukan')}>{buy8}</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </main>
            </div>
  );
}

export default Main;
