import React from 'react';

export const AbsolutePosition = ({ 
  children, 
  position = 'top-left', // default position
  top, 
  left, 
  right, 
  bottom,
  zIndex = 10,
  className = '',
  ...props 
}) => {
  // Predefined position classes
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    'center-left': 'top-1/2 left-4 transform -translate-y-1/2',
    'center-right': 'top-1/2 right-4 transform -translate-y-1/2',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  };

  // Custom positioning styles
  const customStyles = {};
  if (top !== undefined) customStyles.top = typeof top === 'string' ? top : `${top}px`;
  if (left !== undefined) customStyles.left = typeof left === 'string' ? left : `${left}px`;
  if (right !== undefined) customStyles.right = typeof right === 'string' ? right : `${right}px`;
  if (bottom !== undefined) customStyles.bottom = typeof bottom === 'string' ? bottom : `${bottom}px`;

  // Use custom positioning if any custom values are provided
  const useCustomPosition = top !== undefined || left !== undefined || right !== undefined || bottom !== undefined;
  
  // Base classes
  const baseClasses = `absolute z-${zIndex}`;
  
  // Position classes (either predefined or empty for custom)
  const posClasses = useCustomPosition ? '' : positionClasses[position] || positionClasses['top-left'];
  
  // Combine all classes
  const finalClasses = `${baseClasses} ${posClasses} ${className}`.trim();

  return (
    <div 
      className={finalClasses}
      style={useCustomPosition ? customStyles : {}}
      {...props}
    >
      {children}
    </div>
  );
};

// Demo component to show usage
const Demo = () => {
  return (
    <div className="relative h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Absolute Position Component Demo</h1>
      
      {/* Predefined positions */}
      <AbsolutePosition position="top-left">
        <div className="bg-red-500 text-white p-3 rounded shadow-lg">
          Top Left
        </div>
      </AbsolutePosition>

      <AbsolutePosition position="top-right">
        <div className="bg-blue-500 text-white p-3 rounded shadow-lg">
          Top Right
        </div>
      </AbsolutePosition>

      <AbsolutePosition position="bottom-left">
        <div className="bg-green-500 text-white p-3 rounded shadow-lg">
          Bottom Left
        </div>
      </AbsolutePosition>

      <AbsolutePosition position="bottom-right">
        <div className="bg-purple-500 text-white p-3 rounded shadow-lg">
          Bottom Right
        </div>
      </AbsolutePosition>

      <AbsolutePosition position="center">
        <div className="bg-yellow-500 text-black p-3 rounded shadow-lg">
          Center
        </div>
      </AbsolutePosition>

      {/* Custom positioning examples */}
      <AbsolutePosition top={100} left={200}>
        <div className="bg-pink-500 text-white p-3 rounded shadow-lg">
          Custom: top=100px, left=200px
        </div>
      </AbsolutePosition>

      <AbsolutePosition top="20%" right="10%">
        <div className="bg-indigo-500 text-white p-3 rounded shadow-lg">
          Custom: top=20%, right=10%
        </div>
      </AbsolutePosition>

      <AbsolutePosition bottom={50} right={100} zIndex={20}>
        <div className="bg-orange-500 text-white p-3 rounded shadow-lg">
          Custom with higher z-index
        </div>
      </AbsolutePosition>

      {/* With additional className */}
      <AbsolutePosition position="center-left" className="hover:scale-110 transition-transform">
        <div className="bg-cyan-500 text-white p-3 rounded shadow-lg cursor-pointer">
          Hover me! (with extra classes)
        </div>
      </AbsolutePosition>
    </div>
  );
};

export default Demo;