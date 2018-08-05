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
    { className: "contact" },
    React.createElement(
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
      ),
      React.createElement(
        "div",
        { className: "contact__wrapper" },
        React.createElement(
          "div",
          { className: "contact__adress" },
          React.createElement("i", { className: "fas fa-map-marker-alt" }),
          "Moonshine Street No: 14/05 Light City, Jupiter"
        ),
        React.createElement(
          "div",
          { className: "contact__phone" },
          React.createElement("i", { className: "fas fa-phone" }),
          "0247 541 65 87"
        )
      ),
      React.createElement(
        "div",
        { className: "social-media-links" },
        React.createElement(
          "div",
          { className: "social-media-links__rss" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("i", { className: "fas fa-rss" })
          )
        ),
        React.createElement(
          "div",
          { className: "social-media-links__facebook" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("i", { className: "fab fa-facebook-f" })
          )
        ),
        React.createElement(
          "div",
          { className: "social-media-links__twitter" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("i", { className: "fab fa-twitter" })
          )
        ),
        React.createElement(
          "div",
          { className: "social-media-links__dribbble" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("i", { className: "fab fa-dribbble" })
          )
        ),
        React.createElement(
          "div",
          { className: "social-media-links__pintrest" },
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("i", { className: "fab fa-pinterest-p" })
          )
        )
      )
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIE5hdiBDb21wb25lbnRcbmZ1bmN0aW9uIE5hdihwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwibmF2XCIsXG4gICAgICBudWxsLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25cIiB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibG9nb1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcIi4vZGlzdC9pbWFnZXMvbG9nby5wbmdcIiwgYWx0OiBcIkxvZ28gIFwiIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX21lbnVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19saW5rIG5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZVwiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJIb21lXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJBYm91dFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX2xpbmtcIiB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFwiUG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJCbG9nXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJDb250YWN0XCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IG9uQ2xpY2s6IHByb3BzLmhhbmRsZVRvZ2dsZU1lbnUsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19idXR0b25cIiwgaWQ6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImxpbmUxIG5vLWFuaW1hdGlvblwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibGluZTIgbm8tYW5pbWF0aW9uXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJsaW5lMyBuby1hbmltYXRpb25cIiB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cblxuLy8gSGVhZGVyIENvbXBvbmVudFxuZnVuY3Rpb24gSGVhZGVyQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwiaGVhZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgxXCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcImhlYWRlcl9fdGl0bGVcIiB9LFxuICAgICAgICBcIldlIGFyZSBcIixcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFwiV2VicHJpbnRcIlxuICAgICAgICApXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJoMlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJoZWFkZXJfX3N1YnRpdGxlXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFwiZGlnaXRhbCAmIGJyYW5kaW5nXCJcbiAgICAgICAgKSxcbiAgICAgICAgXCIgYWdlbmN5IGJhc2VkIGluIEp1cGl0ZXIgYW5kIHdlIHdvdWxkIGxvdmUgdG8gdHVybiBpZGVhcyBpbnRvIGJlYXV0aWZ1bCB0aGluZ3MuXCJcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJoZWFkZXJfX2J1dHRvblwiIH0sXG4gICAgICAgIFwiU2VlIFBvcnRmb2xpb1wiXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vIEZlYXR1cmVzIFNlY3Rpb24gIFxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG5cbmZ1bmN0aW9uIEZlYXR1cmUocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBcImZlYXR1cmVfX2ltYWdlXCIsIHNyYzogcHJvcHMuaW1nU3JjLCBhbHQ6IFwiU29tZSBjdXN0b21pemFibGUgZmVhdHVyZVwiIH0pLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImgzXCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlX19uYW1lXCIgfSxcbiAgICAgIHByb3BzLmZlYXR1cmVOYW1lXG4gICAgKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlX19kZXNjcmlwdGlvblwiIH0sXG4gICAgICBwcm9wcy5mZWF0dXJlRGVzY1xuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gRmVhdHVyZXMocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlc1wiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiZmVhdHVyZXMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9hbmRyb2lkLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9jb21wdXRlci5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVhdHVyZSwgeyBpbWdTcmM6IFwiLi9pbWFnZXMvY2FtZXJhLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy93YXRjaC5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cblxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyBHYWxsZXJ5IFNlY3Rpb24gIFxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG5cbnZhciBHYWxsZXJ5ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdhbGxlcnksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdhbGxlcnkocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FsbGVyeSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR2FsbGVyeS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbGxlcnkpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zZXRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVDYXRlZ29yeTogY2F0ZWdvcnlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5OiAnQWxsJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdhbGxlcnksIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X190aXRsZVwiIH0sXG4gICAgICAgICAgICBcIk91ciBGZWF0dXJlZCBXb3Jrc1wiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X19zdWJ0aXRsZVwiIH0sXG4gICAgICAgICAgICBcIkN1cmFiaXR1ciBibGFuZGl0IHRlbXB1cyBwb3J0dGl0b3IuIE1hZWNlbmFzIGZhdWNpYnVzIG1vbGxpcyBpbnRlcmR1bS5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X19jb250cm9sc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbGxlcnlCdXR0b24sIHsgaXNBY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnkgPT09ICdBbGwnID8gdHJ1ZSA6IGZhbHNlLCBzZXRDYXRlZ29yeTogdGhpcy5zZXRDYXRlZ29yeSwgY2F0ZWdvcnk6IFwiQWxsXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbGxlcnlCdXR0b24sIHsgaXNBY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnkgPT09ICdHcmFwaGljJyA/IHRydWUgOiBmYWxzZSwgc2V0Q2F0ZWdvcnk6IHRoaXMuc2V0Q2F0ZWdvcnksIGNhdGVnb3J5OiBcIkdyYXBoaWNcIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FsbGVyeUJ1dHRvbiwgeyBpc0FjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeSA9PT0gJ0lsbHVzdHJhdGlvbicgPyB0cnVlIDogZmFsc2UsIHNldENhdGVnb3J5OiB0aGlzLnNldENhdGVnb3J5LCBjYXRlZ29yeTogXCJJbGx1c3RyYXRpb25cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FsbGVyeUJ1dHRvbiwgeyBpc0FjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeSA9PT0gJ01vdGlvbicgPyB0cnVlIDogZmFsc2UsIHNldENhdGVnb3J5OiB0aGlzLnNldENhdGVnb3J5LCBjYXRlZ29yeTogXCJNb3Rpb25cIiB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJ3b3Jrc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fMS5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJHcmFwaGljXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb18yLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIklsbHVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fMy5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJJbGx1c3RyYXRpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzQuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiTW90aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb181LmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIklsbHVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fNi5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJNb3Rpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzcuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiSWxsdXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb184LmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzkuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiTW90aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb18xMC5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJNb3Rpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzExLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzEyLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHYWxsZXJ5O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgR2FsbGVyeUJ1dHRvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoR2FsbGVyeUJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEdhbGxlcnlCdXR0b24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FsbGVyeUJ1dHRvbik7XG5cbiAgICB2YXIgX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdhbGxlcnlCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHYWxsZXJ5QnV0dG9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMyLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjYXRlZ29yeSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgIF90aGlzMi5wcm9wcy5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2FsbGVyeUJ1dHRvbiwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGNsYXNzTmFtZTogXCJnYWxsZXJ5X19idXR0b24gXCIgKyAodGhpcy5wcm9wcy5pc0FjdGl2ZSA/ICdnYWxsZXJ5X19idXR0b24tLWFjdGl2ZScgOiAnJykgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jYXRlZ29yeVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2FsbGVyeUJ1dHRvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gV29ya0l0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJ3b3JrIFwiICsgKHByb3BzLmFjdGl2ZUNhdGVnb3J5ID09PSAnQWxsJyB8fCBwcm9wcy5pbWdDYXRlZ29yeSA9PT0gcHJvcHMuYWN0aXZlQ2F0ZWdvcnkgPyBcIlwiIDogXCIgKyB3b3JrLS1mYWRlLW91dFwiKSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwid29ya19faW1nXCIsIHNyYzogcHJvcHMuaW1nU3JjLCBhbHQ6IHByb3BzLmFsdCB9KVxuICAgIClcbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vICAgIEdldCBpbiB0b3VjaCAgXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbkNvbnRhY3QgPSBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RcIiB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaDJcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiY29udGFjdF9fdGl0bGVcIiB9LFxuICAgICAgICBcIkdldCBpbiBUb3VjaFwiXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RfX3N1YnRpdGxlXCIgfSxcbiAgICAgICAgXCJDdXJhYml0dXIgYmxhbmRpdCB0ZW1wdXMgcG9ydHRpdG9yLiBNYWVjZW5hcyBmYXVjaWJ1cyBtb2xsaXMgaW50ZXJkdW0uXCJcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJjb250YWN0X193cmFwcGVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RfX2FkcmVzc1wiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgfSksXG4gICAgICAgICAgXCJNb29uc2hpbmUgU3RyZWV0IE5vOiAxNC8wNSBMaWdodCBDaXR5LCBKdXBpdGVyXCJcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RfX3Bob25lXCIgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJmYXMgZmEtcGhvbmVcIiB9KSxcbiAgICAgICAgICBcIjAyNDcgNTQxIDY1IDg3XCJcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcInNvY2lhbC1tZWRpYS1saW5rc1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGNsYXNzTmFtZTogXCJzb2NpYWwtbWVkaWEtbGlua3NfX3Jzc1wiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFzIGZhLXJzc1wiIH0pXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IFwic29jaWFsLW1lZGlhLWxpbmtzX19mYWNlYm9va1wiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFiIGZhLWZhY2Vib29rLWZcIiB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcInNvY2lhbC1tZWRpYS1saW5rc19fdHdpdHRlclwiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFiIGZhLXR3aXR0ZXJcIiB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcInNvY2lhbC1tZWRpYS1saW5rc19fZHJpYmJibGVcIiB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcImZhYiBmYS1kcmliYmJsZVwiIH0pXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IFwic29jaWFsLW1lZGlhLWxpbmtzX19waW50cmVzdFwiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwiZmFiIGZhLXBpbnRlcmVzdC1wXCIgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuLy8gPT09PT09PT09PT09PT09PT09IC8vXG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDMpIHtcbiAgX2luaGVyaXRzKEFwcCwgX1JlYWN0JENvbXBvbmVudDMpO1xuXG4gIGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcHApO1xuXG4gICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcHAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBcHApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpczMuc3RhdGUgPSB7XG4gICAgICBjYXRlZ29yeTogJ0FsbCdcbiAgICB9O1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogXCJ0b2dnbGVNZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgICB2YXIgYnRuU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uX19idXR0b24gc3BhbicpO1xuICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19idXR0b24nKTtcbiAgICAgIHZhciBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX21lbnUnKTtcblxuICAgICAgYnRuU3Bhbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCduby1hbmltYXRpb24nKTtcbiAgICAgIH0pO1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUnKTtcbiAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbWVudS0tc2hvdycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXYsIHsgaGFuZGxlVG9nZ2xlTWVudTogdGhpcy50b2dnbGVNZW51IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbXBvbmVudCwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVhdHVyZXMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbGxlcnksIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhY3QsIG51bGwpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT0gICAgIEV2ZW50IGxpc3RlbmVycyAgICAgPT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbl9fbGluaycpO1xudmFyIG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbWVudScpO1xudmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19idXR0b24nKTtcblxubmF2TGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWN0aXZlQ2xhc3MpO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUFjdGl2ZUNsYXNzKGUpIHtcbiAgbmF2TGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlJyk7XG4gIH0pO1xuXG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlJyk7XG4gIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9fbWVudS0tc2hvdycpO1xuICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZScpO1xufSJdfQ==
