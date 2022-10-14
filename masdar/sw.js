var channel = new BroadcastChannel('_'),
	log = function () {
		console.log.apply(console, arguments);
	}, post = function (m) {
		channel.postMessage(m);
	};

channel.addEventListener('message', function (e) {
	log( 'sw message', e.data );
});

self.addEventListener('install', function(e) {
	log('sw install');
	log('sw BUILDNUMBER');
});


self.addEventListener('activate', function(e) {
	log('sw activate');
	post({_:BUILDNUMBER});

	/*
	 * Fixes a corner case in which the app wasn't returning the latest data.
	 * The code below essentially lets you activate the service worker faster.
	 */
	return self.clients.claim();
});