import React, { useEffect, useRef } from 'react';

const PageWrapper = ({ children }) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        // Find all direct children or specific elements to animate
        const animatedElements = wrapperRef.current.querySelectorAll('h1, h2, h3, p, .btn, .card, .profile-container, .form-control, textarea');

        // Reset animations
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.classList.remove('animate-in');
        });

        // Trigger reflow
        void wrapperRef.current.offsetWidth;

        // Apply animations in staggered order
        // Sort elements by their position in the DOM to ensure logical flow
        // Or simply iterate.
        let delayCount = 0;
        animatedElements.forEach((el, index) => {
            // Simple stagger logic: Headings first, then text, then others.
            // But DOM order usually matches this.
            // Let's cap the delay to avoid waiting too long for footer items.
            el.classList.add('animate-in');

            // Base delay + incremental delay
            // Using inline style for dynamic delay might be cleaner, but using classes matches the plan.
            // Let's map small delay steps.
            const stagger = Math.min(index * 0.1, 1.0); // Cap at 1s stagger
            el.style.animationDelay = `${stagger}s`;
        });

    }, [children]); // Re-run when content changes (route change)

    return (
        <div ref={wrapperRef} className="page-wrapper w-100">
            {children}
        </div>
    );
};

export default PageWrapper;
