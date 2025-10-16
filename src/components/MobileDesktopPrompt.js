import React, { useState, useEffect } from 'react';

const MobileDesktopPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const hasShownPrompt = localStorage.getItem('mobileDesktopPromptShown');

    if (isMobile && !hasShownPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPrompt(false);
    localStorage.setItem('mobileDesktopPromptShown', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Better Experience Available
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          For the best experience, please switch to desktop view in your browser settings.
        </p>
        <button
          onClick={handleClose}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default MobileDesktopPrompt;