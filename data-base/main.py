from fastapi import FastAPI#, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
#from typing import List
import sqlite3

connection = sqlite3.connect("data-base-KM.db")
data_base = connection.cursor()

app = FastAPI()

class DBModel(BaseModel):
    ip: str
    name: str
    email: str  

class checking_registration(BaseModel):
    ip: str

#db_list: List[DBModel] = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Укажите источник, которому разрешен доступ
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
   )
#@app.get("/data-base/ip")
#async def ip(request: Request):
 #   client_ip = request.client.host
  #  return {"message": f"Ваш айпи адрес {client_ip}"}
@app.post("/base/creat")
async def creat_item(item: DBModel):
    ip_base = item.ip
    name_base = item.name
    email_base = item.email

    data_base.execute("INSERT INTO Users (ip, name, email) VALUES (?, ?, ?)", (ip_base, name_base, email_base))

    print("ХЗ, вроде данные сохранил")
    return {"message": "Хз вроде сохранил данные", "item": item}

@app.get("/base")
async def rez():
    data_base.execute("SELECT * FROM Users WHERE ip = ?",  ("ййй",))
    rezult = data_base.fetchall()
    print(rezult)

    connection.commit()
    connection.close()

    return{"message": f"Хз вроде сохранил данные {rezult}"}

@app.post("/akkaynt/ip_user")
async def proverka_ip(item: checking_registration):
    ip_us = item.ip
    print(ip_us)
    #try:
    data_base.execute("SELECT * FROM Users WHERE ip = ?", (ip_us,))
    result = data_base.fetchall()

    if not result:
        print(f"Ошибка данные не загрузили:{result}")
        return{"message:" "Ошибка извлечения данных по ip адрему пользователя, повторите позже!"}
    else:
        print(f"Нет ошибка данные загрузили:{result}")
        return{"message:": result}
  #  except:
      #  return{"message:" "Ошибка извлечения данных по ip адрему пользователя, повторите позже!"}