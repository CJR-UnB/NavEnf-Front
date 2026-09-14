interface DividerProps {
    className?: string;
}

const Divider = ({ className = '' }: DividerProps) => {
    return (
        <div className={`flex w-full items-center justify-center gap-3 px-4 sm:gap-4 sm:px-6 md:gap-5 lg:gap-6 ${className}`}>
            <div className="h-[3px] w-[60px] rounded-4px sm:w-[100px] md:w-[150px] lg:w-[200px] bg-[#003366]" />
            <div className="h-[25px] w-[25px] shrink-0 rounded-full bg-[#006633]" />
            <div className="h-[33px] w-[33px] shrink-0 rounded-full bg-[#F5AF0A]" />
            <div className="h-[25px] w-[25px] shrink-0 rounded-full bg-[#006633]" />
            <div className="h-[3px] w-[60px] rounded-4px sm:w-[100px] md:w-[150px] lg:w-[200px] bg-[#003366]" />
        </div>
    );
};

export default Divider;