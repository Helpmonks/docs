# Data Model for Conversation

This is the data model for records in the returning data structure. You also use this model to query against the records.

```
{
    '_id' : ObjectId, // READONLY
    'host_id' : ObjectId,
    'last_communication_date' : Date,
    'status' : String, // one of these: 'inbox' 'assigned' 'archived' 'closed' 'spam' 'trash'
    'mailbox_id' : ObjectId, // REQUIRED
    'assignee' : ObjectId,
    'labels' : [
        ObjectId
    ],
    'emails' : [{
        'timestamp' : Date, // default : Date.now
        'subject' : String,
        'excerpt' : String,
        'body' : String,
        'sanitized' : String,
        'responded_to' : String,
        'from' : {
            'user_id' : ObjectId, // See note below
            'company_user_id' : ObjectId // See note below
        },
        'cc' : String,
        'bcc' : String,
        'to' : ObjectId,
        'is_forward' : Boolean, // default: false
        'attachments' : [{
            'contentType' : String,
            'fileName' : String,
            'generatedFileName' : String,
            'contentId' : String,
            'checksum' : String,
            'length' : Number,
            's3url' : String
        }],
        'message_id' : String
    }],
    'notes' : [{
        'timestamp' : Date, // default : Date.now
        'subject' : String, // default : 'note'
        'excerpt' : String,
        'body' : String,
        'from' : ObjectId,
        'is_public' : Boolean, // default: true
    }],
    'actions' : [{
        'user_id' : ObjectId,
        'timestamp' : Date, // default : Date.now
        'subject' : String, // default : 'action'
        'excerpt' : String,
        'body' : String,
        'from' : ObjectId,
        'forward_id' : ObjectId
    }],
    'reminders' : [{
        'reminder_date' : Date, // REQUIRED
        'user_id' : ObjectId, // REQUIRED
    }],
    'has_attachments' : Boolean, // default: false,
    'sender_timezone_offset' : String,
    'company_id' : ObjectId
}
```

## Note

The emails.from must either contain a "user_id" or a "company_user_id" value.
