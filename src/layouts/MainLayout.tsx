import React, { ReactNode } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { useAppContext } from '../context/AppContext';
import AttractionModal from '../components/shared/AttractionModal';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { selectedAttraction, setSelectedAttraction } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Attraction Modal */}
      {selectedAttraction && (
        <AttractionModal 
          attraction={selectedAttraction} 
          onClose={() => setSelectedAttraction(null)} 
        />
      )}
    </div>
  );
};

export default MainLayout;
