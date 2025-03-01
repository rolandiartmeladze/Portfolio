import { Icons } from "@/components/icons"

export default function ScrollDownButton () {
    return(
        <div className="scrollIconContainer cursor-pointer size-28 p-2 m-5 relative rounded-full border-8 border-transparent bg-gradient-to-r from-pink-600 to-primary border-image-[linear-gradient(90deg,_#f43f5e,_#3b82f6)] animate-slideDown">
        <div className="scrollIcon absolute flex items-center top-0 left-0 size-24 bg-muted rounded-full justify-center shadow-xl backdrop-blur-md">
          <Icons.scrollDown className="size-16 text-primary drop-shadow-lg" />
        </div>
      </div>
    );
};