import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartSidebar from "@/components/cart/CartSidebar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <CartSidebar />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
  </div>
);

export default Layout;
