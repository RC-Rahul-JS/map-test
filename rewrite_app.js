const fs = require('fs');

const content = fs.readFileSync('src/App.jsx', 'utf8');
const appIndex = content.indexOf('export default function App() {');
if (appIndex === -1) throw new Error("Could not find App function");

const initialDataPart = content.substring(0, appIndex);

const newAppPart = `export default function App() {
  const [plots, setPlots] = useState(initialPlotsData);
  const [selectedPlot, setSelectedPlot] = useState(null);
  
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [hovered360, setHovered360] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const handleResetMap = () => {
    setZoomLevel(isMobile ? 0.35 : 0.6);
    setPanOffset({ x: isMobile ? 0 : 50, y: 50 });
  };

  useEffect(() => {
    handleResetMap();
  }, [isMobile]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (direction) => {
    setZoomLevel(prev => {
      const nextZoom = direction === 'in' ? prev + 0.15 : prev - 0.15;
      return Math.min(Math.max(nextZoom, 0.25), 3.0);
    });
  };

  const getPlotMarkerColors = (plot, isSelected) => {
    if (plot.status === "sold") {
      return { fill: "rgba(100, 116, 139, 0.3)", stroke: "rgba(148, 163, 184, 0.9)", text: "#94a3b8" };
    }
    if (plot.phase === "Phase-1") {
      return { fill: isSelected ? "rgba(239, 68, 68, 0.75)" : "rgba(239, 68, 68, 0.45)", stroke: "#ef4444", text: "#ffffff" };
    } else {
      return { fill: isSelected ? "rgba(59, 130, 246, 0.75)" : "rgba(59, 130, 246, 0.45)", stroke: "#3b82f6", text: "#ffffff" };
    }
  };

  const plotDetails = selectedPlot ? [
    { emoji: '📐', label: 'Plot Size', value: \`\${selectedPlot.size} sq.ft (\${Math.round(selectedPlot.size/9)} sq.yd)\`, pill: false },
    { emoji: '💰', label: 'Premium Price', value: \`₹\${(selectedPlot.price/100000).toFixed(1)} Lakhs\`, pill: false },
    { emoji: '🧭', label: 'Facing', value: selectedPlot.facing, pill: false },
    { emoji: '✨', label: 'Vastu Score', value: \`\${selectedPlot.vastu}%\`, pill: false },
    { emoji: '✅', label: 'Status', value: selectedPlot.status === 'sold' ? 'Sold Out' : 'Available', pill: true },
  ] : [
    { emoji: '👆', label: 'Selection', value: 'Please select a plot on the map', pill: false }
  ];

  return (
    <div
      ref={sectionRef}
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        padding: isMobile ? '40px 20px' : '40px 72px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top border line */}
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
      }} />

      {/* Decorative dots grid - Neutral */}
      <div style={{
        position: 'absolute', top: 60, right: 40,
        width: 180, height: 180,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px',
        opacity: 0.8,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 60, left: 30,
        width: 130, height: 130,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px',
        opacity: 0.8,
        pointerEvents: 'none',
      }} />

      {/* Main layout */}
      <div style={{
        width: '100%',
        maxWidth: '1700px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '64px' : '10%',
        alignItems: 'flex-start',
      }}>

        {/* LEFT: Map */}
        <div
          className={isVisible ? 'mp-slide-left' : 'mp-hidden'}
          style={{
            flex: isMobile ? 'none' : '1.8',
            width: '100%',
            height: isMobile ? '60vh' : '85vh',
            position: 'relative',
            marginLeft: isMobile ? '0' : '2%',
            borderRadius: 24,
            background: '#f8fafc',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            overflow: 'hidden'
          }}
        >
          {/* Map Controls */}
          <div style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <button 
              onClick={() => handleZoom('in')}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <ZoomIn size={16} color="#111827" />
            </button>
            <button 
              onClick={() => handleZoom('out')}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <ZoomOut size={16} color="#111827" />
            </button>
            <button 
              onClick={handleResetMap}
              style={{
                width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}
            >
              <Maximize size={16} color="#111827" />
            </button>
          </div>
          
          {/* Legend */}
          <div style={{
            position: 'absolute', bottom: 16, left: 16, zIndex: 10,
            background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
            borderRadius: 12, padding: '8px 12px', border: '1px solid rgba(0,0,0,0.1)',
            fontSize: 10, fontWeight: 600, color: '#4b5563', display: 'flex', flexDirection: 'column', gap: 4
          }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }}></span> Phase 1
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3b82f6' }}></span> Phase 2
             </div>
          </div>

          <div 
            style={{ width: '100%', height: '100%', cursor: isDragging ? 'grabbing' : 'grab', position: 'relative' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              style={{
                position: 'absolute', transformOrigin: 'top left', transition: 'transform 0.1s ease-out',
                transform: \`translate(\${panOffset.x}px, \${panOffset.y}px) scale(\${zoomLevel})\`,
                width: '900px', height: '1200px'
              }}
            >
              <img
                src="/map.jpg"
                alt="Master Plan Map"
                style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none', userSelect: 'none' }}
              />

              <svg viewBox="0 0 900 1200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                {plots.map((plot) => {
                  const isSelected = selectedPlot?.id === plot.id && selectedPlot?.phase === plot.phase;
                  const colors = getPlotMarkerColors(plot, isSelected);

                  return (
                    <g 
                      key={\`\${plot.phase}-\${plot.id}\`} 
                      style={{ cursor: 'pointer', transformOrigin: \`\${plot.x}px \${plot.y}px\`, transform: 'scale(0.5)' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlot(plot);
                      }}
                    >
                      {/* Highlight for selection */}
                      <circle 
                        cx={plot.x} cy={plot.y} r={isSelected ? plot.r + 10 : plot.r}
                        fill="none" stroke="#fbbf24" strokeWidth="4"
                        style={{ transition: 'all 0.3s ease-out', opacity: isSelected ? 1 : 0 }}
                      />
                      {/* Base Circle */}
                      <circle 
                        cx={plot.x} cy={plot.y} r={plot.r} 
                        fill={colors.fill} stroke={isSelected ? "#fbbf24" : colors.stroke} strokeWidth={isSelected ? 3 : 2}
                        style={{ transition: 'all 0.2s' }}
                      />
                      <rect 
                        x={plot.x - 14} y={plot.y - 8} width="28" height="16" rx="4" 
                        fill={isSelected ? "#fbbf24" : "rgba(255, 255, 255, 0.9)"} 
                        stroke={colors.stroke} strokeWidth="1"
                      />
                      <text 
                        x={plot.x} y={plot.y + 4} textAnchor="middle" 
                        fill={isSelected ? "#000" : "#111827"} fontSize="9" fontWeight="bold" fontFamily="monospace"
                      >
                        {plot.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT: Details panel */}
        <div
          className={isVisible ? 'mp-slide-right' : 'mp-hidden'}
          style={{
            flex: isMobile ? 'none' : '1',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignSelf: 'stretch',
            justifyContent: 'center'
          }}
        >

          {/* Heading */}
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              color: '#4b5563',
              margin: '0 0 6px 0',
              letterSpacing: '0.02em',
            }}>
              Discover your perfect space
            </p>
            <h3 style={{
              fontSize: 'clamp(24px, 3vw, 44px)',
              color: '#111827',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              lineHeight: 1.05,
            }}>
              PLOT
              <br />
              <span style={{ color: '#6b7280' }}>DETAILS</span>
            </h3>
            {/* Thin accent line */}
            <div style={{
              marginTop: 12,
              width: 56, height: 3,
              background: 'linear-gradient(90deg, #111827, transparent)',
              borderRadius: 2,
            }} />
          </div>

          {/* Plot detail rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: '300px' }}>
            {plotDetails.map((item, i) => (
              <div
                key={i}
                className={isVisible ? \`mp-row mp-row-delay-\${i}\` : 'mp-hidden'}
              >
                {/* Row */}
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                }}>
                  {/* Left: icon + label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: '50%',
                      background: 'rgba(0,0,0,0.03)',
                      border: '1px solid rgba(0,0,0,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16, flexShrink: 0,
                    }}>
                      {item.emoji}
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.14em',
                      color: '#4b5563',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      {item.label}
                    </span>
                  </div>

                  {/* Right: value */}
                  {item.pill ? (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: item.value === 'Available' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #64748b, #475569)',
                      borderRadius: 30, padding: '5px 14px',
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: '#ffffff', opacity: 0.9,
                        display: 'inline-block',
                        animation: 'mpPulse 2s infinite',
                      }} />
                      <span style={{
                        fontSize: 9, fontWeight: 800,
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                        color: '#ffffff',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {item.value}
                      </span>
                    </div>
                  ) : (
                    <span style={{
                      fontSize: 13,
                      fontWeight: 800, color: '#111827',
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: '0.02em',
                    }}>
                      {item.value}
                    </span>
                  )}
                </div>

                {/* Divider (not after last) */}
                {i < plotDetails.length - 1 && (
                  <div style={{
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.02), transparent)',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* 360° Tour Card */}
          <div
            onClick={() => alert("360 Tour feature coming soon!")}
            onMouseEnter={() => setHovered360(true)}
            onMouseLeave={() => setHovered360(false)}
            className={isVisible ? 'mp-row mp-row-delay-3' : 'mp-hidden'}
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              width: '85%',
              alignSelf: 'flex-start',
              height: isMobile ? '200px' : '200px',
              marginTop: isMobile ? '32px' : '0',
              transform: hovered360 ? 'translateY(-6px) scale(1.015)' : 'translateY(0) scale(1)',
              transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #1f2937, #111827)',
            }} />

            <div style={{
              position: 'absolute', inset: 0,
              background: hovered360
                ? 'linear-gradient(120deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)'
                : 'linear-gradient(120deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
              transition: 'background 0.4s',
            }} />

            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center',
              padding: '0 32px', gap: 22,
            }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%',
                background: hovered360
                  ? 'linear-gradient(135deg, #fbbf24, #d97706)'
                  : 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: hovered360 ? '#ffffff' : '#111827',
                flexShrink: 0,
                transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <div>
                <p style={{
                  margin: '0 0 2px 0', fontSize: 10,
                  textTransform: 'uppercase', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                }}>
                  Interactive
                </p>
                <p style={{
                  margin: 0, fontSize: 22, fontWeight: 900,
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#ffffff', letterSpacing: '0.04em', lineHeight: 1,
                  textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                }}>
                  360° TOUR
                </p>
                <p style={{
                  margin: '6px 0 0 0', fontSize: 11,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em',
                  transition: 'color 0.3s',
                }}>
                  {hovered360 ? 'Click to explore →' : 'Explore the colony'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{\`
        .mp-hidden { opacity: 0; }

        .mp-slide-left {
          animation: mpSlideLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mp-slide-right {
          animation: mpSlideRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }

        .mp-row {
          animation: mpFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mp-row-delay-0 { animation-delay: 0.25s; }
        .mp-row-delay-1 { animation-delay: 0.38s; }
        .mp-row-delay-2 { animation-delay: 0.51s; }
        .mp-row-delay-3 { animation-delay: 0.64s; }
        .mp-row-delay-4 { animation-delay: 0.77s; }

        @keyframes mpSlideLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes mpSlideRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @keyframes mpFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes mpPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      \`}</style>
    </div>
  );
}
\`;

fs.writeFileSync('src/App.jsx', initialDataPart + newAppPart);
console.log("Successfully rewrote App.jsx");
