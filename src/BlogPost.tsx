import { useLoaderData } from "react-router-dom";
import DOMPurify from 'dompurify';

function getSectionType(section: any) {
    if (section.section_type === "image") {
        return (
            <div className="flex justify-center items-center h-full">
                <img src={section.image} alt={section.alt_text || section.title} className="max-w-[1600px] max-h-full object-cover" />
            </div>
        );
    }

    if (section.section_type === "raw_content") {
        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold text-white mb-4">{section.section_title}</h2>
                <p className="text-gray-300 text-justify [&_a]:text-blue-400 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.content) }} />
            </div>
        );
    }

    if (section.section_type === "title"){
        return (
            <h1 className="text-2xl font-bold text-white mb-4">{section.section_title}</h1>
        );
    }
    
    if (section.section_type === "footer") {
        return (
            <footer className="text-gray-500 text-left mt-8 w-full max-w-[1600px] p-4">
                <p>{section.content}</p>
            </footer>
        );
    }
    return null;
}

export default function BlogPost() {
    const [error, post] = useLoaderData();
    post.sections = post.sections.sort((a: any, b: any) => {
        if (a.order && b.order) {
            return a.order - b.order;
        }
        return 0;
    });
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 mt-16">{post.title}</h1>
            {error ? (
                <div className="text-red-500 text-center">Error loading post</div>
            ) : !post ? (
                <div className="text-gray-500 text-center">Post not available</div>
            ) : (
                post.sections.map((section: any, idx: number) => (
                    <div key={idx} className="w-full p-4 max-w-[1600px] flex flex-col justify-center items-center">

                    {section.title && (
                    <h1 className="text-2xl font-bold text-white mb-4">{section.title}</h1>
                    )}

                        {getSectionType(section)}
                    </div>

                ))
            )}
        </div>
    );
}