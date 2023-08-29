# Search

### Protocol
POST

## URL
https://api.helpmonks.com/api/v1/search

### Parameters
<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>search_text</td>
        <td>Yes</td>
        <td>Text to search with</td>
        <td></td>
    </tr>
    <tr>
        <td>page_no</td>
        <td>No</td>
        <td>Page number</td>
        <td>Defaults to "0" (zero)</td>
    </tr>
    <tr>
        <td>num_per_page</td>
        <td>No</td>
        <td>How many results to show per page</td>
        <td>Defaults to 50</td>
    </tr>
    <tr>
        <td>search_mailboxes</td>
        <td>No</td>
        <td>Mailbox Ids to search in</td>
        <td>Available as of Jan. 10th, 2018</td>
    </tr>
    <tr>
        <td>search_status</td>
        <td>No</td>
        <td>Inbox, Assigned, Archived, Closed</td>
        <td>Available as of Jan. 10th, 2018</td>
    </tr>
    <tr>
        <td>search_labels</td>
        <td>No</td>
        <td>Label Ids to search in</td>
        <td>Available as of Jan. 10th, 2018</td>
    </tr>
    <tr>
        <td>search_get_trash</td>
        <td>No</td>
        <td>To include conversations in the Trash and Spam folder. true/false</td>
        <td>Available as of Jan. 10th, 2018</td>
    </tr>
</table>

### Example

```
{
    search_text : "Helpmonks",
    search_status : "Closed",
    page_no : 0,
    num_per_page : 50
}
```

The above will search all conversations for "Helpmonks" and will return 50 results per page. Subsequent results might be retieved by passing in page_no = 1.

### Returned data

The returning data load will contain all the found results with additional information like amount of found results, users and email conversations.

```
{
  "page_no": 1,
  "num_per_page": 50,
  "search_text": "nitai",
  "users": [
    {
      "_id": "564760c8217d2dbb4bda0084",
      "first_name": "Jack",
      "last_name": "Bauer",
      "groups": []
    },
    {
      "_id": "564760c6217d2dbb4bda007e",
      "first_name": "Nitai",
      "last_name": "Aventaggiato",
      "groups": [
        "564760c6217d2dbb4bda006d"
      ]
    }
  ],
  "emails": [
    {
      "assignee": null,
      "_id": "571a324596dd2892ce316aea",
      "company_id": {
        "_id": "5678b6d822cf931e303701b4",
        "sla_details": {
          "end_date": "2015-12-19T07:00:00.000Z",
          "start_date": "2014-12-19T07:00:00.000Z",
          "sla_id": {
            "_id": "564760c9217d2dbb4bda0094",
            "response_time_in_minutes": 3
          }
        }
      },
      "host_id": "564760c6217d2dbb4bda0066",
      "status": "inbox",
      "last_communication_date": "2016-04-24T23:45:59.493Z",
      "mailbox_id": "564760c6217d2dbb4bda0077",
      "sender_timezone_offset": "+0000",
      "__v": 0,
      "audit_info": {
        "created_date": "2016-04-22T14:16:37.614Z",
        "created_by": "564760c5217d2dbb4bda0059",
        "modified_date": "2016-04-24T23:45:59.501Z",
        "modified_by": "564760c6217d2dbb4bda007d"
      },
      "drafts": [],
      "has_attachments": false,
      "reminders": [],
      "actions": [
        {
          "excerpt": "Nitai assigned to Jack Bauer",
          "body": "Nitai assigned to Jack Bauer",
          "from": "564760c6217d2dbb4bda007d",
          "_id": "5714e9d97411a84b59ea4711",
          "subject": "action",
          "timestamp": "2016-04-18T14:06:17.820Z"
        }
      ],
      "notes": [
        {
          "excerpt": "Note me",
          "body": "Note me<br>",
          "from": "564760c6217d2dbb4bda007d",
          "_id": "56a4235387977ba011a9ed38",
          "is_public": true,
          "subject": "note",
          "timestamp": "2016-01-24T01:05:23.622Z"
        }
      ],
      "emails": [
        {
          "subject": "Some Subject",
          "excerpt": "An excerpt",
          "body": "The body",
          "cc": "",
          "message_id": "CAAX3qO7ZfSZ5aJVem2Csh=SwUPo4YsaU=JHiBNnjHkVsTzr4UA@mail.gmail.com",
          "_id": "571a324596dd2892ce316aeb",
          "attachments": [
            {
              "contentType": "image/jpeg",
              "fileName": "IMG_0919.JPG",
              "generatedFileName": "IMG_0919.JPG",
              "contentId": "2f06048e92749326fe1efc2163b0ea84",
              "checksum": "2f06048e92749326fe1efc2163b0ea84",
              "length": 594504,
              "s3url": "https://s3.amazonaws.com/...",
              "_id": "5714e9d97411a84b59ea4713"
            }
          ],
          "is_forward": false,
          "from": {
            "company_user_id": {
              "_id": "565909f583d5cb5023098dee",
              "email": "nitai@razuna.com",
              "first_name": "",
              "last_name": ""
            },
            "user_id": null
          },
          "timestamp": "2016-04-22T14:16:12.000Z"
        }
      ],
      "labels": []
    }
  ],
  "mailbox_ids": [
    "564760c6217d2dbb4bda0077",
    "564760c6217d2dbb4bda0076",
    "564760c6217d2dbb4bda0075"
  ],
  "num_records_found": 26
}
```
