import MenuList from "./menu-list";

export default function Navigate({ className }: { className?: string }) {
  return (
    <nav className={`hidden fixed z-40 top-0 right-12 h-full lg:flex items-center p-4 transition-transform md:translate-x-0 ${className}`}>
      <MenuList showBlog={false} className="flex" />
    </nav>
  );
}
