import * as React from "react";

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ value, onValueChange, children }) => {
  return (
    <div className="tabs">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            value,
            onValueChange,
          });
        }
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  return (
    <div className={`inline-flex items-center justify-center rounded-md bg-gray-100 p-1 ${className || ""}`}>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  onValueChange, 
  className, 
  children 
}) => {
  const handleClick = () => {
    if (onValueChange) {
      onValueChange(value);
    }
  };

  // Get the current value from context or props
  const isActive = React.useContext(TabsContext)?.value === value;

  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium transition-all relative rounded-md ${
        isActive 
          ? "bg-white text-indigo-700 shadow-sm" 
          : "text-gray-600 hover:text-gray-800"
      } ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  // Get the current value from context or props
  const isActive = React.useContext(TabsContext)?.value === value;

  if (!isActive) return null;

  return <div>{children}</div>;
};

// Create a context to share the active tab value
interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);