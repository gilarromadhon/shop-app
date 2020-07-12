import React, { Component } from 'react';
import '../App.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          email: '',
          nama: ''
        }
      
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const {nama,email} = this.state;
        alert(`Terima kasih ${nama}, Email ${email} siap untuk berlangganan newsletter`);
    }
    
    onChange(event){
        const {name,value} = event.target;
        this.setState({ [name]:value })
    }
  
    render(){
        const {nama,email} = this.setState;

        return(
            <div>
            <footer>
                <div className="container">
                    <div className="kiri">
                        <div className="nama">
                            <h1>Baakol</h1>
                        </div>
                        <div className="kontak">
                            <p>Hubungi kami di:</p>
                            <p>spanbaakol@custsomer.id</p>
                            <p>+6281 1234 5678</p>
                            <p>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className="kanan">
                        <div className="keterangan">
                            <p>Dapatkan <span>voucher menarik</span> dengan berlangganan newsletter kami</p>
                        </div>
                        <form onSubmit={this.onSubmit}>
                        <div className="form">
                            <input name='nama' className="nama" type="text" placeholder="John Doe" value={nama} onChange={this.onChange}/>
                            <input name='email' className="email" type="text" placeholder="example@mail.com" value={email} onChange={this.onChange}/>
                            <button className="submit" type="submit" value="Kirim">Subscribe</button>
                        </div>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
        )
    }
}

export default Footer;
