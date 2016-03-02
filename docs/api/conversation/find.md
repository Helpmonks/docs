# Customer Find

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/company_user/find

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

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    query : { 'first_name' : 'Nitai', 'email' : 'nitai@helpmonks.com' },
    fields : { 'first_name email' },
    options : { sort : { first_name: 'asc' } }
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

