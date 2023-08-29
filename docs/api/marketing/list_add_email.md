# Automation: Add email(s) to distribution list

### Availability

Available as of October 1st, 2021. Version 2.9.5

### Protocol
POST

### URL
https://api.helpmonks.com../v1/engage/campaign/list/email/add

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>list_id</td>
        <td>Yes</td>
        <td>ID of the distribution list</td>
        <td>String</td>
    </tr>
    <tr>
        <td>email</td>
        <td>Yes/No</td>
        <td>Email address to add</td>
        <td>String</td>
    </tr>
    <tr>
        <td>emails</td>
        <td>Yes/No</td>
        <td>An array of email addresses</td>
        <td>Array</td>
    </tr>
     <tr>
        <td>labels</td>
        <td>No</td>
        <td>An array of one or many label-ids to add to the contact record</td>
        <td>Array</td>
    </tr>
</table>

### Important Note

Add one or many email addresses to a distribution list.

### Example

```
{
    "list_id" : "934875p9o4j5p9095ul4k5j",
    "email" : "awesome@user.com",
    "labels" : [ "134375p9o2j5p9095ul4k5a" ]
}
```

or

```
{
    "list_id" : "934875p9o4j5p9095ul4k5j",
    "user_ids" : [ "awesome@user.com", "great@user.com" ],
    "labels" : [ "134375p9o2j5p9095ul4k5a" ]
}
```



