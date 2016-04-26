# Conversation Delete Note

### Protocol
GET

### URL
https://(subdomain).helpmonks.com/api/v1/conversation/note/delete/(id)

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
        <td>ObjectId of the note</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
https://(subdomain).helpmonks.com/api/v1/conversation/note/delete/54708b4cd71ef2dbdb557b9d
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

