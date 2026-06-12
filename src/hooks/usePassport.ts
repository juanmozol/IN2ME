import { useState, useEffect } from 'react';
import type { Product, PassportData } from '../types';
import { staticProducts, getPassportData } from '../lib/staticData';

interface UsePassportResult {
  products: Product[];
  activeProduct: Product | null;
  passportData: PassportData | null;
  loading: boolean;
  productsLoading: boolean;
  error: string | null;
  setActiveProduct: (product: Product) => void;
}

export function usePassport(): UsePassportResult {
  const [products] = useState<Product[]>(staticProducts);
  const [activeProduct, setActiveProductState] = useState<Product | null>(null);
  const [passportData, setPassportData] = useState<PassportData | null>(null);
  const [loading, setLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Initialize first product
  useEffect(() => {
    if (staticProducts.length > 0 && !activeProduct) {
      setActiveProductState(staticProducts[0]);
    }
    setProductsLoading(false);
  }, [activeProduct]);

  // Load passport data when product changes
  useEffect(() => {
    if (!activeProduct) return;

    setLoading(true);
    // Simulate brief loading for smooth UX
    const timer = setTimeout(() => {
      setPassportData(getPassportData(activeProduct));
      setLoading(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [activeProduct]);

  return {
    products,
    activeProduct,
    passportData,
    loading,
    productsLoading,
    error,
    setActiveProduct: setActiveProductState,
  };
}
