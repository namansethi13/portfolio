interface BlogCardData{
    title: string;
    description: string;
    created_date: string;
    thumbnail: string; // url
    url: string
}
export default function BlogCard(
    {
        title, description, created_date , thumbnail, url
    }: BlogCardData
){

    return (
        <a
              href={"blog/"+url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-black p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 overflow-hidden 
              w-[280px] h-[460px] sm:w-[300px] sm:h-[480px] md:w-[320px] md:h-[500px] lg:w-[340px] lg:h-[520px]"              
              style={{ minWidth: '250px' }}
            >
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"  
              width="100%"
              height="100%"
            />
              </div>
            <div className="p-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300 mt-2">{description.length > 100 ? description.slice(0,97) + "..." : description }</p>
                <h3 className="text-sm md:text-base font-semibold text-gray-600 mt-8">{created_date}</h3>
            </div>
        </a>
    )

}