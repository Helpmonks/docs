# Mailbox Create

### Availability

Available as of Sept. 12th, 2017. Version 1.6.3

### Protocol
POST

### URL
https://api.helpmonks.com/api/v1/mailbox/create

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>name</td>
        <td>Yes</td>
        <td>Name of the mailbox</td>
        <td>String</td>
    </tr>
    <tr>
        <td>email</td>
        <td>Yes</td>
        <td>Email-address of the mailbox</td>
        <td>String</td>
    </tr>
    <tr>
        <td>from</td>
        <td>No</td>
        <td>Define from whom to send replies: mailbox or user</td>
        <td>String</td>
    </tr>
    <tr>
        <td>users</td>
        <td>No</td>
        <td>An array of users of the mailbox</td>
        <td>Array with ObjectId</td>
    </tr>
    <tr>
        <td>active</td>
        <td>No</td>
        <td>If mailbox should be active. Value is true or false.</td>
        <td>Boolean</td>
    </tr>
</table>

### Important Note

In order to see the newly created mailbox, users need to sign out of Helpmonks!

### Example

```
{
    "name" : "Support Mailbox",
    "email" : "support@domain.com"
}
```

### Returned data

*Please refer to the **[Mailbox Data Model](/api/models/mailbox/)** to see the data structure being returned*

