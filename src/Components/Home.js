
import React from 'react'
import AddtoCradImage from '../add.png'

function Home() {
    return (
        <div>
            <div className="Add-to-Card">

                <img src={AddtoCradImage}/>
            </div>

            <h1>Home Component</h1>
            <div className="card-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/81Z1scL6HvL._SX679_.jpg" data-old-hires="https://m.media-amazon.com/images/I/81Z1scL6HvL._SL1500_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Red mi - 13 C   </span>
                    <span>Price :8700</span>
                </div>


                <div className="Button-wrapper item">
                    <button>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default Home;