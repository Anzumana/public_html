Jekyll Blog Travis CI
[![Build Status](https://travis-ci.org/Anzumana/anzumana.github.io.svg?branch=master)](https://travis-ci.org/Anzumana/anzumana.github.io). 
#Code remarks
	ack fixme
check in what files things need fixing
#Deploy
make sure no fixme statements are inside the repository



Use Rewrite Engine for Backwards Compitability with old link
[apache Docs on Rewrite](http://httpd.apache.org/docs/2.4/rewrite/remapping.html)
Legacy Links

RewriteEngine  on
	Redirect "/blog/2014_07_25_windowsdevelopment.html" "http://blog.anzumana.com/2014/07/25/windowsdevelopment.html"
	Redirect "/blog/2014_07_16_Blog_Automation.html" "http://blog.anzumana.com/2014/07/16/blog-automation.html"
	Redirect "/blog/2014_06_27_googleglasses.html" "http://blog.anzumana.com/2014/06/27/googleglasses.html"
	Redirect "/blog/2014_06_25_continuousintegration.html" "http://blog.anzumana.com/2014/06/25/continuousintegration.html"
	Redirect "/blog/2014_06_25_virtualhost.html" "http://blog.anzumana.com/2014/06/25/virtualhosting.html"
	Redirect "/blog/2013_10_22_ark.html" "http://blog.anzumana.com/2013/10/22/ark.html"
	Redirect "/blog/2013_10_22_uav.html" "http://blog.anzumana.com/2013/10/22/uav.html"
	Redirect "/blog/2013_10_22_ubuntu.html" "http://blog.anzumana.com/2013/10/22/ubuntu.html"

