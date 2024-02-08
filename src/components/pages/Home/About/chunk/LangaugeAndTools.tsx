import { FC, useEffect, useRef, useState } from 'react';
import { ToolIcon } from '..';
import AppIcons from '../../../../../lib/data/AppIcons';
import Heading3 from '../../../../widget/Headings/Heading3';

const LangaugeAndTools: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        setScrollPosition(scrollTop);
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="flex-1 select-none p-3 ">
      <Heading3>
        {' '}
        Team Behind The
        <span className="text-primary"> Scenario</span>{' '}
      </Heading3>

      <div className="mt-5 p-3 pl-0" style={{ height: '800px' }}>

        <div ref={scrollContainerRef} className='overflow-y-auto h-full'>
          <ul className=" flex flex-wrap justify-center gap-12 md:gap-7">
            {AppIcons.map(({ key, path, name }) => (
              <ToolIcon key={key} path={path} name={name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LangaugeAndTools;
