# Get an Access Token

Will return an existing access_token of a user

### API endpoint

```
https://subdomain.helpmonks.com/p/sso/oauth/get_token
```

### Parameters

<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>access_id</td>
        <td>Yes</td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>user_email</td>
        <td>Yes</td>
        <td>String</td>
        <td></td>
    </tr>
</table>

### Example

```
POST : https://subdomain.helpmonks.com/p/sso/oauth/get_token
{
    "access_id" : "bedcdbb55b31ff7bacd9cb4b4e99abfc",
    "user_email" : "awesome@user.com"
}
```

### Result

```
71ff80d51fd57fdf9c11172230762b64
```

The result contains the access_token which you can now use to [log into the users Helpmonks account](/sso/login/) or use for other SSO API calls.

### Statuscode

On success will return 200

Authenticating with invalid credentials will return 401

Errors will return 500