"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { useNavigation } from "@/contexts/NavigationContext";

export function useSmoothNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { setPreventPopup } = useNavigation();

  const smoothNavigate = useCallback((href: string) => {
    // Check if we're currently on the home page
    const isOnHomePage = pathname === "/";
    
    if (href.startsWith("/#")) {
      // If we're on home page, just scroll to section
      if (isOnHomePage) {
        const elementId = href.replace("/#", "");
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Prevent popup when navigating to home page with hash
        setPreventPopup(true);
        // Navigate to home page with hash
        const elementId = href.replace("/#", "");
        router.push("/");
        // Wait for page to load, then scroll to element
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
          // Reset preventPopup after navigation
          setTimeout(() => setPreventPopup(false), 1000);
        }, 100);
      }
    } else if (href === "/") {
      // Navigate to home page with loader and popup (don't prevent popup)
      router.push("/");
    } else {
      // Regular navigation to other pages
      router.push(href);
    }
  }, [router, pathname, setPreventPopup]);

  return { smoothNavigate };
}

export function SmoothLink({ 
  href, 
  children, 
  className = "",
  onClick,
  ...props 
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}) {
  const { smoothNavigate } = useSmoothNavigation();

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    smoothNavigate(href);
    onClick?.(e);
  }, [href, smoothNavigate, onClick]);

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}


//hello check