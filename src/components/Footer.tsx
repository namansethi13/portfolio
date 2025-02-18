export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 mt-16 w-full flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Naman Sethi. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4">
          <a href="https://linkedin.com/in/namansethi13" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">LinkedIn</a>
          <a href="https://github.com/namansethi13" target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors">GitHub</a>
          <a href="mailto:namansethi1328@gmail.com" className="hover:text-highlight transition-colors">Email</a>
        </div>
      </footer>
    );
  }