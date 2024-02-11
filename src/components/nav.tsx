import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CSSProperties, PropsWithChildren } from 'react';

const Nav = (props: PropsWithChildren<{ textColor: string }>) => {
  const { textColor } = props
  return (
    <nav className="navbar navbar-expand-lg" style={textColor && { color: textColor }}>
      <div className="container align-items-center">
        <Link className="navbar-brand text-reset w-25 font-default align-items-center d-flex" href="/">
          <Image src="/marvel-logo.png" className='img-fluid marvel-logo' width={200} height={100} alt="" /> <span className="fs-1 ms-1">API EXPLORER</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item"><Link className="nav-link text-reset" href="/characters">Characters</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" href="/comics">Comics</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" href="/events">Events</Link></li>
            <li className="nav-item"><Link className="nav-link text-reset" href="/series">Series</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;