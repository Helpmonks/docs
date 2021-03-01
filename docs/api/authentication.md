# Authentication

All API requests have to contain an authentication header with the API key of a user. This is a standard **Basic Authentication header** and should be in the following format:

```
authentication: {
    username : "b4dc4a8c0a9543af8342b6c68b1af918" <-- your API key,
    password : "p" <-- any string
}
```

As authentication is done with the API key, but the Basic Authentication protocol requires a password, you can use any string value as a password.

Please see the documentation of your preferred language how to create and pass along the authentication header.

## Obtaining your API key

You can generate one or more API keys in your profile within the Helpmonks application.

![](/images/api_keys.png)

Please make sure to keep your API key a secret. A good practice is to renew your API key every 6 months.

## Permissions

Your permissions within Helpmonks will also apply to the API, i.e. if you use the API key of a user who is an Administrator you will also have Administrator access with the API. On the other hand, a user with "user" permissions will not be able to conduct certain actions with the API. These API requests will receive a validation error message in the returning data structure.
