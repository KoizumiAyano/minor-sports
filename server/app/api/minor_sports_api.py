from fastapi import APIRouter

router = APIRouter()

@router.get("/minor-sports")
async def get_minor_sports():
    return [
        {
            "id": 1, 
            "name": "野球",
            "min-participants": 9,
            "max-participants": 18,
            "tool": "バット、ボール、グローブ",
            "budget": 50000,
            "place": "屋外",
            "description": "チームスポーツで、9人以上の参加者が必要です。"
        },
        {
            "id": 2, 
            "name": "サッカー",
            "min-participants": 11,
            "max-participants": 22,
            "tool": "ボール、シューズ、ユニフォーム",
            "budget": 60000,
            "place": "屋外",
            "description": "チームスポーツで、11人以上の参加者が必要です。"
        },
        {
            "id": 3, 
            "name": "バスケットボール",
            "min-participants": 5,
            "max-participants": 10,
            "tool": "ボール、シューズ",
            "budget": 30000,
            "place": "屋内",   
            "description": "チームスポーツで、5人以上の参加者が必要です。"
        },
        
    ]