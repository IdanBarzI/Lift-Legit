import React ,{useEffect, useState} from 'react';
import './Banner.css';

const Banner = (props) => {

    return(
        <header className="banner"
            style={{backgroundSize: "cover",
            backgroundImage: `url(
                "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/205945780_115157257479629_2871035002982136430_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8b1QLejGZYsAX-pNb1b&_nc_ht=scontent.ftlv18-1.fna&oh=9183ff0f35d23d32fd90ff4e917273bd&oe=61796671"
            )`,
            backgroundPosition: "center center"
        }}
        >
      
        <div className="div_pop">
          LIFT LEGIT
        </div>
            <div className="banner--fadeBottom" />

        </header>
    );
}

export default Banner