# Conversation Update Assignee

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/conversation/update/assignee

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
        <td>user_id</td>
        <td>Yes</td>
        <td>ObjectId of the Helpmonks user</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    "id" : "569ed97edfeec6ccffb6c2ec",
    "user_id" : "57c1e0f6c4be9b0a00d6b0cb"
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

