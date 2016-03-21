# Mailbox FindById

### Protocol
GET

### URL
https://(subdomain).helpmonks.com/api/v1/user/mailbox/findbyid/(id)

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>ID</td>
        <td>Yes</td>
        <td>ObjectId</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Mailbox Data Model](/api/models/mailbox/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
https://(subdomain).helpmonks.com/api/v1/mailbox/findbyid/54708b4cd71ef2dbdb557b9d
```

### Returned data

*Please refer to the **[Mailbox Data Model](/api/models/mailbox/)** to see the data structure being returned*

