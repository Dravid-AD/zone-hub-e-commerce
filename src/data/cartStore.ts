import { create } from 'zustand';
import type { Product } from './products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
  total: () => number;
  itemCount: () => number;
}

// Simple in-memory store without zustand since we don't have it
let listeners: (() => void)[] = [];
let cartState: { items: CartItem[]; isOpen: boolean } = { items: [], isOpen: false };

function notify() { listeners.forEach(l => l()); }

export function useCart() {
  // Using React state as simple store
  const [, forceUpdate] = (await import('react')).useState(0);
  
  return cartState;
}

// Actually let's use React context instead
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import React from 'react';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setOpen: (open: boolean) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) { setItems(prev => prev.filter(i => i.product.id !== productId)); return; }
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const toggleCart = useCallback(() => setIsOpen(p => !p), []);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return React.createElement(CartContext.Provider, {
    value: { items, isOpen, addItem, removeItem, updateQuantity, clearCart, toggleCart, setOpen: setIsOpen, total, itemCount },
  }, children);
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCartContext must be used within CartProvider');
  return ctx;
}
