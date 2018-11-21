
db.getCollection('orders').find({})

db.orders.insert([
   { "_id" : 4, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 5, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 6  }
])
   
db.inventory.insert([
   { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 },
   { "_id" : 5, "sku": null, description: "Incomplete" },
   { "_id" : 6 }
])
    db.orders.aggregate([
   {
     $lookup:
       {
         from: "inventory",
         localField: "item",
         foreignField: "sku",
            as: "inventory_docs"
        
       }
  }
])
  
  
  db.orders1.insert([
   { "_id" : 1, "item" : "MON1003", "price" : 350, "quantity" : 2, "specs" :
[ "27 inch", "Retina display", "1920x1080" ], "type" : "Monitor" }
])
db.inventory1.insert([
   { "_id" : 1, "sku" : "MON1003", "type" : "Monitor", "instock" : 120,
"size" : "27 inch", "resolution" : "1920x1080" }
{ "_id" : 2, "sku" : "MON1012", "type" : "Monitor", "instock" : 85,
"size" : "23 inch", "resolution" : "1280x800" }
{ "_id" : 3, "sku" : "MON1031", "type" : "Monitor", "instock" : 60,
"size" : "23 inch", "display_type" : "LED" }
])
  db.orders1.aggregate([
   {
      $unwind: "$specs"
   },
   {
      $lookup:
         {
            from: "inventory1",
            localField: "specs",
            foreignField: "size",
            as: "inventory_docs"
        }
   },
   {
      $match: { "inventory_docs": { $ne: [] } }
   }
])
 
  
  
  db.studentinfo.insert({
  "_id": "45b83bda421238c76f5c1969",
  "name": "User One",
  "email": "userone@email.com",
  "country": "UK",
  "dob": ISODate("1999-09-13T00:00:00.000Z")
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  














   
  