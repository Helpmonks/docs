# Query Syntax for the Helpmonks API

Helpmonks utilizes the MongoDB database together with the Mongoose ORM framework. Thus, the Helpmonks API exposes the Mongoose query syntax directly. For you this means that you have the full query syntax to your disposel with the Helpmonks API.

If you are not familiar with the MongoDB query syntax we recommend a quick read of the [comparison between SQL queries and MongoDB queries](http://docs.mongodb.org/manual/reference/sql-comparison/index.html).

As the query syntax is written in a JSON notation, it should already be familiar to a lot of developers and easy to learn.

## Find, FindOne and FindById

Every API section (Conversation, User, etc.) will contain at least a "find" method. "Find" is the most versatile query syntax. "Find" accepts the following three parameters:

<table>
    <tr>
        <th>Name</th>
        <th>Value</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>query</td>
        <td>Available column in object</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>fields</td>
        <td>Available column name</td>
        <td>No</td>
    </tr>
    <tr>
        <td>options</td>
        <td>Available options like sort, slice, etc.</td>
        <td>No</td>
    </tr>
</table>

### query

In the query object you define the columns you want to query against, i.e. they are similar to the SQL WHERE columns. Say, you want to query a users firstname and email address:

```
{
    query : { 'first_name' : 'Nitai', 'email' : 'nitai@helpmonks.com' }
}
```

*The above assumes that the data model for the collection has columns of "first_name" and "email"*

### fields

The "field" value allows you to define the columns you want to have returned. **Note: Each data model defines default fields to be returned and usually you don't need to explisitely define this** 

```
{
    fields : { 'first_name email' }
}
```

*Please note that you separate the column names with a space!*

### options

The "options" allow you to further tailor your query. You use "options" to filter, sort, etc. the query.

```
{
    options : { sort : { first_name: 'asc' } }
}
```

*sort by "first_name" ascending*

### Example Find Query Syntax

Given the above example, we would query a user in the Helpmonks API with the following POST request:

```
{
    query : { 'first_name' : 'Nitai', 'email' : 'nitai@helpmonks.com' },
    fields : { 'first_name email' },
    options : { sort : { first_name: 'asc' } }
}
```

On the other hand, if you want to return all users you would do this:

```
{
    query: {}
}
```

As the "fields" and "options" parameters are optional the above would return all user records with the default fields and ordered as they are stored in the MongoDB database.

## FindOne

As the method name implicates, the "findOne" methods will return only one record but utilizes the same syntax and the above "find". The difference is that when the "findOne" executes, the first found document is returned!

You should use the "findOne" whenever you are sure that only one record exists or are looking for an explisit user record. As a fact, the above find query is much faster with the "findOne" method.

If you know the ID of a record, always use the "findById" methods!

## FindByID

All API methods will return the found objects, each containing a unique ID (usually named "_id"). Hence, if you know the ID of a record it is recommend to always use the "findOne" methods to query against the database. 

As MongoDB indexes the ID of each record this query is also the most performant one and should be used whenever possible.


