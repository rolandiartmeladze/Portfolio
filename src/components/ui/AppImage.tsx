'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';

// 1. PROPS INTERFACE (ტიპების განსაზღვრა)
// განსაზღვრავს Next.js Image კომპონენტის გაფართოებულ პარამეტრებს
interface AppImageProps {
    src: string;                  // სურათის ძირითადი მისამართი
    alt: string;                  // ალტერნატიული ტექსტი (SEO და accessibility-ისთვის)
    width?: number;               // სიგანე პიქსელებში (არასავალდებულო)
    height?: number;              // სიმაღლე პიქსელებში (არასავალდებულო)
    className?: string;           // დამატებითი Tailwind/CSS კლასები
    priority?: boolean;           // პრიორიტეტული ჩატვირთვა LCP-ისთვის
    quality?: number;             // სურათის ხარისხი (1-100)
    placeholder?: 'blur' | 'empty'; // ჩატვირთვამდე საჩვენებელი ეფექტი
    blurDataURL?: string;         // Blur ეფექტის Data URL
    fill?: boolean;               // ავსებს თუ არა მშობელ კონტეინერს
    sizes?: string;               // Responsive ზომების განსაზღვრა სხვადასხვა ეკრანისთვის
    onClick?: () => void;         // დაჭერისას შესასრულებელი ფუნქცია
    fallbackSrc?: string;         // სათადარიგო სურათის მისამართი შეცდომის (Error) დროს
    loading?: 'lazy' | 'eager';   // ჩატვირთვის რეჟიმი (Lazy loading)
    unoptimized?: boolean;        // თიშავს თუ არა Next.js Image ოპტიმიზაციას
    [key: string]: any;           // ნებისმიერი სხვა დამატებითი Prop (Rest Props)
}

// 2. MEMO-ზირებული კომპონენტი
// აკავებს ხელახალ რენდერს (re-render), თუ პროპსები არ შეცვლილა
const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png', // ნაგულისხმევი Fallback სურათი
    loading = 'lazy',
    unoptimized = false,
    ...props
}: AppImageProps) {

    // 3. STATE-ები (შიდა მდგომარეობები)
    const [imageSrc, setImageSrc] = useState(src);          // სურათის მიმდინარე URL
    const [isLoading, setIsLoading] = useState(true);        // ჩატვირთვის სტატუსი (Loading state)
    const [hasError, setHasError] = useState(false);         // შეცდომის დაფიქსირება

    // 4. USEMEMO - გარე URL-ის შემოწმება
    // ამოწმებს, არის თუ არა სურათი გარე რესურსი (იწყება 'http'-ით)
    const isExternalUrl = useMemo(() => typeof imageSrc === 'string' && imageSrc.startsWith('http'), [imageSrc]);
    
    // გარე სურათებისთვის ან unoptimized=true-ს დროს თიშავს Next.js-ის ოპტიმიზაციას
    const resolvedUnoptimized = unoptimized || isExternalUrl;

    // 5. HANDLERS (მოვლენების დამუშავება)
    
    // სურათის ჩატვირთვის შეცდომის მართვა
    const handleError = useCallback(() => {
        // თუ შეცდომა ჯერ არ დაფიქსირებულა და სურათი არ არის უკვე fallback, გადაერთვება fallbackSrc-ზე
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    }, [hasError, imageSrc, fallbackSrc]);

    // წარმატებული ჩატვირთვის დამუშავება
    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    // 6. CSS კლასების ოპტიმიზაცია
    const imageClassName = useMemo(() => {
        const classes = [className];
        if (isLoading) classes.push('bg-gray-200'); // ჩატვირთვის პროცესში ემატება ნაცრისფერი ფონი
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        return classes.filter(Boolean).join(' ');
    }, [className, isLoading, onClick]);

    // 7. PROPS-ების დინამიური აწყობა (Next/Image-ისთვის)
    const imageProps = useMemo(() => {
        const baseProps: any = {
            src: imageSrc,
            alt,
            className: imageClassName,
            quality,
            placeholder,
            unoptimized: resolvedUnoptimized,
            onError: handleError,
            onLoad: handleLoad,
            onClick,
        };

        // თუ priority=true-ია, loading პარამეტრი აღარ სჭირდება
        if (priority) {
            baseProps.priority = true;
        } else {
            baseProps.loading = loading;
        }

        // Blur placeholder-ის კონფიგურაცია
        if (blurDataURL && placeholder === 'blur') {
            baseProps.blurDataURL = blurDataURL;
        }

        return baseProps;
    }, [imageSrc, alt, imageClassName, quality, placeholder, blurDataURL, resolvedUnoptimized, priority, loading, handleError, handleLoad, onClick]);

    // 8. RENDER LOGIC (პირობითი რენდერი)

    // ა) თუ fill=true: სურათი იკავებს მშობელი კონტეინერის 100%-ს (Responsive layout)
    if (fill) {
        return (
            <div className="relative" style={{ width: '100%', height: '100%' }}>
                <Image
                    {...imageProps}
                    fill
                    sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    style={{ objectFit: 'cover' }}
                    {...props}
                />
            </div>
        );
    }

    // ბ) სტანდარტული რენდერი კონკრეტული ზომებით (width/height)
    return (
        <Image
            {...imageProps}
            width={width || 400}  // ნაგულისხმევი სიგანე: 400px
            height={height || 300} // ნაგულისხმევი სიმაღლე: 300px
            sizes={sizes}
            {...props}
        />
    );
});

// React DevTools-ში კომპონენტის სახელის სწორად გამოჩენისთვის
AppImage.displayName = 'AppImage';

export default AppImage;