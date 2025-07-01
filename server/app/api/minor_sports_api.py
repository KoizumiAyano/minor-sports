from fastapi import APIRouter

router = APIRouter()

@router.get("/message")
async def get_message():
    return {"text": "Hello, World!"}