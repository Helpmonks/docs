# Authentication

## Enable Single-Sign-On for your account

First let's check that you enabled the SSO (Single-Sign-On) plugin (please note that the SSO plugin is only available in our "GO FURTHER" plan). To do so, go to the plugin section in your Helpmonks account (you need to be an Administrator). If you see "SSO" in the left navigation you are good and can go to the next section.

To enable the SSO plugin, please click on the "Plugins directory" button in the right corner. Then from the list of plugins, go to the "SSO" plugin and enable it in the detail section.

![](/images/sso_plugin.png)

## Create an oAuth Access Key

In order to access any account, you need a "oAuth Access Key" pair, consisting of an "access_id" and an "access_token". To create a new key, click on the "Create a new access key" button.

You should then see in the list of Access Keys your new Access key pair. You can create as many keys as you need. Please keep in mind that these keys will give you full access to a user and to his Helpmonks account.

**NEVER SHARE YOUR SECRET ACCESS KEY!**

## Create an Access Token

Now that you have a key, you can go ahead and create "Access Tokens" for your user accounts.

Head over to the [Single-Sign-On](/sso/token_create/) API guide.