# Conversation Update

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/conversation/update

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
        <td>ObjectId of the conversation to update</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    id : '54708b4cd71ef2dbdb557b9d',
    (add available fields here to update)
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

### Note

You can only update existing fields and not create new values, i.e. company user, etc.
