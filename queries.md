# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, Categoryname from Products as P
JOIN Categories as C
ON P.Categoryid = C.Categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, OrderDate, ShipperName FROM Orders AS O
JOIN Shippers AS S ON O.ShipperID = S.ShipperId
WHERE O.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, od.Quantity, od.OrderID
FROM OrderDetails AS od
JOIN Products AS p ON od.ProductId = p.ProductId
WHERE od.OrderID = 10251
ORDER BY p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID AS OrderId , c.CustomerName AS CustomerName, e.LastName AS EmployeeLastName
FROM Orders AS o
JOIN customers AS c ON c.CustomerID = o.CustomerID
JOIN employees AS e ON e.EmployeeID = o.EmployeeID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
