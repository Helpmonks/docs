# Label FindOne

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/label/findone

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

*The available fields are documented in the **[Label Data Model](/api/models/label/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    query : { 'name' : 'Followup' },
    fields : { 'name' },
    options : { sort : { name: 'asc' } }
}
```

### Returned data

*Please refer to the **[Label Data Model](/api/models/label/)** to see the data structure being returned*

