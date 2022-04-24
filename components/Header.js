import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100 shadow h-20 w-full items-center justify-center flex flex-row">
      {/* <div
        className="container mx-auto flex flex-wrap p-5 
      flex-col md:flex-row items-center"
      > */}
        <Link href="/">
          <a
            className="flex w-1/2 title-font font-medium
          items-center md:justify-start mb-4 mb-0"
          >
             <h1 className="text-2xl text-gray-100 bg-gray-600 ml-4 px-4 rounded py-1  tracking-wider">I <span className="text-xl">❤️</span> <span> CODING</span></h1> 
            {/* <Image
              src="/images/notebook.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="ml-3 text-xl">I Love Coding</span> */}
          </a>
        </Link>
        <nav
          className="flex flex-wrap md:w-4/5 items-center
        justify-end text-base md:ml-auto"
        >
          <Link href="/blog">
            <a
              className="mx-5 cursor-pointer uppercase
            hover:text-indigo-300"
            >
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a
              className="mx-5 cursor-pointer uppercase
            hover:text-indigo-300"
            >
              About
            </a>
          </Link>
        </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
