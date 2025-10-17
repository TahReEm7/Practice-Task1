import Image from 'next/image';
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">

        {/* Left: Logo + description + social */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <Link href="/">
            <Image
              className="rounded-2xl"
              src={'/logo.png'}
              alt="Logo"
              width={120}
              height={60}
              priority
            />
          </Link>
          <p className="text-sm leading-6">
            Your trusted car service and repair center. We ensure quality and care for every vehicle.
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row gap-12 md:w-2/4 justify-between">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Why Car Doctor</Link></li>
              <li><Link href="#" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Support Center</Link></li>
              <li><Link href="/services" className="hover:text-white">Feedback</Link></li>
              <li><Link href="/contact" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
