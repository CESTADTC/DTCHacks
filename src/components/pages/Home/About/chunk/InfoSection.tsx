import { FC } from 'react';
import Heading3 from '../../../../widget/Headings/Heading3';

const InfoSection: FC = () => {
  return (
    <div className="fony-bold flex flex-1 flex-col gap-6 pt-3 pb-10 pl-10 text-lg md:text-xl">
      <Heading3 extra="-left-8">
        {' '}
        Who we are
        <span className="not-italic"> 👋 </span>
        We  <span className="text-primary"> the technical societies</span>,{' '}
      </Heading3>
      <article className="relative space-y-5 before:block before:-translate-x-8 before:font-mono before:text-lg before:font-normal before:not-italic before:text-base-200 before:content-['<p>'] after:block after:-translate-x-10 after:font-mono after:text-lg after:font-normal after:not-italic after:text-base-200 after:content-['</p>']">
        <p>
        vafklabsjkfbjajksbf jkasbdfasbdfna skj
          jahsdfasdhjfgajsgfhjasdgfhjasgdfhjagshjfgasdkjhfgasjgfhja
          sjhafghasdfghjasgdhjfasgdfhjbasdahbgfurierthwhejf cnamvba
          jasfdasdgfuielwhiufblaljsnmv alsndlv hjasdlghfeluiwgui
        </p>
        <p>
          Avafklabsjkfbjajksbf jkasbdfasbdfna skj
          jahsdfasdhjfgajsgfhjasdgfhjasgdfhjagshjfgasdkjhfgasjgfhja
          sjhafghasdfghjasgdhjfasgdfhjbasdahbgfurierthwhejf cnamvba
          jasfdasdgfuielwhiufblaljsnmv alsndlv hjasdlghfeluiwgui
          vafklabsjkfbjajksbf jkasbdfasbdfna skj
          jahsdfasdhjfgajsgfhjasdgfhjasgdfhjagshjfgasdkjhfgasjgfhjag
          sjhafghasdfghjasgdhjfasgdfhjbasdahbgfurierthwhejf cnamvba
          jasfdasdgfuielwhiufblaljsnmv alsndlv hjasdlghfeluiwgui
        </p>

        <p>
          vafklabsjkfbjajksbf jkasbdfasbdfna skj
          sjhafghasdfghjasgdhjfasgdfhjbasdahbgfurierthwhejf cnamvba
          jasfdasdgfuielwhiufblaljsnmv alsndlv hjasdlghfeluiwgui
        </p>
      </article>
    </div>
  );
};
export default InfoSection;
