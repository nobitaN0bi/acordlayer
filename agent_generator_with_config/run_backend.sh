#!/bin/bash

# Navigate to the script's directory
cd "$(dirname "$0")"

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please copy .env.example to .env and add your API keys."
    echo "  cp .env.example .env"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r meta_agent/requirements.txt

# Run the interactive agent generator
echo "🚀 Starting Agent Creator Meta-Agent..."
python meta_agent/main.py interactive
