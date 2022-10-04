import Link from "next/link";
import type { ReactNode } from "react";
import Button from "./Button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout min-h-screen">
      <header className="shadow-md flex items-center justify-end px-4">
        <div className="inline-flex gap-2 justify-self-end">
          <Link href="/users/login">
            <Button variant="secondary">Login in</Button>
          </Link>
          <Link href="/users/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>
      <div className="inner">
        <nav className="border-r"></nav>
        <main className="mt-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
