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
Jekyll Blog Travis CI
[![Build Status](https://travis-ci.org/Anzumana/anzumana.github.io.svg?branch=master)](https://travis-ci.org/Anzumana/anzumana.github.io). 
#Notes
Use Rewrite Engine for Backwards Compitability with old link
[apache Docs on Rewrite](http://httpd.apache.org/docs/2.4/rewrite/remapping.html)

RewriteEngine  on
RewriteRule    "^/foo\.html$"  "bar.html" 

FAQ:
Why don't you have 1 main repo where all the stuff for the website goes?
I use different stacks for different part of my website so i can try all the new cool stuff.

