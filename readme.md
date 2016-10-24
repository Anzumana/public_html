[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/459/badge)](https://bestpractices.coreinfrastructure.org/projects/459)
Jekyll Blog Travis CI
[![Build Status](https://travis-ci.org/Anzumana/anzumana.github.io.svg?branch=master)](https://travis-ci.org/Anzumana/anzumana.github.io). 
#Anzumana.com
This is the  website code repo for anzumana.com
The individual Components to make the site work are :
//for the main site
[public_html](https://github.com/Anzumana/public_html)
// for any not used subdomain
[Content Hub](https://github.com/Anzumana/ContentHub)
// for the blog
[anzumana.github.io](https://github.com/Anzumana/anzumana.github.io)

I will be adding other repos her.
-----
#Notes
Use Rewrite Engine for Backwards Compitability with old link
[apache Docs on Rewrite](http://httpd.apache.org/docs/2.4/rewrite/remapping.html)
Legacy Links

RewriteEngine  on
RewriteRule    "^/foo\.html$"  "bar.html" 

	Redirect "/blog/2014_07_25_windowsdevelopment.html" "http://blog.anzumana.com/2014/07/25/windowsdevelopment.html"

	Redirect "/blog/2014_07_16_Blog_Automation.html" "http://blog.anzumana.com/2014/07/16/blog-automation.html"
	Redirect "/blog/2014_06_27_googleglasses.html" "http://blog.anzumana.com/2014/06/27/googleglasses.html"
	Redirect "/blog/2014_06_25_continuousintegration.html" "http://blog.anzumana.com/2014/06/25/continuousintegration.html"
	Redirect "/blog/2014_06_25_virtualhost.html" "http://blog.anzumana.com/2014/06/25/virtualhosting.html"
	Redirect "/blog/2013_10_22_ark.html" "http://blog.anzumana.com/2013/10/22/ark.html"
	Redirect "/blog/2013_10_22_uav.html" "http://blog.anzumana.com/2013/10/22/uav.html"
	Redirect "/blog/2013_10_22_ubuntu.html" "http://blog.anzumana.com/2013/10/22/ubuntu.html"

FAQ:
Why don't you have 1 main repo where all the stuff for the website goes?
I use different stacks for different part of my website so i can try all the new cool stuff.

