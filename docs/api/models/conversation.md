# Data Model for Conversation

```
{
        'host_id' : { ref: 'host', type : dbType.ObjectId, index : true },
        'last_communication_date' : Date,
        'status' : { type : String, enum : _statuses },
        'mailbox_id' : { ref: 'mailbox', type : dbType.ObjectId, index : true, required : true },
        'assignee' : { ref: 'user', type : dbType.ObjectId },
        'labels' : [
            { ref: 'label', type : dbType.ObjectId }
        ],
        'emails' : [{
            'timestamp' : { type : Date, default : Date.now },
            'subject' : String,
            'excerpt' : String,
            'body' : String,
            'sanitized' : String,
            'responded_to' : String,
            'from' : {
                'user_id' : { ref: 'user', type : dbType.ObjectId },
                'company_user_id' : { ref: 'company_user', type : dbType.ObjectId }
            },
            'cc' : String,
            'bcc' : String,
            'to' : { ref: 'company_user', type : dbType.ObjectId },
            'is_forward' : { type: Boolean, default: false, index : true },
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
            'timestamp' : { type : Date, default : Date.now },
            'subject' : { type : String, default : 'note' },
            'excerpt' : String,
            'body' : String,
            'from' : { ref: 'user', type : dbType.ObjectId },
            'is_public' : { type: Boolean, default: true }
        }],
        'actions' : [{
            'user_id' : { ref: 'user', type : dbType.ObjectId },
            'timestamp' : { type : Date, default : Date.now },
            'subject' : { type : String, default : 'action' },
            'excerpt' : String,
            'body' : String,
            'from' : { ref: 'user', type : dbType.ObjectId },
            'forward_id' : { ref: 'email_chain', type : dbType.ObjectId }
        }],
        'reminders' : [{
            'reminder_date' : { type : Date, required : true },
            'user_id' : { ref: 'user', type : dbType.ObjectId, required : true }
        }],
        'has_attachments' : { type: Boolean, default: false, index : true },
        'sender_timezone_offset' : String,
        'company_id' : { ref: 'company', type : dbType.ObjectId }
    }
```

