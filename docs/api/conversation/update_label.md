# Conversation Update Label

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/conversation/label

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
        <td>label</td>
        <td>Yes</td>
        <td>An array of labels</td>
        <td></td>
    </tr>
    <tr>
        <td>replace</td>
        <td>No</td>
        <td>Replace or append the labels</td>
        <td>true or false / if false will append labels. Default is false.</td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{ 
    "id" : "569ed97edfeec6ccffb6c2ec",
    "label" : ["SLA"],
    "replace" : true
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

