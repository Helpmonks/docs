# Customer Create

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/company_user/create

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>customer</td>
        <td>Yes</td>
        <td>Object containing the fields for this customer</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Customer Data Model](/api/models/customer/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{
    customer : {
        "email" : "customer@domain.com",
        "first_name" : "Customer",
        "last_name" : "Awesome",
        "notes" : "This is an awesome customer"
    }
}
```

### Returned data

*Please refer to the **[Customer Data Model](/api/models/customer/)** to see the data structure being returned*

