import React from 'react'
import styles from './About.module.css';
// import Anil_Reddy from './images/anil.jpg';
export default function Us(props) {
    const details = props.details;
    const doubled = details.map((myList) =>
    <>
        <div className={styles.column}>
            <div className={styles.card}>
            {/* <img className={styles.img} src={myList.imgurl} alt="Jane" style={{width:"100%"}}/> */}

            <img className={styles.img} src={myList.img} alt="anil" style={{width:"100%"}}/>
            <div className={styles.container}>
                <h6 className={styles.titles}>{myList.name}</h6>
                <p className={styles.role}>{myList.Role}</p>
                <p className={styles.about}>{myList.about}</p>
                <p className={styles.about}>{myList.mail}</p>
                <p><button className={styles.button}>Contact</button></p>
            </div>
            </div>
        </div>
    </>
    )
    return(
        <>{doubled}</>
    );
}
