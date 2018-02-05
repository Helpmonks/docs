# Single-Sign-On Introduction

The Helpmonks Single-Sign-On allows you to sign in as users to their Helpmonks accounts. This mainly enables third party vendors to embbed Helpmonks into their systems or for customers that wish to enable Single-Sign-On for their users.

## Single-Sign-On API URL

Single-Sign-On API requests should be done towards https://(yoursubdomain).helpmonks.com/p/sso. Please refer to the individidual guides in this section for the correct URL.

## Authentication

The current Single-Sign-On implementation is based on oAuth2. In order to access an account you first need to create an oAuth Access key pair. The Access key pair consists of an "access_id" and an "access_secret". You then use the Single-Sign-On API to retrieve an "access_token" for each user.

Please continue on to the [Authentication](/sso/authentication/) guide.

## Help

If you have any questions, please post a message to our [Helpmonks Developer forum](https://help.helpmonks.com). 