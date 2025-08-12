import { Button } from "@/components/ui/button";

export const GradientButton2 = ({
  leftIcon = "/elements/left.svg",
  rightIcon = "/elements/right.svg",
  gradientFrom = "from-orange-500",
  gradientTo = "to-pink-800",
  hoverFrom = "hover:from-orange-600",
  hoverTo = "hover:to-pink-600",
  textColor = "text-white",
  className = "",
  text = "Explore MarketPlace", // Default text
  children,
  ...props
}) => {
  // Use children if provided, otherwise fall back to text prop
  const buttonContent = children || text;

  return (
    <div className=" sm:flex-row gap-4  items-center ">
      <div className="flex items-center h-full">
        {/* Left SVG (60% height of button & centered) */}
        {leftIcon && (
           <div className="h-[60%] flex items-center">
            <img 
              src={leftIcon} 
              alt="Left arrow" 
              className="h-full w-auto" 
            />
          </div>
        )}

        {/* Button (with explicit min-h to ensure consistent height) */}
        <Button
          size="lg"
          variant="default"
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverFrom} ${hoverTo} px-8 py-3 text-lg rounded-none min-h-[3rem] ${textColor} ${className}`}
          {...props}
        >
          {buttonContent}
        </Button>

        {/* Right SVG (60% height of button & centered) */}
        {rightIcon && (
         <div className="h-[60%] flex items-center">
            <img 
              src={rightIcon} 
              alt="Right arrow" 
              className="h-full w-auto" 
            />
          </div>
        )}
      </div>
    </div>
  );
};