interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
}

const HighlightedText = ({
  children,
  className = "",
}: HighlightedTextProps) => {
  return <span className={`highlight-svg ${className}`}>{children}</span>;
};

export default HighlightedText;
