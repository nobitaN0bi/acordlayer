from typing import Dict, List, Any, Optional
from pydantic import BaseModel, Field
from src.core.generator.config_schema import AgentType, BuiltinToolType

# Re-exporting enums for convenience
# We use the models from config_schema but wrap them if needed for API responses

from src.core.generator.config_schema import (
    ToolConfig,
    AgentConfig,
    AgentProjectConfig
)

class ProjectCreateRequest(AgentProjectConfig):
    pass

class ProjectResponse(BaseModel):
    project_name: str
    status: str
    location: str
    message: str
