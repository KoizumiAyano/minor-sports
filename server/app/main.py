from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import minor_sports_api

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(minor_sports_api.router, prefix="/api")
