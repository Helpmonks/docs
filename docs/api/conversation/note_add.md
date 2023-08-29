# Conversation Add Note

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/conversation/note/add

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
    <tr>
        <td>notes</td>
        <td>Yes</td>
        <td>Object that containd notes to add</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    "id" : "569ed97edfeec6ccffb6c2ec",
    "notes" : [
        {
            "note" : "A note from the API"
        }
    ]
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

