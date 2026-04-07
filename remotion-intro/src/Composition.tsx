import {spring, interpolate, useCurrentFrame, useVideoConfig, AbsoluteFill} from 'remotion';

export const LionRoar: React.FC = () => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();

    const name = "PRO BELIEVERS";
    const letters = name.split('');

    // 1. Luxuriously Slow Text Entry
    const renderLetter = (letter: string, index: number) => {
        // More delay between letters for a slower feel
        const delay = index * 4; 
        
        const entrySpring = spring({
            frame: frame - delay,
            fps,
            // Higher mass/damping for a slower, smoother bounce
            config: { mass: 1, damping: 15, stiffness: 60 },
        });

        const scale = interpolate(entrySpring, [0, 1], [0.8, 1]);
        const opacity = interpolate(entrySpring, [0, 1], [0, 1]);
        const yPos = interpolate(entrySpring, [0, 1], [10, 0]);

        return (
            <div key={index} style={{
                display: 'inline-block',
                margin: '0 8px',
                color: '#f2cc00',
                fontSize: 120,
                fontWeight: 900,
                fontFamily: 'Lexend, sans-serif',
                transform: `scale(${scale}) translateY(${yPos}px)`,
                opacity: opacity,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: letter === ' ' ? 'pre' : 'normal',
                textShadow: '0 0 30px rgba(242, 204, 0, 0.2)'
            }}>
                {letter}
            </div>
        );
    };

    return (
        <AbsoluteFill style={{ 
            backgroundColor: '#000000', 
            justifyContent: 'center', 
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/* The Animated Text - Centered perfectly */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}>
                {letters.map((l, i) => renderLetter(l, i))}
            </div>

            {/* Subtle radial glow in the center */}
            <div style={{
                position: 'absolute',
                width: 800,
                height: 800,
                background: 'radial-gradient(circle, rgba(242, 204, 0, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
        </AbsoluteFill>
    );
};
