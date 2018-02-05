# Update an Access Token

Will create a new access_token for the user

### API endpoint

```
https://subdomain.helpmonks.com/p/sso/oauth/remove_token
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
        <td>access_token</td>
        <td>Yes</td>
        <td>String</td>
        <td>Existing token of the user</td>
    </tr>
</table>

## Example

```
POST : https://subdomain.helpmonks.com/p/sso/oauth/remove_token
{
    "access_id" : "bedcdbb55b31ff7bacd9cb4b4e99abfc",
    "access_token" : "71ff80d51fd57fdf9c11172230762b64"
}
```

### Result

```
a76c3a8b969d38649ffb77e469ccff6a
```

The result contains the access_token which you can now use to [log into the users Helpmonks account](/sso/login/) or use for other SSO API calls.

### Statuscode

On success will return 200

Authenticating with invalid credentials will return 401

Errors will return 500