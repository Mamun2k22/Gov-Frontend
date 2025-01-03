import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Full-width image */}
      <img
        src="https://file-khulna.portal.gov.bd/media/central/themes/theme-default/img/footer_top_bg.png"
        alt="Footer Background"
        className="w-full"
      />
      {/* Footer text below the image */}
      <div className="bg-gray-800 text-white py-3">
        <div className="container mx-auto text-center">
          <p>© 2025 Your Website. All rights reserved.</p>
          <p>Designed by Mamun</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
