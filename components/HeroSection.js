import React from 'react'
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import leftImg from '../public/images/banner/Rectangle 6.png'
import RightImg from '../public/images/banner/Rectangle 1.png'
import starIcon from '../public/images/Star-2.png';
import TitleIcon from '../public/images/Group-67.png';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>

            <div className={styles.childOne}>
                <div className={styles.childOneWrap}>
                    <div className={styles.childoneIconPosition}>
                        <Image src={TitleIcon} alt="Icon" />
                    </div>
                    <h2>React</h2>
                    <h2> Conference</h2>
                </div>
            </div>

            <div className={styles.childTwo}>
                <div className={styles.childTwoWrap}>
                    <Image src={leftImg} alt="left image" />
                </div>
            </div>

            <div className={styles.childThree}>
                <div className={styles.childThreeWrap}>
                    <p>
                        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.
                        Id fermentum.In quis diam turpis quam id fermentum. 
                    </p>
                    <div className={styles.buyTicketButton}>
                        <a href='#'>Buy Tickets</a>
                    </div>
                </div>
            </div>

            <div className={styles.childFour}>
                <div className={styles.childFourWrap}>
                    <div className={styles.IconPositon}>
                        <Image src={starIcon} alt="Icon" />
                    </div>
                    <Image src={RightImg} alt="left image" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection