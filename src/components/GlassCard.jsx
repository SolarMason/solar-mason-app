import { useEffect, useRef, useState } from 'react';

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  icon: Icon,
  title,
  description,
  gradient = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-card ${isVisible ? 'animate-in' : ''} ${gradient ? 'gradient-border' : ''} ${className}`}
      style={{
        animation: isVisible ? `slideInUp 0.6s ease-out ${delay}ms forwards` : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {Icon && (
        <div style={{ marginBottom: '16px', padding: '12px', background: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px', width: 'fit-content', transition: 'all 0.3s' }}>
          <Icon size={24} style={{ color: 'var(--accent)' }} />
        </div>
      )}

      {title && <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{title}</h3>}

      {description && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '16px' }}>{description}</p>
      )}

      {children}
    </div>
  );
}
