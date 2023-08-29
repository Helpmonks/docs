# Conversation Update Label

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/company_user/label

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
        <td>ObjectId of the user to update</td>
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

*The available fields are documented in the **[Customer Data Model](/api/models/customer/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    "id" : "569ed97edfeec6ccffb6c2ec",
    "label" : ["Marketing"],
    "replace" : true
}
```

### Returned data

*Please refer to the **[Customer Data Model](/api/models/customer/)** to see the data structure being returned*

