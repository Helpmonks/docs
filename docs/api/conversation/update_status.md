# Conversation Update Status

### Protocol
GET

### URL
https://(subdomain).helpmonks.com/api/v1/conversation/status/(id)/(status)

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>id</td>
        <td>Yes</td>
        <td>ObjectId</td>
        <td></td>
    </tr>
    <tr>
        <td>status</td>
        <td>Yes</td>
        <td>New status</td>
        <td>Valid status's are "inbox", "closed", "spam" or "archieved"</td>
    </tr>
</table>

### Example

```
https://(subdomain).helpmonks.com/api/v1/conversation/status/54708b4cd71ef2dbdb557b9d/closed
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

