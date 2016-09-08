# Securing Web Apps

app building, app security, authentication, api integration, and advanced javascript

_Sources_
* https://blog.risingstack.com/node-js-security-tips/
* https://developer.mozilla.org/en-US/docs/Web/Security


## Attacks
XSS: Cross Site Scripting
CSRF: Cross Site Request Forgery
Cookie Theft: Stealing cookies to impersonate users
HPKP: HTTP Public Key Pinning (man in the middle attacks)

### Content Security Policy
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP
* Helps protect against: XSS, data injection
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/

These policies are urls you set on your  header which tells the browser which sites
it's allowed to fetch content from (in this case, your site). This prevents hijacking
of your content via XSS and data injection.

### HTTPS
* https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security
* Helps protect: user information

Strict Transport Security tells browsers to render your site only via https.

### CORS
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#The_HTTP_response_headers
* 

CORS allows websites to share resources. Basically, you can configure your headers
to allow CORS to/from other sites.

### Reverse Proxy
* NGINX
* https://www.nginx.com/blog/5-performance-tips-for-node-js-applications/

This is a web server deployed in "front" of your app server to manage requests. It's
typically used with Nodejs to handle static files, load balancing, reverse proxy and
security measures.

### Cookies and Sessions

Keep user data secure by signing cookies and sessions and storing them securely.


### Secure Passwords

Data encryption is essential. User information shouldn't be transmitted "in the clear".
It should always be guarded by encryption.

### UUID

And added layer of database security.