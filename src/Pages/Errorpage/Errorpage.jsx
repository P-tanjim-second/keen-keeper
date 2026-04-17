import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-6">
            <div className="max-w-md w-full text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

                {/* Error Code */}
                <h1 className="text-7xl font-bold text-red-500 mb-4">Oops!</h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2">
                    Something went wrong
                </h2>

                {/* Message */}
                <p className="text-gray-400 mb-6">
                    {error?.message || "An unexpected error occurred. Please try again."}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => window.location.href = "/"}
                        className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                    >
                        Go Home
                    </button>

                    <button
                        onClick={resetErrorBoundary || (() => window.location.reload())}
                        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
                    >
                        Reload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorFallback;