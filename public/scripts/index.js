function Nav(props) {

  return (
    <div>
      <nav>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <img src="./dist/images/logo.png" alt="Logo  "/>
            </div>
            <div className="navigation__menu">
              <a href="#" className="navigation__link navigation__link--active">
                <li>Home</li>
              </a>
              <a href="#" className="navigation__link">
                <li>About</li>
              </a>
              <a href="#" className="navigation__link">
                <li>Portfolio</li>
              </a>
              <a href="#" className="navigation__link">
                <li>Blog</li>
              </a>
              <a href="#" className="navigation__link">
                <li>Contact</li>
              </a>
            </div>
            <div onClick={props.handleToggleMenu} className="navigation__button" id="button">
              <span className="line1 no-animation"></span>
              <span className="line2 no-animation"></span>
              <span className="line3 no-animation"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


class App extends React.Component {
  toggleMenu(){
    const btnSpan = document.querySelectorAll('.navigation__button span');
    const btn = document.querySelector('.navigation__button');
    const navMenu = document.querySelector('.navigation__menu');

    btnSpan.forEach((el) => {
      el.classList.remove('no-animation');
    })
    btn.classList.toggle('animate');
    navMenu.classList.toggle('navigation__menu--show');
  };

  render(){
    
    return (
      <div>
        <Nav handleToggleMenu={this.toggleMenu}/>
      </div>
    )
  }
}



// =============================== //
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
// =============================== //

// =============================== //
// ===     Event listeners     === //
// =============================== //
const navLinks = document.querySelectorAll('.navigation__link');
const navMenu = document.querySelector('.navigation__menu');
const btn = document.querySelector('.navigation__button');

navLinks.forEach((link) => {
  link.addEventListener('click', handleActiveClass)
});

function handleActiveClass (e) {
  navLinks.forEach((link) => {
    link.classList.remove('navigation__link--active');
  });

  this.classList.add('navigation__link--active');
  navMenu.classList.remove('navigation__menu--show');
  btn.classList.toggle('animate');
}