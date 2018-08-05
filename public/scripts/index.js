// Nav Component
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

// Header Component
function HeaderComponent(props) {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">We are <span>Webprint</span></h1>
        <h2 className="header__subtitle"><span>digital &amp; branding</span> agency based in Jupiter and we would love to turn ideas into beautiful things.</h2>
        <button className="header__button">See Portfolio</button>
      </div>  
    </div>
  );
}

// ================== //
// Features Section  
// ================== //

function Feature(props) {
  return (
    <div className="feature">
      <img className="feature__image" src={props.imgSrc} alt="Some customizable feature"/>
      <h3 className="feature__name">{props.featureName}</h3>
      <p className="feature__description">{props.featureDesc}</p>   
      </div>
  );
}

function Features(props){
  return (
    <div className="features">
      <div className="container">
        <div className="features-container">
          <Feature imgSrc="./images/android.png" featureName="Name" featureDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim."/>
          <Feature imgSrc="./images/computer.png" featureName="Name" featureDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim."/>
          <Feature imgSrc="./images/camera.png" featureName="Name" featureDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim."/>
          <Feature imgSrc="./images/watch.png" featureName="Name" featureDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim."/>
        </div>
      </div>
    </div>
  );
}

// ================== //
// ================== //
// ================== //

// ================== //
// Gallery Section  
// ================== //
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'All'
    };
  };1

  setCategory = (category) => {
    this.setState({
      activeCategory: category
    })
  };

  render(){ 
    return (
      <div className="gallery">
        <div className="container">
          <h2 className="gallery__title">Our Featured Works</h2>
          <p className="gallery__subtitle">Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.</p>
          <div className="gallery__controls">
            <GalleryButton isActive={this.state.activeCategory === 'All' ? true : false} setCategory={this.setCategory} category="All"/>
            <GalleryButton isActive={this.state.activeCategory === 'Graphic' ? true : false} setCategory={this.setCategory} category="Graphic"/>
            <GalleryButton isActive={this.state.activeCategory === 'Illustration' ? true : false} setCategory={this.setCategory} category="Illustration"/>
            <GalleryButton isActive={this.state.activeCategory === 'Motion' ? true : false} setCategory={this.setCategory} category="Motion"/>
          </div>
          <div className="works">
            <WorkItem 
              imgSrc="./images/portfolio_1.jpg" 
              alt="Some generic alt text"
              imgCategory="Graphic"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_2.jpg" 
              alt="Some generic alt text"
              imgCategory="Illustration"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_3.jpg" 
              alt="Some generic alt text"
              imgCategory="Illustration"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_4.jpg" 
              alt="Some generic alt text"
              imgCategory="Motion"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_5.jpg" 
              alt="Some generic alt text"
              imgCategory="Illustration"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_6.jpg" 
              alt="Some generic alt text"
              imgCategory="Motion"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_7.jpg" 
              alt="Some generic alt text"
              imgCategory="Illustration"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_8.jpg" 
              alt="Some generic alt text"
              imgCategory="Graphic"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_9.jpg" 
              alt="Some generic alt text"
              imgCategory="Motion"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_10.jpg" 
              alt="Some generic alt text"
              imgCategory="Motion"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_11.jpg" 
              alt="Some generic alt text"
              imgCategory="Graphic"
              activeCategory={this.state.activeCategory}
            />
            <WorkItem 
              imgSrc="./images/portfolio_12.jpg" 
              alt="Some generic alt text"
              imgCategory="Graphic"
              activeCategory={this.state.activeCategory}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

class GalleryButton extends React.Component {
  constructor(props) {
    super(props);
    
  };


  handleClick = (e) => {
    let category = e.target.innerHTML
    this.props.setCategory(category);
  };

  render(){
    return (
      <button onClick={this.handleClick} className={"gallery__button " + (this.props.isActive ? 'gallery__button--active' : '')}>{this.props.category}</button>
    );
  }
}

function WorkItem(props){
  return (
    <div className={"work " + ((props.activeCategory === 'All') || (props.imgCategory === props.activeCategory) ? "" : " + work--fade-out")}>
      <div>
        <img className="work__img" src={props.imgSrc} alt={props.alt}/>
      </div>
    </div>
  );
}

// ================== //
// ================== //
// ================== //

// ================== //
//    Get in touch  
// ================== //
Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__subtitle">Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.</p>
        <div className="contact__wrapper">
          <div className="contact__adress">
            <i className="fas fa-map-marker-alt"></i>
            Moonshine Street No: 14/05 Light City, Jupiter
          </div>
          <div className="contact__phone">
            <i className="fas fa-phone"></i>
            0247 541 65 87
          </div>
        </div>
        <div className="social-media-links">
          <div className="social-media-links__rss">
            <a href="#"><i className="fas fa-rss"></i></a>
          </div>
          <div className="social-media-links__facebook">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
          <div className="social-media-links__twitter">
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="social-media-links__dribbble">
            <a href="#"><i className="fab fa-dribbble"></i></a>
          </div>
          <div className="social-media-links__pintrest">
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ================== //
// ================== //
// ================== //
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All'
    };
  };

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
        <HeaderComponent/>
        <Features />
        <Gallery/>
        <Contact/>
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