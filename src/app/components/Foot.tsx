import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sincwhite from "../../../public/sincwhite.png"
import Acreed from "../../../public/Acreed.png"
import wa from "../../../public/wA.png"
import acreed from "../../../public/Acreed.png"

const Foot: React.FC = () => {
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:flex gap-8">
          <div className="md:col-span-2">
            <Image src={sincwhite} alt="SINC Partners" width={100} height={50} />
            <p className="mt-4">
              SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Platforms</h3>
            <ul>
              <li><Link href="#">Kofoundme</Link></li>
              <li><Link href="#">InResidency</Link></li>
              <li><Link href="#">Service Market</Link></li>
              <li><Link href="#">Founders School</Link></li>
              <li><Link href="#">Metty</Link></li>
              <li><Link href="#">Grantty</Link></li>
              <li><Link href="#">Boldtell</Link></li>
              <li><Link href="#">Chekwa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Initiatives</h3>
            <ul>
              <li><Link href="#">Jabi Plains</Link></li>
              <li><Link href="#">Local Pricing Initiative</Link></li>
              <li><Link href="#">Scholarship Program</Link></li>
              <li><Link href="#">SSMN Pricing</Link></li>
              <li><Link href="#">University STEM</Link></li>
              <li><Link href="#">University InResidency</Link></li>
              <li><Link href="#">1M Nigeria 🇳🇬 Products</Link></li>
              <li><Link href="#">Founders Festival</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul>
              <li><Link href="#">Who We Are</Link></li>
              <li><Link href="#">Our People</Link></li>
              <li><Link href="#">Concept Innovations</Link></li>
              <li><Link href="#">Our Process</Link></li>
              <li><Link href="#">Investors Network</Link></li>
              <li><Link href="#">CSR & Events</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Equity Jobs</Link></li>
              <li><Link href="#">EIR Program</Link></li>
              <li><Link href="#">Offers</Link></li>
              <li><Link href="#">Innovation News</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Blog & Resources</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div>
            <h3 className="font-semibold">Locations</h3>
            <p>Abuja, Nigeria<br/>Lagos, Nigeria<br/>Philadelphia, USA</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div className="flex items-center flex-col">
              <Image src={acreed} alt="Accredited Business" width={50} height={50} />
              <span>ACCREDITED BUSINESS A+</span>
            </div>
            <div className="flex items-center flex-col">
              <Image src={wa} alt="Chat with Us" width={50} height={50} />
              <span>Chat with Us</span>
            </div>
          </div>
        </div>
        
        </div>
        <div className="mt-8 text-center">
          <p>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Security</Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p>We are a business built on the foundation of Christian values and belief</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="#"><Image src="/path-to-facebook-icon.png" alt="Facebook" width={30} height={30} /></Link>
            <Link href="#"><Image src="/path-to-twitter-icon.png" alt="Twitter" width={30} height={30} /></Link>
            <Link href="#"><Image src="/path-to-linkedin-icon.png" alt="LinkedIn" width={30} height={30} /></Link>
            <Link href="#"><Image src="/path-to-instagram-icon.png" alt="Instagram" width={30} height={30} /></Link>
            <Link href="#"><Image src="/path-to-youtube-icon.png" alt="YouTube" width={30} height={30} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
