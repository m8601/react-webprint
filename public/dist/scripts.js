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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8gTmF2IENvbXBvbmVudFxuZnVuY3Rpb24gTmF2KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJuYXZcIixcbiAgICAgIG51bGwsXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IFwibmF2aWdhdGlvblwiIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJsb2dvXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiLi9kaXN0L2ltYWdlcy9sb2dvLnBuZ1wiLCBhbHQ6IFwiTG9nbyAgXCIgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbWVudVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBocmVmOiBcIiNcIiwgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX2xpbmsgbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlXCIgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkhvbWVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19saW5rXCIgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkFib3V0XCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI1wiLCBjbGFzc05hbWU6IFwibmF2aWdhdGlvbl9fbGlua1wiIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgXCJQb3J0Zm9saW9cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19saW5rXCIgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkJsb2dcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjXCIsIGNsYXNzTmFtZTogXCJuYXZpZ2F0aW9uX19saW5rXCIgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkNvbnRhY3RcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgb25DbGljazogcHJvcHMuaGFuZGxlVG9nZ2xlTWVudSwgY2xhc3NOYW1lOiBcIm5hdmlnYXRpb25fX2J1dHRvblwiLCBpZDogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibGluZTEgbm8tYW5pbWF0aW9uXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJsaW5lMiBuby1hbmltYXRpb25cIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImxpbmUzIG5vLWFuaW1hdGlvblwiIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG4vLyBIZWFkZXIgQ29tcG9uZW50XG5mdW5jdGlvbiBIZWFkZXJDb21wb25lbnQocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzTmFtZTogXCJoZWFkZXJcIiB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaDFcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiaGVhZGVyX190aXRsZVwiIH0sXG4gICAgICAgIFwiV2UgYXJlIFwiLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgXCJXZWJwcmludFwiXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgyXCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcImhlYWRlcl9fc3VidGl0bGVcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgXCJkaWdpdGFsICYgYnJhbmRpbmdcIlxuICAgICAgICApLFxuICAgICAgICBcIiBhZ2VuY3kgYmFzZWQgaW4gSnVwaXRlciBhbmQgd2Ugd291bGQgbG92ZSB0byB0dXJuIGlkZWFzIGludG8gYmVhdXRpZnVsIHRoaW5ncy5cIlxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcImhlYWRlcl9fYnV0dG9uXCIgfSxcbiAgICAgICAgXCJTZWUgUG9ydGZvbGlvXCJcbiAgICAgIClcbiAgICApXG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuLy8gRmVhdHVyZXMgU2VjdGlvbiAgXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cblxuZnVuY3Rpb24gRmVhdHVyZShwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcImZlYXR1cmVcIiB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiZmVhdHVyZV9faW1hZ2VcIiwgc3JjOiBwcm9wcy5pbWdTcmMsIGFsdDogXCJTb21lIGN1c3RvbWl6YWJsZSBmZWF0dXJlXCIgfSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiaDNcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImZlYXR1cmVfX25hbWVcIiB9LFxuICAgICAgcHJvcHMuZmVhdHVyZU5hbWVcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInBcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImZlYXR1cmVfX2Rlc2NyaXB0aW9uXCIgfSxcbiAgICAgIHByb3BzLmZlYXR1cmVEZXNjXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBGZWF0dXJlcyhwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3NOYW1lOiBcIlwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwiZmVhdHVyZXMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9hbmRyb2lkLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy9jb21wdXRlci5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVhdHVyZSwgeyBpbWdTcmM6IFwiLi9pbWFnZXMvY2FtZXJhLnBuZ1wiLCBmZWF0dXJlTmFtZTogXCJOYW1lXCIsIGZlYXR1cmVEZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcywgZW5pbS5cIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGZWF0dXJlLCB7IGltZ1NyYzogXCIuL2ltYWdlcy93YXRjaC5wbmdcIiwgZmVhdHVyZU5hbWU6IFwiTmFtZVwiLCBmZWF0dXJlRGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMsIGVuaW0uXCIgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PSAvL1xuLy8gPT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT0gLy9cblxudmFyIEFwcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBcHAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogXCJ0b2dnbGVNZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgICB2YXIgYnRuU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uX19idXR0b24gc3BhbicpO1xuICAgICAgdmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19idXR0b24nKTtcbiAgICAgIHZhciBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX21lbnUnKTtcblxuICAgICAgYnRuU3Bhbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCduby1hbmltYXRpb24nKTtcbiAgICAgIH0pO1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGUnKTtcbiAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbWVudS0tc2hvdycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXYsIHsgaGFuZGxlVG9nZ2xlTWVudTogdGhpcy50b2dnbGVNZW51IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlckNvbXBvbmVudCwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVhdHVyZXMsIG51bGwpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBcHA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG4vLyA9PT0gICAgIEV2ZW50IGxpc3RlbmVycyAgICAgPT09IC8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXG52YXIgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbl9fbGluaycpO1xudmFyIG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbWVudScpO1xudmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19idXR0b24nKTtcblxubmF2TGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWN0aXZlQ2xhc3MpO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUFjdGl2ZUNsYXNzKGUpIHtcbiAgbmF2TGlua3MuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlJyk7XG4gIH0pO1xuXG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9fbGluay0tYWN0aXZlJyk7XG4gIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9fbWVudS0tc2hvdycpO1xuICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZScpO1xufSJdfQ==
