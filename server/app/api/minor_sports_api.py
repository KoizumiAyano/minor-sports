from fastapi import APIRouter, HTTPException

router = APIRouter()

MINOR_SPORTS_DATA = [
        {
            "id": 1,
            "name": "ベースボール",
            "min_participants": 5,
            "max_participants": 10,
            "tool": "ボール",
            "budget": 700,
            "place": "屋内",
            "description": "ベースボール5は、野球の要素を取り入れた新しいスポーツで、5人制で行われます。"
        },
        {
            "id": 2, 
            "name": "モルック",
            "min_participants": 2,
            "max_participants": 6,
            "tool": "モルック，スキットル",
            "budget": 10000,
            "place": "屋外",
            "description": "モルックは、フィンランド発祥のスティックを使った投擲競技で、2人以上で楽しめます。"
        },
        {
            "id": 3, 
            "name": "ディスクゴルフ",
            "min_participants": 2,
            "max_participants": "制限なし",
            "tool": "ディスクゴルフセット",
            "budget": 2500,
            "place": "屋外",
            "description": "ディスクゴルフは、フリスビーを使ってゴールに入れるスポーツで、2人以上で楽しめます。"
        },
        {
            "id": 4, 
            "name": "ボッチャ",
            "min_participants": 2,
            "max_participants": 6,
            "tool": "ボッチャボール",
            "budget": 20000,
            "place": "屋内",
            "description": "ボッチャは、イタリア発祥の球技で、2人以上で行うことができ、特に障害者スポーツとしても人気があります。"
        },
        {
            "id": 5, 
            "name": "カバディ",
            "min_participants": 7,
            "max_participants": 14,
            "tool": "なし",
            "budget": 0,
            "place": "屋内",
            "description": "カバディは、インド発祥の接触型スポーツで、7人以上で行われます。"
        },
        
        {
            "id": 6, 
            "name": "ドッジビー",
            "min_participants": 13,
            "max_participants": 26,
            "tool": "ドッジビー",
            "budget": 1500,
            "place": "屋内",
            "description": "ドッジビーは、フリスビーを使った新しい形のドッジボールで、13人以上で楽しめます。"
        }
    ]


@router.get("/minor-sports")
async def get_minor_sports():
    return MINOR_SPORTS_DATA


@router.get("/minor-sports/{sport_id}")
async def get_minor_sport(sport_id: int):
    print(f"Fetching sport with ID: {sport_id}")
    for sport in MINOR_SPORTS_DATA:
        if sport["id"] == sport_id:
            return sport
    raise HTTPException(status_code=404, detail="スポーツが見つかりません")


