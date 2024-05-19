# main.py

from fastapi import FastAPI

app = FastAPI()

@app.get("/q/")
async def read_q(question: str = ""):
    return {"question": question}

@app.get("/sub/")
async def read_s(subreddit: str = "cscareeradvice"):
    return {"subreddit": subreddit}