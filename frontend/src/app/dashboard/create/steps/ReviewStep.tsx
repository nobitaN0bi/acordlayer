import React from 'react';

interface ReviewStepProps {
    data: any;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ data }) => {
    const mainAgent = data.agents?.[data.main_agent] || {};

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-green-800 mb-1">Ready to Generate</h3>
                <p className="text-xs text-green-600">
                    Review your configuration below. Clicking "Create Agent" will generate the Python code structure.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h4 className="font-semibold text-gray-900">Project Summary</h4>
                </div>
                <div className="p-4 space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Project Name</span>
                        <span className="col-span-2 font-mono text-gray-900">{data.project_name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Version</span>
                        <span className="col-span-2 text-gray-900">{data.version}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Description</span>
                        <span className="col-span-2 text-gray-900">{data.description}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h4 className="font-semibold text-gray-900">Main Agent</h4>
                </div>
                <div className="p-4 space-y-3 text-sm">
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Name</span>
                        <span className="col-span-2 font-mono text-gray-900">{mainAgent.name}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Model</span>
                        <span className="col-span-2 text-gray-900">{mainAgent.model}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-500">Tools</span>
                        <div className="col-span-2 flex flex-wrap gap-2">
                            {mainAgent.tools?.map((tool: string) => (
                                <span key={tool} className="px-2 py-1 bg-teal-50 text-teal-700 rounded text-xs font-medium border border-teal-100">
                                    {tool}
                                </span>
                            )) || <span className="text-gray-400 italic">No tools selected</span>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-xs text-gray-300 font-mono">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    );
};
