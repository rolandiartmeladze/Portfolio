'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

// 1. PROPS INTERFACE (ტიპების განსაზღვრა)
// განსაზღვრავს კომპონენტისთვის გადასაცემი პარამეტრების ტიპებს TypeScript-ში
interface AppLogoProps {
  src?: string;       // ლოგოს სურათის მისამართი (არასავალდებულო, აქვს Default მნიშვნელობა)
  iconName?: string;  // იკონის სახელი, თუ სურათი მიუწვდომელია (არასავალდებულო)
  size?: number;      // ლოგოს/იკონის ზომა პიქსელებში (არასავალდებულო)
  className?: string; // დამატებითი Tailwind/CSS კლასები გარედან (არასავალდებულო)
  onClick?: () => void; // დაჭერისას შესასრულებელი ფუნქცია (არასავალდებულო)
}

// 2. MEMO-ზირებული კომპონენტი
// React.memo აკავებს კომპონენტის ხელახალ რენდერს (re-render), თუ მისი props არ შეცვლილა
const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png', // ნაგულისხმევი (Default) სურათის გზა
  iconName = 'SparklesIcon',            // ნაგულისხმევი იკონი
  size = 64,                           // ნაგულისხმევი ზომა 64px
  className = '',
  onClick,
}: AppLogoProps) {

  // 3. USEMEMO ჰუკი - CSS კლასების ოპტიმიზაცია
  // ითვლის კლასების სტრინგს მხოლოდ მაშინ, როდესაც იცვლება onClick ან className
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    
    // თუ onClick ფუნქცია არსებობს, ემატება კურსორი და hover ეფექტი
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    
    // გარედან გადაწოდებული დამატებითი კლასების შეერთება
    if (className) classes.push(className);
    
    return classes.join(' ');
  }, [onClick, className]);

  return (
    // მთავარი კონტეინერი (Wrapper)
    <div className={containerClassName} onClick={onClick}>
      {/* 4. პირობითი რენდერი (Conditional Rendering) */}
      {/* თუ src გადაცემულია, რენდერდება AppImage, წინააღმდეგ შემთხვევაში AppIcon */}
      {src ? (
        <AppImage
          src={src}
          alt="Logo" 
          width={size}
          height={size}
          className="flex-shrink-0" // ხელს უშლის სურათის შეკუმშვას flex კონტეინერში
          priority={true}          // ტვირთავს სურათს პრიორიტეტულად (LCP ოპტიმიზაციისთვის)
          unoptimized={src.endsWith('.svg')} // SVG ფორმატის შემთხვევაში თიშავს Next.js-ის Image ოპტიმიზაციას
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;