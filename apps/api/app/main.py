import os
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="DFARS API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "ok"}

# Mount uploads directory
upload_dir = os.getenv("UPLOAD_DIR", "/uploads")
Path(upload_dir).mkdir(parents=True, exist_ok=True)
app.mount("/files", StaticFiles(directory=upload_dir), name="files")
