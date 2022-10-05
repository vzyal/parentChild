import React, { Component, Fragment } from "react";
import IsiProduk from "./IsiProduk/IsiProduk";
import './Produk.css'

class Produk extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return (
            <Fragment>
                <div className="header">
                    <div>
                        
                    </div>
                    <div className="troley">
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <IsiProduk onCounterChange ={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Produk;