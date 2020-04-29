# Data Model for Customer

This is the data model for records in the returning data structure. You also use this model to query against the records.

```
{
    '_id' : ObjectId, // READONLY
    'host_id' : ObjectId, // REQURIED
    'company_id' : ObjectId,
    'email' : String, // REQUIRED
    'first_name' : String,
    'middle_name' : String,
    'last_name' : String,
    'notes' : String,
    'last_correspondence_date' : Date,
    'last_email_chain_id' : ObjectId,
    'labels' : [
        ObjectId
    ]
}
```

