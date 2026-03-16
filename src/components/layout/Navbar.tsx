import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";
import { useCartContext } from "@/data/cartStore";
import { categories } from "@/data/products";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { itemCount, toggleCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b"
      >
        <div className="container-zone flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">ZONE</span>
            <span className="text-foreground">HUB</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <button
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
            >
              Categories <ChevronDown className="w-3 h-3" />
            </button>
            <Link to="/offers" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Deals</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/search")} className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/wishlist" className="p-2 rounded-full hover:bg-secondary transition-colors hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Link>
            <button onClick={toggleCart} className="p-2 rounded-full hover:bg-secondary transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 gradient-bg rounded-full text-[10px] font-bold flex items-center justify-center text-primary-foreground"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
            <Link to="/login" className="p-2 rounded-full hover:bg-secondary transition-colors hidden sm:flex">
              <User className="w-5 h-5" />
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full hover:bg-secondary transition-colors md:hidden">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="absolute top-full left-0 right-0 glass border-b hidden md:block"
            >
              <div className="container-zone py-8 grid grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories`}
                    className="group text-center"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden mb-3 shadow-card">
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <p className="text-sm font-medium">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cat.count} items</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-background pt-20"
          >
            <div className="container-zone flex flex-col gap-6 py-8">
              {[
                { to: "/", label: "Home" },
                { to: "/categories", label: "Categories" },
                { to: "/products", label: "Products" },
                { to: "/offers", label: "Deals" },
                { to: "/wishlist", label: "Wishlist" },
                { to: "/dashboard", label: "Dashboard" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/help", label: "Help" },
                { to: "/login", label: "Login" },
              ].map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={item.to} onClick={() => setMenuOpen(false)} className="text-2xl font-bold hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
