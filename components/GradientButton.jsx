import { Button } from "./ui/button";

export const GradientButton = ({
  leftIcon = "/elements/left.svg",
  rightIcon = "/elements/right.svg",
  gradientFrom = "from-orange-500",
  gradientTo = "to-pink-800",
  hoverFrom = "hover:from-orange-600",
  hoverTo = "hover:to-pink-600",
  textColor = "text-white",
  className = "",
  text = "Explore MarketPlace",
  children,
  ...props
}) => {
  const buttonContent = children || text;

  return (
    <div className="flex items-center w-full">
      {/* Left SVG */}
      {leftIcon && (
        <div className="h-[1.5rem] flex items-center ">
          <img 
            src={leftIcon} 
            alt="Left arrow" 
            className="h-full w-auto" 
          />
        </div>
      )}

      {/* Button - flex-1 to take remaining space */}
      <Button
        size="lg"
        variant="default"
        className={`flex-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverFrom} ${hoverTo} px-8 py-3 text-lg rounded-none min-h-[3rem] ${textColor} ${className}`}
        {...props}
      >
        {buttonContent}
      </Button>

      {/* Right SVG */}
      {rightIcon && (
        <div className="h-[1.5rem] flex items-center ">
          <img 
            src={rightIcon} 
            alt="Right arrow" 
            className="h-full w-auto" 
          />
        </div>
      )}
    </div>
  );
};