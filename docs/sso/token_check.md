# Check for an existing Access Token

Will return if the access token is valid or not

### API endpoint

```
https://subdomain.helpmonks.com/p/sso/oauth/check_token
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
        <td>The token of the user</td>
    </tr>
</table>

## Example

```
POST : https://subdomain.helpmonks.com/p/sso/oauth/check_token
{
    "access_id" : "bedcdbb55b31ff7bacd9cb4b4e99abfc",
    "access_token" : "71ff80d51fd57fdf9c11172230762b64"
}
```

### Result

```
The access token is valid
```


### Statuscode

On success will return 200

Authenticating with invalid credentials will return 401

Errors will return 500