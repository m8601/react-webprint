var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Nav Component
function Nav(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "nav",
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "navigation" },
          React.createElement(
            "div",
            { className: "logo" },
            React.createElement("img", { src: "./dist/images/logo.png", alt: "Logo  " })
          ),
          React.createElement(
            "div",
            { className: "navigation__menu" },
            React.createElement(
              "a",
              { href: "#", className: "navigation__link navigation__link--active" },
              React.createElement(
                "li",
                null,
                "Home"
              )
            ),
            React.createElement(
              "a",
              { href: "#", className: "navigation__link" },
              React.createElement(
                "li",
                null,
                "About"
              )
            ),
            React.createElement(
              "a",
              { href: "#", className: "navigation__link" },
              React.createElement(
                "li",
                null,
                "Portfolio"
              )
            ),
            React.createElement(
              "a",
              { href: "#", className: "navigation__link" },
              React.createElement(
                "li",
                null,
                "Blog"
              )
            ),
            React.createElement(
              "a",
              { href: "#", className: "navigation__link" },
              React.createElement(
                "li",
                null,
                "Contact"
              )
            )
          ),
          React.createElement(
            "div",
            { onClick: props.handleToggleMenu, className: "navigation__button", id: "button" },
            React.createElement("span", { className: "line1 no-animation" }),
            React.createElement("span", { className: "line2 no-animation" }),
            React.createElement("span", { className: "line3 no-animation" })
          )
        )
      )
    )
  );
}

// Header Component
function HeaderComponent(props) {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        { className: "header__title" },
        "We are ",
        React.createElement(
          "span",
          null,
          "Webprint"
        )
      ),
      React.createElement(
        "h2",
        { className: "header__subtitle" },
        React.createElement(
          "span",
          null,
          "digital & branding"
        ),
        " agency based in Jupiter and we would love to turn ideas into beautiful things."
      ),
      React.createElement(
        "button",
        { className: "header__button" },
        "See Portfolio"
      )
    )
  );
}

// ================== //
// Features Section  
// ================== //

function Feature(props) {
  return React.createElement(
    "div",
    { className: "feature" },
    React.createElement("img", { className: "feature__image", src: props.imgSrc, alt: "Some customizable feature" }),
    React.createElement(
      "h3",
      { className: "feature__name" },
      props.featureName
    ),
    React.createElement(
      "p",
      { className: "feature__description" },
      props.featureDesc
    )
  );
}

function Features(props) {
  return React.createElement(
    "div",
    { className: "features" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "features-container" },
        React.createElement(Feature, { imgSrc: "./images/android.png", featureName: "Name", featureDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim." }),
        React.createElement(Feature, { imgSrc: "./images/computer.png", featureName: "Name", featureDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim." }),
        React.createElement(Feature, { imgSrc: "./images/camera.png", featureName: "Name", featureDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim." }),
        React.createElement(Feature, { imgSrc: "./images/watch.png", featureName: "Name", featureDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, enim." })
      )
    )
  );
}

// ================== //
// ================== //
// ================== //

// ================== //
// Gallery Section  
// ================== //

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.setCategory = function (category) {
      _this.setState({
        activeCategory: category
      });
    };

    _this.state = {
      activeCategory: 'All'
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "gallery" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h2",
            { className: "gallery__title" },
            "Our Featured Works"
          ),
          React.createElement(
            "p",
            { className: "gallery__subtitle" },
            "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum."
          ),
          React.createElement(
            "div",
            { className: "gallery__controls" },
            React.createElement(GalleryButton, { isActive: this.state.activeCategory === 'All' ? true : false, setCategory: this.setCategory, category: "All" }),
            React.createElement(GalleryButton, { isActive: this.state.activeCategory === 'Graphic' ? true : false, setCategory: this.setCategory, category: "Graphic" }),
            React.createElement(GalleryButton, { isActive: this.state.activeCategory === 'Illustration' ? true : false, setCategory: this.setCategory, category: "Illustration" }),
            React.createElement(GalleryButton, { isActive: this.state.activeCategory === 'Motion' ? true : false, setCategory: this.setCategory, category: "Motion" })
          ),
          React.createElement(
            "div",
            { className: "works" },
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_1.jpg",
              alt: "Some generic alt text",
              imgCategory: "Graphic",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_2.jpg",
              alt: "Some generic alt text",
              imgCategory: "Illustration",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_3.jpg",
              alt: "Some generic alt text",
              imgCategory: "Illustration",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_4.jpg",
              alt: "Some generic alt text",
              imgCategory: "Motion",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_5.jpg",
              alt: "Some generic alt text",
              imgCategory: "Illustration",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_6.jpg",
              alt: "Some generic alt text",
              imgCategory: "Motion",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_7.jpg",
              alt: "Some generic alt text",
              imgCategory: "Illustration",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_8.jpg",
              alt: "Some generic alt text",
              imgCategory: "Graphic",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_9.jpg",
              alt: "Some generic alt text",
              imgCategory: "Motion",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_10.jpg",
              alt: "Some generic alt text",
              imgCategory: "Motion",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_11.jpg",
              alt: "Some generic alt text",
              imgCategory: "Graphic",
              activeCategory: this.state.activeCategory
            }),
            React.createElement(WorkItem, {
              imgSrc: "./images/portfolio_12.jpg",
              alt: "Some generic alt text",
              imgCategory: "Graphic",
              activeCategory: this.state.activeCategory
            })
          )
        )
      );
    }
  }]);

  return Gallery;
}(React.Component);

