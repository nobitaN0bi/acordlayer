import React from 'react';
import { Input } from '@/components/Common/Input';
import { TextArea } from '@/components/Common/TextArea';

interface ProjectStepProps {
    data: any;
    updateData: (data: any) => void;
}

export const ProjectStep: React.FC<ProjectStepProps> = ({ data, updateData }) => {
    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-blue-800 mb-1">Project Details</h3>
                <p className="text-xs text-blue-600">
                    Define the high-level details for your new AI agent project. This will create a new configuration environment.
                </p>
            </div>

            <Input
                label="Project Name"
                placeholder="e.g., customer-service-bot"
                value={data.project_name || ''}
                onChange={(e) => updateData({ project_name: e.target.value })}
                helperText="Must be a valid Python identifier (lowercase, underscores only)."
            />

            <TextArea
                label="Description"
                placeholder="Describe what this agent project is for..."
                value={data.description || ''}
                onChange={(e) => updateData({ description: e.target.value })}
                rows={3}
            />

            <Input
                label="Version"
                placeholder="1.0.0"
                value={data.version || '1.0.0'}
                onChange={(e) => updateData({ version: e.target.value })}
            />
        </div>
    );
};
