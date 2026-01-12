// app/loading.js
export default function Loading() {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fee5e9] z-50">
        <div className="flex space-x-3">
          {/* Dot 1 */}
          <div className="w-5 h-5 bg-[#F8A2BF] rounded-full animate-bounce [animation-delay:-0.3s] shadow-sm"></div>
          {/* Dot 2 */}
          <div className="w-5 h-5 bg-[#d7fb91] rounded-full animate-bounce [animation-delay:-0.15s] shadow-sm"></div>
          {/* Dot 3 */}
          <div className="w-5 h-5 bg-[#F8A2BF] rounded-full animate-bounce shadow-sm"></div>
        </div>
        
        <div className="mt-6 flex flex-col items-center">
          <p className="text-[#F8A2BF] font-bold text-lg tracking-widest animate-pulse">
            LOADING...
          </p>
   
        </div>
      </div>
    );
  }