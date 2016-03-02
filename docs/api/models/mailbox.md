# Data Model for Mailbox

This is the data model for records in the returning data structure. You also use this model to query against the records.

```
{
    '_id' : ObjectId, // READONLY
    'active' : Boolean, // REQUIRED
    'name' : String,
    'host_id' : ObjectId, // REQUIRED
    'email' : String, // UNIQUE
    'forward_to' : String,
    'alias' : String,
    'from' : String,
    'parse_implicit_forward' : Boolean, // default : true
    'signature' : String, // default : ''
    'sending_via' : {
        'custom' : Boolean, // REQUIRED
        'server' : String, // default : ''
        'username' : String, // default : ''
        'password' : String, // default : ''
        'port' : String, // default : ''
        'is_ssl' : Boolean, // default : false
    },
    'users' : [ 
        ObjectId
    ],
    'auto_reply' : {
        'enabled' : Boolean, // default : false
        'subject' : String, // default : ''
        'message' : String, // default : ''
    },
    'label_explorer' : Boolean // default : false
    'notifications' : {
        'new_message' : Boolean, // default : true
        'comments' : Boolean, // default : true
        'replies' : Boolean, // default : true
        'assignment' : Boolean, // default : true
    },
    'email_template' : String, // REQUIRED default : 'simple',
    'default_status' : String // REQUIRED default : 'unchanged'
}
```

