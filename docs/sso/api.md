# oAuth API

## Create an Access Token

### API endpoint

```
https://api.helpmonks.com/p/sso/oauth/create_token
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
        <td>access_secret</td>
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

## Example

```
POST : https://api.helpmonks.com/p/sso/oauth/create_token
{
    "access_id" : "bedcdbb55b31ff7bacd9cb4b4e99abfc",
    "access_secret" : "13dee613cbc84826a33cc4c7effd17ee179ef0d1a06f4be9926a78aecf685f8a",
    "user_email" : "awesome@user.com"
}
```

### Result

```
{
    "access_token": "71ff80d51fd57fdf9c11172230762b64",
    "user": {
        "id": "5a3ddc31bc3056898f52752d",
        "email": "awesome@user.com",
        "first_name": "Awesome",
        "last_name": "Monk"
    },
    "access_id": "bedcdbb55b31ff7bacd9cb4b4e99abfc"
}
```

