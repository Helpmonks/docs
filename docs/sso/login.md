# oAuth Login

With a valid access_token and your access_id you can now log into the users Helpmonks account

## oAuth Login endpoint

To log into Helpmonks use:

```
https://subdomain.helpmonks.com/auth/sso/login
```

### Parameters

<table>
    <tr>
        <th>Name</th>
        <th>Required</th>
        <th>Value</th>
        <th>Comment</th>
    </tr>
    <tr>
        <td>access_id</td>
        <td>Yes</td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>access_token</td>
        <td>Yes</td>
        <td>String</td>
        <td></td>
    </tr>
</table>

## Example

```
https://subdomain.helpmonks.com/auth/sso/login? \
access_id=bedcdbb55b31ff7bacd9cb4b4e99abfc \
&access_token=a76c3a8b969d38649ffb77e469ccff6a
```

## Help

If you have any questions, please post a message to our [Helpmonks Developer forum](https://help.helpmonks.com). 