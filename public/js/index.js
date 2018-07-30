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
    { className: "" },
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

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
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
        React.createElement(Features, null)
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