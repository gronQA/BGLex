import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-row md:flex-col landscape:flex-row landscape:lg:flex-col items-center justify-center font-serif text-brand-gold gap-3 md:gap-0 landscape:gap-2 landscape:lg:gap-0">
      <div className="md:mb-2 landscape:mb-0 landscape:lg:mb-2 shrink-0">
        <img 
          src="/BGLex/logo_transparent.png" 
          alt="Barbara Babka Logo" 
          className="h-10 sm:h-12 md:h-20 landscape:h-8 landscape:lg:h-20 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <span 
          className="uppercase tracking-[0.2em] font-light text-center leading-tight text-sm sm:text-base md:text-[18px] landscape:text-xs landscape:lg:text-[18px]" 
          style={{ 
            color: '#C99655'
          }}
        >
          Barbara Babka
        </span>
        <div className="flex items-center justify-center w-full gap-2 md:gap-3 mt-0.5 md:mt-1">
          <div className="w-4 sm:w-6 md:w-8 h-[0.5px] bg-brand-gold/40"></div>
          <span 
            className="uppercase whitespace-nowrap tracking-[0.2em] sm:tracking-[0.4em] font-medium text-[6px] sm:text-[7px] md:text-[8px] landscape:text-[6px] landscape:lg:text-[8px]" 
            style={{ 
              marginRight: '-2px', // Offset for tracking
              color: '#C99655'
            }}
          >
            Adwokat
          </span>
          <div className="w-4 sm:w-6 md:w-8 h-[0.5px] bg-brand-gold/40"></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
