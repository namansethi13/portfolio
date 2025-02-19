
interface CTAProps {
  text: string
  onClick: () => void
}

function CTA({ text, onClick } : CTAProps) {
  return (
    <button
      className="
        relative overflow-hidden bg-gradient-to-r from-[#EB5A3C] to-[#D64B2F] 
        text-dark font-bold md:py-6 md:px-12 py-4 px-8 rounded-full shadow-lg 
        transform transition-all duration-300 ease-in-out hover:scale-105 
        hover:from-[#D64B2F] hover:to-[#C13D21] focus:outline-none focus:ring-2 
        focus:ring-[#EB5A3C] focus:ring-opacity-50 w-full max-w-[300px] mt-8
        md:text-2xl  text-md
      "
      onClick={onClick}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent 
        opacity-20 transform -skew-x-12 animate-shine"
        aria-hidden="true"
      ></span>
    </button>
  )
}

export default CTA
