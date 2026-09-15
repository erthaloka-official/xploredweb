import { useEffect } from 'react';

/**
 * Universal Smooth Scroll Reveal Observer
 * Automatically watches all elements with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`, `.reveal-up`
 * and applies `.is-revealed` when they enter the viewport.
 * Uses MutationObserver so dynamically filtered/rendered components (like explore tabs, search results)
 * are instantly animated without missing elements.
 */
export function useScrollReveal(dependency?: any) {
  useEffect(() => {
    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-up';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const observeElements = (root: ParentNode = document) => {
      const elements = root.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    // Observe all initial elements
    observeElements();

    // Watch for dynamically added DOM elements (tab switches, filters, search, modal contents)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            if (el.matches && el.matches(selector) && !el.classList.contains('is-revealed')) {
              observer.observe(el);
            }
            observeElements(el);

          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [dependency]);
}

