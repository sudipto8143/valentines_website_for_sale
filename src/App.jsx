import React, { useState } from 'react';
import Header from './components/Header';
import Name from './components/Name';
import PhotoStack from './components/PhotoStack';
import Message from './components/Message';
import MusicPlayer from './components/MusicPlayer';
import ValentineProposal from './components/ValentineProposal';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);

  if (!accepted) {
    return <ValentineProposal onAccept={() => setAccepted(true)} />;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg-cream font-serif selection:bg-vibrant-pink selection:text-white">

      {/* --- Background Elements --- */}

      {/* 1. DOTTED BACKGROUND (Default) */}
      {/* <div className="fixed inset-0 z-0 bg-dotted-pattern bg-dotted-sm opacity-[0.15] pointer-events-none"></div> */}

      {/* 2. CUSTOM BACKGROUND (Uncomment below to use 'src/assets/images/bg-custom.jpg') */}
      <div className="fixed inset-0 z-0 bg-custom bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"></div>


      {/* Soft gradient blurs for mood */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-soft-pink/30 blur-[90px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-vibrant-pink/10 blur-[90px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg md:max-w-4xl mx-auto px-4 pb-24">
        <Header />
        <Name />

        <div className="animate-float flex justify-center items-center my-6 scale-95 md:scale-100">
          <PhotoStack />
        </div>

        <Message />
      </div>

      <MusicPlayer autoPlay={true} />

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-vibrant-pink/90 tracking-[0.2em] font-bold uppercase cursor-default hover:scale-105 transition-transform duration-300 drop-shadow-sm">
        Made with <span className="animate-pulse inline-block">❤️</span> by <span className='tracking-tight text-vibrant-pink text-lg'>Sudipto</span>
      </p>


    </div>
  );
}

export default App;
