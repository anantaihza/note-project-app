import { useTheme } from "../../contexts/ThemeContext";

export default function SkeletonDetailNote() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="base-container">
        <div
          className={`bg-acrylic shadow-lg p-8 rounded-2xl ${theme}-solid ${theme}-text`}
        >
          <h2 className="text-4xl md:text-5xl font-bold animate-pulse">
            Loading Title...
          </h2>
          <p className="text-lg text-[#219BFF] mt-3 animate-pulse">
            Loading Date...
          </p>
          <p className="tex-lg mt-6 max-h-[250px] md:max-h-[300px] lg:max-h-[500px] overflow-auto animate-pulse">
            Loading Note...
          </p>
        </div>
      </div>
    </div>
  );
}
