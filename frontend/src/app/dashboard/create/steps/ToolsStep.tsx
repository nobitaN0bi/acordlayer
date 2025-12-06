import React from 'react';
import { Check } from 'lucide-react';

interface ToolsStepProps {
    data: any;
    updateData: (data: any) => void;
}

export const ToolsStep: React.FC<ToolsStepProps> = ({ data, updateData }) => {
    const mainAgentName = data.main_agent || 'main_agent';
    const agent = data.agents?.[mainAgentName] || {};
    const selectedTools = agent.tools || [];

    const availableTools = [
        {
            id: 'web_search',
            name: 'Google Search',
            description: 'Search the live web for current information.',
            icon: '🔍',
            config: {
                name: 'web_search',
                type: 'builtin',
                description: 'Search the web using Google Search',
                builtin_type: 'google_search'
            }
        },
        {
            id: 'page_loader',
            name: 'URL Context',
            description: 'Load and analyze content from specific URLs.',
            icon: '📄',
            config: {
                name: 'page_loader',
                type: 'builtin',
                description: 'Load and analyze web page content',
                builtin_type: 'url_context'
            }
        },
        {
            id: 'memory_loader',
            name: 'Long-term Memory',
            description: 'Store and retrieve information across sessions.',
            icon: '🧠',
            config: {
                name: 'memory_loader',
                type: 'builtin',
                description: 'Load relevant memories',
                builtin_type: 'load_memory'
            }
        },
        {
            id: 'calculator',
            name: 'Calculator',
            description: 'Perform mathematical calculations.',
            icon: '🧮',
            config: {
                name: 'calculator',
                type: 'custom_function',
                description: 'Basic mathematical calculations',
                function_code: '...' // Simplified for UI
            }
        }
    ];

    const toggleTool = (toolId: string, toolConfig: any) => {
        const newToolsList = selectedTools.includes(toolId)
            ? selectedTools.filter((t: string) => t !== toolId)
            : [...selectedTools, toolId];

        // Update agent's tool list
        const updatedAgents = {
            ...data.agents,
            [mainAgentName]: {
                ...agent,
                tools: newToolsList
            }
        };

        // Update global tools definition
        const updatedTools = { ...data.tools };
        if (selectedTools.includes(toolId)) {
            delete updatedTools[toolId];
        } else {
            updatedTools[toolId] = toolConfig;
        }

        updateData({
            agents: updatedAgents,
            tools: updatedTools
        });
    };

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-purple-800 mb-1">Select Capabilities</h3>
                <p className="text-xs text-purple-600">
                    Choose the tools your agent needs to perform its tasks.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableTools.map((tool) => {
                    const isSelected = selectedTools.includes(tool.id);
                    return (
                        <div
                            key={tool.id}
                            onClick={() => toggleTool(tool.id, tool.config)}
                            className={`
                                relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                ${isSelected
                                    ? 'border-teal-500 bg-teal-50'
                                    : 'border-gray-200 bg-white hover:border-teal-200 hover:shadow-md'
                                }
                            `}
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">{tool.icon}</div>
                                <div>
                                    <h4 className={`font-semibold ${isSelected ? 'text-teal-900' : 'text-gray-900'}`}>
                                        {tool.name}
                                    </h4>
                                    <p className={`text-xs mt-1 ${isSelected ? 'text-teal-700' : 'text-gray-500'}`}>
                                        {tool.description}
                                    </p>
                                </div>
                            </div>
                            {isSelected && (
                                <div className="absolute top-3 right-3 text-teal-600">
                                    <Check size={18} strokeWidth={3} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
