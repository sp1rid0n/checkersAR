AFRAME.registerComponent('change-color-on-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('click', function () {
      el.setAttribute('color', 'red');
    });
    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', defaultColor);
    });
  }
});