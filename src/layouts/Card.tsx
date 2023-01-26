const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex mb-10 bg-slate-800 rounded-lg p-10 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
