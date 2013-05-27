
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var tmpl = require('./template');
var o = require('dom');

/**
 * Expose `overlay()`.
 */

exports = module.exports = overlay;

/**
 * Expose `Overlay`.
 */

exports.Overlay = Overlay;

/**
 * Return a new `Overlay` with the given `options`.
 *
 * @param {Object|Element} options
 * @return {Overlay}
 * @api public
 */

function overlay(options){
  options = options || {};

  // element
  if (options.nodeName) {
    options = { target: options };
  }

  return new Overlay(options);
};

/**
 * Initialize a new `Overlay`.
 *
 * @param {Object} options
 * @api public
 */

function Overlay(options) {
  Emitter.call(this);
  options = options || {};
  this.target = options.target || 'body';
  this.closable = options.closable;
  this.el = o(tmpl);
  this.el.appendTo(this.target);
  if (this.closable) this.el.on('click', this.hide.bind(this));
}

/**
 * Mixin emitter.
 */

Emitter(Overlay.prototype);

/**
 * Show the overlay.
 *
 * Emits "show" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.show = function(){
  this.emit('show');
  this.el.removeClass('hide');
  return this;
};

/**
 * Hide the overlay.
 *
 * Emits "hide" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.hide = function(){
  this.emit('hide');
  return this.remove();
};

/**
 * Hide the overlay without emitting "hide".
 *
 * Emits "close" event.
 *
 * @return {Overlay}
 * @api public
 */

Overlay.prototype.remove = function(){
  var self = this;
  this.emit('close');
  this.el.addClass('hide');
  setTimeout(function(){
    self.el.remove();
  }, 2000);
  return this;
};

