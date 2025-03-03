
interface MarkedCircleProps {
    className?: string;
    className2?: string;
    children?: React.ReactNode;
}


export default function MarkedCircle({
    className,
    className2,
    children,
}:MarkedCircleProps) {
return(
    <div className={`cursor-pointer p-2 rounded-full border-8 border-transparent bg-gradient-to-r from-pink-600 to-primary border-image-[linear-gradient(90deg,_#f43f5e,_#3b82f6)] animate-slideDown ${className}`}>
    <div className={`absolute flex items-center top-0 left-0 bg-muted rounded-full justify-center shadow-xl backdrop-blur-md ${className2}`}>
      {children}
    </div>
  </div>
)

}