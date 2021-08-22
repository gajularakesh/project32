import React from 'react'
import styles from '../About/About.module.css'
export const contact = () => {
    const details = [
        {
            icon: "fa fa-map-marker",
            name:"ADDRESS",
            text1:"Head office",
            l1:"1st floar hotels complex,jublie hills,Hyderabad",
            text2: "our offices",
            l2:"15th floar,amazon buildings,kukatally, Hyderabad",
            l3:"Hotels building, Kompally, Hyderabad"
        },
        {
            icon: "fa fa-phone",
            name:"PHONE",
            text1:" speak with our team for any queries and complaints",
            l1:"rashad: 8008000800",
            text2:"for verification",
            l2:"rakesh: 8008000801",
            l3:"anil: 8008000802"
        },
        {
            icon: "fa fa-envelope",
            name:"EMAIL",
            text1:"Mail us for platform for your hotel",
            l1:"anil@gmail.com",
            text2: "for queries",
            l2:"rakesh@gmail.com",
            l3:"kruthik@gmail.com",
        }
    ]
    const doubled = details.map((myList) =>
            <div className={styles.columns}>
            <div className={styles.cards}>
            <i className={myList.icon} aria-hidden="true"></i>
            <div className={styles.container}>
                <h6 className={styles.title}>{myList.name}</h6>
                <p className={styles.text}>{myList.text1}</p>
                <p className={styles.abouts}>{myList.l1}</p>
                <p className={styles.text}>{myList.text2}</p>
                <p className={styles.abouts}>{myList.l1}</p>
                <p className={styles.abouts}>{myList.l1}</p>
            </div>
            </div>
        </div>
        
    )
    return(
        <>
         <div className={styles.body}>
        <div className={styles.aboutsection}>
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
        <h2 className={styles.head}>Reach Us</h2>
        <div className={styles.rows}>
        {doubled}
        </div>
        </div>
        </>
    );
}
