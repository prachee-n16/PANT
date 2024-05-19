# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/q/")
async def read_q(question: str = ""):
    return {"question": question}

@app.get("/sub/")
async def read_s(subreddit: str = "cscareeradvice"):
    return {"subreddit": subreddit}