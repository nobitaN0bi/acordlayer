import React from 'react';
import { Input } from '@/components/Common/Input';
import { TextArea } from '@/components/Common/TextArea';
import { Select } from '@/components/Common/Select';

interface AgentStepProps {
    data: any;
    updateData: (data: any) => void;
}

export const AgentStep: React.FC<AgentStepProps> = ({ data, updateData }) => {
    const agent = data.agents?.[data.main_agent] || {};

    const handleAgentUpdate = (field: string, value: any) => {
        const mainAgentName = data.main_agent || 'main_agent';
        const updatedAgents = {
            ...data.agents,
            [mainAgentName]: {
                ...agent,
                [field]: value,
                name: mainAgentName // Ensure name is set
            }
        };
        updateData({ agents: updatedAgents, main_agent: mainAgentName });
    };

    const handleNameChange = (newName: string) => {
        // When name changes, we need to update the key in the agents object and the main_agent reference
        const oldName = data.main_agent || 'main_agent';
        const currentAgentData = data.agents?.[oldName] || {};

        const updatedAgents = { ...data.agents };
        delete updatedAgents[oldName];
        updatedAgents[newName] = { ...currentAgentData, name: newName };

        updateData({ agents: updatedAgents, main_agent: newName });
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-teal-800 mb-1">Main Agent Configuration</h3>
                <p className="text-xs text-teal-600">
                    Configure the primary agent that will coordinate tasks. You can add sub-agents later.
                </p>
            </div>

            <Input
                label="Agent Name"
                placeholder="e.g., research_coordinator"
                value={data.main_agent || ''}
                onChange={(e) => handleNameChange(e.target.value)}
            />

            <Select
                label="Model"
                options={[
                    { value: 'gemini-2.0-flash-lite-001', label: 'Gemini 2.0 Flash Lite (Fastest)' },
                    { value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash (Balanced)' },
                    { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro (Most Capable)' },
                ]}
                value={agent.model || 'gemini-2.0-flash-lite-001'}
                onChange={(e) => handleAgentUpdate('model', e.target.value)}
            />

            <Input
                label="Role / Short Description"
                placeholder="e.g., A research assistant that helps users..."
                value={agent.description || ''}
                onChange={(e) => handleAgentUpdate('description', e.target.value)}
            />

            <TextArea
                label="System Instructions"
                placeholder="You are a helpful assistant. Your goal is to..."
                value={agent.instruction || ''}
                onChange={(e) => handleAgentUpdate('instruction', e.target.value)}
                rows={6}
                className="font-mono text-xs"
            />
        </div>
    );
};
