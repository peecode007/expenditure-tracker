import SideNavBar from '@/app/_components/SideNavBar';
import React from 'react';
import { ThemeProvider } from "next-themes";
import BackgroundWrapper from '@/app/_components/ui/BackgroundWrapper';
import { Inter, Outfit, Oswald } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

function DashboardLayout({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <BackgroundWrapper>
                <div className={`flex h-screen ${outfit.className}`}>
                    <div className="fixed md:w-64 hidden md:block bg-blue-50 h-screen divide-y-2 border-r-2 border-gray-200">
                        <SideNavBar />
                    </div>

                    <div className={`flex-1 md:ml-64 ${outfit.className}`}>
                        {children}
                    </div>
                </div>
            </BackgroundWrapper>
        </ThemeProvider>
    );
}

export default DashboardLayout;
