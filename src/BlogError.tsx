export default function BlogError() {
    return (
        <div className="flex flex-col items-center justify-center h-screen  bg-linear-to-r from-zinc-900 via-stone-800 to-zinc-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Error</h1>
            <p className="text-lg">Well, this is embarrassing. 😢</p>
            <p className="text-sm text-gray-400 mt-2">It seems like something went wrong while fetching the blog posts.</p>
            <p className="text-sm text-gray-400 mt-2">Please try again later.</p>
            <button className="mt-6">
                <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Go Back Home
                </a>
            </button>
        </div>
    );
}