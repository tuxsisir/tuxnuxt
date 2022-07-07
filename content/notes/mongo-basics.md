---
title: "MongoDB Commands"
date: 2022-06-23
draft: false
tags: ["mongo", "cheatsheet", "database"]
---

show database:
```shell
> show dbs
```

create database:
```shell
> use testDB
```

drop database:
```shell
> use testDB
> db.dropDatabase()
```

use database:
```shell
> use testDB
```

which db I am using?
```shell
> db
```

show tables from current db:
```shell
> show collections;
```

Insert into table:
```shell
> db.user.insert({
        name: 'Sisir',
        address: 'Canada'
    })
```

Insert many into table:
```shell
> db.user.insertMany([
    {
        name: 'Sisir',
        address: 'Canada'
    },
    {
        name: 'Besh',
        address: 'Brazil'
    },
    {
        name: 'Nesh',
        address: 'USA'
    }
])
```

Show all records:
```shell
> db.user.find()
```

Count the number of documents:
```shell
> db.user.count()
```

Pretty Print
```shell
> db.user.find().pretty()
```

#### Row = Documents

#### Table = Collections

Find something (where) clause:
```shell
> db.user.find({"address": "Brazil"}).pretty()
```
Equivalent to:
```sql
SELECT * FROM user WHERE address = "Brazil";
```


AND / OR Conditions
- AND
```shell
> db.inventory.find({"status": "P"})
```

- OR
```shell
> db.inventory.find({$or: [{"status": "A"}, {"status": "P"}]})
```

IN Operator
```shell
> db.inventory.find({ "status": { $in: ["A", "P"] }}, {"status": 1})
```

Delete all documents from a table
```shell
> db.inventory.deleteMany({})
```

Update One
```shell
> db.inventory.updateOne(
    { item: "paper" },
    { $set: { "size.uom": "in", status: "K" } }
)
```
Note: If there are multiple results, updateOne will only update the latest document.

Update Many
```shell
> db.inventory.updateMany(
    { item: "paper" },
    { $set: { "size.uom": "in", status: "K" } }
)
```
Note: Even if there are multiple results, this will update all records


Delete One
```shell
> db.inventory.deleteOne({ "item": "paper" })
```
Note: If there are multiple results, deleteOne will only delete the latest document.

Delete Many
```shell
> db.inventory.deleteMany({"status": "A"})
```
Note: This deletes all the matching records.

---

### Queries

Ordering of the results
```shell
> db.inventory.find({}).sort({ qty: -1 })
```
Note:
- 1 -> Ascending
- -1 -> Descending

Query nested documents
```shell
> db.inventory.find({ size: { h: 14, w: 21, uom: "cm" } })
```
Note: ORDER MATTERS, if the order doesn't match filter will not work.

Query nested fields
```shell
> db.inventory.find({"size.uom": "in"})
> db.inventory.find({"size.h": { $gt: 20 }})
```

4. Query an array
```shell
> db.inventory.find({ tags: ["red", "blank"] })
```
Note: ORDER MATTERS, if the order of tags are different, result will vary.

5. Querying with all
```shell
> db.inventory.find({ tags: { $all: ["red", "blank"] } })
```
Note: Querying with $all, provides all the results belonging to red and blank tag.

6. Querying with :
```shell
> db.inventory.find({ tags: "red" })
```
Note: Provides all the tags which belongs to red

7. Querying the elements in array with $gt / $lt
```shell
> db.inventory.find({ dim_cm: { $gt: 15 } })
```

8. Querying array with $elemMatch, match all the elements of array with given query
```shell
> db.inventory.find({ dim_cm: { $elemMatch: {$gt: 15, $lt: 20} } })
```

9. Query with indexing elements
```shell
> db.inventory.find({"dim_cm.0": {$gt: 15}})
> db.inventory.find({"dim_cm.1": {$lt: 20}})
```

10. Query by the size of array
```shell
> db.inventory.find({"dim_cm": {$size: 2}})
> db.inventory.find({"tags": {$size: 3}})
> db.inventory.find({"tags": {$size: 1}})
```

=========================

Queries with Nested Dict within Array

1. Finding the exact match of dict within array

```shell
> db.inventory.find({ instock: { warehouse: "A" } })
```
Result : None

```shell
> db.inventory.find({ instock: { warehouse: "A", qty: 5 } })
```
Result: 1 output

```shell
> db.inventory.find({ instock: { qty: 5, warehouse: "A" } })
```
Result: None

Note: Exact query match within the result will only provides the desired output

2. Match the specific elements
Match all
```shell
> db.inventory.find( { "instock.qty": { $lte: 20 } } )
```

Match with the first element of array
```shell
> db.inventory.find( { "instock.0.qty": { $lte: 20 } } )
```

Match with the second element of array
```shell
> db.inventory.find( { "instock.1.qty": { $lte: 20 } } )
```

Note: All these three will result in different results based on the array index you're querying

3. Specifying multiple conditions in one field

Matches all the
```shell
> db.inventory.find({ "instock.qty": 5, "instock.warehouse": "A" })
```

Match exact
```shell
> db.inventory.find({ instock: {$elemMatch: {qty: 5, warehouse: "A"}} })
```

=====================

Querying NULL, EXISTS

```shell
db.inventory.insertMany([
    { _id: 1, item: null },
    { _id: 2 }
])
```

Results in both empty results with null item and no item.
```shell
> db.inventory.find({ item: null })
```
Result:
{ _id: 1, item: null }
{ _id: 2 }

Query with TYPE numbers:
$10 -> null

```shell
> db.inventory.find({ item: {$type: 10} })
```
Result : { _id: 1, item: null }

```shell
> db.inventory.find({ item: {$exists: false} })
```
Result: { "_id": 2 }

---

Selecting certain fields only
```shell
db.inventory.find({ status: "A" }, {_id: 0})
```

Nested Fields
```
db.inventory.find({ status: "A" }, { item: 1, status: 1, "size.uom": 1 })
```

```shell
db.inventory.find({
    qty: {$gte: 50},
    $or: [{status: "A"}, {status: "B"}],
    status: '',
    aother: []
})
```
