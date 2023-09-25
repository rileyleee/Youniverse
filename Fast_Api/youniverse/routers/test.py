from fastapi import APIRouter
from youniverse.repository import testRepository

router = APIRouter(
    prefix="/test",
    tags=["Datas"]
)

@router.get("/")
async def first_get():
    return testRepository.get_test()