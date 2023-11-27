import Image from 'next/image';

const Footer = () => {
    return (
      <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container pt-8 pl-14 flex justify-between">
          <span className="text-muted">
          <Image
    src="/images/Jett Jagger.png"
    alt="hero image"
    width={80}
    height={80}
    className="text-white font-semibold md:w-24 md:h-24 lg:w-30 lg:h-30"
  />
          </span>
          <p className="text-slate-700">All right reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;