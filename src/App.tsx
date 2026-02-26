// import { TooltipProvider } from "@/components/ui/tooltip";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Collection from "./pages/Collection";
// import NotFound from "./pages/NotFound";

// const App = () => (
//   <TooltipProvider>
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/collection" element={<Collection />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </HashRouter>
//   </TooltipProvider>
// );

// export default App;


import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { siteConfig } from "@/config/siteConfig";

import Index from "./pages/Index";
import Collection from "./pages/Collection";
import NotFound from "./pages/NotFound";

function AppContent() {
  const bp = useBreakpoint();

  const navOffsetPx =
    siteConfig.navigation.isSticky
      ? siteConfig.navigation.heightPx[bp]
      : 0;

  return (
    <div
      style={
        {
          "--nav-offset": `${navOffsetPx}px`,
        } as React.CSSProperties
      }
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const App = () => (
  <TooltipProvider>
    <HashRouter>
      <AppContent />
    </HashRouter>
  </TooltipProvider>
);

export default App;