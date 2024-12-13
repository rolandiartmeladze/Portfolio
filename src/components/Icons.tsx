type SvgIconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  menu: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  ),
  menuMotion: (props: SvgIconProps) => (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M12 5a1 1 0 100 2h8a1 1 0 100-2h-8zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM3 18a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
    </svg>
  ),
  gmail: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
    </svg>
  ),
  phone: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
    </svg>
  ),
  linkedin: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
    </svg>
  ),
  home: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 900.378 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M888.188 514c10.667 10.667 14.333 19.667 11 27-3.333 7.333-12.333 11-27 11h-84v310c0 9.333-.333 16.333-1 21-.667 4.667-3.333 9-8 13s-12.333 6-23 6h-204V592h-204v310h-194c-18.667 0-30.333-3.333-35-10-4.668-6.667-7-16.667-7-30V552h-84c-14.667 0-23.668-3.667-27-11-3.333-7.333.333-16.333 11-27l400-402c10.667-10.667 23.333-16 38-16 14.667 0 27.333 5.333 38 16l400 402" />
    </svg>
  ),
  education: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M21 3H3a2 2 0 00-2 2v3h2V5h18v14h-7v2h7a2 2 0 002-2V5a2 2 0 00-2-2M1 18v3h3a3 3 0 00-3-3m0-4v2a5 5 0 015 5h2a7 7 0 00-7-7m0-4v2a9 9 0 019 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13 11 11.09M14.5 6L9 9l5.5 3L20 9l-5.5-3z" />
    </svg>
  ),
  project: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M5 3a2 2 0 00-2 2h2m2-2v2h2V3m2 0v2h2V3m2 0v2h2V3m2 0v2h2a2 2 0 00-2-2M3 7v2h2V7m2 0v4h4V7m2 0v4h4V7m2 0v2h2V7M3 11v2h2v-2m14 0v2h2v-2M7 13v4h4v-4m2 0v4h4v-4M3 15v2h2v-2m14 0v2h2v-2M3 19a2 2 0 002 2v-2m2 0v2h2v-2m2 0v2h2v-2m2 0v2h2v-2m2 0v2a2 2 0 002-2z" />
    </svg>
  ),
  work: (props: SvgIconProps) => (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 7a3 3 0 00-3-3h-4a3 3 0 00-3 3H6a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3h-1zm-3-1h-4a1 1 0 00-1 1h6a1 1 0 00-1-1zM6 9h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  skill: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path
          strokeWidth={0.933}
          d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 01-.017 1.948l-1.539.508a5.567 5.567 0 01-.536 1.26l.704 1.46a7.041 7.041 0 01-1.389 1.365l-1.447-.73c-.396.221-.822.395-1.27.514l-.533 1.53a7.066 7.066 0 01-1.948-.017l-.508-1.539a5.567 5.567 0 01-1.26-.536l-1.46.704a7.041 7.041 0 01-1.365-1.389l.73-1.447a5.565 5.565 0 01-.514-1.27l-1.53-.534a7.066 7.066 0 01.017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 011.389-1.365l1.447.73c.396-.221.822-.395 1.27-.514l.534-1.53C6.886.52 7.191.5 7.5.5z"
        />
        <path d="M10.5 7.5 A3 3 0 0 1 7.5 10.5 A3 3 0 0 1 4.5 7.5 A3 3 0 0 1 10.5 7.5 z" />
      </g>
    </svg>
  ),
  contact: (props: SvgIconProps) => (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path
          strokeWidth={0.933}
          d="M7.5.5c.351 0 .697.026 1.034.076l.508 1.539c.445.127.868.308 1.26.536l1.46-.704c.517.397.977.865 1.365 1.389l-.73 1.447c.221.396.395.822.514 1.27l1.53.533a7.066 7.066 0 01-.017 1.948l-1.539.508a5.567 5.567 0 01-.536 1.26l.704 1.46a7.041 7.041 0 01-1.389 1.365l-1.447-.73c-.396.221-.822.395-1.27.514l-.533 1.53a7.066 7.066 0 01-1.948-.017l-.508-1.539a5.567 5.567 0 01-1.26-.536l-1.46.704a7.041 7.041 0 01-1.365-1.389l.73-1.447a5.565 5.565 0 01-.514-1.27l-1.53-.534a7.066 7.066 0 01.017-1.947l1.539-.508c.127-.445.308-.868.536-1.26l-.704-1.46a7.041 7.041 0 011.389-1.365l1.447.73c.396-.221.822-.395 1.27-.514l.534-1.53C6.886.52 7.191.5 7.5.5z"
        />
        <path d="M10.5 7.5 A3 3 0 0 1 7.5 10.5 A3 3 0 0 1 4.5 7.5 A3 3 0 0 1 10.5 7.5 z" />
      </g>
    </svg>
  ),
};
