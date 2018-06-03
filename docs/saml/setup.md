# SAML Setup

The SAML setup compromises of your "Identity provider credentials", the "Service providers credentials", and additional SAML settings. In order to configure all steps successfully, you should have access to your Identity provider portal.

## Identity provider credentials

Please sign in to your Identity provider's administration to get;

- Login URL
- Logout URL (optional)
- Public x509 certificate

Where you will find these credentials depends on your identity provider. Please find an example for [Auth0](/saml/example_auth0/) and [OneLogin](/saml/example_onelogin/).

Once you have all credentials you have to enter them into the SAML Identity provider tab.

![](/images/sso_saml_idp.png)

## Service provider credentials

Please click on the "Service provider" tab and copy the "Entity ID" and the "Assertion Consumer Service URL" to the respective fields in your Identity provider settings.

Again, the names of those settings might vary depending on your provider. Usually, they can be find under "Service provider".

![](/images/sso_saml_sp.png)

You can also enforce SAML sign-in and set [other SAML settings](/saml/settings/).