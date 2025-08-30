import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  // Optional: set a fixed header height or compute per-route
  getOffset?: (location: ReturnType<typeof useLocation>) => number;
  // Optional: change smooth vs instant
  behavior?: ScrollBehavior;
  // Optional: max retries for deferred content mounts
  maxTries?: number;
  // Optional: delay between tries (ms)
  delayMs?: number;
};

function ScrollToAnchor({
  getOffset,
  behavior = 'smooth',
  maxTries = 5,
  delayMs = 120,
}: Props): null {
  const location = useLocation();
  const lastHash = useRef<string>('');

  useEffect(() => {
    // Preserve the hash during the navigation tick
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // No hash: scroll to top (restores expected navigation behavior)
    if (!lastHash.current) {
      // If main content has its own scroll container, scroll that instead
      // document.documentElement covers Safari/desktop reliably
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    let tries = 0;
    let timer: number | undefined;

    const scrollOnce = () => {
      const id = lastHash.current;
      if (!id) return;

      const el = document.getElementById(id);
      if (el) {
        const offset = typeof getOffset === 'function' ? getOffset(location) : 0;
        if (offset && 'scrollIntoView' in el) {
          // Compute manual position to honor a fixed header offset
          const rect = el.getBoundingClientRect();
          const y = rect.top + window.scrollY - offset;
          window.scrollTo({ top: y, left: 0, behavior }); // offset-friendly scroll
        } else {
          // Native smooth scroll; may be covered by a fixed header without CSS scroll-margin-top
          el.scrollIntoView({ behavior, block: 'start' });
        }
        lastHash.current = '';
        return;
      }

      // Retry a few times for lazy/async content or image layout shifts
      if (tries < maxTries) {
        tries += 1;
        timer = window.setTimeout(scrollOnce, delayMs);
      } else {
        // Give up gracefully without throwing
        lastHash.current = '';
      }
    };

    // Defer initial attempt so the DOM paints first (helps mobile Safari)
    timer = window.setTimeout(scrollOnce, delayMs);

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [location, behavior, delayMs, getOffset, maxTries]);

  return null;
}

export default ScrollToAnchor;
