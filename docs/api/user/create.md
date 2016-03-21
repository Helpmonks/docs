# User Create

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/user/create

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>user</td>
        <td>Yes</td>
        <td>Object containing the fields for this user</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[User Data Model](/api/models/user/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    user : { 
        "email" : "user@domain.com",
        "first_name" : "User",
        "last_name" : "Awesome"
    }
}
```

### Returned data

*Please refer to the **[User Data Model](/api/models/user/)** to see the data structure being returned*

