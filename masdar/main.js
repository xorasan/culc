//+ adaaf, rafa3zir
var culc, culclist;
;(function(){
	'use strict';
	var mfateeh, soorahuxra;

	culc = {
		rafa3: function (item) {
			mfateeh.rafa3zir.click();
			soorahuxra = culclist.axavmfateeh(item.uid);
			soorahuxra.soorah.onload = function () {
				var sw		= soorahuxra.soorah.naturalWidth	,
					sh		= soorahuxra.soorah.naturalHeight	;

//				$.log(sw, sh);
				
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
		adaaf: function (item) { Hooks.run('XPO.dialog', {
			x: 128,
			c: function (k) {
				item = item || {};
				var o = {
					uid:	item.uid,
					matn:	k || '',
//					soorah:	item.soorah || '',
				};
				culclist.set( o );
				culclist.select( culclist.id2num(o.uid) );
				culc.jaddad();
			},
			m: 'XPO.matn',
			a: (item||{}).matn,
			q: 'XPO.matn'
		}); },
	};

	Hooks.set('XPO.ready', function () {
		mfateeh = view.mfateeh('XPO.main');
		mfateeh.rafa3zir.oninput = function () {
			var file = mfateeh.rafa3zir.files[0];
			if (file && soorahuxra) {
				soorahuxra.soorah.hidden = 0;
				soorahuxra.soorah.src = URL.createObjectURL(file);
			}
		};
		mfateeh.sooraat.style.zoom = (1 / window.devicePixelRatio);
		
		webapp.statusbarpadding();

		culclist = list( mfateeh.XPO.list ).idprefix('XPO.culc')
						.listitem('XPO.culcitem');
		
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
//				soorah: item,
			});
		});
		culclist.select();
	});
	Hooks.set('XPO.viewready', function (args) {
		switch (args.XPO.name) {
			case 'XPO.main':
				webapp.header();

				softkeys.set(K.sl, function () {
					culclist.press(K.sl);
				}, 0, 'XPO.iconedit');

				softkeys.list.basic(culclist);
				break;
		}
	});

})();
