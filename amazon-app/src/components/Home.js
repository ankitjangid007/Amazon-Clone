import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'> 
        <img 
            className='home__image'
            src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/best-movies-prime-video-2022.jpg'
            alt='home_image' 
        />
        <div className="home__row">
          <Product
            id='123123'
            title="Men's shoes | Up to 70% off"
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/39/UAE-hq/2022/img/Jewelry/XCM_Manual_1404044_4443598_UAE_SA_SL_DC_Men_Shoes_758x608_2X._SY304_CB647694324_.jpg'
          />
          <Product
            id='1365423'
            title="Men's shoes | Up to 70% off"
            price={135.00}
            rating={5}
            image='https://m.media-amazon.com/images/I/41NCCjX95lL.jpg'
          />
        </div>

        <div className="home__row">
          <Product
            id='8883123'
            title="Anker Soundcore Life P2 Mini Bluetooth..."
            price={125.00}
            rating={5}
            image='https://m.media-amazon.com/images/I/315j2FMHCOL.jpg'
          />
          <Product
            id='776123'
            title="Practical Bicycle Bike Police Front Light Warning Siren"
            price={100.00}
            rating={4}
            image='https://m.media-amazon.com/images/I/51uEYoCR9uL.jpg'
          />
          <Product
            id='1264323'
            title="Nikon D850 Digital Camera - 45.7 MP, Body Only, Black"
            price={7999.00}
            rating={4}
            image='https://m.media-amazon.com/images/I/71HJnJrxzEL._AC_UL320_.jpg'
          />
        </div>

        <div className="home__row">
          <Product
            id='1223233'
            title="Xiaomi Mi Curved Gaming Monitor 34 inch screen 3440x1440 WQHD Resolution 4K Curved screen FreeSync AMD 144 Hz 21:9 screen ratio, XMMNTWQ34"
            price={1320.00}
            rating={5}
            image='https://m.media-amazon.com/images/I/51dIH78XX3L._AC_SX425_.jpg'
          />
        </div>

    </div>
  )
}

export default Home