import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container-zone py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-lg font-bold mb-4">
            <span className="gradient-text">ZONE</span>HUB
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Precision-engineered shopping. Delivered in 48 hours.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Shop</h4>
          <div className="flex flex-col gap-2">
            <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link>
            <Link to="/offers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Deals</Link>
            <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Search</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Account</h4>
          <div className="flex flex-col gap-2">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</Link>
            <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sign Up</Link>
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/wishlist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Wishlist</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Support</h4>
          <div className="flex flex-col gap-2">
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/tracking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Track Order</Link>
          </div>
        </div>
      </div>
      <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Zone Hub. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy</span>
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms</span>
          <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Cookies</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
