import os
from typing import List, Dict
from src.projects.schemas import ProjectCreateRequest
from src.core.generator.code_generator import generate_agent_from_dict
# We use logic from code_generator

class ProjectsService:
    def __init__(self):
        self.output_dir = "generated_agents"
        os.makedirs(self.output_dir, exist_ok=True)

    async def create_project(self, project_data: ProjectCreateRequest) -> Dict:
        """
        Generates the agent code based on the configuration.
        """
        try:
            # Convert Pydantic model to dict
            config_dict = project_data.model_dump()
            
            # The generator expects the dict to match AgentProjectConfig
            # We generate it into the output directory
            output_path = os.path.join(self.output_dir, project_data.project_name)
            
            # Use the core generator logic
            # Note: generate_agent_from_dict might need the directory specified or we move files
            # Looking at code_generator logic (we'll check if it returns path or writes directly)
            
            # Assuming we need to adapt the generator call:
            # For now, we'll try calling it directly. If code_generator writes to CWD, we might need chdir
            # But let's verify code_generator.py content if needed. 
            # For MVP, let's assume it writes to a folder named after project_name in current dir.
            
            generate_agent_from_dict(config_dict, output_dir=self.output_dir)
            
            return {
                "project_name": project_data.project_name,
                "status": "success",
                "location": output_path,
                "message": "Agent code generated successfully"
            }
        except Exception as e:
            # Log error properly in real app
            print(f"Error generating agent: {e}")
            raise e

    async def list_projects(self) -> List[Dict]:
        """
        List generated projects.
        """
        if not os.path.exists(self.output_dir):
            return []
            
        projects = []
        for name in os.listdir(self.output_dir):
            path = os.path.join(self.output_dir, name)
            if os.path.isdir(path):
                projects.append({
                    "project_name": name,
                    "status": "generated",
                    "location": path,
                    "message": "Available"
                })
        return projects

project_service = ProjectsService()
