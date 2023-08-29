# Mailbox FindOne

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/mailbox/findone

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>query</td>
        <td>Yes</td>
        <td>Available column in object</td>
        <td></td>
    </tr>
    <tr>
        <td>fields</td>
        <td>No</td>
        <td>Available column name</td>
        <td></td>
    </tr>
    <tr>
        <td>options</td>
        <td>No</td>
        <td>Available options like sort, slice, etc.</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Mailbox Data Model](/api/models/mailbox/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    query : { 'name' : 'Support' },
    fields : { 'name' },
    options : { sort : { name: 'asc' } }
}
```

### Returned data

*Please refer to the **[Mailbox Data Model](/api/models/mailbox/)** to see the data structure being returned*

