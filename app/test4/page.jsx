"use client"

import React, { useState } from 'react';

const SVGDeepDive = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showGrid, setShowGrid] = useState(false);
  const [highlightPath, setHighlightPath] = useState('');

  // Break down the path into segments for explanation
  const pathSegments = [
    { 
      code: "M1017 18.3353", 
      description: "Move to starting point - top of right notch",
      color: "red",
      type: "Move"
    },
    { 
      code: "C1017 8.20899 1008.79 0 998.665 0", 
      description: "Cubic curve - creates rounded top-right corner of right notch",
      color: "blue",
      type: "Curve"
    },
    { 
      code: "H243.335", 
      description: "Horizontal line across the top",
      color: "green",
      type: "Horizontal Line"
    },
    { 
      code: "C233.209 0 225 8.20899 225 18.3353", 
      description: "Cubic curve - top-left corner of left notch",
      color: "purple",
      type: "Curve"
    },
    { 
      code: "C225 28.4616 216.791 36.6706 206.665 36.6706", 
      description: "Cubic curve - creates the left notch cutout",
      color: "orange",
      type: "Curve"
    },
    { 
      code: "H20", 
      description: "Horizontal line to left edge",
      color: "pink",
      type: "Horizontal Line"
    },
    { 
      code: "C8.95431 36.6706 0 45.6249 0 56.6706", 
      description: "Cubic curve - top-left corner of main rectangle",
      color: "cyan",
      type: "Curve"
    },
    { 
      code: "V314", 
      description: "Vertical line down left side",
      color: "yellow",
      type: "Vertical Line"
    },
    { 
      code: "C0 325.046 8.95434 334 20 334", 
      description: "Cubic curve - bottom-left corner",
      color: "lime",
      type: "Curve"
    },
    { 
      code: "H1222", 
      description: "Horizontal line across bottom",
      color: "indigo",
      type: "Horizontal Line"
    },
    { 
      code: "C1233.05 334 1242 325.046 1242 314", 
      description: "Cubic curve - bottom-right corner",
      color: "rose",
      type: "Curve"
    },
    { 
      code: "V56.6706", 
      description: "Vertical line up right side",
      color: "teal",
      type: "Vertical Line"
    },
    { 
      code: "C1242 45.6249 1233.05 36.6706 1222 36.6706", 
      description: "Cubic curve - top-right area",
      color: "amber",
      type: "Curve"
    },
    { 
      code: "H1035.34", 
      description: "Horizontal line to right notch",
      color: "emerald",
      type: "Horizontal Line"
    },
    { 
      code: "C1025.21 36.6706 1017 28.4616 1017 18.3353", 
      description: "Cubic curve - completes right notch",
      color: "violet",
      type: "Curve"
    },
    { 
      code: "Z", 
      description: "Close path - connects back to start",
      color: "gray",
      type: "Close"
    }
  ];

  const VisualizationSVG = ({ showGuides = false, highlightSegment = '' }) => (
    <div className="relative">
      <svg 
        viewBox="0 0 1242 334" 
        className="w-full h-auto border border-gray-300 bg-white"
        style={{ maxHeight: '300px' }}
      >
        {/* Grid */}
        {showGuides && (
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
        )}
        {showGuides && <rect width="100%" height="100%" fill="url(#grid)" />}
        
        {/* Coordinate labels */}
        {showGuides && (
          <g className="text-xs fill-gray-500">
            <text x="5" y="15">0,0</text>
            <text x="1200" y="15">1242,0</text>
            <text x="5" y="330">0,334</text>
            <text x="1180" y="330">1242,334</text>
            <text x="620" y="180" className="text-sm font-bold">ViewBox: 1242 × 334</text>
          </g>
        )}
        
        {/* Key points */}
        {showGuides && (
          <g>
            <circle cx="225" cy="18.3353" r="3" fill="red" />
            <circle cx="1017" cy="18.3353" r="3" fill="red" />
            <text x="230" y="25" className="text-xs fill-red-600">Left Notch</text>
            <text x="950" y="25" className="text-xs fill-red-600">Right Notch</text>
          </g>
        )}

        {/* The actual path */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M1017 18.3353C1017 8.20899 1008.79 0 998.665 0H243.335C233.209 0 225 8.20899 225 18.3353C225 28.4616 216.791 36.6706 206.665 36.6706H20C8.95431 36.6706 0 45.6249 0 56.6706V314C0 325.046 8.95434 334 20 334H1222C1233.05 334 1242 325.046 1242 314V56.6706C1242 45.6249 1233.05 36.6706 1222 36.6706H1035.34C1025.21 36.6706 1017 28.4616 1017 18.3353Z" 
          fill="url(#paint0_linear)"
          stroke={highlightSegment ? "#333" : "none"}
          strokeWidth={highlightSegment ? "2" : "0"}
        />
        
        <defs>
          <linearGradient 
            id="paint0_linear" 
            x1="0" 
            y1="0" 
            x2="92.5323" 
            y2="361.067" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53FFA8"/>
            <stop offset="1" stopColor="#00A652"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Toggle guides */}
      <button
        onClick={() => setShowGrid(!showGuides)}
        className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded"
      >
        {showGuides ? 'Hide' : 'Show'} Guides
      </button>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Complete SVG Breakdown</h1>
        
        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'coordinates', label: 'Coordinate System' },
            { id: 'path', label: 'Path Commands' },
            { id: 'curves', label: 'Curves Explained' },
            { id: 'gradients', label: 'Gradients' },
            { id: 'interactive', label: 'Interactive Demo' }
          ].map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Main visualization */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <VisualizationSVG showGuides={showGrid} highlightSegment={highlightPath} />
        </div>

        {/* Content sections */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">SVG Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-600">What is this SVG?</h3>
                  <p>This SVG creates a card-like shape with two distinctive "notches" cut out from the top. Think of it like a folder tab or a ticket stub.</p>
                  
                  <h3 className="text-lg font-semibold text-blue-600">Key Components:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>ViewBox:</strong> Defines the drawing area (1242 × 334 units)</li>
                    <li>• <strong>Path Element:</strong> Creates the actual shape</li>
                    <li>• <strong>Linear Gradient:</strong> Provides the color transition</li>
                    <li>• <strong>Fill Rules:</strong> Determines how overlapping areas are filled</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-600">Shape Breakdown:</h3>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span>Two notched cutouts at the top</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span>Rounded corners throughout</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span>Main rectangular body</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span>Smooth curved transitions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'coordinates' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Coordinate System</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">ViewBox Explained</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <code className="text-sm">viewBox="0 0 1242 334"</code>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>0 0:</strong> Starting point (top-left corner)</li>
                    <li>• <strong>1242:</strong> Width in SVG units</li>
                    <li>• <strong>334:</strong> Height in SVG units</li>
                    <li>• <strong>Units:</strong> Abstract units that scale to container</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Key Coordinates</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-red-50 p-2 rounded">
                      <strong>Left Notch:</strong> X = 225, Y = 18.3353
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <strong>Right Notch:</strong> X = 1017, Y = 18.3353
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <strong>Main Body:</strong> Y = 36.6706 to 334
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <strong>Corner Radius:</strong> ~20 units for rounded corners
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Responsive Scaling</h3>
                <p className="text-sm text-gray-600">
                  The SVG automatically scales to fit its container width while maintaining proportions. 
                  The viewBox acts like a "window" that shows the drawing, and CSS classes like `w-full h-auto` 
                  make it responsive.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'path' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Path Commands Deep Dive</h2>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  The path element uses a series of drawing commands. Each command is a letter followed by coordinates.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Command Types:</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>M</strong> = Move to (start point)</li>
                      <li><strong>C</strong> = Cubic Bézier curve</li>
                      <li><strong>H</strong> = Horizontal line</li>
                      <li><strong>V</strong> = Vertical line</li>
                      <li><strong>Z</strong> = Close path</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Coordinate System:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• X increases left to right</li>
                      <li>• Y increases top to bottom</li>
                      <li>• Origin (0,0) is top-left</li>
                      <li>• All values in abstract units</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Path Segments (click to highlight):</h3>
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {pathSegments.map((segment, index) => (
                    <div 
                      key={index}
                      className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setHighlightPath(highlightPath === segment.code ? '' : segment.code)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1`} 
                             style={{backgroundColor: segment.color}}></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs bg-gray-200 px-2 py-1 rounded">{segment.type}</span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                              {segment.code}
                            </code>
                          </div>
                          <p className="text-sm text-gray-600">{segment.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'curves' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Understanding Cubic Bézier Curves</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-3">What makes the curves smooth?</h3>
                <p className="text-sm text-gray-700">
                  The notched shape uses Cubic Bézier curves for all rounded corners. Each curve is defined by 4 points:
                  start point, two control points, and end point.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Curve Syntax:</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <code className="text-sm">C x1 y1, x2 y2, x y</code>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>x1, y1:</strong> First control point</li>
                    <li>• <strong>x2, y2:</strong> Second control point</li>
                    <li>• <strong>x, y:</strong> End point</li>
                    <li>• Control points "pull" the curve toward them</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Example from our shape:</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4">
                    <code className="text-xs">C1017 8.20899 1008.79 0 998.665 0</code>
                  </div>
                  <p className="text-sm text-gray-600">
                    This creates the rounded top-right corner of the right notch. The control points 
                    are positioned to create a smooth quarter-circle effect.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Pro Tip:</h4>
                <p className="text-sm">
                  The corner radius of ~20 units (like "20" in the rectangle corners) creates consistent 
                  rounded corners. The curves in the notches use similar radii for visual harmony.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'gradients' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Linear Gradients Explained</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Gradient Definition:</h3>
                  <div className="bg-gray-50 p-4 rounded mb-4 text-sm">
                    <pre>{`<linearGradient 
  id="paint0_linear_34_675" 
  x1="0" y1="0" 
  x2="92.5323" y2="361.067"
  gradientUnits="userSpaceOnUse">
  <stop stopColor="#53FFA8"/>
  <stop offset="1" stopColor="#00A652"/>
</linearGradient>`}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Parameters Breakdown:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>id:</strong> Unique identifier for referencing</li>
                    <li>• <strong>x1,y1:</strong> Gradient start point (0,0 = top-left)</li>
                    <li>• <strong>x2,y2:</strong> Gradient end point (bottom-right)</li>
                    <li>• <strong>gradientUnits:</strong> Use SVG coordinate system</li>
                    <li>• <strong>stop:</strong> Color stops along the gradient</li>
                    <li>• <strong>offset:</strong> Position from 0 to 1</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Gradient Direction:</h3>
                <div className="bg-green-50 p-4 rounded">
                  <p className="text-sm">
                    The gradient goes from <code>(0, 0)</code> to <code>(92.5323, 361.067)</code>. 
                    This creates a diagonal gradient from top-left to bottom-right, slightly past 
                    the actual shape boundaries for a more dramatic effect.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Color Stops:</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#53FFA8'}}></div>
                    <span className="text-sm">#53FFA8 (Light green)</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded" style={{backgroundColor: '#00A652'}}></div>
                    <span className="text-sm">#00A652 (Dark green)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  The gradient transitions smoothly from the light green at the top-left to 
                  the darker green at the bottom-right, creating depth and visual interest.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'interactive' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Interactive Demo</h2>
              
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Controls:</h3>
                  <div className="flex gap-4 mb-4">
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`px-4 py-2 rounded ${showGrid ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    >
                      {showGrid ? 'Hide' : 'Show'} Grid & Guides
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Key Insights:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-medium mb-2">Precision Matters</h4>
                      <p className="text-sm">Every coordinate is calculated to create smooth, 
                      consistent curves. The decimal values ensure pixel-perfect rendering.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-medium mb-2">Scalable Design</h4>
                      <p className="text-sm">The SVG scales perfectly at any size while 
                      maintaining crisp edges and smooth curves.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <h4 className="font-medium mb-2">Efficient Code</h4>
                      <p className="text-sm">One path element creates the entire complex shape, 
                      making it lightweight and fast to render.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <h4 className="font-medium mb-2">CSS Integration</h4>
                      <p className="text-sm">Works seamlessly with CSS for responsive design 
                      and can be styled with classes and properties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SVGDeepDive;