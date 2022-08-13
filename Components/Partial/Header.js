import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../styles/images/React 1.png';
import navIcon from '../../styles/images/Vector.png';


const Header = () => {
  return (
    <div className='container mx-auto bg-white text-black flex justify-between items-center h-20'>
        <div className=''>
           <Link className=' cursor-pointer' href={"/"}>
                <Image className=' cursor-pointer top-7' width={100} height={30} src={logo} alt="Lemon Hive" />
           </Link>
        </div>
        <div>
            <ul className=' flex gap-5'>
                <li className=' text-black hover:text-golden'><Link href="/about">About Us</Link></li>
                <li className=' text-black hover:text-golden'><Link href="#">What We Do</Link></li>
                <li className=' text-black hover:text-golden'><Link href="#">Our Work</Link></li>
                <li className=' text-black hover:text-golden'><Link href="#">Blog</Link></li>
                <li className=' text-black hover:text-golden'><Link href="#">Say hi</Link></li>
            </ul>
        </div>
        <div className=' cursor-pointer'>
            <Image src={navIcon} alt="Lemon Hive" />
        </div>
    </div>
  )
}

export default Header