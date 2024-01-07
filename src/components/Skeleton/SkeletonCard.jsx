import { useTheme } from "../../contexts/ThemeContext";

export default function SkeletonCard() {
    const { theme } = useTheme();
  return (
    <div className={`bg-acrylic shadow-lg p-8 rounded-lg h-60 ${theme}-solid`}>
      <p className="text-sm text-[#219BFF] mb-1 animate-pulse">
        Loading Date...
      </p>
      <div className="animate-pulse">
        <div className="text-xl font-bold bg-gray-400 h-6 w-3/4 mb-2"></div>
        <div className="bg-gray-400 h-6 w-2/3 mb-4"></div>
      </div>
      <p className="line-clamp-4 mt-4 text-sm bg-gray-400 h-8 animate-pulse"></p>
    </div>
  )
}
