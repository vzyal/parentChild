import React, { Component } from "react";
 

class IsiProduk extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    tambahBarang = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

        
    }

    kurangBarang =() =>{
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order);
            })
        }
        
    }

    render(){
        return (
            
                
                <div className="card">
                    <div className="img-produk">
                        <img src="https://www.heymart.id/wp-content/uploads/2020/08/GULAKU-Gula-Pasir-Tebu-1kg-300x300.jpg" alt="produk-image"/>
                    </div>
                    <p className="produk-title">Gula Pasir Gulaku</p>
                    <p className="produk-harga">Rp 15,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.kurangBarang}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.tambahBarang}>+</button>
                    </div>
                    
                </div>
            
        );
    }
}

export default IsiProduk;