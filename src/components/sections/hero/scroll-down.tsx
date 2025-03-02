import { Icons } from "@/components/icons"
import { useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function ScrollDown () {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".scrollIconContainer",
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
        {
          x: -400,
          y: 250,
          opacity: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "top 10%",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".scrollIcon",
        {
          x: 0,
          y: 0,
          opacity: 1,
        },
        {
          x: 750,
          y: 150,
          opacity: 0,
          duration: 3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hero",
            start: "top 10%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isDesktop]);

    return(
      <Link href='#expperiance'>

        <div className="scrollIconContainer cursor-pointer size-28 p-2 m-5 relative rounded-full border-8 border-transparent bg-gradient-to-r from-pink-600 to-primary border-image-[linear-gradient(90deg,_#f43f5e,_#3b82f6)] animate-slideDown">
        <div className="scrollIcon absolute flex items-center top-0 left-0 size-24 bg-muted rounded-full justify-center shadow-xl backdrop-blur-md">
          <Icons.scrollDown className="size-16 text-primary drop-shadow-lg" />
        </div>
      </div>      
      </Link>

    );
};