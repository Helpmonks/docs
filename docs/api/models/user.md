# Data Model for User

This is the data model for records in the returning data structure. You also use this model to query against the records.

```
{
    '_id' : ObjectId, // READONLY
    'host_id' : ObjectId
    'template_id' : ObjectId,
    'password' : String,
    'first_name' : String, // REQUIRED
    'last_name' : String, // REQUIRED
    'is_active' : Boolean, // REQUIRED default : true
    'email' : String, // REQUIRED
    'groups' : [
        String
    ],
    'fields' : [{
        _id : false,
        'field_id' : Number,
        'field_name' : String,
        'value' : Mixed
    }],
    'last_login_date' : Date,
    'time' : {
        'time_zone' : String, // default : 'America/New_York'
        'time_format' : String, // default : '12'
    },
    'uuid_for_password' : String,
    'notifications' : [{
        '_id' : false,
        'mailbox_id' : ObjectId,
        'new_message' : Boolean // default : true
        'comments' : Boolean, // default : true
        'replies' : Boolean, // default : true
        'assignment' : Boolean, // default : true
    }],
    'email_quote_count' : Number, // default : '7'
    'signature' : String,
    'api_keys' : [{
        'api_key' : String,
        'active' : Boolean, // default : true
        'date_create' : Date
    }]
}
```

