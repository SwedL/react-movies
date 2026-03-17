export function Footer() {
  return (
    <footer className="page-footer green lighten-2">
      <div className="footer-copyright green lighten-2">
        <div className="container">
          <span className="white-text">
            © {new Date().getFullYear()} Copyright Text
          </span>
          <a className="white-text right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
