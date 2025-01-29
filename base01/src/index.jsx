import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

const root = createRoot(document.getElementById("root"));

function Page() {
    return (
        <StrictMode>
            <Header />
            <MainContent />
            <Footer />
        </StrictMode>
    )
}


root.render(
    <Page />
);
