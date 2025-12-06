'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Common/Button';
import { ProjectStep } from './steps/ProjectStep';
import { AgentStep } from './steps/AgentStep';
import { ToolsStep } from './steps/ToolsStep';
import { ReviewStep } from './steps/ReviewStep';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import Link from 'next/link';

export default function CreateAgentPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);

    // Initial state matching backend AgentProjectConfig
    const [formData, setFormData] = useState({
        project_name: '',
        description: '',
        version: '1.0.0',
        main_agent: 'my_agent',
        agents: {
            'my_agent': {
                name: 'my_agent',
                type: 'llm_agent',
                description: '',
                model: 'gemini-2.0-flash-lite-001',
                instruction: '',
                tools: [],
                sub_agents: [],
                config: {}
            }
        },
        tools: {},
        requirements: [],
        environment_variables: {}
    });

    const updateData = (newData: any) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const steps = [
        { title: 'Project Details', component: ProjectStep },
        { title: 'Agent Config', component: AgentStep },
        { title: 'Tools & Capabilities', component: ToolsStep },
        { title: 'Review & Generate', component: ReviewStep },
    ];

    const CurrentComponent = steps[currentStep].component;

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleGenerate();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleGenerate = async () => {
        try {
            setIsGenerating(true);
            // Transform formData to match backend schema if needed
            // The backend expects AgentProjectConfig structure which our formData matches

            const response = await fetch('http://localhost:8000/api/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Failed to create agent');
            }

            const result = await response.json();
            console.log('Agent created:', result);

            // Simulation for UI effect (optional, can be removed)
            // await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSuccess(true);
            setGenerated(true); // Set generated to true on success
        } catch (error) {
            console.error("Error creating agent:", error);
            // Ideally show error toast here
            alert("Failed to create agent: " + (error as Error).message);
            setGenerated(false); // Ensure generated is false on error
        } finally {
            setIsGenerating(false);
        }
    };

    if (generated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Agent Generated!</h2>
                    <p className="text-gray-600 mb-8">
                        Your agent <strong>{formData.project_name}</strong> has been successfully created and configured.
                    </p>
                    <div className="space-y-3">
                        <Link href="/dashboard">
                            <Button fullWidth>Go to Dashboard</Button>
                        </Link>
                        <Button variant="outline" fullWidth onClick={() => {
                            setGenerated(false);
                            setCurrentStep(0);
                        }}>
                            Create Another Agent
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 transition-colors">
                        <ChevronLeft size={20} />
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Create New Agent</h1>
                </div>
                <div className="text-sm text-gray-500">
                    Step {currentStep + 1} of {steps.length}
                </div>
            </div>

            <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full p-8">
                {/* Progress Bar */}
                <div className="flex justify-between mb-8 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                            <div
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                                    ${idx <= currentStep ? 'bg-teal-600 text-white shadow-lg scale-110' : 'bg-gray-200 text-gray-500'}
                                `}
                            >
                                {idx + 1}
                            </div>
                            <span className={`text-xs font-medium ${idx <= currentStep ? 'text-teal-700' : 'text-gray-400'}`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex-1 flex flex-col">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{steps[currentStep].title}</h2>
                        <CurrentComponent data={formData} updateData={updateData} />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between pt-8 mt-8 border-t border-gray-100">
                        <Button
                            variant="outline"
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={currentStep === 0 ? 'invisible' : ''}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            isLoading={isGenerating}
                            className="px-8"
                        >
                            {currentStep === steps.length - 1 ? 'Create Agent' : 'Next'}
                            {currentStep < steps.length - 1 && <ChevronRight size={16} className="ml-2" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
