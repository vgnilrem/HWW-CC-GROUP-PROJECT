export default function Footer() {
    return (
      <footer className="bg-black py-8 flex justify-center gap-10">
        <a href="https://www.instagram.com/hww.community" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.jpg" alt="Instagram" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
        <a href="https://facebook.com/OUR_FACEBOOK" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.jpg" alt="Facebook" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
        <a href="https://www.linkedin.com/company/health-wealth-community" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.jpg" alt="LinkedIn" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
        <a href="https://tiktok.com/@OUR_TIKTOK" target="_blank" rel="noopener noreferrer">
          <img src="/images/tiktok.jpg" alt="TikTok" className="w-8 h-8 hover:opacity-70 transition" />
        </a>
      </footer>
    );
  }