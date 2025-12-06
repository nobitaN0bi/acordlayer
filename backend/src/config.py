from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    APP_VERSION: str = "1.0.0"
    ENVIRONMENT: str = "development"
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"

settings = Settings()
