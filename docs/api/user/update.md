# User Update

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/user/update

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
        <td>Object containing the ID of the user and fields to update</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[User Data Model](/api/models/user/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    user : { 
        'id' : '54708b4cd71ef2dbdb557b9d', 
        'email' : 'nitai@helpmonks.com',
        "first_name" : "Nitai"
    }
}
```

### Returned data

*Please refer to the **[User Data Model](/api/models/user/)** to see the data structure being returned*

