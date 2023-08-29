# Helpmonks API Overview

The Helpmonks API allows you to interact with your data stored in Helpmonks. You can, among many other methods, create a new conversation, update a conversation, create a customer record, create notes, interact with labels and search.

## API URL

API requests should be done towards https://api.helpmonks.com/(apimethod). Please refer to the API documentation for the correct URL.

## API Key

Please see [Authentication](/api/authentication/) to learn how to create your API key and authenticate towards the Helpmonks API.

## Data structure

All API methods are issues with a POST or a GET request. POST API methods expect a JSON structure in the body. Please see each individual documentation to learn about the available parameters.

All API methods return a JSON data object in the format:

```
{
    "success" : true / false,
    "error" : error object (only shown if success is false),
    "results" : result object or string
}
```

Please see each individual documentation to learn about the data in the results.

## Example for CURL

Given the above, you would use the following with CURL to send API requests to the Helpmonks API:

```
curl -X "POST" "https://api.helpmonks.com/api/v1/conversation/create" \
-H "Authorization: Basic Njc3ZjFiZWQ5MTUwNGQzNWE5YTQ1MjkxmU3OGFkYjE6KioqKiogSGlkZGVuIGNyWRlbnRpYWICoqKioq" \
-H "Content-Type: application/json; charset=utf-8" \
-d "{JSON BODY}"
```

## Help

If you have any questions, please post a message to our [Helpmonks Community](https://community.helpmonks.com).
