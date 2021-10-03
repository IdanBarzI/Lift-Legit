import React from 'react'
import './Fotter.css'
import InstagermLogo from './Assets/instagram.svg'
import FacebookLogo from './Assets/facebook.svg'
const Fotter = () => {

    function goToLink(name) {
        if(name === "Instagram"){
        window.open('https://www.freecodecamp.org/');
        }
        else if(name === "Facebook")
        window.open('https://www.facebook.com/liftlegit');
    }

    return (
<header className="fotter"
            style={{backgroundSize: "cover",
            backgroundImage: `url(
                "https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/212264654_120650716930283_69664499159207230_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=lw7sOcGuGWkAX9aPBsx&_nc_ht=scontent.ftlv18-1.fna&oh=bc64af8d584fbd3cd158653de11a05f0&oe=61798537"
            )`,
            backgroundPosition: "center",
            borderTopLeftRadius:  "0%",
            borderTopRightRadius:  "100%",
        }}
        >
            <div className="fotter__contents">
                <h1 className="fotter__title">
                    Contact Us
                </h1>

                <div className="fotter__buttons">
                    <img
                className="fotter__button fotter__instagram"
                src={InstagermLogo}
                alt="Lift Legit Idan Barzilay" onClick={() => goToLink("Instagram")}></img>
                
                <img
                className="fotter__button fotter__instagram"
                src={FacebookLogo}
                alt="Lift Legit Idan Barzilay" onClick={() =>goToLink("Facebook")}></img>
                </div>

                <h1 className="fotter__descripsion">
                Lift Legit is more than a cap, it makes you feel free. So do yourself a favour and choose something Legit
                </h1>
            </div>
        <div className="fotter--fadeTop" />
        

        </header>
    )
}

export default Fotter
