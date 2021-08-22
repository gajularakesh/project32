import React from 'react'
import Us from './Us'
import styles from './About.module.css'
import Anil_Reddy from './images/anil.jpg';
import rakesh from './images/rakesh.jpg';
import kruthik from './images/kruthik.jpg';
import rashad from './images/rashad.jpg'
import logo from '../../logo.png';

export const About = () => {
    const details = [
        {
            img: rakesh,
            name:"Rakesh",
            Role:"Company Partner",
            about: "He is a Full Stack software engineer and one of the HR in Hotels",
            mail: "rakesh@gmail.com"
        },
        {
            img: Anil_Reddy,
            name:"Anil_Reddy",
            Role:"Company Partner",
            about: "He is a Full Stack software engineer and one of the HR in Hotels",
            mail: "anilreddy@gmail.com"
        },
        {
            img: kruthik,
            name:"Kruthik",
            Role:"Company Partner",
            about: "He is a Full Stack software engineer and one of the HR in Hotels",
            mail: "kruthik@gmail.com"
        },
        {
            img: rashad,
            name:"Rashad",
            Role:"Company Partner",
            about: "He is a Full Stack software engineer and one of the HR in Hotels",
            mail: "rashad@gmail.com"
        }
    ]
    return (
        <>
            <div className={styles.body}>
            <div className={styles.aboutsection}>
            <img src={logo} alt="brand" height={"50"} width={"50"}></img>
                <h1 className={styles.heading}>Hotels <i className="fas fa-code"></i></h1> 
                {/* <img className={styles.img} src={Anil_Reddy} alt="anil"/> */}
                <p className={styles.we}>we are the leading providers of hotel accommodation Indiawide, offering booking services through its own network</p>
                    <a href="https://www.youtube.com"
                    className={styles.youtube}>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com"
                    className={styles.facebook}>
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.twitter.com" className={styles.twitter}>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com"
                    className={styles.instagram}>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
            </div>
            <h2 className={styles.head}>Our Team</h2>
            <div className={styles.row}>
                <Us details={ details }/>
            </div>
            </div>
        </>
    )
}
