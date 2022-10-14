+include managed.css.slang

@font-face
	font-family		'xorasani-nasx'
	src				url('xorasani-nasx.woff') format('woff'),
					url('xorasani-nasx.ttf') format('truetype')
.sooraat
	width		600px
	height		1000px
	margin		0 auto
	border		1px solid @secondary
	background	@primary
.sooraat .row
	width				600px
	height				333px
	background-size		cover
	background-position	100%
	background-repeat	no-repeat
[data-trkb="1"].sooraat .row
	background-size		55%
	background-position	10% 50%
	padding-left		350px
[data-trkb="2"].sooraat .row
	background-size		55%
	background-position	90% 50%
	padding-right		350px
[data-trkb="3"].sooraat .row
	background-size		contain
	background-position	100% 50%
	padding				250px 340px 0 0
.sooraat .row .matn
	font-size			350%
	font-family			xorasani-nasx, Segoe UI
	text-shadow			0 0 35px @primary, 0 0 35px @primary, 0 0 1px @primary


//if max-width = 640px
//	.maHdood
//		overflow			auto
//		max-height			70vh








