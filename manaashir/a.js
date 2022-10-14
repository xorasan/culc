
function updatetheme(o) {
return 'html, body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#itlaa3 .text {'
+'\n	box-shadow:0 0 20px 0 '+o.textd+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#itlaa3 .text, #taht3nsar .text {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] #itlaa3 .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:840px) {'
+'\n	#softkeysui .row2 button {'
+'\n		border-top:2px solid '+o.secondary+';'
+'\n	}'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-rakkaz].list .item[data-selected], [data-rakkaz].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' -110%, '+o.tertiary+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primary+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#softkeysui .row2 {'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n.sooraat {'
+'\n	border:1px solid '+o.secondary+';'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n.sooraat .row .matn {'
+'\n	text-shadow:0 0 35px '+o.primary+', 0 0 35px '+o.primary+', 0 0 1px '+o.primary+';'
+'\n}';
};

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (typeof fn === 'function') { // defer execution
			if (mod) { // if the mod is loaded or it's a core module
				fn(mod);
			} else {
				if (glatteis._paths[name]) { // if its path is defined
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; // the function will be called
		} else { // immediate execution
			return (mod || false);
		}
	}
	return false; // if name wasn't provided
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload : request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null : options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
'use strict';
var taraajim = {"en":{"tarkeeb":"Format","profile":"Profile","profiles":"Profiles","noprofiles":"No Profiles","aqrabaa":"Favorites","noaqrabaa":"No Favorites","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","offlinesince":"Offline since","skhelp":"Press # for actions","softkeystouchdpad":"Touchscreen D-Pad","theme":"Theme","black":"Black","white":"White","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","unsupported":"Your device can't run this app","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
var Hooks, hooks;
;(function (){
	'use strict';
	Hooks = {
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn);
				});
				return;
			}
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (Hooks._registry[hook] === undefined) {
					Hooks._registry[hook] = [];
				}
				++Hooks._uid;
				Hooks._registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		run: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i](extras);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) {
			var handlers = Hooks._registry[hook];
			if (handlers instanceof Array) {
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i](extras);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
var
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { // only compares primitives bw 2 objs
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num : num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { // [ 1, 2 ] -> " 1 2"
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { // [ num, num, ... ]
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { // return a copy of array of objs or just one obj
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (obj) {
	return obj.toLowerCase();
};
var
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
popdata = function (obj, k, v) {
	delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { // returns width + v
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	v.hidden = 0;
},
ixtaf = function (v) {
	v.hidden = 1;
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var xPos = 0;
	var yPos = 0;
	var dir = document.body.dir;
	if ( dir === 'rtl' )
		xPos = xPos + el.clientWidth;
	while (el) {
		if (el.tagName == 'BODY') {
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;
			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}
		el = el.offsetParent;
	}
	return [xPos, yPos];
},
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; // For safari, and IE > 10
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) // if there are no arguments
		parent.removeChild(this);
	while (i--) { // i-- decrements i and returns the value of i before the decrement
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) // if currentNode is the first argument (currentNode === arguments[0])
		parent.replaceChild(currentNode, this);
		else // if currentNode isn't the first
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var webapp, appname = 'culc' || '',
	maxzan = maxzan || 0,
	pager = pager || 0,
	checkbox = checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	focusprev, focusnext, navigables,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	/* FOCUS how this works
	* for elements inside other formating elements, set data-focus on each parent
	* this hints to this algo to go up a parent
	* */
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( navigables.includes( element.tagName.toLowerCase() ) ) {
				element.focus();
				webapp.scrollto(element);
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			/* BUG
			* come up with a solution for this
			* */
		}
		element.onprev && element.onprev(element);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected++;*/ // to avoid a +1 jump
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( navigables.includes( element.tagName.toLowerCase() ) ) {
				element.focus();
				webapp.scrollto(element);
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		element.onnext && element.onnext(element);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected--;*/ // to avoid a +1 jump
			return out;
		}
	};
	var viewsindex = {},
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
/*
					if (otherviews[i] instanceof HTMLSelectElement) {
						otherviews[i].value = 0;
					}
					else if ( ['text', 'textarea'].includes(otherviews[i].type) ) {
						otherviews[i].value = '';
					}
					else {
					}
*/
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		/*
		* this version lets you setup custom callbacks for forms
		* each call sends you three things
		* cb(formelement, pressedbutton, payload)
		* */
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = document.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( document.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = document.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	/*
	* webapp features like 3inch handles linked-modules functionality example:
	* when backstack reports darajah, 3inch updates softkeys
	* */
	webapp = {
		visible: 1,
		isdimmed: 0,
		/*
		* an array of features that can be check like
		* 'feature' in window OR
		* in Navigator OR
		* in navigator
		* even if a singe one fails, an error is shown
		* */
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align) {
			if (align == 1) headerui.dataset.align = '1';
			else if (align == 2) headerui.dataset.align = '2';
			else delete headerui.dataset.align;
			if (backstack.darajah <= 1) {
				if (text) {
					if (text instanceof Array) {
						headerui.dataset.i18n = text[0];
					} else {
						delete headerui.dataset.i18n,
						headerui.innerText = text;
					}
					headerui.hidden = 0;
				} else
					delete headerui.dataset.i18n,
					headerui.innerText = '',
					headerui.hidden = 1;
			} else if (backstack.darajah === 2) {
				sheet.header(text);
			}
			translate.update();
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0 : 1;
			webapp.isdimmed = zindex ? 1 : 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			document.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) {
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.transparency = 1;
			} else {
				delete document.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				document.body.dataset.largetext = 1;
			} else {
				delete document.body.dataset.largetext;
			}
		},
		exit: function () {
			close();
		},
		icons: function () {
			var elements = document.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = eqonaat.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			if (innerheight() <= 480) document.body.dataset.keyboardopen = 1;
			else delete document.body.dataset.keyboardopen;
		},
	};
	listener('dragover', function (e) {
		$.log('dragover');
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.log('dragleave');
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) Hooks.run('huboot', f);
		return false;
	});
	listener('resize', function () {
		webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', document.scrollingElement.scrollTop);
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		if (maxzan && maxzan.badaa) {
			maxzan.badaa(function () {
				Hooks.run('ready', 1);
				backstack.main();
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			backstack.main();
		}
		document.addEventListener('visibilitychange', function () {
			if (document.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	webapp.itlaa3 = function (text, time) {
		var element = itlaa3.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(itlaa3);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			itlaa3.hidden = 0;
			$.taxeer('itlaa3', function () {
				webapp.itlaa3();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			itlaa3.hidden = 1;
		}
	};
	webapp.taht3nsar = function (text, time, taht) { // below element
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = getposition(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	webapp.isatop = function () {
		var se = scrollingelement();
		return se.scrollTop === 0;
	};
	webapp.isatbottom = function () {
		var se = scrollingelement();
		return se.scrollTop === se.scrollHeight - se.clientHeight;
	};
	Hooks.set('closeall', function (darajah) {
		if (darajah === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			webapp.blur();
		}
		if (darajah === 2) sheet.hide(), webapp.blur();
		if (darajah === 1) view.axad('main'), webapp.blur();
		if (darajah === 0)
			webapp.itlaa3( translate('exiting') ),
			$.taxeer('exit', function () {
				webapp.exit();
			});
	});
	Hooks.set('restore', function (darajah) {
		if (darajah === 3) webapp.dimmer(600);
		if (darajah === 2) webapp.dimmer(400);
		if (darajah === 1) webapp.dimmer();
		if (darajah === 0) webapp.header(), webapp.dimmer();
	});
	Hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		webapp.dimmer(600);
		softkeys.clear();
		softkeys.set(K.sl, function () {
			if (date) datepicker.okay && datepicker.okay(args);
			else dialog.okay && dialog.okay();
		}, 0, 'icondone');
		softkeys.set(K.sr, function () {
			if (date) datepicker.cancel && datepicker.cancel();
			else dialog.cancel && dialog.cancel();
		}, 0, 'iconclose');
		if (date) datepicker.show(args);
		else dialog.show(args);
	});
	Hooks.set('backstacksheet', function (args) {
		webapp.dimmer(400);
		softkeys.clear();
		if (args.callback || args.c) {
			softkeys.set(K.sl, function () {
				sheet.okay && sheet.okay();
			}, 0, 'icondone');
		}
		softkeys.set(K.sr, function () {
			sheet.cancel && sheet.cancel();
		}, 0, 'iconarrowback');
		sheet.show(args);
		softkeys.showhints();
	});
	Hooks.set('backstackview', function (name) {
		webapp.dimmer();
		softkeys.clear();
		softkeys.P.empty();
		softkeys.set(K.sr, function () {
			Hooks.run('back');
		}, 0, 'iconarrowback');
		view.ishtaghal(name);
		softkeys.showhints();
		return 1; // stop propagation
	});
	Hooks.set('backstackmain', function (name) {
		softkeys.clear();
		softkeys.P.empty();
		view.ishtaghal('main');
	});
	Hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		});
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') backstack.back();
	};
	var resize = function () { $.taxeer('tvfs', function () {
		if (innerwidth() >= 1024) {
			document.body.dataset.tvfs = 1;
		} else {
			delete document.body.dataset.tvfs;
		}
	}, 100); };
	listener('resize', function () { resize(); });
	resize();
	/*
	* this messes up the nishaat pins list so it needs improvement
	* */
	/*listener('mousewheel', function (e) {
		e.preventDefault();
		if (e.wheelDeltaX >= 1 || e.wheelDeltaX <= -1
		|| e.wheelDeltaY >= 1 || e.wheelDeltaY <= -1) {
			helpers.delayedexec('mousewheel', function () {
				x = 0, y = 0;
			}, 400);
			x += e.wheelDeltaX; y += e.wheelDeltaY;
			var xx = x/60, yy = y/60;
			if (xx > 1 || xx < -1) x = 0;
			if (yy > 1 || yy < -1) y = 0;
			Hooks.rununtilconsumed('mousewheel', {
				type: 'mousewheel',
				x: xx,
				y: yy,
				preventDefault: function () {
					e.preventDefault();
				},
			});
		}
	}, {passive: false});*/
})();
/*
*
* lists have an adapter $.array, it contains the objects present in the dom list
*
* the adapter set/pop functions can be overriden to provide your own logic
*
* the dom list set/pop functions also mutate the adapter
* */
var list;
;(function(){
	'use strict';
	var direction = function () {
		return document.body.dir;
	};
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		/* EXPLAIN TODO
		* my hunch is that this is to change idb prop names to dom prop names
		* but im not sure
		* */
		beforeset: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, // when reached list end, do what? return 1 to avoid default
		uponstart: 0,
		uponnavi: 0, // ( type )
		moveup: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid) {
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { // active = visible & view is active
			if (v && active) softkeys.list.basic(this);
		},
		rakkaz: function (v, active) {
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.rakkaz) this.element.dataset.rakkaz = 1, yes = 1;
			else if (!v && this.element.dataset.rakkaz) delete this.element.dataset.rakkaz, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		/* TODO
		* improve this navigation to account for mufarraqaat
		* detect if the next item is a mufarraq, skip it.
		* */
		first: function (select) {
			this.selected = select === undefined ? -1 : select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function () {
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.uponpaststart)
					yes = this.uponpaststart(this.selectedold);
				if (yes) {
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.last();
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) // custom length algo
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e) {
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum: 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.uponpastend)
					yes = this.uponpastend(this.selectedold);
				if (yes) {
					this.intaxabscroll( this.intaxabsaamitan() );
				}
				else this.first(this.gridnum ? this.selected - this.length()-1 : -1);
			} else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		right: function (e, fake) {
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { // with multiple it also toggles
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		/*
		* id can be a number or string id
		* */
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected: id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		intaxabscroll: function (selected) {
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) scrollintoview(selected);
			} else {
				if (this.selected === 0) webapp.scrollto();
				else if (selected) webapp.scrollto(selected);
			}
		},
		intaxabsaamitan: function (id) { // select silently
			id = id === undefined ? this.selected: id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.uponintaxab) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.uponintaxab(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			return this;
		},
		/* TODO
		* add a sticky mufarraq compensation function
		* this func should add a px comp
		* use case to add another sticky heading on top of this list
		* */
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { // replace with o at num
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { // deprecate the second argument
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; // muntahaa limit hit
			if (id === undefined)
				if (o.uid === undefined) o.uid = id = LV.length();
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid);
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (!clone) {
				/*
				* this is to avoid modifying provided o object
				* it sets dataset on clone
				* */
				var o2 = Object.assign({
					id: o.id_dom, // sets the #id of an element
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				delete o.before;
				delete o.awwal;
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, parseint( LV.id2num(o.uid) ) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone) ); // TODO deprecate
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone) );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		listitem: function (elementname) {
			this._listitem = elementname || 'listitem';
			return this;
		},
		axavmfateeh: function (uid) {
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		axavmuntaxab: function () { // get baidaa item's adapter object
			return this.axadmuntaxab();
		},
		axadmuntaxab: function () {
			var uid = this.num2id( this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { // get baidaa item's adapter object
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) {
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length())
					LV.selected = LV.length()-1;
					else
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.rakkaz || force) &&
					this.onpress && this.onpress( item, key, this.selected );
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { // return id of item that has this uid
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { // maximum
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			this.keys.raees.hidden = len ? 0 : 1;
			if (!this._mowdoo3) this.keys.raees.hidden = 1;
		},
		mowdoo3: function (m, i18n) {
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			/* EXPLAIN
			* connects this list to bahacbox, bahacbox.onchange is listened on
			* with a $.taxeer
			* list.uponpaststart is also connected to bahacbox.focus
			* bahacbox.onpastend is prolly auto handled by softkeys
			* */
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	list = function (element) {
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.mowdoo3();
		/* IMPORTANT EXPLAIN
		* this is for use cases with a single list that is focussed by default
		* for multiple lists in a focus group, chain .rakkaz() to unset this
		* before setting uponrakkaz
		* */
		LV.uponclick = function (i, e, uid) {
			/* call these before triggering press events in case press handler
			* calls pop or set and that changes this.selected
			* */
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); // select without trig event
			var yes = LV.selected == uid && LV.element.dataset.rakkaz == 1;
			LV.selected = uid;
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
var backstack;
;(function(){
	var s,
	storage = {
		3 : {}, // searches, dialogs, menus
		2 : {}, // settings, ...
		1 : {}, // lists, editors, renderuis, ...
		0 : {}, // main, ...
	},
	l = function () {
		var darajah = 0;
		if (s.dialog) darajah = 3;
		else if (s.sheet) darajah = 2;
		else if (s.view) darajah = 1;
		else darajah = 0;
		backstack.darajah = darajah;
		return darajah;
	},
	savefocus = function () { // save focus on each darajah, restore automatically
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	/*
	* this is the glatteis standalone platform
	* there's no browser history stack or back+forward buttons to worry about
	* so we can take full control
	* no need to make it compatible with almudeer since that's for PWAs
	* here we have way more freedom so let's capitalize on it
	*
	* this basically replaces the browser backstack
	*
	* the backstack event is fired on all changes
	* */
	backstack = {
		darajah: 0,
		states: {
			dialog: 0, // searches, dialogs, menus
			sheet: 0, // settings, ...
			view: 0, // lists, editors, renderuis, ...
			main: 0, // main, ...
		},
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args) {
			savefocus();
			s.dialog = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args) {
			savefocus();
			s.sheet = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args) {
			savefocus();
			s.view = args;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) {
			savefocus();
			s.main = args || 1;
			l();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		back: function () {
			/*
			* if any dialog is open, close them first, then sheets, then mains
			* */
			if (s.dialog)
				s.dialog = 0, l(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, l(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, l(), Hooks.run('closeall', 1);
			else
				s.main = 0, l(), Hooks.run('closeall', 0);
			/*
			* then see what is left open and refire its event with stored args
			* */
			Hooks.run('restore', backstack.darajah);
			Hooks.run('backstack', backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		backstack.back();
	});
	Hooks.set('dialog', function (args) {
		backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		backstack.view(args);
	});
	Hooks.set('main', function (args) {
		backstack.main(args);
	});
	s = backstack.states;
})();
var preferences;
;(function(){
	'use strict';
	/* LEGEND preferences local storage
	* @ last sync time
	* @0 offline since
	* 1 key
	* 2 uid (account)
	* 3 ruid
	* 4 list views cache
	* 5 is menu hidden, 1 yes
	* 6 initial sync done?
	* 7 softkeys help
	* 8 sound off
	* 9 largetext
	* 10 default perms for different account types
	* 11 permissions of current account
	* 12 temp unit C F K
	* 13 meanings
	* 15 animations off
	* 16 softkeystouch dpad
	* 17 pagerasmaa
	* 18 webapptouchdir
	* 19 theme
	* 20 username
	* 21 display name
	* 22 account type
	* 23 transparency
	* 24 24 hour
	* 25 lang
	* 26 calendar type hijri gregorian
	* 27 digit comma separation
	* 30 app uid
	* 40 app title
	* 50 app address
	* 60 app phone
	* 70 billing on Central
	* 80 default currency
	* 81 latitude
	* 82 longitude
	* 90 sign in required
	* 91 location required
	* 100 remember viewed articles
	* 110 frequency of used dashboard items
	* 120 home view
	* 130 units (SI, imperial)
	* 140 font
	* 150 global newform toggle
	* 160 features
	* 170 conf
	* 1100 umoor what tag(s) to show?
	* */
	preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		/*
		* for json data, fetches stored data, parses as json, gives you a nice
		* object to work with in a callback, you make the changes and just
		* return the result, it saves the object back
		* */
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 140 ) {
		preferences.pop(3); // ruid
		preferences.pop('@'); // last sync time
		preferences.pop(4); // list view cache
		preferences.pop(6); // initial sync done
	}
	preferences.set('#', 140);
	Hooks.set('ready', function () {
		if ( buildnum != 140 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 140 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { // generic
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { // call/telephone (verb)
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { // send (verb) risaalah (noun) message
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { // (e)mail (verb) breed (noun)
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var view;
;(function(){
	var index = {};
	view = {
		zaahir: function (name) {
			return view.axav() === name;
		},
		mfateeh: function (name) { // keys
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		ishtaghal: function (name) {
			var level = backstack.level ,
				element = view.axad(name) ,
				keys = templates.keys(element) ;
			Hooks.run('viewready', {
				name: name,
				element: element,
				keys: keys,
				level: level,
			});
		},
		axav: function (name, onlyelement) { // get
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { // get, deprecated
			view.axav(name, onlyelement);
		},
		fahras: function () { // index
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
})();
var time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { //starts at zero
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { // to mins, hrs, days, etc
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); // unicode commas
			var months = ( ( time.now() - datetime ) / time.month );
			var days = ( ( time.now() - datetime ) / time.day );
			if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s : s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	/*
	* both int values
	* */
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		format = format || 'MM/DD/YYYY h:mma';
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , // the hour '0' should be '12'
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var settings, currentad;
;(function(){
	var settingsitems = [
		['reportbug', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' bug '+140);
		}],
		['requestfeat', 0, function () {
			activity.abrad(myemail+'?subject='+appname+' request '+140);
		}],
		['timeformat', function () {
			var is24 = preferences.get(24, 1);
			return [is24 ? 'hours24' : 'hours12'];
		}, function () {
			var is24 = preferences.get(24, 1);
			if (is24) preferences.set(24, 0);
			else preferences.set(24, 1);
		}],
		['calendar', function () {
			var isgregorian = preferences.get(26, 1);
			return [isgregorian ? 'gregorian' : 'hijri'];
		}, function () {
			var isgregorian = preferences.get(26, 1);
			if (isgregorian) preferences.set(26, 0);
			else preferences.set(26, 1);
		}],
		['transparency', function () {
			var isit = preferences.get(23, 1);
			webapp.transparency();
			return [isit ? 'on' : 'off'];
		}, function () {
			var isit = preferences.get(23, 1);
			if (isit) { preferences.set(23, 0); }
			else { preferences.set(23, 1); }
		}],
		['largetext', function () {
			var largetext = preferences.get(9, 1);
			webapp.textsize();
			return [largetext ? 'on' : 'off'];
		}, function () {
			preferences.set(9, preferences.get(9, 1) ? 0 : 1);
		}]
	], settingslist, myemail = 'hxorasani@gmail.com', keys;
	settings = {
		adaaf: function (name, getvalue, onpress) { // add
			settingsitems.push([name, getvalue, onpress]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { // get
			return settingsitems[uid];
		},
		jaddad: function (uid) { // update
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.titlei18n = item[0];
				if (body instanceof Array)
					obj.bodyi18n = body[0];
				else
					obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === 'settings')
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		keys = view.mfateeh('settings');
		settingslist = list( keys.list ).idprefix('settings');
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
		if (0 && 'getKaiAd' in window)
		getKaiAd({
			publisher: '7e2cfabf-ef5c-46eb-8e57-c20f3d6a1171',
			test: 0 ? 0 : 1,
			timeout: 60*1000,
			h: 48,
			w: 240,
			container: keys.ad,
			onerror: function (e) { $.log.e(e); },
			onready: function (ad) {
				currentad = ad;
				ad.call('display', {
				});
			}
		});
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				softkeys.set('9', function () {
					Hooks.run('view', 'settings');
				}, '9', 'iconsettings');
				break;
			case 'settings':
				webapp.header( ['settings'] );
				softkeys.list.basic(settingslist);
				softkeys.set(K.en, function () {
					settingslist.press(K.en);
				});
				softkeys.set(K.bs, function () {
					backstack.back();
				});
				if (0 && 'getKaiAd' in window)
				softkeys.set('0', function () {
					if (currentad) currentad.call && currentad.call('click');
				}, translate('openad'), false);
				/* TEST
				* this can be automated by giving a function to view.?set?
				*
				* view should autocall this function on restore
				* it can find functions by looping
				* */
				settingslist.select();
				break;
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { // force rtl
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { // force ltr
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { // apply to parent
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	/*
	* detect language direction, 0-ltr, 1-rtl, 2-mixed
	* */
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		});
	});
	xlate = translate;
})();
var templates;
;(function(){
	var index = {};
	templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		set: function (clone, o, template) {
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				if (!isundef(o[i]) || !isundef(o[i+'$h'])) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = 'file://'+o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { // dataset.time...
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else // improve how this is handled
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else // improve how this is handled
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { // raw HTML mode
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (i == 'icon') { // create SVG inside
						if (typeof o[i] === 'string' && o[i].length) {
							keys[i].hidden = 0;
							var e = eqonaat.querySelector('#'+o[i]);
							if (e)
								keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'];
						if (!isundef(html)) innerhtml(keys[i], html);
						else innertext(keys[i], o[i]);
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		/*
		* you can pass either an element or a name that's already indexed
		*
		* if only element is specified, then its clone is return
		*
		* if parent is also specified then it inserts the clone under parent
		* and returns a function that accepts {options} to setup the clone
		*
		* before can be a child under parent to insert before, else appends
		*
		* id can be used to reuse old elements
		* */
		get: function (element, parent, before, id) {
			if (typeof element == 'string') element = index[element];
			if (!(element instanceof HTMLElement)) return false;
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		/*
		* indexes any htm elements marked with [template=<name>]
		* */
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
})();
var softkeys, K, P;
;(function(){
	K = { // key code names
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var hfizM = {}, M = {}, // mapped keys
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	selectionorigin = 0,
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else // check parent's parent
				return removableparent(parent);
		}
	},
	updatekey = function (k) {
		var parent, o = {}, classes = '', args = M[k];
		if (!args) return;
		if (args.length === 1) o.hidden = 1;
		if (args[0]) o.onclick = function (e) {
			args[0](e.key, e);
		};
		o.label = args[1] || '';
		o.icon = args[2];
		o.status = args[3];
		if (o.icon === false) {
			o.name = k;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		index[k] = templates.get('skbutton', parent, 0, o.id)(o);
		skdots.hidden = totalvisible() ? 0 : 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	/*
	* putting these inside a function keeps them unique
	* */
	P.empty = function () {
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			softkeys.showhints();
			return 1;
		}/*, '#', 'iconhelp'*/];
		softkeys.update();
	},
	softkeys = {
		P: P,
		K: K,
		saveto: 7,
		/*
		* clear previous map explicitly, .map doesn't clear it by default
		* */
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1 : undefined;
			softkeys.update();
		} },
		talaf: function (name) {
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				softkeys.update();
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function () {
			delete softkeysui.dataset.hidden;
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				softkeysui.dataset.hidden = 1;
			}, 2500);
		},
		/*
		* remember one or more actions which you can recall later
		* you can also forget stored actions
		* */
		hfiz: function (name) { // remember
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { // recall
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { // forget
			hfizM = {};
			return softkeys;
		},
		/*
		* update a single key definition in M
		* status 0normal 1selected 2disabled
		* */
		set: function (name, callback, label, icon, status) {
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						adaaf(n, callback, label, icon, status);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				softkeys.update(name);
				backstack.set('softkeys', M);
			}
			return softkeys;
		},
		/*
		* preset P.<name>
		* callbacks {enter: callback}
		* */
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
		},
		press: function (k, e, longpress) {
			var pd = function () { preventdefault(e); }, caught;
			kraw = k;
			k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' || (e && e.ctrlKey && k == 'r')) history.go();
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			if ((a instanceof HTMLTextAreaElement && a.type != 'range') || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {} else caught = 1;
			}
			if ((a instanceof HTMLInputElement
			|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
				editmode = 1,
				dir = translate.direction(a.value);
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
			}
			/*
			* always allow using up/down keys to move between fields
			* */
			if (editmode) {
				var atend = (a.value.length === a.selectionStart),
					atstart = (0 === a.selectionStart);
				if (atstart && k == K.up) caught = focusprev(a), pd();
				if (atend && k == K.dn) caught = focusnext(a), pd();
				else if (k == K.en && e.shiftKey && a.uponshiftenter) a.uponshiftenter(), pd();
				else if (k == K.en && !e.shiftKey && a.uponenter) a.uponenter(), pd();
			}
			else if (a) {
				if ( navigables.includes( a.tagName.toLowerCase() )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up) caught = focusprev(a), pd();
					if (k == K.dn) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			/*
			* if text field isn't empty, disable arrow key handling
			* K.bs is managed by KaiOS
			* */
			if (editmode && !a.value.length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						/*Hooks.run('back'), webapp.blur(), */pd();
				}
			}
			if (editmode && a.value.length
			&& [K.up, K.dn, K.lf, K.rt, K.en].includes(k)) {
				/*if (k == K.en)
					if (selectionorigin === undefined)
						softkeys.set(K.en, function () {
							selectionorigin = undefined;
						}, 0, 'iconcopy', 1),
						selectionorigin = a.selectionStart;
					else
						softkeys.set(K.en, function () {
							selectionorigin = a.selectionStart;
						}, 0, 'iconcopy', 0),
						selectionorigin = undefined;*/
				if (selectionorigin !== undefined) {
					if (a.selectionStart < selectionorigin) // backwards
						selectiondirection = 0;
					else if (a.selectionStart > selectionorigin) // forwards
						selectiondirection = 1;
					if (k == K.lf && a.selectionEnd == selectionorigin)
						a.selectionEnd = selectionorigin, --a.selectionStart, pd();
					else if (k == K.rt && a.selectionStart-a.selectionEnd)
						a.selectionStart = selectionorigin, ++a.selectionEnd, pd();
					else if (k == K.rt && a.selectionEnd < a.value.length)
						++a.selectionEnd, pd();
					else if (k == K.lf && a.selectionStart > -1)
						--a.selectionStart, pd();
					else if (k == K.lf && a.selectionStart)
						--a.selectionStart, pd();
				}
				return;
			} else {
				selectionorigin = undefined;
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			if (mmm && typeof mmm[0] == 'function')
				mmm[0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
			else {
				/*if (k == K.dn) {
					webapp.scrollx(40);
					pd();
				}
				if (k == K.up) {
					webapp.scrollx(-40);
					pd();
				}
				if (k == K.rt) {
					webapp.scrolltobottom();
					pd();
				}
				if (k == K.lf) {
					webapp.scrolltotop();
					pd();
				}*/
			}
		},
	};
	softkeys.showhints();
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-640)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement
		if (a && (a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
		} else {
			softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skhints.onclick =
		skdots.onclick = function () {
			softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var len = a.value.trim().length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		Hooks.rununtilconsumed('softkey', [e.key.toLowerCase(), e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.icon)
				k.icon.remove();
			if (!o.label && !o.icon)
				args[0].hidden = 1;
			return 1;
		}
	});
	Hooks.set('restore', function (args) {
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	softkeys.list = {
		/*
		* if LV is undefined, it clears these keys
		* */
		basic: function (LV) {
			if (LV) {
				softkeys.set(K.en, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.press(K.en);
						e && e.preventDefault();
					}
				});
				softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.up();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.down();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.rt, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.right();
						e && e.preventDefault();
					}
				});
				softkeys.set(K.lf, function (k, e) {
					if (LV.element.dataset.rakkaz) {
						LV.left();
						e && e.preventDefault();
					}
				});
			} else {
				softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var sheet;
;(function(){
	var index = {}, header, container, zaahirname, ae, murakkaz;
	sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { // currently active sheet
			return zaahirname === name;
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (text instanceof Array) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else
				delete headerui.dataset.i18n,
				header.innerText = '',
				header.hidden = 1;
		},
		hide: function () {
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			zaahirname = 0;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			var name = args.name || args.n,
				title = args.title || args.t || '',
				minqabl = args.minqabl || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal|| args.a,
				init = args.init || args.i,
				keys;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				zaahirname = name;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					keys = templates.keys(container);
					init && init( keys );
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			if (callback)
			sheet.okay = function (args) {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
			else
			sheet.okay = 0;
			sheet.bardaa();
			if (isfun(minqabl)) {
				var oldokay = sheet.okay;
				sheet.okay = function (args) {
					sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						oldokay(args || keys);
					});
				};
			}
			sheet.cancel = function (args) {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
})();
var themes;
;(function(){
	var K, P, settingsuid, current = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textxd: '#777',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textxd: '#888',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(0, 67, 113, 0.7)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			green: '#0c0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	themes = {
		/*
		* in preferences (using localStorage), use this key to remember theme
		* */
		saveto: 19,
		/*
		* +changes the theme if only the theme name is provided
		* theme is a string, refers to an object inside store
		* this objects contains key:value pairs
		* that refer to slang css variables
		*
		* +if only theme & key are provided and not value
		* assumes that key is an object representing theme
		*
		* +if key and value are also provided
		* inside a store.theme, set a key to value
		* */
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme])
					current = theme,
					dynamicstyle.innerHTML = updatetheme(store[theme]),
					preferences.set(themes.saveto, current);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
			}
			if (arglen === 2) {
				store[theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		/*
		* if only one arg is provided, assume it's the key
		* */
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			current = current ? current = 0 : 1;
			themes.set(current);
			settings.jaddad(settingsuid);
		},
	};
	Hooks.set('ready', function () {
		if (preferences) current = preferences.get(themes.saveto, 1) || 0;
		themes.set(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			themes.set(iswhite);
			return [iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, // key names
		P = softkeys.P; // presets
		switch (args.name) {
			case 'main':
				softkeys.set(1, function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}, '1', 'icontheme');
				break;
		}
	});
})();
var dialog;
;(function(){
	dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ;
			dialog.onshow && dialog.onshow(name);
			dialog.okay = function () {
				var answer = k.input.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run('back');
			};
			k.input.value = answer || '';
			attribute(k.input, 'max', max || 0);
			if (question) {
				k.input.hidden = 0;
				k.input.focus();
			} else {
				k.input.hidden = 1;
			}
			innertext(k.message, '');
			k.message.dataset.i18n = message || '';
			translate.update(dialogui);
		},
	};
})();
/*
* when a touchscreen is detected, this adds an option to settings that allows
* switching between dpad and touch navigation
*
* with dpad navigation, touch also emulates a dpad
* */
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		if (preferences) webapptouchdir = preferences.get(saveto, 1) || 1;
		webapp.touchdir = webapptouchdir;
		settingsuid = settings.adaaf('webapptouchdir', function () {
			webapptouchdir = preferences.get(saveto, 1);
			webapp.touchdir = webapptouchdir;
			if (!webapptouchdir) delete document.body.dataset.align;
			return [webapptouchdir ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('keyup', function (e) {
		var k = e.key.toLowerCase();
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) // held for 250ms or more
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, // -1 left, 0 center, 1 right
		edgeend = 0, lastitem,
		softkeystouchdpad = 1; // 1 hor, 2 vert
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; // free direction lock
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { // right
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { // left
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { // down
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { // up
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { // started on an edge
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { // ended on a diff edge
				if (edgestart === 1) pager.yameen(); // right
				else if (edgestart === -1) pager.shimaal(); // left
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
			softkeys.showhints();
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) softkeys.showhints();
			softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		softkeys.showhints();
	});
})();
!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(A="undefined"!=typeof globalThis?globalThis:A||self).html2canvas=e()}(this,function(){"use strict";
var r=function(A,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,e){A.__proto__=e}||function(A,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(A[t]=e[t])})(A,e)};function A(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=A}r(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var h=function(){return(h=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var B in e=arguments[t])Object.prototype.hasOwnProperty.call(e,B)&&(A[B]=e[B]);return A}).apply(this,arguments)};function a(A,s,o,i){return new(o=o||Promise)(function(t,e){function r(A){try{n(i.next(A))}catch(A){e(A)}}function B(A){try{n(i.throw(A))}catch(A){e(A)}}function n(A){var e;A.done?t(A.value):((e=A.value)instanceof o?e:new o(function(A){A(e)})).then(r,B)}n((i=i.apply(A,s||[])).next())})}function H(t,r){var B,n,s,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},A={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(e){return function(A){return function(e){if(B)throw new TypeError("Generator is already executing.");for(;o;)try{if(B=1,n&&(s=2&e[0]?n.return:e[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,e[1])).done)return s;switch(n=0,(e=s?[2&e[0],s.value]:e)[0]){case 0:case 1:s=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,n=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){o.label=e[1];break}if(6===e[0]&&o.label<s[1]){o.label=s[1],s=e;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(e);break}s[2]&&o.ops.pop(),o.trys.pop();continue}e=r.call(t,o)}catch(A){e=[6,A],n=0}finally{B=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,A])}}}function t(A,e,t){if(t||2===arguments.length)for(var r,B=0,n=e.length;B<n;B++)!r&&B in e||((r=r||Array.prototype.slice.call(e,0,B))[B]=e[B]);return A.concat(r||e)}var d=(B.prototype.add=function(A,e,t,r){return new B(this.left+A,this.top+e,this.width+t,this.height+r)},B.fromClientRect=function(A,e){return new B(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height)},B.fromDOMRectList=function(A,e){e=Array.from(e).find(function(A){return 0!==A.width});return e?new B(e.left+A.windowBounds.left,e.top+A.windowBounds.top,e.width,e.height):B.EMPTY},B.EMPTY=new B(0,0,0,0),B);function B(A,e,t,r){this.left=A,this.top=e,this.width=t,this.height=r}for(var f=function(A,e){return d.fromClientRect(A,e.getBoundingClientRect())},Q=function(A){for(var e=[],t=0,r=A.length;t<r;){var B,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<r?56320==(64512&(B=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--):e.push(n)}return e},g=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],B=-1,n="";++B<t;){var s=A[B];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(B+1===t||16384<r.length)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="undefined"==typeof Uint8Array?[]:new Uint8Array(256),s=0;s<e.length;s++)n[e.charCodeAt(s)]=s;for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="undefined"==typeof Uint8Array?[]:new Uint8Array(256),i=0;i<o.length;i++)c[o.charCodeAt(i)]=i;function w(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var U=(l.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>5],this.data[e=(e<<2)+(31&A)];if(A<=65535)return e=this.index[2048+(A-55296>>5)],this.data[e=(e<<2)+(31&A)];if(A<this.highStart)return e=this.index[e=2080+(A>>11)],e=this.index[e+=A>>5&63],this.data[e=(e<<2)+(31&A)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},l);function l(A,e,t,r,B,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=B,this.data=n}for(var C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u="undefined"==typeof Uint8Array?[]:new Uint8Array(256),F=0;F<C.length;F++)u[C.charCodeAt(F)]=F;function p(A,e,t,r){var B=r[t];if(Array.isArray(A)?-1!==A.indexOf(B):A===B)for(var n=t;n<=r.length;){if((o=r[++n])===e)return 1;if(o!==D)break}if(B===D)for(n=t;0<n;){var s=r[--n];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var o,i=t;i<=r.length;){if((o=r[++i])===e)return 1;if(o!==D)break}if(s!==D)break}}function E(A,e){for(var t=A;0<=t;){var r=e[t];if(r!==D)return r;t--}return 0}function I(t,A){var e=(B=function(A,r){void 0===r&&(r="strict");var B=[],n=[],s=[];return A.forEach(function(A,e){var t=rA.get(A);if(50<t?(s.push(!0),t-=50):s.push(!1),-1!==["normal","auto","loose"].indexOf(r)&&-1!==[8208,8211,12316,12448].indexOf(A))return n.push(e),B.push(16);if(4!==t&&11!==t)return n.push(e),31===t?B.push("strict"===r?O:q):t===AA||29===t?B.push(J):43===t?131072<=A&&A<=196605||196608<=A&&A<=262141?B.push(q):B.push(J):void B.push(t);if(0===e)return n.push(e),B.push(J);t=B[e-1];return-1===iA.indexOf(t)?(n.push(n[e-1]),B.push(t)):(n.push(e),B.push(J))}),[n,B,s]}(t,(A=A||{lineBreak:"normal",wordBreak:"normal"}).lineBreak))[0],r=B[1],B=B[2];return[e,r="break-all"===A.wordBreak||"break-word"===A.wordBreak?r.map(function(A){return-1!==[R,J,AA].indexOf(A)?q:A}):r,"keep-all"===A.wordBreak?B.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0]}var y,K,m,L,b,D=10,v=13,x=15,M=17,S=18,T=19,G=20,O=21,V=22,k=24,R=25,N=26,P=27,X=28,J=30,Y=32,W=33,Z=34,_=35,q=37,j=38,z=39,$=40,AA=42,eA=[9001,65288],tA="×",rA=(m=function(A){var e,t,r,B,n=.75*A.length,s=A.length,o=0;"="===A[A.length-1]&&(n--,"="===A[A.length-2]&&n--);for(var n=new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n),i=Array.isArray(n)?n:new Uint8Array(n),Q=0;Q<s;Q+=4)e=c[A.charCodeAt(Q)],t=c[A.charCodeAt(Q+1)],r=c[A.charCodeAt(Q+2)],B=c[A.charCodeAt(Q+3)],i[o++]=e<<2|t>>4,i[o++]=(15&t)<<4|r>>2,i[o++]=(3&r)<<6|63&B;return n}(y="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="),L=Array.isArray(m)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(m):new Uint32Array(m),b=Array.isArray(m)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(m):new Uint16Array(m),y=w(b,12,L[4]/2),K=2===L[5]?w(b,(24+L[4])/2):(m=L,b=Math.ceil((24+L[4])/4),m.slice?m.slice(b,K):new Uint32Array(Array.prototype.slice.call(m,b,K))),new U(L[0],L[1],L[2],L[3],y,K)),BA=[J,36],nA=[1,2,3,5],sA=[D,8],oA=[P,N],iA=nA.concat(sA),QA=[j,z,$,Z,_],cA=[x,v],aA=(gA.prototype.slice=function(){return g.apply(void 0,this.codePoints.slice(this.start,this.end))},gA);function gA(A,e,t,r){this.codePoints=A,this.required="!"===e,this.start=t,this.end=r}function wA(A,e){var t=Q(A),r=(e=I(t,e))[0],B=e[1],n=e[2],s=t.length,o=0,i=0;return{next:function(){if(s<=i)return{done:!0,value:null};for(var A=tA;i<s&&(A=function(A,e,t,r,B){if(0===t[r])return tA;var n=r-1;if(Array.isArray(B)&&!0===B[n])return tA;var s=n-1,o=1+n,i=e[n],r=0<=s?e[s]:0,B=e[o];if(2===i&&3===B)return tA;if(-1!==nA.indexOf(i))return"!";if(-1!==nA.indexOf(B))return tA;if(-1!==sA.indexOf(B))return tA;if(8===E(n,e))return"÷";if(11===rA.get(A[n]))return tA;if((i===Y||i===W)&&11===rA.get(A[o]))return tA;if(7===i||7===B)return tA;if(9===i)return tA;if(-1===[D,v,x].indexOf(i)&&9===B)return tA;if(-1!==[M,S,T,k,X].indexOf(B))return tA;if(E(n,e)===V)return tA;if(p(23,V,n,e))return tA;if(p([M,S],O,n,e))return tA;if(p(12,12,n,e))return tA;if(i===D)return"÷";if(23===i||23===B)return tA;if(16===B||16===i)return"÷";if(-1!==[v,x,O].indexOf(B)||14===i)return tA;if(36===r&&-1!==cA.indexOf(i))return tA;if(i===X&&36===B)return tA;if(B===G)return tA;if(-1!==BA.indexOf(B)&&i===R||-1!==BA.indexOf(i)&&B===R)return tA;if(i===P&&-1!==[q,Y,W].indexOf(B)||-1!==[q,Y,W].indexOf(i)&&B===N)return tA;if(-1!==BA.indexOf(i)&&-1!==oA.indexOf(B)||-1!==oA.indexOf(i)&&-1!==BA.indexOf(B))return tA;if(-1!==[P,N].indexOf(i)&&(B===R||-1!==[V,x].indexOf(B)&&e[1+o]===R)||-1!==[V,x].indexOf(i)&&B===R||i===R&&-1!==[R,X,k].indexOf(B))return tA;if(-1!==[R,X,k,M,S].indexOf(B))for(var Q=n;0<=Q;){if((c=e[Q])===R)return tA;if(-1===[X,k].indexOf(c))break;Q--}if(-1!==[P,N].indexOf(B))for(var c,Q=-1!==[M,S].indexOf(i)?s:n;0<=Q;){if((c=e[Q])===R)return tA;if(-1===[X,k].indexOf(c))break;Q--}if(j===i&&-1!==[j,z,Z,_].indexOf(B)||-1!==[z,Z].indexOf(i)&&-1!==[z,$].indexOf(B)||-1!==[$,_].indexOf(i)&&B===$)return tA;if(-1!==QA.indexOf(i)&&-1!==[G,N].indexOf(B)||-1!==QA.indexOf(B)&&i===P)return tA;if(-1!==BA.indexOf(i)&&-1!==BA.indexOf(B))return tA;if(i===k&&-1!==BA.indexOf(B))return tA;if(-1!==BA.concat(R).indexOf(i)&&B===V&&-1===eA.indexOf(A[o])||-1!==BA.concat(R).indexOf(B)&&i===S)return tA;if(41===i&&41===B){for(var a=t[n],g=1;0<a&&41===e[--a];)g++;if(g%2!=0)return tA}return i===Y&&B===W?tA:"÷"}(t,B,r,++i,n))===tA;);if(A===tA&&i!==s)return{done:!0,value:null};var e=new aA(t,A,o,i);return o=i,{value:e,done:!1}}}}function UA(A){return 48<=A&&A<=57}function lA(A){return UA(A)||65<=A&&A<=70||97<=A&&A<=102}function CA(A){return 10===A||9===A||32===A}function uA(A){return 97<=(t=e=A)&&t<=122||65<=(e=e)&&e<=90||128<=A||95===A;var e,t}function FA(A){return uA(A)||UA(A)||45===A}function hA(A,e){return 92===A&&10!==e}function dA(A,e,t){return 45===A?uA(e)||hA(e,t):!!uA(A)||92===A&&10!==e}function fA(A,e,t){return 43===A||45===A?!!UA(e)||46===e&&UA(t):UA(46===A?e:A)}var HA={type:2},pA={type:3},EA={type:4},IA={type:13},yA={type:8},KA={type:21},mA={type:9},LA={type:10},bA={type:11},DA={type:12},vA={type:14},xA={type:23},MA={type:1},SA={type:25},TA={type:24},GA={type:26},OA={type:27},VA={type:28},kA={type:29},RA={type:31},NA={type:32},PA=(XA.prototype.write=function(A){this._value=this._value.concat(Q(A))},XA.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==NA;)A.push(e),e=this.consumeToken();return A},XA.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case 34:return this.consumeStringToken(34);case 35:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),r=this.peekCodePoint(2);if(FA(e)||hA(t,r)){var B=dA(e,t,r)?2:1;return{type:5,value:this.consumeName(),flags:B}}break;case 36:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),IA;break;case 39:return this.consumeStringToken(39);case 40:return HA;case 41:return pA;case 42:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),vA;break;case 43:if(fA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 44:return EA;case 45:var r=A,B=this.peekCodePoint(0),n=this.peekCodePoint(1);if(fA(r,B,n))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(dA(r,B,n))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(45===B&&62===n)return this.consumeCodePoint(),this.consumeCodePoint(),TA;break;case 46:if(fA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 47:if(42===this.peekCodePoint(0))for(this.consumeCodePoint();;){var s=this.consumeCodePoint();if(42===s&&47===(s=this.consumeCodePoint()))return this.consumeToken();if(-1===s)return this.consumeToken()}break;case 58:return GA;case 59:return OA;case 60:if(33===this.peekCodePoint(0)&&45===this.peekCodePoint(1)&&45===this.peekCodePoint(2))return this.consumeCodePoint(),this.consumeCodePoint(),SA;break;case 64:var n=this.peekCodePoint(0),o=this.peekCodePoint(1),i=this.peekCodePoint(2);if(dA(n,o,i))return{type:7,value:this.consumeName()};break;case 91:return VA;case 92:if(hA(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case 93:return kA;case 61:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),yA;break;case 123:return bA;case 125:return DA;case 117:case 85:o=this.peekCodePoint(0),i=this.peekCodePoint(1);return 43!==o||!lA(i)&&63!==i||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case 124:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),mA;if(124===this.peekCodePoint(0))return this.consumeCodePoint(),KA;break;case 126:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),LA;break;case-1:return NA}return CA(A)?(this.consumeWhiteSpace(),RA):UA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):uA(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:6,value:g(A)}},XA.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},XA.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},XA.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},XA.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();lA(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;63===e&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t)return{type:30,start:parseInt(g.apply(void 0,A.map(function(A){return 63===A?48:A})),16),end:parseInt(g.apply(void 0,A.map(function(A){return 63===A?70:A})),16)};var r=parseInt(g.apply(void 0,A),16);if(45===this.peekCodePoint(0)&&lA(this.peekCodePoint(1))){this.consumeCodePoint();for(var e=this.consumeCodePoint(),B=[];lA(e)&&B.length<6;)B.push(e),e=this.consumeCodePoint();return{type:30,start:r,end:parseInt(g.apply(void 0,B),16)}}return{type:30,start:r,end:r}},XA.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return"url"===A.toLowerCase()&&40===this.peekCodePoint(0)?(this.consumeCodePoint(),this.consumeUrlToken()):40===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:19,value:A}):{type:20,value:A}},XA.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),-1===this.peekCodePoint(0))return{type:22,value:""};var e,t=this.peekCodePoint(0);if(39===t||34===t){t=this.consumeStringToken(this.consumeCodePoint());return 0===t.type&&(this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0))?(this.consumeCodePoint(),{type:22,value:t.value}):(this.consumeBadUrlRemnants(),xA)}for(;;){var r=this.consumeCodePoint();if(-1===r||41===r)return{type:22,value:g.apply(void 0,A)};if(CA(r))return this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:22,value:g.apply(void 0,A)}):(this.consumeBadUrlRemnants(),xA);if(34===r||39===r||40===r||(0<=(e=r)&&e<=8||11===e||14<=e&&e<=31||127===e))return this.consumeBadUrlRemnants(),xA;if(92===r){if(!hA(r,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),xA;A.push(this.consumeEscapedCodePoint())}else A.push(r)}},XA.prototype.consumeWhiteSpace=function(){for(;CA(this.peekCodePoint(0));)this.consumeCodePoint()},XA.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(41===A||-1===A)return;hA(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},XA.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(5e4,A);e+=g.apply(void 0,this._value.splice(0,t)),A-=t}return this._value.shift(),e},XA.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var r,B=this._value[t];if(-1===B||void 0===B||B===A)return{type:0,value:e+=this.consumeStringSlice(t)};if(10===B)return this._value.splice(0,t),MA;92!==B||-1!==(r=this._value[t+1])&&void 0!==r&&(10===r?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):hA(B,r)&&(e+=this.consumeStringSlice(t),e+=g(this.consumeEscapedCodePoint()),t=-1)),t++}},XA.prototype.consumeNumber=function(){var A=[],e=4;for(43!==(t=this.peekCodePoint(0))&&45!==t||A.push(this.consumeCodePoint());UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());var t=this.peekCodePoint(0),r=this.peekCodePoint(1);if(46===t&&UA(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var r=this.peekCodePoint(1),B=this.peekCodePoint(2);if((69===t||101===t)&&((43===r||45===r)&&UA(B)||UA(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;UA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[function(A){var e=0,t=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(t=-1),e++);for(var r=[];UA(A[e]);)r.push(A[e++]);var B=r.length?parseInt(g.apply(void 0,r),10):0;46===A[e]&&e++;for(var n=[];UA(A[e]);)n.push(A[e++]);var s=n.length,o=s?parseInt(g.apply(void 0,n),10):0;69!==A[e]&&101!==A[e]||e++;var i=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(i=-1),e++);for(var Q=[];UA(A[e]);)Q.push(A[e++]);var c=Q.length?parseInt(g.apply(void 0,Q),10):0;return t*(B+o*Math.pow(10,-s))*Math.pow(10,i*c)}(A),e]},XA.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],r=this.peekCodePoint(0),B=this.peekCodePoint(1),A=this.peekCodePoint(2);return dA(r,B,A)?{type:15,number:e,flags:t,unit:this.consumeName()}:37===r?(this.consumeCodePoint(),{type:16,number:e,flags:t}):{type:17,number:e,flags:t}},XA.prototype.consumeEscapedCodePoint=function(){var A,e=this.consumeCodePoint();if(lA(e)){for(var t=g(e);lA(this.peekCodePoint(0))&&t.length<6;)t+=g(this.consumeCodePoint());CA(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return 0===r||55296<=(A=r)&&A<=57343||1114111<r?65533:r}return-1===e?65533:e},XA.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(FA(e))A+=g(e);else{if(!hA(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=g(this.consumeEscapedCodePoint())}}},XA);function XA(){this._value=[]}var JA=(YA.create=function(A){var e=new PA;return e.write(A),new YA(e.read())},YA.parseValue=function(A){return YA.create(A).parseComponentValue()},YA.parseValues=function(A){return YA.create(A).parseComponentValues()},YA.prototype.parseComponentValue=function(){for(var A=this.consumeToken();31===A.type;)A=this.consumeToken();if(32===A.type)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();31===(A=this.consumeToken()).type;);if(32===A.type)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},YA.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(32===e.type)return A;A.push(e),A.push()}},YA.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case 11:case 28:case 2:return this.consumeSimpleBlock(A.type);case 19:return this.consumeFunction(A)}return A},YA.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(32===t.type||ce(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},YA.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:18};;){var t=this.consumeToken();if(32===t.type||3===t.type)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},YA.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?NA:A},YA.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},YA);function YA(A){this._tokens=A}function WA(A){return 15===A.type}function ZA(A){return 17===A.type}function _A(A){return 20===A.type}function qA(A){return 0===A.type}function jA(A,e){return _A(A)&&A.value===e}function zA(A){return 31!==A.type}function $A(A){return 31!==A.type&&4!==A.type}function Ae(A){var e=[],t=[];return A.forEach(function(A){if(4===A.type){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");return e.push(t),void(t=[])}31!==A.type&&t.push(A)}),t.length&&e.push(t),e}function ee(A){return 17===A.type||15===A.type}function te(A){return 16===A.type||ee(A)}function re(A){return 1<A.length?[A[0],A[1]]:[A[0]]}function Be(A,e,t){var r=A[0],A=A[1];return[Ue(r,e),Ue(void 0!==A?A:r,t)]}function ne(A){return 15===A.type&&("deg"===A.unit||"grad"===A.unit||"rad"===A.unit||"turn"===A.unit)}function se(A){switch(A.filter(_A).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[ae,ae];case"to top":case"bottom":return Ce(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[ae,we];case"to right":case"left":return Ce(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[we,we];case"to bottom":case"top":return Ce(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[we,ae];case"to left":case"right":return Ce(270)}return 0}function oe(A){return 0==(255&A)}function ie(A){var e=255&A,t=255&A>>8,r=255&A>>16,A=255&A>>24;return e<255?"rgba("+A+","+r+","+t+","+e/255+")":"rgb("+A+","+r+","+t+")"}function Qe(A,e){if(17===A.type)return A.number;if(16!==A.type)return 0;var t=3===e?1:255;return 3===e?A.number/100*t:Math.round(A.number/100*t)}var ce=function(A,e){return 11===e&&12===A.type||(28===e&&29===A.type||2===e&&3===A.type)},ae={type:17,number:0,flags:4},ge={type:16,number:50,flags:4},we={type:16,number:100,flags:4},Ue=function(A,e){if(16===A.type)return A.number/100*e;if(WA(A))switch(A.unit){case"rem":case"em":return 16*A.number;default:return A.number}return A.number},le=function(A,e){if(15===e.type)switch(e.unit){case"deg":return Math.PI*e.number/180;case"grad":return Math.PI/200*e.number;case"rad":return e.number;case"turn":return 2*Math.PI*e.number}throw new Error("Unsupported angle type")},Ce=function(A){return Math.PI*A/180},ue=function(A,e){if(18===e.type){var t=me[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(5===e.type){if(3===e.value.length){var r=e.value.substring(0,1),B=e.value.substring(1,2),n=e.value.substring(2,3);return Fe(parseInt(r+r,16),parseInt(B+B,16),parseInt(n+n,16),1)}if(4===e.value.length){var r=e.value.substring(0,1),B=e.value.substring(1,2),n=e.value.substring(2,3),s=e.value.substring(3,4);return Fe(parseInt(r+r,16),parseInt(B+B,16),parseInt(n+n,16),parseInt(s+s,16)/255)}if(6===e.value.length){r=e.value.substring(0,2),B=e.value.substring(2,4),n=e.value.substring(4,6);return Fe(parseInt(r,16),parseInt(B,16),parseInt(n,16),1)}if(8===e.value.length){r=e.value.substring(0,2),B=e.value.substring(2,4),n=e.value.substring(4,6),s=e.value.substring(6,8);return Fe(parseInt(r,16),parseInt(B,16),parseInt(n,16),parseInt(s,16)/255)}}if(20===e.type){e=Le[e.value.toUpperCase()];if(void 0!==e)return e}return Le.TRANSPARENT},Fe=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(255*r)<<0)>>>0},he=function(A,e){e=e.filter($A);if(3===e.length){var t=e.map(Qe),r=t[0],B=t[1],t=t[2];return Fe(r,B,t,1)}if(4!==e.length)return 0;e=e.map(Qe),r=e[0],B=e[1],t=e[2],e=e[3];return Fe(r,B,t,e)};function de(A,e,t){return t<0&&(t+=1),1<=t&&--t,t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}function fe(A,e){return ue(A,JA.create(e).parseComponentValue())}function He(A,e){return A=ue(A,e[0]),(e=e[1])&&te(e)?{color:A,stop:e}:{color:A,stop:null}}function pe(A,t){var e=A[0],r=A[A.length-1];null===e.stop&&(e.stop=ae),null===r.stop&&(r.stop=we);for(var B=[],n=0,s=0;s<A.length;s++){var o=A[s].stop;null!==o?(n<(o=Ue(o,t))?B.push(o):B.push(n),n=o):B.push(null)}for(var i=null,s=0;s<B.length;s++){var Q=B[s];if(null===Q)null===i&&(i=s);else if(null!==i){for(var c=s-i,a=(Q-B[i-1])/(1+c),g=1;g<=c;g++)B[i+g-1]=a*g;i=null}}return A.map(function(A,e){return{color:A.color,stop:Math.max(Math.min(1,B[e]/t),0)}})}function Ee(A,e,t){var r="number"==typeof A?A:(s=e/2,r=(n=t)/2,s=Ue((B=A)[0],e)-s,n=r-Ue(B[1],n),(Math.atan2(n,s)+2*Math.PI)%(2*Math.PI)),B=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),n=e/2,s=t/2,e=B/2,t=Math.sin(r-Math.PI/2)*e,e=Math.cos(r-Math.PI/2)*e;return[B,n-e,n+e,s-t,s+t]}function Ie(A,e){return Math.sqrt(A*A+e*e)}function ye(A,e,B,n,s){return[[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],r=e[1],r=Ie(B-t,n-r);return(s?r<A.optimumDistance:r>A.optimumDistance)?{optimumCorner:e,optimumDistance:r}:A},{optimumDistance:s?1/0:-1/0,optimumCorner:null}).optimumCorner}var Ke=function(A,e){var t=e.filter($A),r=t[0],B=t[1],n=t[2],e=t[3],t=(17===r.type?Ce(r.number):le(A,r))/(2*Math.PI),A=te(B)?B.number/100:0,r=te(n)?n.number/100:0,B=void 0!==e&&te(e)?Ue(e,1):1;if(0==A)return Fe(255*r,255*r,255*r,1);n=r<=.5?r*(1+A):r+A-r*A,e=2*r-n,A=de(e,n,t+1/3),r=de(e,n,t),t=de(e,n,t-1/3);return Fe(255*A,255*r,255*t,B)},me={hsl:Ke,hsla:Ke,rgb:he,rgba:he},Le={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},be={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(_A(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},De={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ke=function(t,A){var r=Ce(180),B=[];return Ae(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&-1!==["top","left","right","bottom"].indexOf(e.value))return void(r=se(A));if(ne(e))return void(r=(le(t,e)+Ce(270))%Ce(360))}A=He(t,A);B.push(A)}),{angle:r,stops:B,type:1}},ve="closest-side",xe="farthest-side",Me="closest-corner",Se="farthest-corner",Te="ellipse",Ge="contain",he=function(r,A){var B=0,n=3,s=[],o=[];return Ae(A).forEach(function(A,e){var t=!0;0===e?t=A.reduce(function(A,e){if(_A(e))switch(e.value){case"center":return o.push(ge),!1;case"top":case"left":return o.push(ae),!1;case"right":case"bottom":return o.push(we),!1}else if(te(e)||ee(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(_A(e))switch(e.value){case"circle":return B=0,!1;case Te:return!(B=1);case Ge:case ve:return n=0,!1;case xe:return!(n=1);case Me:return!(n=2);case"cover":case Se:return!(n=3)}else if(ee(e)||te(e))return(n=!Array.isArray(n)?[]:n).push(e),!1;return A},t)),t&&(A=He(r,A),s.push(A))}),{size:n,shape:B,stops:s,position:o,type:2}},Oe=function(A,e){if(22===e.type){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(18!==e.type)throw new Error("Unsupported image type "+e.type);t=ke[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return t(A,e.values)};var Ve,ke={"linear-gradient":function(t,A){var r=Ce(180),B=[];return Ae(A).forEach(function(A,e){if(0===e){e=A[0];if(20===e.type&&"to"===e.value)return void(r=se(A));if(ne(e))return void(r=le(t,e))}A=He(t,A);B.push(A)}),{angle:r,stops:B,type:1}},"-moz-linear-gradient":Ke,"-ms-linear-gradient":Ke,"-o-linear-gradient":Ke,"-webkit-linear-gradient":Ke,"radial-gradient":function(B,A){var n=0,s=3,o=[],i=[];return Ae(A).forEach(function(A,e){var t,r=!0;0===e&&(t=!1,r=A.reduce(function(A,e){if(t)if(_A(e))switch(e.value){case"center":return i.push(ge),A;case"top":case"left":return i.push(ae),A;case"right":case"bottom":return i.push(we),A}else(te(e)||ee(e))&&i.push(e);else if(_A(e))switch(e.value){case"circle":return n=0,!1;case Te:return!(n=1);case"at":return!(t=!0);case ve:return s=0,!1;case"cover":case xe:return!(s=1);case Ge:case Me:return!(s=2);case Se:return!(s=3)}else if(ee(e)||te(e))return(s=!Array.isArray(s)?[]:s).push(e),!1;return A},r)),r&&(A=He(B,A),o.push(A))}),{size:s,shape:n,stops:o,position:i,type:2}},"-moz-radial-gradient":he,"-ms-radial-gradient":he,"-o-radial-gradient":he,"-webkit-radial-gradient":he,"-webkit-gradient":function(r,A){var e=Ce(180),B=[],n=1;return Ae(A).forEach(function(A,e){var t,A=A[0];if(0===e){if(_A(A)&&"linear"===A.value)return void(n=1);if(_A(A)&&"radial"===A.value)return void(n=2)}18===A.type&&("from"===A.name?(t=ue(r,A.values[0]),B.push({stop:ae,color:t})):"to"===A.name?(t=ue(r,A.values[0]),B.push({stop:we,color:t})):"color-stop"!==A.name||2===(A=A.values.filter($A)).length&&(t=ue(r,A[1]),A=A[0],ZA(A)&&B.push({stop:{type:16,number:100*A.number,flags:A.flags},color:t})))}),1===n?{angle:(e+Ce(180))%Ce(360),stops:B,type:n}:{size:3,shape:0,stops:B,position:[],type:n}}},Re={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(e,A){if(0===A.length)return[];var t=A[0];return 20===t.type&&"none"===t.value?[]:A.filter(function(A){return $A(A)&&!(20===(A=A).type&&"none"===A.value||18===A.type&&!ke[A.name])}).map(function(A){return Oe(e,A)})}},Ne={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(A){if(_A(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Pe={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(te)}).map(re)}},Xe={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(_A).map(function(A){return A.value}).join(" ")}).map(Je)}},Je=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;default:return 0}};(he=Ve=Ve||{}).AUTO="auto",he.CONTAIN="contain";function Ye(A,e){return _A(A)&&"normal"===A.value?1.2*e:17===A.type?e*A.number:te(A)?Ue(A,e):e}var We,Ze,_e={name:"background-size",initialValue:"0",prefix:!(he.COVER="cover"),type:1,parse:function(A,e){return Ae(e).map(function(A){return A.filter(qe)})}},qe=function(A){return _A(A)||te(A)},he=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},je=he("top"),ze=he("right"),$e=he("bottom"),At=he("left"),he=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(A,e){return re(e.filter(te))}}},et=he("top-left"),tt=he("top-right"),rt=he("bottom-right"),Bt=he("bottom-left"),he=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(A,e){switch(e){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},nt=he("top"),st=he("right"),ot=he("bottom"),it=he("left"),he=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return WA(e)?e.number:0}}},Qt=he("top"),ct=he("right"),at=he("bottom"),gt=he("left"),wt={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ut={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){return"rtl"!==e?0:1}},lt={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).reduce(function(A,e){return A|Ct(e.value)},0)}},Ct=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},ut={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Ft={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return!(20===e.type&&"normal"===e.value||17!==e.type&&15!==e.type)?e.number:0}},ht={name:"line-break",initialValue:(he=We=We||{}).NORMAL="normal",prefix:!(he.STRICT="strict"),type:2,parse:function(A,e){return"strict"!==e?We.NORMAL:We.STRICT}},dt={name:"line-height",initialValue:"normal",prefix:!1,type:4},ft={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return 20===e.type&&"none"===e.value?null:Oe(A,e)}},Ht={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){return"inside"!==e?1:0}},pt={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;default:return-1}}},he=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},Et=he("top"),It=he("right"),yt=he("bottom"),Kt=he("left"),mt={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;default:return 0}})}},Lt={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){return"break-word"!==e?"normal":"break-word"}},he=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},bt=he("top"),Dt=he("right"),vt=he("bottom"),xt=he("left"),Mt={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;default:return 0}}},St={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Tt={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&jA(A[0],"none")?[]:Ae(A).map(function(A){for(var e={color:Le.TRANSPARENT,offsetX:ae,offsetY:ae,blur:ae},t=0,r=0;r<A.length;r++){var B=A[r];ee(B)?(0===t?e.offsetX=B:1===t?e.offsetY=B:e.blur=B,t++):e.color=ue(n,B)}return e})}},Gt={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Ot={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(20===e.type&&"none"===e.value)return null;if(18!==e.type)return null;var t=Vt[e.name];if(void 0===t)throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}},Vt={matrix:function(A){A=A.filter(function(A){return 17===A.type}).map(function(A){return A.number});return 6===A.length?A:null},matrix3d:function(A){var e=A.filter(function(A){return 17===A.type}).map(function(A){return A.number}),t=e[0],r=e[1];e[2],e[3];var B=e[4],n=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],A=e[13];return e[14],e[15],16===e.length?[t,r,B,n,s,A]:null}},he={type:16,number:50,flags:4},kt=[he,he],Rt={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){e=e.filter(te);return 2!==e.length?kt:[e[0],e[1]]}},Nt={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;default:return 0}}};(he=Ze=Ze||{}).NORMAL="normal",he.BREAK_ALL="break-all";function Pt(A,e){return 0!=(A&e)}function Xt(A,e,t){return(A=A&&A[Math.min(e,A.length-1)])?t?A.open:A.close:""}var Jt={name:"word-break",initialValue:"normal",prefix:!(he.KEEP_ALL="keep-all"),type:2,parse:function(A,e){switch(e){case"break-all":return Ze.BREAK_ALL;case"keep-all":return Ze.KEEP_ALL;default:return Ze.NORMAL}}},Yt={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(20===e.type)return{auto:!0,order:0};if(ZA(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Wt=function(A,e){if(15===e.type)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")},Zt={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return ZA(e)?e.number:1}},_t={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},qt={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(_A).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},jt={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(A){switch(A.type){case 20:case 0:t.push(A.value);break;case 17:t.push(A.number.toString());break;case 4:r.push(t.join(" ")),t.length=0}}),t.length&&r.push(t.join(" ")),r.map(function(A){return-1===A.indexOf(" ")?A:"'"+A+"'"})}},zt={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},$t={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){return ZA(e)?e.number:!_A(e)||"bold"!==e.value?400:700}},Ar={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(_A).map(function(A){return A.value})}},er={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";default:return"normal"}}},tr={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(0===e.length)return[];var t=e[0];return 20===t.type&&"none"===t.value?[]:e}},rr={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;for(var r=[],B=e.filter(zA),n=0;n<B.length;n++){var s=B[n],o=B[n+1];20===s.type&&(o=o&&ZA(o)?o.number:1,r.push({counter:s.value,increment:o}))}return r}},Br={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return[];for(var t=[],r=e.filter(zA),B=0;B<r.length;B++){var n=r[B],s=r[B+1];_A(n)&&"none"!==n.value&&(s=s&&ZA(s)?s.number:0,t.push({counter:n.value,reset:s}))}return t}},nr={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(e,A){return A.filter(WA).map(function(A){return Wt(e,A)})}},sr={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(0===e.length)return null;var t=e[0];if(20===t.type&&"none"===t.value)return null;var r=[],B=e.filter(qA);if(B.length%2!=0)return null;for(var n=0;n<B.length;n+=2){var s=B[n].value,o=B[n+1].value;r.push({open:s,close:o})}return r}},or={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(n,A){return 1===A.length&&jA(A[0],"none")?[]:Ae(A).map(function(A){for(var e={color:255,offsetX:ae,offsetY:ae,blur:ae,spread:ae,inset:!1},t=0,r=0;r<A.length;r++){var B=A[r];jA(B,"inset")?e.inset=!0:ee(B)?(0===t?e.offsetX=B:1===t?e.offsetY=B:2===t?e.blur=B:e.spread=B,t++):e.color=ue(n,B)}return e})}},ir={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[];return e.filter(_A).forEach(function(A){switch(A.value){case"stroke":t.push(1);break;case"fill":t.push(0);break;case"markers":t.push(2)}}),[0,1,2].forEach(function(A){-1===t.indexOf(A)&&t.push(A)}),t}},Qr={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},cr={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return WA(e)?e.number:0}},ar=(gr.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&0===this.visibility},gr.prototype.isTransparent=function(){return oe(this.backgroundColor)},gr.prototype.isTransformed=function(){return null!==this.transform},gr.prototype.isPositioned=function(){return 0!==this.position},gr.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},gr.prototype.isFloating=function(){return 0!==this.float},gr.prototype.isInlineLevel=function(){return Pt(this.display,4)||Pt(this.display,33554432)||Pt(this.display,268435456)||Pt(this.display,536870912)||Pt(this.display,67108864)||Pt(this.display,134217728)},gr);function gr(A,e){this.animationDuration=lr(A,nr,e.animationDuration),this.backgroundClip=lr(A,be,e.backgroundClip),this.backgroundColor=lr(A,De,e.backgroundColor),this.backgroundImage=lr(A,Re,e.backgroundImage),this.backgroundOrigin=lr(A,Ne,e.backgroundOrigin),this.backgroundPosition=lr(A,Pe,e.backgroundPosition),this.backgroundRepeat=lr(A,Xe,e.backgroundRepeat),this.backgroundSize=lr(A,_e,e.backgroundSize),this.borderTopColor=lr(A,je,e.borderTopColor),this.borderRightColor=lr(A,ze,e.borderRightColor),this.borderBottomColor=lr(A,$e,e.borderBottomColor),this.borderLeftColor=lr(A,At,e.borderLeftColor),this.borderTopLeftRadius=lr(A,et,e.borderTopLeftRadius),this.borderTopRightRadius=lr(A,tt,e.borderTopRightRadius),this.borderBottomRightRadius=lr(A,rt,e.borderBottomRightRadius),this.borderBottomLeftRadius=lr(A,Bt,e.borderBottomLeftRadius),this.borderTopStyle=lr(A,nt,e.borderTopStyle),this.borderRightStyle=lr(A,st,e.borderRightStyle),this.borderBottomStyle=lr(A,ot,e.borderBottomStyle),this.borderLeftStyle=lr(A,it,e.borderLeftStyle),this.borderTopWidth=lr(A,Qt,e.borderTopWidth),this.borderRightWidth=lr(A,ct,e.borderRightWidth),this.borderBottomWidth=lr(A,at,e.borderBottomWidth),this.borderLeftWidth=lr(A,gt,e.borderLeftWidth),this.boxShadow=lr(A,or,e.boxShadow),this.color=lr(A,wt,e.color),this.direction=lr(A,Ut,e.direction),this.display=lr(A,lt,e.display),this.float=lr(A,ut,e.cssFloat),this.fontFamily=lr(A,jt,e.fontFamily),this.fontSize=lr(A,zt,e.fontSize),this.fontStyle=lr(A,er,e.fontStyle),this.fontVariant=lr(A,Ar,e.fontVariant),this.fontWeight=lr(A,$t,e.fontWeight),this.letterSpacing=lr(A,Ft,e.letterSpacing),this.lineBreak=lr(A,ht,e.lineBreak),this.lineHeight=lr(A,dt,e.lineHeight),this.listStyleImage=lr(A,ft,e.listStyleImage),this.listStylePosition=lr(A,Ht,e.listStylePosition),this.listStyleType=lr(A,pt,e.listStyleType),this.marginTop=lr(A,Et,e.marginTop),this.marginRight=lr(A,It,e.marginRight),this.marginBottom=lr(A,yt,e.marginBottom),this.marginLeft=lr(A,Kt,e.marginLeft),this.opacity=lr(A,Zt,e.opacity);var t=lr(A,mt,e.overflow);this.overflowX=t[0],this.overflowY=t[1<t.length?1:0],this.overflowWrap=lr(A,Lt,e.overflowWrap),this.paddingTop=lr(A,bt,e.paddingTop),this.paddingRight=lr(A,Dt,e.paddingRight),this.paddingBottom=lr(A,vt,e.paddingBottom),this.paddingLeft=lr(A,xt,e.paddingLeft),this.paintOrder=lr(A,ir,e.paintOrder),this.position=lr(A,St,e.position),this.textAlign=lr(A,Mt,e.textAlign),this.textDecorationColor=lr(A,_t,null!==(t=e.textDecorationColor)&&void 0!==t?t:e.color),this.textDecorationLine=lr(A,qt,null!==(t=e.textDecorationLine)&&void 0!==t?t:e.textDecoration),this.textShadow=lr(A,Tt,e.textShadow),this.textTransform=lr(A,Gt,e.textTransform),this.transform=lr(A,Ot,e.transform),this.transformOrigin=lr(A,Rt,e.transformOrigin),this.visibility=lr(A,Nt,e.visibility),this.webkitTextStrokeColor=lr(A,Qr,e.webkitTextStrokeColor),this.webkitTextStrokeWidth=lr(A,cr,e.webkitTextStrokeWidth),this.wordBreak=lr(A,Jt,e.wordBreak),this.zIndex=lr(A,Yt,e.zIndex)}for(var wr=function(A,e){this.content=lr(A,tr,e.content),this.quotes=lr(A,sr,e.quotes)},Ur=function(A,e){this.counterIncrement=lr(A,rr,e.counterIncrement),this.counterReset=lr(A,Br,e.counterReset)},lr=function(A,e,t){var r=new PA,t=null!=t?t.toString():e.initialValue;r.write(t);var B=new JA(r.read());switch(e.type){case 2:var n=B.parseComponentValue();return e.parse(A,_A(n)?n.value:e.initialValue);case 0:return e.parse(A,B.parseComponentValue());case 1:return e.parse(A,B.parseComponentValues());case 4:return B.parseComponentValue();case 3:switch(e.format){case"angle":return le(A,B.parseComponentValue());case"color":return ue(A,B.parseComponentValue());case"image":return Oe(A,B.parseComponentValue());case"length":var s=B.parseComponentValue();return ee(s)?s:ae;case"length-percentage":s=B.parseComponentValue();return te(s)?s:ae;case"time":return Wt(A,B.parseComponentValue())}}},Cr=function(A,e){A=function(A){switch(A.getAttribute("data-html2canvas-debug")){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}}(A);return 1===A||e===A},ur=function(A,e){this.context=A,this.textNodes=[],this.elements=[],this.flags=0,Cr(e,3),this.styles=new ar(A,window.getComputedStyle(e,null)),JB(e)&&(this.styles.animationDuration.some(function(A){return 0<A})&&(e.style.animationDuration="0s"),null!==this.styles.transform&&(e.style.transform="none")),this.bounds=f(this.context,e),Cr(e,4)&&(this.flags|=16)},Fr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hr="undefined"==typeof Uint8Array?[]:new Uint8Array(256),dr=0;dr<Fr.length;dr++)hr[Fr.charCodeAt(dr)]=dr;function fr(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var Hr=(pr.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=this.index[A>>5],this.data[e=(e<<2)+(31&A)];if(A<=65535)return e=this.index[2048+(A-55296>>5)],this.data[e=(e<<2)+(31&A)];if(A<this.highStart)return e=this.index[e=2080+(A>>11)],e=this.index[e+=A>>5&63],this.data[e=(e<<2)+(31&A)];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},pr);function pr(A,e,t,r,B,n){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=B,this.data=n}for(var Er="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ir="undefined"==typeof Uint8Array?[]:new Uint8Array(256),yr=0;yr<Er.length;yr++)Ir[Er.charCodeAt(yr)]=yr;function Kr(A){return kr.get(A)}function mr(A){var t=function(A){for(var e=[],t=0,r=A.length;t<r;){var B,n=A.charCodeAt(t++);55296<=n&&n<=56319&&t<r?56320==(64512&(B=A.charCodeAt(t++)))?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--):e.push(n)}return e}(A),r=t.length,B=0,n=0,s=t.map(Kr);return{next:function(){if(r<=B)return{done:!0,value:null};for(var A=Rr;B<r&&(A=function(A,e){var t=e-2,r=A[t],B=A[e-1],e=A[e];if(2===B&&3===e)return Rr;if(2===B||3===B||4===B)return"÷";if(2===e||3===e||4===e)return"÷";if(B===Tr&&-1!==[Tr,Gr,Or,Vr].indexOf(e))return Rr;if(!(B!==Or&&B!==Gr||e!==Gr&&10!==e))return Rr;if((B===Vr||10===B)&&10===e)return Rr;if(13===e||5===e)return Rr;if(7===e)return Rr;if(1===B)return Rr;if(13===B&&14===e){for(;5===r;)r=A[--t];if(14===r)return Rr}if(15===B&&15===e){for(var n=0;15===r;)n++,r=A[--t];if(n%2==0)return Rr}return"÷"}(s,++B))===Rr;);if(A===Rr&&B!==r)return{done:!0,value:null};var e=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],B=-1,n="";++B<t;){var s=A[B];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(B+1===t||16384<r.length)&&(n+=String.fromCharCode.apply(String,r),r.length=0)}return n}.apply(null,t.slice(n,B));return n=B,{value:e,done:!1}}}}function Lr(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]}var br,Dr,vr,xr,Mr,Sr,Tr=8,Gr=9,Or=11,Vr=12,kr=(vr=function(A){var e,t,r,B,n=.75*A.length,s=A.length,o=0;"="===A[A.length-1]&&(n--,"="===A[A.length-2]&&n--);for(var n=new("undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?ArrayBuffer:Array)(n),i=Array.isArray(n)?n:new Uint8Array(n),Q=0;Q<s;Q+=4)e=hr[A.charCodeAt(Q)],t=hr[A.charCodeAt(Q+1)],r=hr[A.charCodeAt(Q+2)],B=hr[A.charCodeAt(Q+3)],i[o++]=e<<2|t>>4,i[o++]=(15&t)<<4|r>>2,i[o++]=(3&r)<<6|63&B;return n}(br="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),xr=Array.isArray(vr)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(vr):new Uint32Array(vr),Mr=Array.isArray(vr)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(vr):new Uint16Array(vr),br=fr(Mr,12,xr[4]/2),Dr=2===xr[5]?fr(Mr,(24+xr[4])/2):(vr=xr,Mr=Math.ceil((24+xr[4])/4),vr.slice?vr.slice(Mr,Dr):new Uint32Array(Array.prototype.slice.call(vr,Mr,Dr))),new Hr(xr[0],xr[1],xr[2],xr[3],br,Dr)),Rr="×",Nr=function(A,e,t,r,B){var n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),n=document.createElementNS(n,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),n.setAttributeNS(null,"width","100%"),n.setAttributeNS(null,"height","100%"),n.setAttributeNS(null,"x",t.toString()),n.setAttributeNS(null,"y",r.toString()),n.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(n),n.appendChild(B),s},Pr=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Xr={get SUPPORT_RANGE_BOUNDS(){var A=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest");t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t);e=e.getBoundingClientRect(),e=Math.round(e.height);if(A.body.removeChild(t),123===e)return!0}}return!1}(document);return Object.defineProperty(Xr,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Xr.SUPPORT_RANGE_BOUNDS&&function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var r=A.createRange();e.innerHTML="function"==typeof"".repeat?"&#128104;".repeat(10):"";var B=e.firstChild,t=Q(B.data).map(function(A){return g(A)}),n=0,s={},t=t.every(function(A,e){r.setStart(B,n),r.setEnd(B,n+A.length);var t=r.getBoundingClientRect();n+=A.length;A=t.x>s.x||t.y>s.y;return s=t,0===e||A});return A.body.removeChild(e),t}(document);return Object.defineProperty(Xr,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=function(A){var e=new Image,t=A.createElement("canvas"),A=t.getContext("2d");if(!A)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{A.drawImage(e,0,0),t.toDataURL()}catch(A){return!1}return!0}(document);return Object.defineProperty(Xr,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?function(t){var A=t.createElement("canvas"),r=100;A.width=r,A.height=r;var B=A.getContext("2d");if(!B)return Promise.reject(!1);B.fillStyle="rgb(0, 255, 0)",B.fillRect(0,0,r,r);var e=new Image,n=A.toDataURL();e.src=n;e=Nr(r,r,0,0,e);return B.fillStyle="red",B.fillRect(0,0,r,r),Pr(e).then(function(A){B.drawImage(A,0,0);var e=B.getImageData(0,0,r,r).data;B.fillStyle="red",B.fillRect(0,0,r,r);A=t.createElement("div");return A.style.backgroundImage="url("+n+")",A.style.height="100px",Lr(e)?Pr(Nr(r,r,0,0,A)):Promise.reject(!1)}).then(function(A){return B.drawImage(A,0,0),Lr(B.getImageData(0,0,r,r).data)}).catch(function(){return!1})}(document):Promise.resolve(!1);return Object.defineProperty(Xr,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=void 0!==(new Image).crossOrigin;return Object.defineProperty(Xr,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A="string"==typeof(new XMLHttpRequest).responseType;return Object.defineProperty(Xr,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Xr,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!("undefined"==typeof Intl||!Intl.Segmenter);return Object.defineProperty(Xr,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Jr=function(A,e){this.text=A,this.bounds=e},Yr=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));t=e.parentNode;if(t){t.replaceChild(r,e);A=f(A,r);return r.firstChild&&t.replaceChild(r.firstChild,r),A}}return d.EMPTY},Wr=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");r=r.createRange();return r.setStart(A,e),r.setEnd(A,e+t),r},Zr=function(A){if(Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(A){return A.segment})}return function(A){for(var e,t=mr(A),r=[];!(e=t.next()).done;)e.value&&r.push(e.value.slice());return r}(A)},_r=function(A,e){return 0!==e.letterSpacing?Zr(A):function(A,e){if(Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(A){return A.segment})}return jr(A,e)}(A,e)},qr=[32,160,4961,65792,65793,4153,4241],jr=function(A,e){for(var t,r=wA(A,{lineBreak:e.lineBreak,wordBreak:"break-word"===e.overflowWrap?"break-word":e.wordBreak}),B=[];!(t=r.next()).done;)!function(){var A,e;t.value&&(A=t.value.slice(),A=Q(A),e="",A.forEach(function(A){-1===qr.indexOf(A)?e+=g(A):(e.length&&B.push(e),B.push(g(A)),e="")}),e.length&&B.push(e))}();return B},zr=function(A,e,t){var B,n,s,o,i;this.text=$r(e.data,t.textTransform),this.textBounds=(B=A,A=this.text,s=e,A=_r(A,n=t),o=[],i=0,A.forEach(function(A){var e,t,r;n.textDecorationLine.length||0<A.trim().length?Xr.SUPPORT_RANGE_BOUNDS?1<(r=Wr(s,i,A.length).getClientRects()).length?(e=Zr(A),t=0,e.forEach(function(A){o.push(new Jr(A,d.fromDOMRectList(B,Wr(s,t+i,A.length).getClientRects()))),t+=A.length})):o.push(new Jr(A,d.fromDOMRectList(B,r))):(r=s.splitText(A.length),o.push(new Jr(A,Yr(B,s))),s=r):Xr.SUPPORT_RANGE_BOUNDS||(s=s.splitText(A.length)),i+=A.length}),o)},$r=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(AB,eB);case 2:return A.toUpperCase();default:return A}},AB=/(^|\s|:|-|\(|\))([a-z])/g,eB=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},tB=(A(rB,Sr=ur),rB);function rB(A,e){A=Sr.call(this,A,e)||this;return A.src=e.currentSrc||e.src,A.intrinsicWidth=e.naturalWidth,A.intrinsicHeight=e.naturalHeight,A.context.cache.addImage(A.src),A}var BB,nB=(A(sB,BB=ur),sB);function sB(A,e){A=BB.call(this,A,e)||this;return A.canvas=e,A.intrinsicWidth=e.width,A.intrinsicHeight=e.height,A}var oB,iB=(A(QB,oB=ur),QB);function QB(A,e){var t=oB.call(this,A,e)||this,r=new XMLSerializer,A=f(A,e);return e.setAttribute("width",A.width+"px"),e.setAttribute("height",A.height+"px"),t.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(e)),t.intrinsicWidth=e.width.baseVal.value,t.intrinsicHeight=e.height.baseVal.value,t.context.cache.addImage(t.svg),t}var cB,aB=(A(gB,cB=ur),gB);function gB(A,e){A=cB.call(this,A,e)||this;return A.value=e.value,A}var wB,UB=(A(lB,wB=ur),lB);function lB(A,e){A=wB.call(this,A,e)||this;return A.start=e.start,A.reversed="boolean"==typeof e.reversed&&!0===e.reversed,A}var CB,uB=[{type:15,flags:0,unit:"px",number:3}],FB=[{type:16,flags:0,number:50}],hB="checkbox",dB="radio",fB="password",HB=707406591,pB=(A(EB,CB=ur),EB);function EB(A,e){var t=CB.call(this,A,e)||this;switch(t.type=e.type.toLowerCase(),t.checked=e.checked,t.value=0===(e=(A=e).type===fB?new Array(A.value.length+1).join("•"):A.value).length?A.placeholder||"":e,t.type!==hB&&t.type!==dB||(t.styles.backgroundColor=3739148031,t.styles.borderTopColor=t.styles.borderRightColor=t.styles.borderBottomColor=t.styles.borderLeftColor=2779096575,t.styles.borderTopWidth=t.styles.borderRightWidth=t.styles.borderBottomWidth=t.styles.borderLeftWidth=1,t.styles.borderTopStyle=t.styles.borderRightStyle=t.styles.borderBottomStyle=t.styles.borderLeftStyle=1,t.styles.backgroundClip=[0],t.styles.backgroundOrigin=[0],t.bounds=(e=t.bounds).width>e.height?new d(e.left+(e.width-e.height)/2,e.top,e.height,e.height):e.width<e.height?new d(e.left,e.top+(e.height-e.width)/2,e.width,e.width):e),t.type){case hB:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=uB;break;case dB:t.styles.borderTopRightRadius=t.styles.borderTopLeftRadius=t.styles.borderBottomRightRadius=t.styles.borderBottomLeftRadius=FB}return t}var IB,yB=(A(KB,IB=ur),KB);function KB(A,e){A=IB.call(this,A,e)||this,e=e.options[e.selectedIndex||0];return A.value=e&&e.text||"",A}var mB,LB=(A(bB,mB=ur),bB);function bB(A,e){A=mB.call(this,A,e)||this;return A.value=e.value,A}var DB,vB=(A(xB,DB=ur),xB);function xB(A,e){var t,r,B=DB.call(this,A,e)||this;B.src=e.src,B.width=parseInt(e.width,10)||0,B.height=parseInt(e.height,10)||0,B.backgroundColor=B.styles.backgroundColor;try{e.contentWindow&&e.contentWindow.document&&e.contentWindow.document.documentElement&&(B.tree=kB(A,e.contentWindow.document.documentElement),t=e.contentWindow.document.documentElement?fe(A,getComputedStyle(e.contentWindow.document.documentElement).backgroundColor):Le.TRANSPARENT,r=e.contentWindow.document.body?fe(A,getComputedStyle(e.contentWindow.document.body).backgroundColor):Le.TRANSPARENT,B.backgroundColor=oe(t)?oe(r)?B.styles.backgroundColor:r:t)}catch(A){}return B}function MB(A){return"VIDEO"===A.tagName}function SB(A){return"STYLE"===A.tagName}function TB(A){return 0<A.tagName.indexOf("-")}var GB=["OL","UL","MENU"],OB=function(e,A,t,r){for(var B=A.firstChild;B;B=s){var n,s=B.nextSibling;PB(B)&&0<B.data.trim().length?t.textNodes.push(new zr(e,B,t.styles)):XB(B)&&(rn(B)&&B.assignedNodes?B.assignedNodes().forEach(function(A){return OB(e,A,t,r)}):(n=VB(e,B)).styles.isVisible()&&(RB(B,n,r)?n.flags|=4:NB(n.styles)&&(n.flags|=2),-1!==GB.indexOf(B.tagName)&&(n.flags|=8),t.elements.push(n),B.slot,B.shadowRoot?OB(e,B.shadowRoot,n,r):en(B)||qB(B)||tn(B)||OB(e,B,n,r)))}},VB=function(A,e){return new($B(e)?tB:zB(e)?nB:qB(e)?iB:WB(e)?aB:ZB(e)?UB:_B(e)?pB:tn(e)?yB:en(e)?LB:An(e)?vB:ur)(A,e)},kB=function(A,e){var t=VB(A,e);return t.flags|=4,OB(A,e,t,t),t},RB=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||jB(A)&&t.styles.isTransparent()},NB=function(A){return A.isPositioned()||A.isFloating()},PB=function(A){return A.nodeType===Node.TEXT_NODE},XB=function(A){return A.nodeType===Node.ELEMENT_NODE},JB=function(A){return XB(A)&&void 0!==A.style&&!YB(A)},YB=function(A){return"object"==typeof A.className},WB=function(A){return"LI"===A.tagName},ZB=function(A){return"OL"===A.tagName},_B=function(A){return"INPUT"===A.tagName},qB=function(A){return"svg"===A.tagName},jB=function(A){return"BODY"===A.tagName},zB=function(A){return"CANVAS"===A.tagName},$B=function(A){return"IMG"===A.tagName},An=function(A){return"IFRAME"===A.tagName},en=function(A){return"TEXTAREA"===A.tagName},tn=function(A){return"SELECT"===A.tagName},rn=function(A){return"SLOT"===A.tagName},Bn=(nn.prototype.getCounterValue=function(A){A=this.counters[A];return A&&A.length?A[A.length-1]:1},nn.prototype.getCounterValues=function(A){A=this.counters[A];return A||[]},nn.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()})},nn.prototype.parse=function(A){var t=this,e=A.counterIncrement,A=A.counterReset,r=!0;null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(r=!1,e.length||e.push(1),e[Math.max(0,e.length-1)]+=A.increment)});var B=[];return r&&A.forEach(function(A){var e=t.counters[A.counter];B.push(A.counter),(e=e||(t.counters[A.counter]=[])).push(A.reset)}),B},nn);function nn(){this.counters={}}function sn(r,A,e,B,t,n){return r<A||e<r?Fn(r,t,0<n.length):B.integers.reduce(function(A,e,t){for(;e<=r;)r-=e,A+=B.values[t];return A},"")+n}function on(A,e,t,r){for(var B="";t||A--,B=r(A)+B,e<=(A/=e)*e;);return B}function Qn(A,e,t,r,B){var n=t-e+1;return(A<0?"-":"")+(on(Math.abs(A),n,r,function(A){return g(Math.floor(A%n)+e)})+B)}function cn(A,e,t){void 0===t&&(t=". ");var r=e.length;return on(Math.abs(A),r,!1,function(A){return e[Math.floor(A%r)]})+t}function an(A,e,t,r,B,n){if(A<-9999||9999<A)return Fn(A,4,0<B.length);var s=Math.abs(A),o=B;if(0===s)return e[0]+o;for(var i=0;0<s&&i<=4;i++){var Q=s%10;0==Q&&Pt(n,1)&&""!==o?o=e[Q]+o:1<Q||1==Q&&0===i||1==Q&&1===i&&Pt(n,2)||1==Q&&1===i&&Pt(n,4)&&100<A||1==Q&&1<i&&Pt(n,8)?o=e[Q]+(0<i?t[i-1]:"")+o:1==Q&&0<i&&(o=t[i-1]+o),s=Math.floor(s/10)}return(A<0?r:"")+o}var gn,wn={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Un={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},ln={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Cn={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},un="마이너스",Fn=function(A,e,t){var r=t?". ":"",B=t?"、":"",n=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var o=Qn(A,48,57,!0,r);return o.length<4?"0"+o:o;case 4:return cn(A,"〇一二三四五六七八九",B);case 6:return sn(A,1,3999,wn,3,r).toLowerCase();case 7:return sn(A,1,3999,wn,3,r);case 8:return Qn(A,945,969,!1,r);case 9:return Qn(A,97,122,!1,r);case 10:return Qn(A,65,90,!1,r);case 11:return Qn(A,1632,1641,!0,r);case 12:case 49:return sn(A,1,9999,Un,3,r);case 35:return sn(A,1,9999,Un,3,r).toLowerCase();case 13:return Qn(A,2534,2543,!0,r);case 14:case 30:return Qn(A,6112,6121,!0,r);case 15:return cn(A,"子丑寅卯辰巳午未申酉戌亥",B);case 16:return cn(A,"甲乙丙丁戊己庚辛壬癸",B);case 17:case 48:return an(A,"零一二三四五六七八九","十百千萬","負",B,14);case 47:return an(A,"零壹貳參肆伍陸柒捌玖","拾佰仟萬","負",B,15);case 42:return an(A,"零一二三四五六七八九","十百千萬","负",B,14);case 41:return an(A,"零壹贰叁肆伍陆柒捌玖","拾佰仟萬","负",B,15);case 26:return an(A,"〇一二三四五六七八九","十百千万","マイナス",B,0);case 25:return an(A,"零壱弐参四伍六七八九","拾百千万","マイナス",B,7);case 31:return an(A,"영일이삼사오육칠팔구","십백천만",un,n,7);case 33:return an(A,"零一二三四五六七八九","十百千萬",un,n,0);case 32:return an(A,"零壹貳參四五六七八九","拾百千",un,n,7);case 18:return Qn(A,2406,2415,!0,r);case 20:return sn(A,1,19999,Cn,3,r);case 21:return Qn(A,2790,2799,!0,r);case 22:return Qn(A,2662,2671,!0,r);case 22:return sn(A,1,10999,ln,3,r);case 23:return cn(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return cn(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Qn(A,3302,3311,!0,r);case 28:return cn(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",B);case 29:return cn(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",B);case 34:return Qn(A,3792,3801,!0,r);case 37:return Qn(A,6160,6169,!0,r);case 38:return Qn(A,4160,4169,!0,r);case 39:return Qn(A,2918,2927,!0,r);case 40:return Qn(A,1776,1785,!0,r);case 43:return Qn(A,3046,3055,!0,r);case 44:return Qn(A,3174,3183,!0,r);case 45:return Qn(A,3664,3673,!0,r);case 46:return Qn(A,3872,3881,!0,r);default:return Qn(A,48,57,!0,r)}},hn="data-ignore",dn=(fn.prototype.toIFrame=function(A,r){var e=this,B=pn(A,r);if(!B.contentWindow)return Promise.reject("Unable to find iframe window");var t=A.defaultView.pageXOffset,n=A.defaultView.pageYOffset,s=B.contentWindow,o=s.document,A=In(B).then(function(){return a(e,void 0,void 0,function(){var e,t;return H(this,function(A){switch(A.label){case 0:return this.scrolledElements.forEach(bn),s&&(s.scrollTo(r.left,r.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===r.top&&s.scrollX===r.left||(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(s.scrollX-r.left,s.scrollY-r.top,0,0))),e=this.options.onclone,void 0===(t=this.clonedReferenceElement)?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,En(o)]:[3,4];case 3:A.sent(),A.label=4;case 4:return"function"==typeof e?[2,Promise.resolve().then(function(){return e(o,t)}).then(function(){return B})]:[2,B]}})})});return o.open(),o.write(mn(document.doctype)+"<html></html>"),Ln(this.referenceElement.ownerDocument,t,n),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),A},fn.prototype.createElementClone=function(A){if(Cr(A,2),zB(A))return this.createCanvasClone(A);if(MB(A))return this.createVideoClone(A);if(SB(A))return this.createStyleClone(A);var e=A.cloneNode(!1);return $B(e)&&($B(A)&&A.currentSrc&&A.currentSrc!==A.src&&(e.src=A.currentSrc,e.srcset=""),"lazy"===e.loading&&(e.loading="eager")),TB(e)?this.createCustomElementClone(e):e},fn.prototype.createCustomElementClone=function(A){var e=document.createElement("html2canvascustomelement");return Kn(A.style,e),e},fn.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),r=A.cloneNode(!1);return r.textContent=t,r}}catch(A){if(this.context.logger.error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},fn.prototype.createCanvasClone=function(e){var A;if(this.options.inlineImages&&e.ownerDocument){var t=e.ownerDocument.createElement("img");try{return t.src=e.toDataURL(),t}catch(A){this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}t=e.cloneNode(!1);try{t.width=e.width,t.height=e.height;var r,B,n=e.getContext("2d"),s=t.getContext("2d");return s&&(!this.options.allowTaint&&n?s.putImageData(n.getImageData(0,0,e.width,e.height),0,0):(!(r=null!==(A=e.getContext("webgl2"))&&void 0!==A?A:e.getContext("webgl"))||!1===(null==(B=r.getContextAttributes())?void 0:B.preserveDrawingBuffer)&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e),s.drawImage(e,0,0))),t}catch(A){this.context.logger.info("Unable to clone canvas as it is tainted",e)}return t},fn.prototype.createVideoClone=function(e){var A=e.ownerDocument.createElement("canvas");A.width=e.offsetWidth,A.height=e.offsetHeight;var t=A.getContext("2d");try{return t&&(t.drawImage(e,0,0,A.width,A.height),this.options.allowTaint||t.getImageData(0,0,A.width,A.height)),A}catch(A){this.context.logger.info("Unable to clone video as it is tainted",e)}A=e.ownerDocument.createElement("canvas");return A.width=e.offsetWidth,A.height=e.offsetHeight,A},fn.prototype.appendChildNode=function(A,e,t){XB(e)&&("SCRIPT"===e.tagName||e.hasAttribute(hn)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(e))||this.options.copyStyles&&XB(e)&&SB(e)||A.appendChild(this.cloneNode(e,t))},fn.prototype.cloneChildNodes=function(A,e,t){for(var r,B=this,n=(A.shadowRoot||A).firstChild;n;n=n.nextSibling)XB(n)&&rn(n)&&"function"==typeof n.assignedNodes?(r=n.assignedNodes()).length&&r.forEach(function(A){return B.appendChildNode(e,A,t)}):this.appendChildNode(e,n,t)},fn.prototype.cloneNode=function(A,e){if(PB(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var t=A.ownerDocument.defaultView;if(t&&XB(A)&&(JB(A)||YB(A))){var r=this.createElementClone(A);r.style.transitionProperty="none";var B=t.getComputedStyle(A),n=t.getComputedStyle(A,":before"),s=t.getComputedStyle(A,":after");this.referenceElement===A&&JB(r)&&(this.clonedReferenceElement=r),jB(r)&&Mn(r);t=this.counters.parse(new Ur(this.context,B)),n=this.resolvePseudoContent(A,r,n,gn.BEFORE);TB(A)&&(e=!0),MB(A)||this.cloneChildNodes(A,r,e),n&&r.insertBefore(n,r.firstChild);s=this.resolvePseudoContent(A,r,s,gn.AFTER);return s&&r.appendChild(s),this.counters.pop(t),(B&&(this.options.copyStyles||YB(A))&&!An(A)||e)&&Kn(B,r),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([r,A.scrollLeft,A.scrollTop]),(en(A)||tn(A))&&(en(r)||tn(r))&&(r.value=A.value),r}return A.cloneNode(!1)},fn.prototype.resolvePseudoContent=function(o,A,e,t){var i=this;if(e){var r=e.content,Q=A.ownerDocument;if(Q&&r&&"none"!==r&&"-moz-alt-content"!==r&&"none"!==e.display){this.counters.parse(new Ur(this.context,e));var c=new wr(this.context,e),a=Q.createElement("html2canvaspseudoelement");Kn(e,a),c.content.forEach(function(A){if(0===A.type)a.appendChild(Q.createTextNode(A.value));else if(22===A.type){var e=Q.createElement("img");e.src=A.value,e.style.opacity="1",a.appendChild(e)}else if(18===A.type){var t,r,B,n,s;"attr"===A.name?(e=A.values.filter(_A)).length&&a.appendChild(Q.createTextNode(o.getAttribute(e[0].value)||"")):"counter"===A.name?(B=(r=A.values.filter($A))[0],r=r[1],B&&_A(B)&&(t=i.counters.getCounterValue(B.value),s=r&&_A(r)?pt.parse(i.context,r.value):3,a.appendChild(Q.createTextNode(Fn(t,s,!1))))):"counters"===A.name&&(B=(t=A.values.filter($A))[0],s=t[1],r=t[2],B&&_A(B)&&(B=i.counters.getCounterValues(B.value),n=r&&_A(r)?pt.parse(i.context,r.value):3,s=s&&0===s.type?s.value:"",s=B.map(function(A){return Fn(A,n,!1)}).join(s),a.appendChild(Q.createTextNode(s))))}else if(20===A.type)switch(A.value){case"open-quote":a.appendChild(Q.createTextNode(Xt(c.quotes,i.quoteDepth++,!0)));break;case"close-quote":a.appendChild(Q.createTextNode(Xt(c.quotes,--i.quoteDepth,!1)));break;default:a.appendChild(Q.createTextNode(A.value))}}),a.className=Dn+" "+vn;t=t===gn.BEFORE?" "+Dn:" "+vn;return YB(A)?A.className.baseValue+=t:A.className+=t,a}}},fn.destroy=function(A){return!!A.parentNode&&(A.parentNode.removeChild(A),!0)},fn);function fn(A,e,t){if(this.context=A,this.options=t,this.scrolledElements=[],this.referenceElement=e,this.counters=new Bn,this.quoteDepth=0,!e.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(e.ownerDocument.documentElement,!1)}(he=gn=gn||{})[he.BEFORE=0]="BEFORE",he[he.AFTER=1]="AFTER";function Hn(e){return new Promise(function(A){!e.complete&&e.src?(e.onload=A,e.onerror=A):A()})}var pn=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(hn,"true"),A.body.appendChild(t),t},En=function(A){return Promise.all([].slice.call(A.images,0).map(Hn))},In=function(B){return new Promise(function(e,A){var t=B.contentWindow;if(!t)return A("No window assigned for iframe");var r=t.document;t.onload=B.onload=function(){t.onload=B.onload=null;var A=setInterval(function(){0<r.body.childNodes.length&&"complete"===r.readyState&&(clearInterval(A),e(B))},50)}})},yn=["all","d","content"],Kn=function(A,e){for(var t=A.length-1;0<=t;t--){var r=A.item(t);-1===yn.indexOf(r)&&e.style.setProperty(r,A.getPropertyValue(r))}return e},mn=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},Ln=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},bn=function(A){var e=A[0],t=A[1],A=A[2];e.scrollLeft=t,e.scrollTop=A},Dn="___html2canvas___pseudoelement_before",vn="___html2canvas___pseudoelement_after",xn='{\n content: "" !important;\n display: none !important;\n}',Mn=function(A){Sn(A,"."+Dn+":before"+xn+"\n ."+vn+":after"+xn)},Sn=function(A,e){var t=A.ownerDocument;t&&((t=t.createElement("style")).textContent=e,A.appendChild(t))},Tn=(Gn.getOrigin=function(A){var e=Gn._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},Gn.isSameOrigin=function(A){return Gn.getOrigin(A)===Gn._origin},Gn.setContext=function(A){Gn._link=A.document.createElement("a"),Gn._origin=Gn.getOrigin(A.location.href)},Gn._origin="about:blank",Gn);function Gn(){}var On=(Vn.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Yn(A)||Pn(A))&&(this._cache[A]=this.loadImage(A)).catch(function(){}),e},Vn.prototype.match=function(A){return this._cache[A]},Vn.prototype.loadImage=function(s){return a(this,void 0,void 0,function(){var e,r,t,B,n=this;return H(this,function(A){switch(A.label){case 0:return(e=Tn.isSameOrigin(s),r=!Xn(s)&&!0===this._options.useCORS&&Xr.SUPPORT_CORS_IMAGES&&!e,t=!Xn(s)&&!e&&!Yn(s)&&"string"==typeof this._options.proxy&&Xr.SUPPORT_CORS_XHR&&!r,e||!1!==this._options.allowTaint||Xn(s)||Yn(s)||t||r)?(B=s,t?[4,this.proxy(B)]:[3,2]):[2];case 1:B=A.sent(),A.label=2;case 2:return this.context.logger.debug("Added image "+s.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(Jn(B)||r)&&(t.crossOrigin="anonymous"),t.src=B,!0===t.complete&&setTimeout(function(){return A(t)},500),0<n._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+n._options.imageTimeout+"ms) loading image")},n._options.imageTimeout)})];case 3:return[2,A.sent()]}})})},Vn.prototype.has=function(A){return void 0!==this._cache[A]},Vn.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},Vn.prototype.proxy=function(s){var o=this,i=this._options.proxy;if(!i)throw new Error("No proxy defined");var Q=s.substring(0,256);return new Promise(function(e,t){var r=Xr.SUPPORT_RESPONSE_TYPE?"blob":"text",B=new XMLHttpRequest;B.onload=function(){var A;200===B.status?"text"==r?e(B.response):((A=new FileReader).addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(B.response)):t("Failed to proxy resource "+Q+" with status code "+B.status)},B.onerror=t;var A,n=-1<i.indexOf("?")?"&":"?";B.open("GET",i+n+"url="+encodeURIComponent(s)+"&responseType="+r),"text"!=r&&B instanceof XMLHttpRequest&&(B.responseType=r),o._options.imageTimeout&&(A=o._options.imageTimeout,B.timeout=A,B.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+Q)}),B.send()})},Vn);function Vn(A,e){this.context=A,this._options=e,this._cache={}}var kn=/^data:image\/svg\+xml/i,Rn=/^data:image\/.*;base64,/i,Nn=/^data:image\/.*/i,Pn=function(A){return Xr.SUPPORT_SVG_DRAWING||!Wn(A)},Xn=function(A){return Nn.test(A)},Jn=function(A){return Rn.test(A)},Yn=function(A){return"blob"===A.substr(0,4)},Wn=function(A){return"svg"===A.substr(-3).toLowerCase()||kn.test(A)},Zn=(_n.prototype.add=function(A,e){return new _n(this.x+A,this.y+e)},_n);function _n(A,e){this.type=0,this.x=A,this.y=e}function qn(A,e,t){return new Zn(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)}var jn=(zn.prototype.subdivide=function(A,e){var t=qn(this.start,this.startControl,A),r=qn(this.startControl,this.endControl,A),B=qn(this.endControl,this.end,A),n=qn(t,r,A),r=qn(r,B,A),A=qn(n,r,A);return e?new zn(this.start,t,n,A):new zn(A,r,B,this.end)},zn.prototype.add=function(A,e){return new zn(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},zn.prototype.reverse=function(){return new zn(this.end,this.endControl,this.startControl,this.start)},zn);function zn(A,e,t,r){this.type=1,this.start=A,this.startControl=e,this.endControl=t,this.end=r}function $n(A){return 1===A.type}var As,es=function(A){var e=A.styles,t=A.bounds,r=(C=Be(e.borderTopLeftRadius,t.width,t.height))[0],B=C[1],n=(u=Be(e.borderTopRightRadius,t.width,t.height))[0],s=u[1],o=(F=Be(e.borderBottomRightRadius,t.width,t.height))[0],i=F[1],Q=(h=Be(e.borderBottomLeftRadius,t.width,t.height))[0],c=h[1];(d=[]).push((r+n)/t.width),d.push((Q+o)/t.width),d.push((B+c)/t.height),d.push((s+i)/t.height),1<(f=Math.max.apply(Math,d))&&(r/=f,B/=f,n/=f,s/=f,o/=f,i/=f,Q/=f,c/=f);var a=t.width-n,g=t.height-i,w=t.width-o,U=t.height-c,l=e.borderTopWidth,C=e.borderRightWidth,u=e.borderBottomWidth,F=e.borderLeftWidth,h=Ue(e.paddingTop,A.bounds.width),d=Ue(e.paddingRight,A.bounds.width),f=Ue(e.paddingBottom,A.bounds.width),A=Ue(e.paddingLeft,A.bounds.width);this.topLeftBorderDoubleOuterBox=0<r||0<B?ss(t.left+F/3,t.top+l/3,r-F/3,B-l/3,As.TOP_LEFT):new Zn(t.left+F/3,t.top+l/3),this.topRightBorderDoubleOuterBox=0<r||0<B?ss(t.left+a,t.top+l/3,n-C/3,s-l/3,As.TOP_RIGHT):new Zn(t.left+t.width-C/3,t.top+l/3),this.bottomRightBorderDoubleOuterBox=0<o||0<i?ss(t.left+w,t.top+g,o-C/3,i-u/3,As.BOTTOM_RIGHT):new Zn(t.left+t.width-C/3,t.top+t.height-u/3),this.bottomLeftBorderDoubleOuterBox=0<Q||0<c?ss(t.left+F/3,t.top+U,Q-F/3,c-u/3,As.BOTTOM_LEFT):new Zn(t.left+F/3,t.top+t.height-u/3),this.topLeftBorderDoubleInnerBox=0<r||0<B?ss(t.left+2*F/3,t.top+2*l/3,r-2*F/3,B-2*l/3,As.TOP_LEFT):new Zn(t.left+2*F/3,t.top+2*l/3),this.topRightBorderDoubleInnerBox=0<r||0<B?ss(t.left+a,t.top+2*l/3,n-2*C/3,s-2*l/3,As.TOP_RIGHT):new Zn(t.left+t.width-2*C/3,t.top+2*l/3),this.bottomRightBorderDoubleInnerBox=0<o||0<i?ss(t.left+w,t.top+g,o-2*C/3,i-2*u/3,As.BOTTOM_RIGHT):new Zn(t.left+t.width-2*C/3,t.top+t.height-2*u/3),this.bottomLeftBorderDoubleInnerBox=0<Q||0<c?ss(t.left+2*F/3,t.top+U,Q-2*F/3,c-2*u/3,As.BOTTOM_LEFT):new Zn(t.left+2*F/3,t.top+t.height-2*u/3),this.topLeftBorderStroke=0<r||0<B?ss(t.left+F/2,t.top+l/2,r-F/2,B-l/2,As.TOP_LEFT):new Zn(t.left+F/2,t.top+l/2),this.topRightBorderStroke=0<r||0<B?ss(t.left+a,t.top+l/2,n-C/2,s-l/2,As.TOP_RIGHT):new Zn(t.left+t.width-C/2,t.top+l/2),this.bottomRightBorderStroke=0<o||0<i?ss(t.left+w,t.top+g,o-C/2,i-u/2,As.BOTTOM_RIGHT):new Zn(t.left+t.width-C/2,t.top+t.height-u/2),this.bottomLeftBorderStroke=0<Q||0<c?ss(t.left+F/2,t.top+U,Q-F/2,c-u/2,As.BOTTOM_LEFT):new Zn(t.left+F/2,t.top+t.height-u/2),this.topLeftBorderBox=0<r||0<B?ss(t.left,t.top,r,B,As.TOP_LEFT):new Zn(t.left,t.top),this.topRightBorderBox=0<n||0<s?ss(t.left+a,t.top,n,s,As.TOP_RIGHT):new Zn(t.left+t.width,t.top),this.bottomRightBorderBox=0<o||0<i?ss(t.left+w,t.top+g,o,i,As.BOTTOM_RIGHT):new Zn(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<Q||0<c?ss(t.left,t.top+U,Q,c,As.BOTTOM_LEFT):new Zn(t.left,t.top+t.height),this.topLeftPaddingBox=0<r||0<B?ss(t.left+F,t.top+l,Math.max(0,r-F),Math.max(0,B-l),As.TOP_LEFT):new Zn(t.left+F,t.top+l),this.topRightPaddingBox=0<n||0<s?ss(t.left+Math.min(a,t.width-C),t.top+l,a>t.width+C?0:Math.max(0,n-C),Math.max(0,s-l),As.TOP_RIGHT):new Zn(t.left+t.width-C,t.top+l),this.bottomRightPaddingBox=0<o||0<i?ss(t.left+Math.min(w,t.width-F),t.top+Math.min(g,t.height-u),Math.max(0,o-C),Math.max(0,i-u),As.BOTTOM_RIGHT):new Zn(t.left+t.width-C,t.top+t.height-u),this.bottomLeftPaddingBox=0<Q||0<c?ss(t.left+F,t.top+Math.min(U,t.height-u),Math.max(0,Q-F),Math.max(0,c-u),As.BOTTOM_LEFT):new Zn(t.left+F,t.top+t.height-u),this.topLeftContentBox=0<r||0<B?ss(t.left+F+A,t.top+l+h,Math.max(0,r-(F+A)),Math.max(0,B-(l+h)),As.TOP_LEFT):new Zn(t.left+F+A,t.top+l+h),this.topRightContentBox=0<n||0<s?ss(t.left+Math.min(a,t.width+F+A),t.top+l+h,a>t.width+F+A?0:n-F+A,s-(l+h),As.TOP_RIGHT):new Zn(t.left+t.width-(C+d),t.top+l+h),this.bottomRightContentBox=0<o||0<i?ss(t.left+Math.min(w,t.width-(F+A)),t.top+Math.min(g,t.height+l+h),Math.max(0,o-(C+d)),i-(u+f),As.BOTTOM_RIGHT):new Zn(t.left+t.width-(C+d),t.top+t.height-(u+f)),this.bottomLeftContentBox=0<Q||0<c?ss(t.left+F+A,t.top+U,Math.max(0,Q-(F+A)),c-(u+f),As.BOTTOM_LEFT):new Zn(t.left+F+A,t.top+t.height-(u+f))};(he=As=As||{})[he.TOP_LEFT=0]="TOP_LEFT",he[he.TOP_RIGHT=1]="TOP_RIGHT",he[he.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",he[he.BOTTOM_LEFT=3]="BOTTOM_LEFT";function ts(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]}function rs(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]}function Bs(A){return 1===A.type}function ns(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})}var ss=function(A,e,t,r,B){var n=(Math.sqrt(2)-1)/3*4,s=t*n,o=r*n,i=A+t,Q=e+r;switch(B){case As.TOP_LEFT:return new jn(new Zn(A,Q),new Zn(A,Q-o),new Zn(i-s,e),new Zn(i,e));case As.TOP_RIGHT:return new jn(new Zn(A,e),new Zn(A+s,e),new Zn(i,Q-o),new Zn(i,Q));case As.BOTTOM_RIGHT:return new jn(new Zn(i,e),new Zn(i,e+o),new Zn(A+s,Q),new Zn(A,Q));default:As.BOTTOM_LEFT;return new jn(new Zn(i,Q),new Zn(i-s,Q),new Zn(A,e+o),new Zn(A,e))}},os=function(A,e,t){this.offsetX=A,this.offsetY=e,this.matrix=t,this.type=0,this.target=6},is=function(A,e){this.path=A,this.target=e,this.type=1},Qs=function(A){this.opacity=A,this.type=2,this.target=6},cs=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]},as=(gs.prototype.getEffects=function(e){for(var A=-1===[2,3].indexOf(this.container.styles.position),t=this.parent,r=this.effects.slice(0);t;){var B,n,s=t.effects.filter(function(A){return!Bs(A)});A||0!==t.container.styles.position||!t.parent?(r.unshift.apply(r,s),A=-1===[2,3].indexOf(t.container.styles.position),0!==t.container.styles.overflowX&&(B=ts(t.curves),n=rs(t.curves),ns(B,n)||r.unshift(new is(n,6)))):r.unshift.apply(r,s),t=t.parent}return r.filter(function(A){return Pt(A.target,e)})},gs);function gs(A,e){var t,r;this.container=A,this.parent=e,this.effects=[],this.curves=new es(this.container),this.container.styles.opacity<1&&this.effects.push(new Qs(this.container.styles.opacity)),null!==this.container.styles.transform&&(e=this.container.bounds.left+this.container.styles.transformOrigin[0].number,t=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform,this.effects.push(new os(e,t,r))),0!==this.container.styles.overflowX&&(t=ts(this.curves),r=rs(this.curves),ns(t,r)?this.effects.push(new is(t,6)):(this.effects.push(new is(t,2)),this.effects.push(new is(r,4))))}function ws(A,e){switch(e){case 0:return Hs(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Hs(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Hs(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);default:return Hs(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}}function Us(A){var e=A.bounds,A=A.styles;return e.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))}function ls(A){var e=A.styles,t=A.bounds,r=Ue(e.paddingLeft,t.width),B=Ue(e.paddingRight,t.width),n=Ue(e.paddingTop,t.width),A=Ue(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,n+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+B),-(e.borderTopWidth+e.borderBottomWidth+n+A))}function Cs(A,e,t){var r=(B=Es(A.styles.backgroundOrigin,e),n=A,0===B?n.bounds:(2===B?ls:Us)(n)),B=(s=Es(A.styles.backgroundClip,e),o=A,0===s?o.bounds:(2===s?ls:Us)(o)),n=ps(Es(A.styles.backgroundSize,e),t,r),s=n[0],o=n[1],t=Be(Es(A.styles.backgroundPosition,e),r.width-s,r.height-o);return[Is(Es(A.styles.backgroundRepeat,e),t,n,r,B),Math.round(r.left+t[0]),Math.round(r.top+t[1]),s,o]}function us(A){return _A(A)&&A.value===Ve.AUTO}function Fs(A){return"number"==typeof A}var hs=function(Q,c,a,g){Q.container.elements.forEach(function(A){var e=Pt(A.flags,4),t=Pt(A.flags,2),r=new as(A,Q);Pt(A.styles.display,2048)&&g.push(r);var B,n,s,o,i=Pt(A.flags,8)?[]:g;e||t?(B=e||A.styles.isPositioned()?a:c,t=new cs(r),A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()?(n=A.styles.zIndex.order)<0?(s=0,B.negativeZIndex.some(function(A,e){return n>A.element.container.styles.zIndex.order?(s=e,!1):0<s}),B.negativeZIndex.splice(s,0,t)):0<n?(o=0,B.positiveZIndex.some(function(A,e){return n>=A.element.container.styles.zIndex.order?(o=e+1,!1):0<o}),B.positiveZIndex.splice(o,0,t)):B.zeroOrAutoZIndexOrTransformedOrOpacity.push(t):(A.styles.isFloating()?B.nonPositionedFloats:B.nonPositionedInlineLevel).push(t),hs(r,t,e?t:a,i)):((A.styles.isInlineLevel()?c.inlineLevel:c.nonInlineLevel).push(r),hs(r,c,a,i)),Pt(A.flags,8)&&ds(A,i)})},ds=function(A,e){for(var t=A instanceof UB?A.start:1,r=A instanceof UB&&A.reversed,B=0;B<e.length;B++){var n=e[B];n.container instanceof aB&&"number"==typeof n.container.value&&0!==n.container.value&&(t=n.container.value),n.listValue=Fn(t,n.container.styles.listStyleType,!0),t+=r?-1:1}},fs=function(A,e){var t=[];return $n(A)?t.push(A.subdivide(.5,!1)):t.push(A),$n(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Hs=function(A,e,t,r){var B=[];return $n(A)?B.push(A.subdivide(.5,!1)):B.push(A),$n(t)?B.push(t.subdivide(.5,!0)):B.push(t),$n(r)?B.push(r.subdivide(.5,!0).reverse()):B.push(r),$n(e)?B.push(e.subdivide(.5,!1).reverse()):B.push(e),B},ps=function(A,e,t){var r=e[0],B=e[1],n=e[2],s=A[0],o=A[1];if(!s)return[0,0];if(te(s)&&o&&te(o))return[Ue(s,t.width),Ue(o,t.height)];var i=Fs(n);if(_A(s)&&(s.value===Ve.CONTAIN||s.value===Ve.COVER))return Fs(n)?t.width/t.height<n!=(s.value===Ve.COVER)?[t.width,t.width/n]:[t.height*n,t.height]:[t.width,t.height];var Q=Fs(r),e=Fs(B),A=Q||e;if(us(s)&&(!o||us(o)))return Q&&e?[r,B]:i||A?A&&i?[Q?r:B*n,e?B:r/n]:[Q?r:t.width,e?B:t.height]:[t.width,t.height];if(i){var c=0,a=0;return te(s)?c=Ue(s,t.width):te(o)&&(a=Ue(o,t.height)),us(s)?c=a*n:o&&!us(o)||(a=c/n),[c,a]}c=null,a=null;if(te(s)?c=Ue(s,t.width):o&&te(o)&&(a=Ue(o,t.height)),null!==(c=null!==(a=null!==c&&(!o||us(o))?Q&&e?c/r*B:t.height:a)&&us(s)?Q&&e?a/B*r:t.width:c)&&null!==a)return[c,a];throw new Error("Unable to calculate background-size for element")},Es=function(A,e){e=A[e];return void 0===e?A[0]:e},Is=function(A,e,t,r,B){var n=e[0],s=e[1],o=t[0],i=t[1];switch(A){case 2:return[new Zn(Math.round(r.left),Math.round(r.top+s)),new Zn(Math.round(r.left+r.width),Math.round(r.top+s)),new Zn(Math.round(r.left+r.width),Math.round(i+r.top+s)),new Zn(Math.round(r.left),Math.round(i+r.top+s))];case 3:return[new Zn(Math.round(r.left+n),Math.round(r.top)),new Zn(Math.round(r.left+n+o),Math.round(r.top)),new Zn(Math.round(r.left+n+o),Math.round(r.height+r.top)),new Zn(Math.round(r.left+n),Math.round(r.height+r.top))];case 1:return[new Zn(Math.round(r.left+n),Math.round(r.top+s)),new Zn(Math.round(r.left+n+o),Math.round(r.top+s)),new Zn(Math.round(r.left+n+o),Math.round(r.top+s+i)),new Zn(Math.round(r.left+n),Math.round(r.top+s+i))];default:return[new Zn(Math.round(B.left),Math.round(B.top)),new Zn(Math.round(B.left+B.width),Math.round(B.top)),new Zn(Math.round(B.left+B.width),Math.round(B.height+B.top)),new Zn(Math.round(B.left),Math.round(B.height+B.top))]}},ys="Hidden Text",Ks=(ms.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),r=this._document.createElement("img"),B=this._document.createElement("span"),n=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",t.style.whiteSpace="nowrap",n.appendChild(t),r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",B.style.fontFamily=A,B.style.fontSize=e,B.style.margin="0",B.style.padding="0",B.appendChild(this._document.createTextNode(ys)),t.appendChild(B),t.appendChild(r);e=r.offsetTop-B.offsetTop+2;t.removeChild(B),t.appendChild(this._document.createTextNode(ys)),t.style.lineHeight="normal",r.style.verticalAlign="super";r=r.offsetTop-t.offsetTop+2;return n.removeChild(t),{baseline:e,middle:r}},ms.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},ms);function ms(A){this._data={},this._document=A}var Ls,he=function(A,e){this.context=A,this.options=e},bs=(A(Ds,Ls=he),Ds.prototype.applyEffects=function(A){for(var e=this;this._activeEffects.length;)this.popEffect();A.forEach(function(A){return e.applyEffect(A)})},Ds.prototype.applyEffect=function(A){this.ctx.save(),2===A.type&&(this.ctx.globalAlpha=A.opacity),0===A.type&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),Bs(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},Ds.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},Ds.prototype.renderStack=function(e){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return e.element.container.styles.isVisible()?[4,this.renderStackContent(e)]:[3,2];case 1:A.sent(),A.label=2;case 2:return[2]}})})},Ds.prototype.renderNode=function(e){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return Pt(e.container.flags,16),e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},Ds.prototype.renderTextWithLetterSpacing=function(t,A,r){var B=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+r):Zr(t.text).reduce(function(A,e){return B.ctx.fillText(e,A,t.bounds.top+r),A+B.ctx.measureText(e).width},t.bounds.left)},Ds.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return"normal"===A||"small-caps"===A}).join(""),t=Gs(A.fontFamily).join(", "),r=WA(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,e,A.fontWeight,r,t].join(" "),t,r]},Ds.prototype.renderTextNode=function(i,Q){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o=this;return H(this,function(A){return r=this.createFontStyle(Q),e=r[0],t=r[1],r=r[2],this.ctx.font=e,this.ctx.direction=1===Q.direction?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",r=this.fontMetrics.getMetrics(t,r),B=r.baseline,n=r.middle,s=Q.paintOrder,i.textBounds.forEach(function(t){s.forEach(function(A){switch(A){case 0:o.ctx.fillStyle=ie(Q.color),o.renderTextWithLetterSpacing(t,Q.letterSpacing,B);var e=Q.textShadow;e.length&&t.text.trim().length&&(e.slice(0).reverse().forEach(function(A){o.ctx.shadowColor=ie(A.color),o.ctx.shadowOffsetX=A.offsetX.number*o.options.scale,o.ctx.shadowOffsetY=A.offsetY.number*o.options.scale,o.ctx.shadowBlur=A.blur.number,o.renderTextWithLetterSpacing(t,Q.letterSpacing,B)}),o.ctx.shadowColor="",o.ctx.shadowOffsetX=0,o.ctx.shadowOffsetY=0,o.ctx.shadowBlur=0),Q.textDecorationLine.length&&(o.ctx.fillStyle=ie(Q.textDecorationColor||Q.color),Q.textDecorationLine.forEach(function(A){switch(A){case 1:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top+B),t.bounds.width,1);break;case 2:o.ctx.fillRect(t.bounds.left,Math.round(t.bounds.top),t.bounds.width,1);break;case 3:o.ctx.fillRect(t.bounds.left,Math.ceil(t.bounds.top+n),t.bounds.width,1)}}));break;case 1:Q.webkitTextStrokeWidth&&t.text.trim().length&&(o.ctx.strokeStyle=ie(Q.webkitTextStrokeColor),o.ctx.lineWidth=Q.webkitTextStrokeWidth,o.ctx.lineJoin=window.chrome?"miter":"round",o.ctx.strokeText(t.text,t.bounds.left,t.bounds.top+B)),o.ctx.strokeStyle="",o.ctx.lineWidth=0,o.ctx.lineJoin="miter"}})}),[2]})})},Ds.prototype.renderReplacedElement=function(A,e,t){var r;t&&0<A.intrinsicWidth&&0<A.intrinsicHeight&&(r=ls(A),e=rs(e),this.path(e),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore())},Ds.prototype.renderNodeContent=function(w){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g;return H(this,function(A){switch(A.label){case 0:this.applyEffects(w.getEffects(4)),e=w.container,t=w.curves,r=e.styles,B=0,n=e.textNodes,A.label=1;case 1:return B<n.length?(s=n[B],[4,this.renderTextNode(s,r)]):[3,4];case 2:A.sent(),A.label=3;case 3:return B++,[3,1];case 4:if(!(e instanceof tB))return[3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.context.cache.match(e.src)];case 6:return Q=A.sent(),this.renderReplacedElement(e,t,Q),[3,8];case 7:return A.sent(),this.context.logger.error("Error loading image "+e.src),[3,8];case 8:if(e instanceof nB&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof iB))return[3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.context.cache.match(e.svg)];case 10:return Q=A.sent(),this.renderReplacedElement(e,t,Q),[3,12];case 11:return A.sent(),this.context.logger.error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof vB&&e.tree?[4,new Ds(this.context,{scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,width:e.width,height:e.height}).render(e.tree)]:[3,14];case 13:s=A.sent(),e.width&&e.height&&this.ctx.drawImage(s,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof pB&&(i=Math.min(e.bounds.width,e.bounds.height),e.type===hB?e.checked&&(this.ctx.save(),this.path([new Zn(e.bounds.left+.39363*i,e.bounds.top+.79*i),new Zn(e.bounds.left+.16*i,e.bounds.top+.5549*i),new Zn(e.bounds.left+.27347*i,e.bounds.top+.44071*i),new Zn(e.bounds.left+.39694*i,e.bounds.top+.5649*i),new Zn(e.bounds.left+.72983*i,e.bounds.top+.23*i),new Zn(e.bounds.left+.84*i,e.bounds.top+.34085*i),new Zn(e.bounds.left+.39363*i,e.bounds.top+.79*i)]),this.ctx.fillStyle=ie(HB),this.ctx.fill(),this.ctx.restore()):e.type===dB&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,2*Math.PI,!0),this.ctx.fillStyle=ie(HB),this.ctx.fill(),this.ctx.restore())),xs(e)&&e.value.length){switch(c=this.createFontStyle(r),a=c[0],i=c[1],c=this.fontMetrics.getMetrics(a,i).baseline,this.ctx.font=a,this.ctx.fillStyle=ie(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Ss(e.styles.textAlign),g=ls(e),o=0,e.styles.textAlign){case 1:o+=g.width/2;break;case 2:o+=g.width}i=g.add(o,0,0,-g.height/2+1),this.ctx.save(),this.path([new Zn(g.left,g.top),new Zn(g.left+g.width,g.top),new Zn(g.left+g.width,g.top+g.height),new Zn(g.left,g.top+g.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Jr(e.value,i),r.letterSpacing,c),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Pt(e.styles.display,2048))return[3,20];if(null===e.styles.listStyleImage)return[3,19];if(0!==(c=e.styles.listStyleImage).type)return[3,18];Q=void 0,c=c.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.context.cache.match(c)];case 16:return Q=A.sent(),this.ctx.drawImage(Q,e.bounds.left-(Q.width+10),e.bounds.top),[3,18];case 17:return A.sent(),this.context.logger.error("Error loading list-style-image "+c),[3,18];case 18:return[3,20];case 19:w.listValue&&-1!==e.styles.listStyleType&&(a=this.createFontStyle(r)[0],this.ctx.font=a,this.ctx.fillStyle=ie(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",g=new d(e.bounds.left,e.bounds.top+Ue(e.styles.paddingTop,e.bounds.width),e.bounds.width,Ye(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Jr(w.listValue,g),r.letterSpacing,Ye(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return[2]}})})},Ds.prototype.renderStackContent=function(C){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g,w,U,l;return H(this,function(A){switch(A.label){case 0:return Pt(C.element.container.flags,16),[4,this.renderNodeBackgroundAndBorders(C.element)];case 1:A.sent(),e=0,t=C.negativeZIndex,A.label=2;case 2:return e<t.length?(l=t[e],[4,this.renderStack(l)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return[4,this.renderNodeContent(C.element)];case 6:A.sent(),r=0,B=C.nonInlineLevel,A.label=7;case 7:return r<B.length?(l=B[r],[4,this.renderNode(l)]):[3,10];case 8:A.sent(),A.label=9;case 9:return r++,[3,7];case 10:n=0,s=C.nonPositionedFloats,A.label=11;case 11:return n<s.length?(l=s[n],[4,this.renderStack(l)]):[3,14];case 12:A.sent(),A.label=13;case 13:return n++,[3,11];case 14:o=0,i=C.nonPositionedInlineLevel,A.label=15;case 15:return o<i.length?(l=i[o],[4,this.renderStack(l)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:Q=0,c=C.inlineLevel,A.label=19;case 19:return Q<c.length?(l=c[Q],[4,this.renderNode(l)]):[3,22];case 20:A.sent(),A.label=21;case 21:return Q++,[3,19];case 22:a=0,g=C.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return a<g.length?(l=g[a],[4,this.renderStack(l)]):[3,26];case 24:A.sent(),A.label=25;case 25:return a++,[3,23];case 26:w=0,U=C.positiveZIndex,A.label=27;case 27:return w<U.length?(l=U[w],[4,this.renderStack(l)]):[3,30];case 28:A.sent(),A.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},Ds.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},Ds.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},Ds.prototype.formatPath=function(A){var r=this;A.forEach(function(A,e){var t=$n(A)?A.start:A;0===e?r.ctx.moveTo(t.x,t.y):r.ctx.lineTo(t.x,t.y),$n(A)&&r.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y)})},Ds.prototype.renderRepeat=function(A,e,t,r){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,r),this.ctx.fill(),this.ctx.translate(-t,-r)},Ds.prototype.resizeImage=function(A,e,t){if(A.width===e&&A.height===t)return A;var r=(null!==(r=this.canvas.ownerDocument)&&void 0!==r?r:document).createElement("canvas");return r.width=Math.max(1,e),r.height=Math.max(1,t),r.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),r},Ds.prototype.renderBackgroundImage=function(f){return a(this,void 0,void 0,function(){var h,e,d,t,r,B;return H(this,function(A){switch(A.label){case 0:h=f.styles.backgroundImage.length-1,e=function(e){var t,r,B,n,s,o,i,Q,c,a,g,w,U,l,C,u,F;return H(this,function(A){switch(A.label){case 0:if(0!==e.type)return[3,5];t=void 0,r=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,d.context.cache.match(r)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),d.context.logger.error("Error loading background-image "+r),[3,4];case 4:return t&&(B=Cs(f,h,[t.width,t.height,t.width/t.height]),o=B[0],g=B[1],w=B[2],c=B[3],a=B[4],s=d.ctx.createPattern(d.resizeImage(t,c,a),"repeat"),d.renderRepeat(o,s,g,w)),[3,6];case 5:1===e.type?(F=Cs(f,h,[null,null,null]),o=F[0],g=F[1],w=F[2],c=F[3],a=F[4],C=Ee(e.angle,c,a),l=C[0],B=C[1],i=C[2],u=C[3],Q=C[4],(F=document.createElement("canvas")).width=c,F.height=a,C=F.getContext("2d"),n=C.createLinearGradient(B,u,i,Q),pe(e.stops,l).forEach(function(A){return n.addColorStop(A.stop,ie(A.color))}),C.fillStyle=n,C.fillRect(0,0,c,a),0<c&&0<a&&(s=d.ctx.createPattern(F,"repeat"),d.renderRepeat(o,s,g,w))):2===e.type&&(u=Cs(f,h,[null,null,null]),o=u[0],i=u[1],Q=u[2],c=u[3],a=u[4],l=0===e.position.length?[ge]:e.position,g=Ue(l[0],c),w=Ue(l[l.length-1],a),C=function(A,e,t,r,B){var n,s,o,i,Q=0,c=0;switch(A.size){case 0:0===A.shape?Q=c=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-B)):1===A.shape&&(Q=Math.min(Math.abs(e),Math.abs(e-r)),c=Math.min(Math.abs(t),Math.abs(t-B)));break;case 2:0===A.shape?Q=c=Math.min(Ie(e,t),Ie(e,t-B),Ie(e-r,t),Ie(e-r,t-B)):1===A.shape&&(n=Math.min(Math.abs(t),Math.abs(t-B))/Math.min(Math.abs(e),Math.abs(e-r)),o=(s=ye(r,B,e,t,!0))[0],i=s[1],c=n*(Q=Ie(o-e,(i-t)/n)));break;case 1:0===A.shape?Q=c=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-B)):1===A.shape&&(Q=Math.max(Math.abs(e),Math.abs(e-r)),c=Math.max(Math.abs(t),Math.abs(t-B)));break;case 3:0===A.shape?Q=c=Math.max(Ie(e,t),Ie(e,t-B),Ie(e-r,t),Ie(e-r,t-B)):1===A.shape&&(n=Math.max(Math.abs(t),Math.abs(t-B))/Math.max(Math.abs(e),Math.abs(e-r)),o=(s=ye(r,B,e,t,!1))[0],i=s[1],c=n*(Q=Ie(o-e,(i-t)/n)))}return Array.isArray(A.size)&&(Q=Ue(A.size[0],r),c=2===A.size.length?Ue(A.size[1],B):Q),[Q,c]}(e,g,w,c,a),F=C[0],u=C[1],0<F&&0<u&&(U=d.ctx.createRadialGradient(i+g,Q+w,0,i+g,Q+w,F),pe(e.stops,2*F).forEach(function(A){return U.addColorStop(A.stop,ie(A.color))}),d.path(o),d.ctx.fillStyle=U,F!==u?(l=f.bounds.left+.5*f.bounds.width,C=f.bounds.top+.5*f.bounds.height,F=1/(u=u/F),d.ctx.save(),d.ctx.translate(l,C),d.ctx.transform(1,0,0,u,0,0),d.ctx.translate(-l,-C),d.ctx.fillRect(i,F*(Q-C)+C,c,a*F),d.ctx.restore()):d.ctx.fill())),A.label=6;case 6:return h--,[2]}})},d=this,t=0,r=f.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<r.length?(B=r[t],[5,e(B)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},Ds.prototype.renderSolidBorder=function(e,t,r){return a(this,void 0,void 0,function(){return H(this,function(A){return this.path(ws(r,t)),this.ctx.fillStyle=ie(e),this.ctx.fill(),[2]})})},Ds.prototype.renderDoubleBorder=function(t,r,B,n){return a(this,void 0,void 0,function(){var e;return H(this,function(A){switch(A.label){case 0:return r<3?[4,this.renderSolidBorder(t,B,n)]:[3,2];case 1:return A.sent(),[2];case 2:return e=function(A,e){switch(e){case 0:return Hs(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Hs(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Hs(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);default:return Hs(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}}(n,B),this.path(e),this.ctx.fillStyle=ie(t),this.ctx.fill(),e=function(A,e){switch(e){case 0:return Hs(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Hs(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Hs(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);default:return Hs(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}}(n,B),this.path(e),this.ctx.fill(),[2]}})})},Ds.prototype.renderNodeBackgroundAndBorders=function(c){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q=this;return H(this,function(A){switch(A.label){case 0:return(this.applyEffects(c.getEffects(2)),e=c.container.styles,t=!oe(e.backgroundColor)||e.backgroundImage.length,r=[{style:e.borderTopStyle,color:e.borderTopColor,width:e.borderTopWidth},{style:e.borderRightStyle,color:e.borderRightColor,width:e.borderRightWidth},{style:e.borderBottomStyle,color:e.borderBottomColor,width:e.borderBottomWidth},{style:e.borderLeftStyle,color:e.borderLeftColor,width:e.borderLeftWidth}],B=Ms(Es(e.backgroundClip,0),c.curves),t||e.boxShadow.length)?(this.ctx.save(),this.path(B),this.ctx.clip(),oe(e.backgroundColor)||(this.ctx.fillStyle=ie(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){Q.ctx.save();var t,r,B,n,e=ts(c.curves),s=A.inset?0:1e4,o=(t=-s+(A.inset?1:-1)*A.spread.number,r=(A.inset?1:-1)*A.spread.number,B=A.spread.number*(A.inset?-2:2),n=A.spread.number*(A.inset?-2:2),e.map(function(A,e){switch(e){case 0:return A.add(t,r);case 1:return A.add(t+B,r);case 2:return A.add(t+B,r+n);case 3:return A.add(t,r+n)}return A}));A.inset?(Q.path(e),Q.ctx.clip(),Q.mask(o)):(Q.mask(e),Q.ctx.clip(),Q.path(o)),Q.ctx.shadowOffsetX=A.offsetX.number+s,Q.ctx.shadowOffsetY=A.offsetY.number,Q.ctx.shadowColor=ie(A.color),Q.ctx.shadowBlur=A.blur.number,Q.ctx.fillStyle=A.inset?ie(A.color):"rgba(0,0,0,1)",Q.ctx.fill(),Q.ctx.restore()}),A.label=2;case 2:s=n=0,o=r,A.label=3;case 3:return s<o.length?0!==(i=o[s]).style&&!oe(i.color)&&0<i.width?2!==i.style?[3,5]:[4,this.renderDashedDottedBorder(i.color,i.width,n,c.curves,2)]:[3,11]:[3,13];case 4:return A.sent(),[3,11];case 5:return 3!==i.style?[3,7]:[4,this.renderDashedDottedBorder(i.color,i.width,n,c.curves,3)];case 6:return A.sent(),[3,11];case 7:return 4!==i.style?[3,9]:[4,this.renderDoubleBorder(i.color,i.width,n,c.curves)];case 8:return A.sent(),[3,11];case 9:return[4,this.renderSolidBorder(i.color,n,c.curves)];case 10:A.sent(),A.label=11;case 11:n++,A.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},Ds.prototype.renderDashedDottedBorder=function(g,w,U,l,C){return a(this,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a;return H(this,function(A){return this.ctx.save(),Q=function(A,e){switch(e){case 0:return fs(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return fs(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return fs(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);default:return fs(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}}(l,U),e=ws(l,U),2===C&&(this.path(e),this.ctx.clip()),s=$n(e[0])?(t=e[0].start.x,e[0].start.y):(t=e[0].x,e[0].y),o=$n(e[1])?(r=e[1].end.x,e[1].end.y):(r=e[1].x,e[1].y),B=0===U||2===U?Math.abs(t-r):Math.abs(s-o),this.ctx.beginPath(),3===C?this.formatPath(Q):this.formatPath(e.slice(0,2)),n=w<3?3*w:2*w,s=w<3?2*w:w,3===C&&(s=n=w),o=!0,B<=2*n?o=!1:B<=2*n+s?(n*=i=B/(2*n+s),s*=i):(Q=Math.floor((B+s)/(n+s)),i=(B-Q*n)/(Q-1),s=(Q=(B-(Q+1)*n)/Q)<=0||Math.abs(s-i)<Math.abs(s-Q)?i:Q),o&&(3===C?this.ctx.setLineDash([0,n+s]):this.ctx.setLineDash([n,s])),3===C?(this.ctx.lineCap="round",this.ctx.lineWidth=w):this.ctx.lineWidth=2*w+1.1,this.ctx.strokeStyle=ie(g),this.ctx.stroke(),this.ctx.setLineDash([]),2===C&&($n(e[0])&&(c=e[3],a=e[0],this.ctx.beginPath(),this.formatPath([new Zn(c.end.x,c.end.y),new Zn(a.start.x,a.start.y)]),this.ctx.stroke()),$n(e[1])&&(c=e[1],a=e[2],this.ctx.beginPath(),this.formatPath([new Zn(c.end.x,c.end.y),new Zn(a.start.x,a.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},Ds.prototype.render=function(B){return a(this,void 0,void 0,function(){return H(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ie(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),t=new as(e=B,null),r=new cs(t),hs(t,r,r,e=[]),ds(t.container,e),[4,this.renderStack(r)];case 1:return A.sent(),this.applyEffects([]),[2,this.canvas]}var e,t,r})})},Ds);function Ds(A,e){A=Ls.call(this,A,e)||this;return A._activeEffects=[],A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),e.canvas||(A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px"),A.fontMetrics=new Ks(document),A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.ctx.textBaseline="bottom",A._activeEffects=[],A.context.logger.debug("Canvas renderer initialized ("+e.width+"x"+e.height+") with scale "+e.scale),A}var vs,xs=function(A){return A instanceof LB||(A instanceof yB||A instanceof pB&&A.type!==dB&&A.type!==hB)},Ms=function(A,e){switch(A){case 0:return ts(e);case 2:return[e.topLeftContentBox,e.topRightContentBox,e.bottomRightContentBox,e.bottomLeftContentBox];default:return rs(e)}},Ss=function(A){switch(A){case 1:return"center";case 2:return"right";default:return"left"}},Ts=["-apple-system","system-ui"],Gs=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(A){return-1===Ts.indexOf(A)}):A},Os=(A(Vs,vs=he),Vs.prototype.render=function(t){return a(this,void 0,void 0,function(){var e;return H(this,function(A){switch(A.label){case 0:return e=Nr(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,ks(e)];case 1:return e=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ie(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(e,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},Vs);function Vs(A,e){A=vs.call(this,A,e)||this;return A.canvas=e.canvas||document.createElement("canvas"),A.ctx=A.canvas.getContext("2d"),A.options=e,A.canvas.width=Math.floor(e.width*e.scale),A.canvas.height=Math.floor(e.height*e.scale),A.canvas.style.width=e.width+"px",A.canvas.style.height=e.height+"px",A.ctx.scale(A.options.scale,A.options.scale),A.ctx.translate(-e.x,-e.y),A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+e.width+"x"+e.height+" at "+e.x+","+e.y+") with scale "+e.scale),A}var ks=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Rs=(Ns.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.prototype.getTime=function(){return Date.now()-this.start},Ns.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,t([this.id,this.getTime()+"ms"],A))},Ns.prototype.warn=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.warn?console.warn.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,t([this.id,this.getTime()+"ms"],A)):this.info.apply(this,A))},Ns.instances={},Ns);function Ns(A){var e=A.id,A=A.enabled;this.id=e,this.enabled=A,this.start=Date.now()}var Ps=(Xs.instanceCount=1,Xs);function Xs(A,e){this.windowBounds=e,this.instanceName="#"+Xs.instanceCount++,this.logger=new Rs({id:this.instanceName,enabled:A.logging}),this.cache=null!==(e=A.cache)&&void 0!==e?e:new On(this,A)}"undefined"!=typeof window&&Tn.setContext(window);var Js=function(u,F){return a(void 0,void 0,void 0,function(){var e,t,r,B,n,s,o,i,Q,c,a,g,w,U,l,C;return H(this,function(A){switch(A.label){case 0:if(!u||"object"!=typeof u)return[2,Promise.reject("Invalid element provided as first argument")];if(!(e=u.ownerDocument))throw new Error("Element is not attached to a Document");if(!(t=e.defaultView))throw new Error("Document is not attached to a Window");return w={allowTaint:null!==(U=F.allowTaint)&&void 0!==U&&U,imageTimeout:null!==(c=F.imageTimeout)&&void 0!==c?c:15e3,proxy:F.proxy,useCORS:null!==(a=F.useCORS)&&void 0!==a&&a},U=h({logging:null===(g=F.logging)||void 0===g||g,cache:F.cache},w),c={windowWidth:null!==(c=F.windowWidth)&&void 0!==c?c:t.innerWidth,windowHeight:null!==(a=F.windowHeight)&&void 0!==a?a:t.innerHeight,scrollX:null!==(g=F.scrollX)&&void 0!==g?g:t.pageXOffset,scrollY:null!==(w=F.scrollY)&&void 0!==w?w:t.pageYOffset},a=new d(c.scrollX,c.scrollY,c.windowWidth,c.windowHeight),g=new Ps(U,a),c=null!==(w=F.foreignObjectRendering)&&void 0!==w&&w,w={allowTaint:null!==(U=F.allowTaint)&&void 0!==U&&U,onclone:F.onclone,ignoreElements:F.ignoreElements,inlineImages:c,copyStyles:c},g.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),U=new dn(g,u,w),(w=U.clonedReferenceElement)?[4,U.toIFrame(e,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return(r=A.sent(),l=jB(w)||"HTML"===w.tagName?function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");A=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),t=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new d(0,0,A,t)}(w.ownerDocument):f(g,w),B=l.width,n=l.height,s=l.left,o=l.top,i=Ys(g,w,F.backgroundColor),l={canvas:F.canvas,backgroundColor:i,scale:null!==(l=null!==(l=F.scale)&&void 0!==l?l:t.devicePixelRatio)&&void 0!==l?l:1,x:(null!==(l=F.x)&&void 0!==l?l:0)+s,y:(null!==(l=F.y)&&void 0!==l?l:0)+o,width:null!==(l=F.width)&&void 0!==l?l:Math.ceil(B),height:null!==(l=F.height)&&void 0!==l?l:Math.ceil(n)},c)?(g.logger.debug("Document cloned, using foreign object rendering"),[4,new Os(g,l).render(w)]):[3,3];case 2:return Q=A.sent(),[3,5];case 3:return g.logger.debug("Document cloned, element located at "+s+","+o+" with size "+B+"x"+n+" using computed rendering"),g.logger.debug("Starting DOM parsing"),C=kB(g,w),i===C.styles.backgroundColor&&(C.styles.backgroundColor=Le.TRANSPARENT),g.logger.debug("Starting renderer for element at "+l.x+","+l.y+" with size "+l.width+"x"+l.height),[4,new bs(g,l).render(C)];case 4:Q=A.sent(),A.label=5;case 5:return null!==(C=F.removeContainer)&&void 0!==C&&!C||dn.destroy(r)||g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"),g.logger.debug("Finished rendering"),[2,Q]}})})},Ys=function(A,e,t){var r=e.ownerDocument,B=r.documentElement?fe(A,getComputedStyle(r.documentElement).backgroundColor):Le.TRANSPARENT,n=r.body?fe(A,getComputedStyle(r.body).backgroundColor):Le.TRANSPARENT,t="string"==typeof t?fe(A,t):null===t?Le.TRANSPARENT:4294967295;return e===r.documentElement?oe(B)?oe(n)?t:n:B:t};return function(A,e){return Js(A,e=void 0===e?{}:e)}});
var culc, culclist;
;(function(){
	'use strict';
	var mfateeh, soorahuxra, trkb3dd = 0, trkbt3dl = 'trkb';
	var i3daltarkeeb = function () {
		trkb3dd = preferences.get(trkbt3dl, 1);
		if (trkb3dd == 0) trkb3dd = 1;
		else if (trkb3dd == 1) trkb3dd = 2;
		else if (trkb3dd == 2) trkb3dd = 3;
		else trkb3dd = 0;
		culc.tarkeeb();
		preferences.set(trkbt3dl, trkb3dd);
	};
	culc = {
		iHmal: function () {
			html2canvas(mfateeh.sooraat).then(function (cnv) {
				var e = document.createElement('a');
				e.href = cnv.toDataURL('image/jpeg', .65);
				e.download = 'culc-'+new Date().getTime();
				e.click();
				e.remove();
			});
		},
		tarkeeb: function () {
			setdata(mfateeh.sooraat, trkbt3dl, trkb3dd);
		},
		rafa3: function (item) {
			mfateeh.rafa3zir.click();
			soorahuxra = culclist.axavmfateeh(item.uid);
			soorahuxra.soorah.onload = function () {
				var sw = soorahuxra.soorah.naturalWidth ,
					sh = soorahuxra.soorah.naturalHeight ;
				var bi = 'backgroundImage';
				if (item.uid == 1) setcss(mfateeh.awwal, bi, 'url('+soorahuxra.soorah.src+')');
				if (item.uid == 2) setcss(mfateeh.caani, bi, 'url('+soorahuxra.soorah.src+')');
				if (item.uid == 3) setcss(mfateeh.calic, bi, 'url('+soorahuxra.soorah.src+')');
				culc.jaddad();
			};
		},
		jaddad: function () {
			culclist.adapter.each(function (item) {
				if (item.uid == 1) innertext(mfateeh.awwalm, item.matn);
				if (item.uid == 2) innertext(mfateeh.caanim, item.matn);
				if (item.uid == 3) innertext(mfateeh.calicm, item.matn);
			});
		},
		adaaf: function (item) { Hooks.run('dialog', {
			x: 128,
			c: function (k) {
				item = item || {};
				var o = {
					uid: item.uid,
					matn: k || '',
				};
				culclist.set( o );
				culclist.select( culclist.id2num(o.uid) );
				culc.jaddad();
			},
			m: 'matn',
			a: (item||{}).matn,
			q: 'matn'
		}); },
	};
	Hooks.set('ready', function () {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('_.js').then(function () {
				$.log('sw regd')
			});
		}
		mfateeh = view.mfateeh('main');
		mfateeh.rafa3zir.oninput = function () {
			var file = mfateeh.rafa3zir.files[0];
			if (file && soorahuxra) {
				soorahuxra.soorah.hidden = 0;
				soorahuxra.soorah.src = URL.createObjectURL(file);
			}
		};
		mfateeh.sooraat.style.zoom = (1 / window.devicePixelRatio);
		navigator.spatialNavigationEnabled = false;
		webapp.statusbarpadding();
		culclist = list( mfateeh.list ).idprefix('culc')
						.listitem('culcitem');
		culclist.beforeset = function (item) {
			return item;
		};
		culclist.afterset = function (item, clone, k) {
		};
		culclist.onpress = function (item, key, uid) {
			if (item && key === K.en) culc.rafa3(item);
			if (item && key === K.sl) culc.adaaf(item);
		};
		[1, 2, 3].forEach(function (item, i) {
			culclist.set({
				uid: item,
				matn: 'matn '+item,
			});
		});
		culclist.select();
		if (preferences) trkb3dd = preferences.get(trkbt3dl, 1) || 0;
		settings.adaaf('tarkeeb', function () {
			trkb3dd = preferences.get(trkbt3dl, 1);
			culc.tarkeeb();
			return trkb3dd;
		}, function () {
			i3daltarkeeb();
		});
		culc.jaddad();
		culc.tarkeeb();
	});
	Hooks.set('viewready', function (args) {
		switch (args.name) {
			case 'main':
				webapp.header();
				softkeys.set(K.sl, function () {
					culclist.press(K.sl);
				}, 0, 'iconedit');
				softkeys.set('5', function () {
					i3daltarkeeb();
					culc.tarkeeb();
				}, '5', 'iconflare');
				softkeys.set('3', function () {
					culc.iHmal();
				}, '3', 'iconfiledownload');
				softkeys.list.basic(culclist);
				break;
		}
	});
})();

