import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import logo from '../public/images/React 1.png';
import navIcon from '../public/images/Vector.png';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
        <div className={styles.headerLogo}>
            <Link className='' href={"/"}>
                    <Image className={styles.LogoSize} width={100} height={30} src={logo} alt="Lemon Hive" />
            </Link>
        </div>
        <div className={styles.headerMenu}>
            <ul className={styles.HeaderMenuListing}>
                <li className=''><Link href="/about">About Us</Link></li>
                <li className=''><Link href="#">What We Do</Link></li>
                <li className=''><Link href="#">Our Work</Link></li>
                <li className=''><Link href="#">Blog</Link></li>
                <li className=''><Link href="#">Say hi</Link></li>
            </ul>
        </div>
        <div className={styles.headerMobileMenuIcon}>
            <Image src={navIcon} alt="Lemon Hive" />
        </div>
    </div>
  )
}

export default Header