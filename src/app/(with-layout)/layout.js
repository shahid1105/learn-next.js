import Link from "next/link";
import React from "react";

const withLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      {children}
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
};

export default withLayout;