var GalleryButton = function (_React$Component2) {
  _inherits(GalleryButton, _React$Component2);

  function GalleryButton(props) {
    _classCallCheck(this, GalleryButton);

    var _this2 = _possibleConstructorReturn(this, (GalleryButton.__proto__ || Object.getPrototypeOf(GalleryButton)).call(this, props));

    _this2.handleClick = function (e) {
      var category = e.target.innerHTML;
      _this2.props.setCategory(category);
    };

    return _this2;
  }

  _createClass(GalleryButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleClick, className: "gallery__button " + (this.props.isActive ? 'gallery__button--active' : '') },
        this.props.category
      );
    }
  }]);

  return GalleryButton;
}(React.Component);

function WorkItem(props) {
  return React.createElement(
    "div",
    { className: "work " + (props.activeCategory === 'All' || props.imgCategory === props.activeCategory ? "" : " + work--fade-out") },
    React.createElement(
      "div",
      null,
      React.createElement("img", { className: "work__img", src: props.imgSrc, alt: props.alt })
    )
  );
}

// ================== //
// ================== //
// ================== //

// ================== //
//    Get in touch  
// ================== //
Contact = function Contact() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h2",
      { className: "contact__title" },
      "Get in Touch"
    ),
    React.createElement(
      "p",
      { className: "contact__subtitle" },
      "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum."
    )
  );
};

// ================== //
// ================== //
// ================== //

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      category: 'All'
    };
    return _this3;
  }

  _createClass(App, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      var btnSpan = document.querySelectorAll('.navigation__button span');
      var btn = document.querySelector('.navigation__button');
      var navMenu = document.querySelector('.navigation__menu');

      btnSpan.forEach(function (el) {
        el.classList.remove('no-animation');
      });
      btn.classList.toggle('animate');
      navMenu.classList.toggle('navigation__menu--show');
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(Nav, { handleToggleMenu: this.toggleMenu }),
        React.createElement(HeaderComponent, null),
        React.createElement(Features, null),
        React.createElement(Gallery, null),
        React.createElement(Contact, null)
      );
    }
  }]);

  return App;
}(React.Component);

// =============================== //


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
// =============================== //

// =============================== //
// ===     Event listeners     === //
// =============================== //
var navLinks = document.querySelectorAll('.navigation__link');
var navMenu = document.querySelector('.navigation__menu');
var btn = document.querySelector('.navigation__button');

navLinks.forEach(function (link) {
  link.addEventListener('click', handleActiveClass);
});

function handleActiveClass(e) {
  navLinks.forEach(function (link) {
    link.classList.remove('navigation__link--active');
  });

  this.classList.add('navigation__link--active');
  navMenu.classList.remove('navigation__menu--show');
  btn.classList.toggle('animate');
}