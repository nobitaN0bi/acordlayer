from fastapi import APIRouter, HTTPException, status
from typing import List
from src.projects.schemas import ProjectCreateRequest, ProjectResponse
from src.projects.service import project_service

router = APIRouter(
    prefix="/api/projects",
    tags=["Projects"]
)

@router.post("/", response_model=ProjectResponse, status_code=status.HTTP_201_CREATED)
async def create_project(project: ProjectCreateRequest):
    """
    Create a new agent project and generate code.
    """
    try:
        result = await project_service.create_project(project)
        return result
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to generate agent: {str(e)}"
        )

@router.get("/", response_model=List[ProjectResponse])
async def list_projects():
    """
    List all generated agent projects.
    """
    return await project_service.list_projects()
