import sqlite3

connection = sqlite3.connect("data-base-KM.db")
cursor = connection.cursor()

cursor.execute(""" 
CREATE TABLE IF NOT EXISTS Users(
ip TEXT NOT NULL, 
name TEXT NOT NULL,
email TEXT NOT NULL
)
""")

connection.commit()
connection.close()