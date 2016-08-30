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

### Using user data instead of ObjectId for company_user

The company_user_id object also accepts a user object in addition to a ObjectID. If a user object is provided the system will add the user or will look up the user with the email address.

Using a user object would look like this:

```
...
"from": {
  "company_user_id": {
    "email" : "email@user.com",
    "first_name" : "Awesome",
    "last_name" : "Customer"
  },
  "user_id": null
}
...
```

### Labels

You can add labels (one or many) at the same time as creating the conversation. The label(s) have to exist. You provide label(s) in an array. For example:

```
...
"labels" : [
  "Helpmonks",
  "Awesome"
]
...
```

The lookup for the label is not case-sensitive.

### Returned data

*Please refer to the **[Conversation Data Model](/api/models/conversation/)** to see the data structure being returned*

