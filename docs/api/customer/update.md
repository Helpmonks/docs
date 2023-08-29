# Customer Update

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/company_user/update

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>customer</td>
        <td>Yes</td>
        <td>Object containing the ID of the user and fields to update</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Customer Data Model](/api/models/customer/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    customer : {
        'id' : '54708b4cd71ef2dbdb557b9d',
        'email' : 'nitai@helpmonks.com',
        "first_name" : "Nitai"
    }
}
```

### Returned data

*Please refer to the **[Customer Data Model](/api/models/customer/)** to see the data structure being returned*

