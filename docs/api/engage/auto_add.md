# Automation: Add user(s) to campaign

### Availability

Available as of March 1st, 2021. Version 2.9.0

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/engage/campaign/auto/user/add

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>campaign_id</td>
        <td>Yes</td>
        <td>ID of the campaign</td>
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
        <td>Array</td>
    </tr>
</table>

### Important Note

Use "user_id" to add one user or "user_ids" to add multiple users to a campaign.

### Example

```
{
    "campaign_id" : "934875p9o4j5p9095ul4k5j",
    "user_id" : "73958uk2hyuiy234857"
}
```

or

```
{
    "campaign_id" : "934875p9o4j5p9095ul4k5j",
    "user_ids" : [ "73958uk2hyuiy234857", "jsadhfki8798798das7f98" ]
}
```



