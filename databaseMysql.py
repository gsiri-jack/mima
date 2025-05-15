# import mysql.connector
# conn=mysql.connector.connect(
#     host = "mysql-sample-pace-a6bb.f.aivencloud.com",
#     user="avnadmin",
#     password="AVNS_927UJlBU577cj_ZxvaI",
#     port=11632

# )
# print(conn)
# # JACK@eva_009pip
import pymysql


conn = pymysql.connect(
   host = "mysql-sample-pace-a6bb.f.aivencloud.com",
    user="avnadmin",
    password="JACK@eva_009",
    port=11632,
    database='sample'
)
cur=conn.cursor()
# product_tabel="""CREATE TABLE products (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     imagesrc VARCHAR(255),
#     productname VARCHAR(255),
#     price DECIMAL(10, 2)
# );"""
# cur.execute(product_tabel)
# products_data = [
#     {'imagesrc': 'image1.jpg', 'productname': 'Product A', 'price': 19.99},
#     {'imagesrc': 'image2.jpg', 'productname': 'Product B', 'price': 29.99},
#     {'imagesrc': 'image3.jpg', 'productname': 'Product C', 'price': 39.99}
# ]
# for product in products_data:
#     # Prepare INSERT statement
#     insert_stmt = "INSERT INTO products (imagesrc, productname, price) VALUES (%s, %s, %s)"
    
#     # Extract values from dictionary
#     values = (product['imagesrc'], product['productname'], product['price'])
    
#     # Execute INSERT statement
#     cur.execute(insert_stmt, values)
#     print(1)
# conn.commit()
# cur.commit()
query = "SELECT id, imagesrc, productname, price FROM products"
cur.execute(query)

# Fetch all rows
rows = cur.fetchall()

# Print fetched rows
for row in rows:
    print(f"ID: {row[0]}, ImageSrc: {row[1]}, ProductName: {row[2]}, Price: {row[3]}")
    