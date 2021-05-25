# Automation: Remove user(s) from distribution list

### Availability

Available as of March 1st, 2021. Version 2.9.0

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/engage/campaign/list/user/remove

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
        <td>user_id</td>
        <td>Yes/No</td>
        <td>ID of the user to add</td>
        <td>String</td>
    </tr>
    <tr>
        <td>user_ids</td>
        <td>Yes/No</td>
        <td>An array ID's of users</td>
        <td>String</td>
    </tr>
</table>

### Important Note

Use "user_id" to remove one user or "user_ids" to remove multiple users from a distribution list.

### Example

```
{
    "list_id" : "934875p9o4j5p9095ul4k5j",
    "user_id" : "73958uk2hyuiy234857"
}
```

or

```
{
    "list_id" : "934875p9o4j5p9095ul4k5j",
    "user_ids" : [ "73958uk2hyuiy234857", "jsadhfki8798798das7f98" ]
}
```



