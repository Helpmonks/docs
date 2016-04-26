# Conversation Create

This allows you to import existing converations and add them to your Helpmonks shared inbox.

### Protocol
POST

### URL
https://(subdomain).helpmonks.com/api/v1/conversation/create

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>body</td>
        <td>Yes</td>
        <td>Containing objects of new conversation</td>
        <td></td>
    </tr>
</table>

*The available fields are documented in the **[Conversation Data Model](/api/models/conversation/)**. Refer to the **[Query syntax documentation](/api/syntax)** on how to query against your records*

### Example

```
{ 
  "status": "inbox",
  "mailbox_id": "54b14a700e3db642552771ab",
  "assignee": null,
  "emails": [
    {
      "subject": "NEW",
      "body": "This should send it to the customer",
      "from": {
        "company_user_id": null,
        "user_id": "54708b4ad71ef2dbdb557b78"
      }
    }
  ],
  "labels": [
    "54708b4cd71ef2dbdb557b88",
    "54708b4cd71ef2dbdb557b89"
  ]
}
```

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

