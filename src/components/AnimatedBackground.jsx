const bgStyles = `
  @keyframes float-1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
  }

  @keyframes float-2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-40px, 40px); }
  }

  @keyframes float-3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(50px, 20px); }
  }

  .orb-1 {
    animation: float-1 20s ease-in-out infinite;
  }

  .orb-2 {
    animation: float-2 24s ease-in-out infinite;
  }

  .orb-3 {
    animation: float-3 28s ease-in-out infinite;
  }
`

export default function AnimatedBackground() {
  return (
    <>
      <style>{bgStyles}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orb 1 - Blue */}
        <div
          className="orb-1 absolute rounded-full blur-3xl opacity-20"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #3B70A2 0%, transparent 70%)',
            top: '-100px',
            left: '-100px',
          }}
        />

        {/* Orb 2 - Teal */}
        <div
          className="orb-2 absolute rounded-full blur-3xl opacity-15"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #4ecdc4 0%, transparent 70%)',
            bottom: '-150px',
            right: '-150px',
          }}
        />

        {/* Orb 3 - Blue (darker) */}
        <div
          className="orb-3 absolute rounded-full blur-3xl opacity-10"
          style={{
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, #1a2332 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.1) 2px,
                rgba(255, 255, 255, 0.1) 4px
              )
            `,
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  )
}
