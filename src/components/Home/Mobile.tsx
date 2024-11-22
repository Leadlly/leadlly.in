import dynamic from "next/dynamic";

const PdfViewerComponent = dynamic(() => import("./PdfViewer"), { ssr: false });
type PDFFile = string | File | null;

export default function Mobile() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[300px] h-[600px]">
        {/* Phone Container */}
        <div className="h-full flex flex-col">
          {/* Phone Frame */}
          <div className="relative h-full rounded-[2.5rem] shadow-xl bg-gray-600 overflow-hidden z-10 flex items-center justify-center p-[3px] shadow-purple-300/50">
            {/* Inner Background */}
            <div className="h-full w-full rounded-[2.5rem] bg-white border-2">
              {/* Phone UI Structure */}
              <div className="h-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="relative">
                  {/* Top Notch */}
                  <div className="flex justify-center mt-2">
                    <div className="w-[40px] h-1 bg-gray-600 rounded-3xl" />
                  </div>

                  {/* Status Bar */}
                  <div className="px-5 pt-2 pb-1 flex justify-between items-baseline text-xs">
                    <span className="font-medium">19:41</span>
                    <div className="flex items-baseline gap-2">
                      {/* Signal Bars */}
                      <div className="h-3 w-3.5 flex items-baseline gap-[2px]">
                        {[1, 1.5, 2, 2.5].map((height, idx) => (
                          <div
                            key={idx}
                            className={`w-0.5 h-${height} bg-gray-600 rounded-sm`}
                          />
                        ))}
                      </div>
                      {/* Battery Icon */}
                      <div className="w-4 h-3 border-2 border-black rounded-sm relative">
                        <div className="h-full w-2/3 bg-black"></div>
                        <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[3px] h-1.5 bg-black rounded-r-[1px]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 px-4 pb-8 mb-4 flex flex-col w-[290px] max-h-[530px] overflow-scroll overflow-x-hidden custom-scroll rounded-[2.5rem]">
                  <PdfViewerComponent />
                </div>

                {/* Bottom Notch */}
                <div className="flex justify-center mb-0">
                  <div className="w-1/3 h-1 bg-gray-600 rounded-t-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Buttons - Still using absolute positioning as they need to be outside the frame */}
        <div className="absolute left-[-3px] top-[100px] w-[5px] h-[32px] bg-gray-600 rounded-l-full" />
        <div className="absolute left-[-3px] top-[150px] w-[5px] h-[64px] bg-gray-600 rounded-l-full" />
        <div className="absolute right-[-2px] top-[120px] w-[5px] h-[32px] bg-gray-600 rounded-r-full" />
      </div>
    </div>
  );
}
