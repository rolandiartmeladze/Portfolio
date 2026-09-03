'use client';

import React from 'react';
/* HeroIcons-ის 24x24 Outline (მონახაზი) და Solid (შევსებული) ხატულების პაკეტების იმპორტი */
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
/* Fallback/ნაგულისხმევი ხატულა, რომელიც გამოჩნდება იმ შემთხვევაში, თუ მოთხოვნილი სახელით ხატულა ვერ მოიძებნა */
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

/* ხატულას ვიზუალური სტილის/ვარიანტის ტიპი (Outline - მონახაზი, Solid - შევსებული) */
type IconVariant = 'outline' | 'solid';

/* კომპონენტის Props-ების TypeScript ინტერფეისი */
interface IconProps {
    name: string;             /* ხატულას სახელი (მაგ: "HomeIcon", "ArrowLeftIcon") */
    variant?: IconVariant;    /* ხატულას ვარიანტი (ნაგულისხმევად 'outline') */
    size?: number;            /* ხატულას ზომა პიქსელებში (ნაგულისხმევად 24) */
    className?: string;       /* დამატებითი Tailwind CSS/CSS კლასები */
    onClick?: () => void;     /* დაწკაპუნების (Click) ივენთის ფუნქცია */
    disabled?: boolean;       /* გათიშული (Disabled) მდგომარეობა */
    [key: string]: any;       /* ნებისმიერი დამატებითი HTML/SVG ატრიბუტი (Rest Props) */
}

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    /* აირჩევა შესაბამისი Icon Set-ი ვარიანტის მიხედვით (Solid თუ Outline) */
    const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;
    
    /* დინამიურად ამოიღება სასურველი ხატულას კომპონენტი ობიექტიდან */
    const IconComponent = iconSet[name as keyof typeof iconSet] as React.ComponentType<any>;

    /* ხატულას არარსებობის შემთხვევაში (Fallback რენდერი) */
    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    /* სტანდარტული ხატულას რენდერი */
    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon;