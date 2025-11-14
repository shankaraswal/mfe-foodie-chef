import React from 'react';

function ChefApp() {
    return (
        <div className="p-8 bg-green-50 min-h-screen">
            <h1 className="text-4xl font-bold text-green-700">Chef Micro-Frontend</h1>
            <p className="mt-4 text-lg">Welcome to Chef Dashboard!</p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Book a Chef
            </button>
        </div>
    );
}

export default ChefApp; 
