# Data Model for Label

This is the data model for records in the returning data structure. You also use this model to query against the records.

```
{
    '_id' : ObjectId, // READONLY
    'name' : String,
    'host_id' : ObjectId, // REQUIRED
    'parent_id' : ObjectId,
    'children' Boolean, // REQUIRED
    'ancestors' : {
        'path' : [{
            _id : false,
            'id' : ObjectId, // REQUIRED
            'name' : String, REQUIRED
        }]
    },
    'active_mailboxes' : [
        {
            _id : false,
            'id' : ObjectId
            'show' : Boolean, // default : true
        }
    ]
}
```

