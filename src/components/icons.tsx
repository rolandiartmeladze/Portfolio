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
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8V14C4 15.1 7.6 18 12 18C16.4 18 20 15.1 20 14V8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9V16"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="17" r="1" fill="black" />
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
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 7H22V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V7Z"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7V5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V7"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16H10"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16H17"
        stroke={props.stroke || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  moon: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  ),
  sun: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  ),
  blog: (props: SvgIconProps) => (
    <svg
      fill="#000000"
      height="28px"
      width="28px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <g>
        <g>
          <g>
            <path
              d="M93.238,220.968h172.463c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084H93.238
				c-4.466,0-8.084,3.619-8.084,8.084S88.772,220.968,93.238,220.968z"
            />
            <path
              d="M93.238,177.853h97.01c4.466,0,8.084-3.619,8.084-8.084s-3.618-8.084-8.084-8.084h-97.01
				c-4.466,0-8.084,3.619-8.084,8.084S88.772,177.853,93.238,177.853z"
            />
            <path
              d="M114.796,398.282h280.253c16.344,0,29.642-13.298,29.642-29.642v-91.082c0-5.206-1.371-10.333-3.968-14.822
				c-2.233-3.865-7.179-5.189-11.044-2.953c-3.866,2.233-5.188,7.179-2.953,11.044c1.176,2.034,1.797,4.362,1.797,6.732v91.082
				c0,7.43-6.044,13.474-13.474,13.474H114.796c-7.43,0-13.474-6.044-13.474-13.474v-91.082c0-7.43,6.044-13.474,13.474-13.474
				h150.905c4.466,0,8.084-3.619,8.084-8.084c0-4.466-3.618-8.084-8.084-8.084H114.796c-16.344,0-29.642,13.298-29.642,29.642
				v91.082C85.154,384.984,98.452,398.282,114.796,398.282z"
            />
            <path
              d="M477.068,412.237c1.684-5.067,2.596-10.484,2.596-16.11V158.989c0-28.231-22.969-51.2-51.2-51.2h-45.81V29.642
				C382.653,13.298,369.355,0,353.01,0h-21.558c-16.344,0-29.642,13.298-29.642,29.642v78.147H83.537
				c-28.231,0-51.2,22.969-51.2,51.2v237.137c0,5.627,0.912,11.043,2.596,16.11C14.43,419.065,0,438.368,0,460.8
				C0,489.031,22.969,512,51.2,512h409.6c28.231,0,51.2-22.969,51.2-51.2C512,438.368,497.57,419.065,477.068,412.237z
				 M317.979,29.642c0-7.43,6.044-13.474,13.474-13.474h21.558c7.43,0,13.474,6.044,13.474,13.474v13.474h-48.505V29.642z
				 M366.484,59.284v188.632h-16.168V59.284H366.484z M317.979,59.284h16.168v188.632h-16.168V59.284z M317.979,264.084h48.505
				v20.66c0,0.579-0.192,1.153-0.539,1.617l-21.558,28.743c-0.704,0.938-1.652,1.078-2.156,1.078c-0.503,0-1.452-0.14-2.156-1.078
				l-21.557-28.741c-0.348-0.466-0.54-1.04-0.54-1.619V264.084z M48.505,158.989c0-19.317,15.715-35.032,35.032-35.032h218.274
				v37.726h-57.667c-4.466,0-8.084,3.619-8.084,8.084s3.618,8.084,8.084,8.084h57.667v106.892c0,4.053,1.339,8.071,3.773,11.318
				l21.558,28.743c3.596,4.796,9.096,7.545,15.091,7.545c5.994,0,11.495-2.75,15.091-7.545l21.559-28.745
				c2.433-3.244,3.772-7.263,3.772-11.316v-63.776h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954
				v-26.947h33.954c4.466,0,8.084-3.619,8.084-8.084s-3.619-8.084-8.084-8.084h-33.954v-37.726h45.81
				c19.317,0,35.032,15.715,35.032,35.032v237.137c0,19.317-15.715,35.032-35.032,35.032H83.537
				c-19.317,0-35.032-15.715-35.032-35.032V158.989z M460.8,495.832H51.2c-19.317,0-35.032-15.715-35.032-35.032
				c0-16.257,11.071-30.113,26.426-33.963c9.349,12.434,24.222,20.49,40.943,20.49h344.926c16.72,0,31.594-8.056,40.943-20.49
				c15.355,3.85,26.426,17.707,26.426,33.963C495.832,480.117,480.117,495.832,460.8,495.832z"
            />
            <path
              d="M235.52,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
				c4.466,0,8.084-3.618,8.084-8.084C243.604,467.113,239.986,463.495,235.52,463.495z"
            />
            <path
              d="M433.853,463.495H272.168c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h161.684
				c4.466,0,8.084-3.618,8.084-8.084C441.937,467.113,438.318,463.495,433.853,463.495z"
            />
            <path
              d="M202.105,463.495h-1.078c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h1.078
				c4.466,0,8.084-3.618,8.084-8.084C210.189,467.113,206.571,463.495,202.105,463.495z"
            />
            <path
              d="M164.379,463.495H78.147c-4.466,0-8.084,3.618-8.084,8.084c0,4.466,3.618,8.084,8.084,8.084h86.232
				c4.466,0,8.084-3.618,8.084-8.084C172.463,467.113,168.845,463.495,164.379,463.495z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  download: (props: SvgIconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3V16M12 16L7 11M12 16L17 11M5 20H19"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  eye: (props: SvgIconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8-11-8-11-8Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="black" strokeWidth="2" />
    </svg>
  ),
  scrollDown: (props: SvgIconProps) => (
    <svg
      width="50"
      height="100"
      viewBox="0 0 50 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="15"
        y="5"
        width="20"
        height="40"
        rx="10"
        stroke="white"
        strokeWidth="3"
      />

      <circle cx="25" cy="15" r="4" fill="white">
        <animate
          attributeName="cy"
          values="15; 30; 15"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      <polyline
        points="10,70 25,90 40,70"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="points"
          values="10,65 25,85 40,65; 10,70 25,90 40,70; 10,65 25,85 40,65"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </polyline>
    </svg>
  ),
  github: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.9 8.12 6.9 9.46.5.09.68-.21.68-.46 0-.23-.01-.84-.01-1.65-2.82.61-3.42-1.36-3.42-1.36-.46-1.18-1.12-1.49-1.12-1.49-.91-.62.07-.61.07-.61 1.01 0 1.53 1.03 1.53 1.03.9 1.55 2.36 1.1 2.93.84.09-.64.35-1.1.63-1.35-2.04-.23-4.18-1.02-4.18-4.54 0-.99.35-1.81.92-2.45-.09-.23-.4-1.13.08-2.33 0 0 .77-.25 2.53.95.74-.21 1.53-.31 2.31-.31s1.57.1 2.31.31c1.76-1.2 2.53-.95 2.53-.95.48 1.2.18 2.1.08 2.33.57.64.92 1.46.92 2.45 0 3.53-2.14 4.31-4.18 4.54.34.29.63.87.63 1.64 0 1.18-.01 2.13-.01 2.41 0 .25.18.56.69.46C19.1 20.12 22 16.4 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  resume: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44772 22 6 22H18C18.5523 22 19 21.5523 19 21V7.82843C19 7.298 18.7893 6.78929 18.4142 6.41421L14.5858 2.58579C14.2107 2.21071 13.702 2 13.1716 2H6ZM7 4H12V8C12 8.55228 12.4477 9 13 9H17V20H7V4ZM14 4.41421L16.5858 7H14V4.41421ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM8 14C8 13.4477 8.44772 13 9 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H9C8.44772 15 8 14.5523 8 14ZM8 17C8 16.4477 8.44772 16 9 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H9C8.44772 18 8 17.5523 8 17Z" />
    </svg>
  ),
  role: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  time: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  arroweft: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M15.707 19.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L9.414 12l6.293 6.293a1 1 0 0 1 0 1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
  arrowRight: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8.293 19.707a1 1 0 0 1 0-1.414L14.586 12 8.293 5.707a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
