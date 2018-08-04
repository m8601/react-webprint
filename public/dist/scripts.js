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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIE5hdiBDb21wb25lbnRcbmZ1bmN0aW9uIE5hdihwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwibmF2XCIsXG4gICAgICBudWxsLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25cIiB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibG9nb1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcIi4vZGlzdC9pbWFnZXMvbG9nby5wbmdcIiwgYWx0OiBcIkxvZ28gIFwiIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX21lbnVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19saW5rIG5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZVwiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJIb21lXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJBYm91dFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX2xpbmtcIiB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFwiUG9ydGZvbGlvXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJCbG9nXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJDb250YWN0XCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IG9uQ2xpY2s6IHByb3BzLmhhbmRsZVRvZ2dsZU1lbnUsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19idXR0b25cIiwgaWQ6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImxpbmUxIG5vLWFuaW1hdGlvblwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibGluZTIgbm8tYW5pbWF0aW9uXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJsaW5lMyBuby1hbmltYXRpb25cIiB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cblxuLy8gSGVhZGVyIENvbXBvbmVudFxuZnVuY3Rpb24gSGVhZGVyQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzc05hbWU6IFwiaGVhZGVyXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgxXCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcImhlYWRlcl9fdGl0bGVcIiB9LFxuICAgICAgICBcIldlIGFyZSBcIixcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFwiV2VicHJpbnRcIlxuICAgICAgICApXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJoMlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJoZWFkZXJfX3N1YnRpdGxlXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIFwiZGlnaXRhbCAmIGJyYW5kaW5nXCJcbiAgICAgICAgKSxcbiAgICAgICAgXCIgYWdlbmN5IGJhc2VkIGluIEp1cGl0ZXIgYW5kIHdlIHdvdWxkIGxvdmUgdG8gdHVybiBpZGVhcyBpbnRvIGJlYXV0aWZ1bCB0aGluZ3MuXCJcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJoZWFkZXJfX2J1dHRvblwiIH0sXG4gICAgICAgIFwiU2VlIFBvcnRmb2xpb1wiXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vIEZlYXR1cmVzIFNlY3Rpb24gIFxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG5cbmZ1bmN0aW9uIEZlYXR1cmUocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBcImZlYXR1cmVfX2ltYWdlXCIsIHNyYzogcHJvcHMuaW1nU3JjLCBhbHQ6IFwiU29tZSBjdXN0b21pemFibGUgZmVhdHVyZVwiIH0pLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImgzXCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlX19uYW1lXCIgfSxcbiAgICAgIHByb3BzLmZlYXR1cmVOYW1lXG4gICAgKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlX19kZXNjcmlwdGlvblwiIH0sXG4gICAgICBwcm9wcy5mZWF0dXJlRGVzY1xuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gRmVhdHVyZXMocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJmZWF0dXJlc1wiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiZmVhdHVyZXMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9hbmRyb2lkLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9jb21wdXRlci5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVhdHVyZSwgeyBpbWdTcmM6IFwiLi9pbWFnZXMvY2FtZXJhLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy93YXRjaC5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cblxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyBHYWxsZXJ5IFNlY3Rpb24gIFxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG5cbnZhciBHYWxsZXJ5ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdhbGxlcnksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdhbGxlcnkocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FsbGVyeSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoR2FsbGVyeS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdhbGxlcnkpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zZXRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmVDYXRlZ29yeTogY2F0ZWdvcnlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5OiAnQWxsJ1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdhbGxlcnksIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X190aXRsZVwiIH0sXG4gICAgICAgICAgICBcIk91ciBGZWF0dXJlZCBXb3Jrc1wiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X19zdWJ0aXRsZVwiIH0sXG4gICAgICAgICAgICBcIkN1cmFiaXR1ciBibGFuZGl0IHRlbXB1cyBwb3J0dGl0b3IuIE1hZWNlbmFzIGZhdWNpYnVzIG1vbGxpcyBpbnRlcmR1bS5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJnYWxsZXJ5X19jb250cm9sc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbGxlcnlCdXR0b24sIHsgaXNBY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnkgPT09ICdBbGwnID8gdHJ1ZSA6IGZhbHNlLCBzZXRDYXRlZ29yeTogdGhpcy5zZXRDYXRlZ29yeSwgY2F0ZWdvcnk6IFwiQWxsXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdhbGxlcnlCdXR0b24sIHsgaXNBY3RpdmU6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnkgPT09ICdHcmFwaGljJyA/IHRydWUgOiBmYWxzZSwgc2V0Q2F0ZWdvcnk6IHRoaXMuc2V0Q2F0ZWdvcnksIGNhdGVnb3J5OiBcIkdyYXBoaWNcIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FsbGVyeUJ1dHRvbiwgeyBpc0FjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeSA9PT0gJ0lsbHVzdHJhdGlvbicgPyB0cnVlIDogZmFsc2UsIHNldENhdGVnb3J5OiB0aGlzLnNldENhdGVnb3J5LCBjYXRlZ29yeTogXCJJbGx1c3RyYXRpb25cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR2FsbGVyeUJ1dHRvbiwgeyBpc0FjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeSA9PT0gJ01vdGlvbicgPyB0cnVlIDogZmFsc2UsIHNldENhdGVnb3J5OiB0aGlzLnNldENhdGVnb3J5LCBjYXRlZ29yeTogXCJNb3Rpb25cIiB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJ3b3Jrc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fMS5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJHcmFwaGljXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb18yLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIklsbHVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fMy5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJJbGx1c3RyYXRpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzQuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiTW90aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb181LmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIklsbHVzdHJhdGlvblwiLFxuICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeTogdGhpcy5zdGF0ZS5hY3RpdmVDYXRlZ29yeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdvcmtJdGVtLCB7XG4gICAgICAgICAgICAgIGltZ1NyYzogXCIuL2ltYWdlcy9wb3J0Zm9saW9fNi5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJNb3Rpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzcuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiSWxsdXN0cmF0aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb184LmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzkuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJTb21lIGdlbmVyaWMgYWx0IHRleHRcIixcbiAgICAgICAgICAgICAgaW1nQ2F0ZWdvcnk6IFwiTW90aW9uXCIsXG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5OiB0aGlzLnN0YXRlLmFjdGl2ZUNhdGVnb3J5XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV29ya0l0ZW0sIHtcbiAgICAgICAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL3BvcnRmb2xpb18xMC5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlNvbWUgZ2VuZXJpYyBhbHQgdGV4dFwiLFxuICAgICAgICAgICAgICBpbWdDYXRlZ29yeTogXCJNb3Rpb25cIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzExLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXb3JrSXRlbSwge1xuICAgICAgICAgICAgICBpbWdTcmM6IFwiLi9pbWFnZXMvcG9ydGZvbGlvXzEyLmpwZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiU29tZSBnZW5lcmljIGFsdCB0ZXh0XCIsXG4gICAgICAgICAgICAgIGltZ0NhdGVnb3J5OiBcIkdyYXBoaWNcIixcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnk6IHRoaXMuc3RhdGUuYWN0aXZlQ2F0ZWdvcnlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHYWxsZXJ5O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgR2FsbGVyeUJ1dHRvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoR2FsbGVyeUJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIEdhbGxlcnlCdXR0b24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2FsbGVyeUJ1dHRvbik7XG5cbiAgICB2YXIgX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEdhbGxlcnlCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHYWxsZXJ5QnV0dG9uKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMyLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjYXRlZ29yeSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgIF90aGlzMi5wcm9wcy5zZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR2FsbGVyeUJ1dHRvbiwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGNsYXNzTmFtZTogXCJnYWxsZXJ5X19idXR0b24gXCIgKyAodGhpcy5wcm9wcy5pc0FjdGl2ZSA/ICdnYWxsZXJ5X19idXR0b24tLWFjdGl2ZScgOiAnJykgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jYXRlZ29yeVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2FsbGVyeUJ1dHRvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gV29ya0l0ZW0ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJ3b3JrIFwiICsgKHByb3BzLmFjdGl2ZUNhdGVnb3J5ID09PSAnQWxsJyB8fCBwcm9wcy5pbWdDYXRlZ29yeSA9PT0gcHJvcHMuYWN0aXZlQ2F0ZWdvcnkgPyBcIlwiIDogXCIgKyB3b3JrLS1mYWRlLW91dFwiKSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgbnVsbCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwid29ya19faW1nXCIsIHNyYzogcHJvcHMuaW1nU3JjLCBhbHQ6IHByb3BzLmFsdCB9KVxuICAgIClcbiAgKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vICAgIEdldCBpbiB0b3VjaCAgXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbkNvbnRhY3QgPSBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaDJcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RfX3RpdGxlXCIgfSxcbiAgICAgIFwiR2V0IGluIFRvdWNoXCJcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImNvbnRhY3RfX3N1YnRpdGxlXCIgfSxcbiAgICAgIFwiQ3VyYWJpdHVyIGJsYW5kaXQgdGVtcHVzIHBvcnR0aXRvci4gTWFlY2VuYXMgZmF1Y2lidXMgbW9sbGlzIGludGVyZHVtLlwiXG4gICAgKVxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQzKSB7XG4gIF9pbmhlcml0cyhBcHAsIF9SZWFjdCRDb21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMzLnN0YXRlID0ge1xuICAgICAgY2F0ZWdvcnk6ICdBbGwnXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFwcCwgW3tcbiAgICBrZXk6IFwidG9nZ2xlTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgICAgdmFyIGJ0blNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbl9fYnV0dG9uIHNwYW4nKTtcbiAgICAgIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fYnV0dG9uJyk7XG4gICAgICB2YXIgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19tZW51Jyk7XG5cbiAgICAgIGJ0blNwYW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm8tYW5pbWF0aW9uJyk7XG4gICAgICB9KTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlJyk7XG4gICAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX21lbnUtLXNob3cnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2LCB7IGhhbmRsZVRvZ2dsZU1lbnU6IHRoaXMudG9nZ2xlTWVudSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXJDb21wb25lbnQsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZlYXR1cmVzLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHYWxsZXJ5LCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWN0LCBudWxsKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG5cblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuLy8gPT09ICAgICBFdmVudCBsaXN0ZW5lcnMgICAgID09PSAvL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xudmFyIG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb25fX2xpbmsnKTtcbnZhciBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX21lbnUnKTtcbnZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fYnV0dG9uJyk7XG5cbm5hdkxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFjdGl2ZUNsYXNzKTtcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVBY3RpdmVDbGFzcyhlKSB7XG4gIG5hdkxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2xpbmstLWFjdGl2ZScpO1xuICB9KTtcblxuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2xpbmstLWFjdGl2ZScpO1xuICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX21lbnUtLXNob3cnKTtcbiAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUnKTtcbn0iXX0=
