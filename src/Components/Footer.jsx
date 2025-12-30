import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaPaw } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-950 border rounded-sm text-white pt-0">
      <div className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center px-6 md:pl-20 gap-1">
          <FaPaw size={46} />
          <h1 className="text-5xl font-bold ">PetCare</h1>
        </div>

        <div className="flex gap-8 mr-8">
          <div>
            <h3 className="font-inter font-medium text-white mb-4">Company</h3>
            <ul className="font-inter font-normal text-sm flex flex-col gap-2">
              <li className="hover:text-amber-400 cursor-pointer">About us</li>
              <li className="hover:text-amber-400 cursor-pointer">Services</li>
              <li className="hover:text-amber-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-medium text-white mb-4">Contact us</h3>
            <ul className="font-inter font-normal text-sm flex flex-col gap-2">
              <li className="flex gap-1 hover:text-amber-400 cursor-pointer">
                <FaPhoneAlt size={20} />
                <span>(+212) 7 18 54 89 32</span>
              </li>
              <li className="flex gap-1 hover:text-amber-400 cursor-pointer">
                <MdEmail size={20} />
                <span>khadijabouheria@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      

      <div className="flex justify-between items-center px-6 py-2 text-sm">
        <span>© Copyright by CodeUI. All rights reserved.</span>
        <div className="flex gap-3 ">
          <FaXTwitter size={20} className="text-white hover:scale-110 transition hover:text-amber-400 cursor-pointer" />
          <FaInstagram size={20} className="text-white hover:scale-110 transition hover:text-amber-400 cursor-pointer" />
          <FaLinkedin size={20} className="text-white hover:scale-110 transition hover:text-amber-400 cursor-pointer" />
          <FaGithub size={20} className="text-white hover:scale-110 transition hover:text-amber-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}