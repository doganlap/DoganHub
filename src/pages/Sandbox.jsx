import React, { useState } from 'react';
import { TestTube, Play, RotateCcw, Code } from 'lucide-react';

const Sandbox = () => {
  const [selectedScenario, setSelectedScenario] = useState('risk-assessment');
  const [running, setRunning] = useState(false);

  const scenarios = [
    { id: 'risk-assessment', name: 'Risk Assessment', description: 'Create and manage risk assessments' },
    { id: 'compliance-check', name: 'Compliance Check', description: 'Run compliance validations' },
    { id: 'control-testing', name: 'Control Testing', description: 'Test control effectiveness' },
    { id: 'evidence-collection', name: 'Evidence Collection', description: 'Collect and manage evidence' }
  ];

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Interactive Sandbox</h1>
        <p className="text-slate-600 dark:text-slate-400">Test features in a safe environment</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Scenarios List */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Test Scenarios</h3>
          <div className="space-y-2">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedScenario === scenario.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <p className="font-medium">{scenario.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{scenario.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sandbox Area */}
        <div className="md:col-span-2 space-y-4">
          <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg border border-white/30 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {scenarios.find(s => s.id === selectedScenario)?.name}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={handleRun}
                  disabled={running}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 hover:scale-105 disabled:bg-green-400 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  <span>Run</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors">
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">Sandbox Console</span>
              </div>
              <div className="space-y-1 text-slate-600 dark:text-slate-400">
                {running ? (
                  <>
                    <p className="text-yellow-600 dark:text-yellow-400">▸ Running scenario...</p>
                    <p className="text-blue-600 dark:text-blue-400">▸ Loading test data...</p>
                    <p className="text-blue-600 dark:text-blue-400">▸ Executing operations...</p>
                  </>
                ) : (
                  <>
                    <p>▸ Ready to execute</p>
                    <p>▸ Click "Run" to start scenario</p>
                    <p>▸ Results will appear here</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg border border-white/30 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">How to Use</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Select a test scenario from the list</li>
              <li>Review the scenario description</li>
              <li>Click "Run" to execute the test</li>
              <li>Observe the results in the console</li>
              <li>Use "Reset" to clear and start over</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
