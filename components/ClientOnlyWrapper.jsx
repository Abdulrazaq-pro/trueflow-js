"use client";

import { useState, useEffect } from 'react';

export default function ClientOnlyWrapper({ children, fallback = null }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
}

// Higher-order component to wrap components that need client-side only rendering
export function withClientOnly(Component, fallbackComponent = null) {
  return function ClientOnlyComponent(props) {
    return (
      <ClientOnlyWrapper fallback={fallbackComponent}>
        <Component {...props} />
      </ClientOnlyWrapper>
    );
  };
}
