// InteractiveControls.tsx - User controls overlay
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  RotateCcw,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react';

interface InteractiveControlsProps {
  onDensityChange: (density: 'low' | 'medium' | 'high') => void;
  onReset: () => void;
}

export default function InteractiveControls({
  onDensityChange,
  onReset
}: InteractiveControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [density, setDensity] = useState<'low' | 'medium' | 'high'>('high');
  const [showDashboards, setShowDashboards] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDensityChange = (newDensity: 'low' | 'medium' | 'high') => {
    setDensity(newDensity);
    onDensityChange(newDensity);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {/* Control Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2196F3, #64B5F6)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(33, 150, 243, 0.4)',
          zIndex: 200,
          transition: 'all 0.3s'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings size={24} color="white" />
        </motion.div>
      </motion.button>

      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20,
          scale: isOpen ? 1 : 0.8,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '90px',
          right: '20px',
          width: '280px',
          background: 'linear-gradient(135deg, rgba(10, 15, 30, 0.95), rgba(20, 25, 40, 0.95))',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(33, 150, 243, 0.3)',
          padding: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          zIndex: 199
        }}
      >
        {/* Title */}
        <h3 style={{
          color: 'white',
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '20px',
          fontFamily: '"Inter", sans-serif'
        }}>
          Visualization Controls
        </h3>

        {/* Particle Density */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '12px',
            display: 'block',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <Zap size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Particle Density
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['low', 'medium', 'high'] as const).map((d) => (
              <button
                key={d}
                onClick={() => handleDensityChange(d)}
                style={{
                  flex: 1,
                  padding: '8px',
                  background: density === d ? '#2196F3' : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid ' + (density === d ? '#2196F3' : 'rgba(255, 255, 255, 0.1)'),
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s'
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Dashboards */}
        <button
          onClick={() => setShowDashboards(!showDashboards)}
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
            transition: 'all 0.2s'
          }}
        >
          <span>
            {showDashboards ? <Eye size={16} /> : <EyeOff size={16} />}
            <span style={{ marginLeft: '10px' }}>Dashboards</span>
          </span>
          <div style={{
            width: '40px',
            height: '20px',
            borderRadius: '10px',
            background: showDashboards ? '#4CAF50' : 'rgba(255, 255, 255, 0.2)',
            position: 'relative',
            transition: 'all 0.3s'
          }}>
            <div style={{
              position: 'absolute',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'white',
              top: '2px',
              left: showDashboards ? '22px' : '2px',
              transition: 'all 0.3s'
            }} />
          </div>
        </button>

        {/* Fullscreen */}
        <button
          onClick={handleFullscreen}
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '12px',
            transition: 'all 0.2s'
          }}
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Mode'}
        </button>

        {/* Reset Button */}
        <button
          onClick={onReset}
          style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #F44336, #E91E63)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all 0.2s'
          }}
        >
          <RotateCcw size={16} />
          Reset View
        </button>
      </motion.div>
    </>
  );
}
