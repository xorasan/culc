//+ adaaf, rafa3zir
var culc, culclist;
;(function(){
	'use strict';
	var mfateeh, soorahuxra, trkb3dd = 0, trkbt3dl = 'trkb';
	
	var i3daltarkeeb = function () {
		trkb3dd = preferences.get(trkbt3dl, 1);
		if (trkb3dd == 0) trkb3dd = 1;
		else if (trkb3dd == 1) trkb3dd = 2;
		else if (trkb3dd == 2) trkb3dd = 3;
//		else if (trkb3dd == 3) trkb3dd = 4;
//		else if (trkb3dd == 4) trkb3dd = 5;
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
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/_.js').then(function () {
				$.log('sw regd')
			});
		}

		mfateeh = view.mfateeh('XPO.main');
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

		if (preferences) trkb3dd = preferences.get(trkbt3dl, 1) || 0;
		
		settings.adaaf('XPO.tarkeeb', function () {
			trkb3dd = preferences.get(trkbt3dl, 1);
			culc.tarkeeb();
			return trkb3dd;
		}, function () {
			i3daltarkeeb();
		});

		culc.jaddad();
		culc.tarkeeb();
	});
	Hooks.set('XPO.viewready', function (args) {
		switch (args.XPO.name) {
			case 'XPO.main':
				webapp.header();

				softkeys.set(K.sl, function () {
					culclist.press(K.sl);
				}, 0, 'XPO.iconedit');
				softkeys.set('5', function () {
					i3daltarkeeb();
					culc.tarkeeb();
				}, '5', 'XPO.iconflare');
				softkeys.set('3', function () {
					culc.iHmal();
				}, '3', 'XPO.iconfiledownload');

				softkeys.list.basic(culclist);
				break;
		}
	});

})();
