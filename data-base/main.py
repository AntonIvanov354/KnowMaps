from fastapi import FastAPI#, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

class DBModel(BaseModel):
    ip: str
    name: str
    email: str

db_list: List[DBModel] = []

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
    print("Сосо пж")
    return {"message": "Хз вроде сохранил данные", "item": item}

@app.get("/base")
async def rez(item: DBModel):
    return{"message": "Хз вроде сохранил данные", "item": item}