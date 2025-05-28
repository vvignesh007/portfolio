import Resume from "../assets/Resume.pdf"

const DownloadCV = () => {
    return (
      <div className="flex justify-center mt-4">
        <a
          href={Resume}
          download="Resume.pdf"
          className="bg-blue-800 hover:to-blue-400 text-white shadow-2xl px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
    );
  };

  export default DownloadCV