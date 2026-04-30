import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <span className="footer-name">✦ Ameera Habeeeb</span>
        <span className="footer-copy">
          Crafted with love & code · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
