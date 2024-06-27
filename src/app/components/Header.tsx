import * as React from 'react';
import sinc from "../../../public/sinc.png"
import Image from 'next/image';
import NavComponent from './NavComponent';
import Button from './Button';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className='px-20 sticky inset-0 z-40 py-5 flex items-center justify-between bg-bright-shade  '>
        <div className='flex  items-center gap-10 '>
            <Image src={sinc} className='' alt="logo"/>
                <NavComponent/>
        </div>
        <div className='text-white md:flex gap-3 hidden   '>
          <Button  className=' bg-silk rounded-3xl px-5 py-3 '>SINC With Us</Button>
          <Button className=' bg-dark rounded-3xl px-5 py-3 '>Apply to SIP 1.0</Button>
        </div>

    </header>
  )
};

export default Header;
