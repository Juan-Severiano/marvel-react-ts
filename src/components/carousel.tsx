import { PropsWithChildren, ReactNode, useRef } from "react";

const Carousel = (props: PropsWithChildren<{ children: ReactNode }>) => {
  const { children } = props;
  const carousel = useRef<HTMLDivElement>(null);

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <>
      <section className='carousel' ref={carousel} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {children}
      </section>
      <div className="fs-1 container justify-content-center d-flex text-black">
        <button className='btn fs-1 text-black' onClick={handleLeftClick}>
          <i className="bi bi-arrow-left-circle-fill me-3"></i>
        </button>
        <button className='btn fs-1 text-black' onClick={handleRightClick}>
          <i className="bi bi-arrow-right-circle-fill ms-3"></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
