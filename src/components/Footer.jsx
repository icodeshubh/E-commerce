import React from 'react'

function Footer() {
    return (
        <footer class="bg-gray-800 text-white py-10">
            <div class="container mx-auto text-center">
                <div class="flex justify-center space-x-6 mb-6">
                    <a href="#" class="hover:text-gray-400">Home</a>
                    <a href="#" class="hover:text-gray-400">About</a>
                    <a href="#" class="hover:text-gray-400">Services</a>
                    <a href="#" class="hover:text-gray-400">Contact</a>
                </div>
                <p class="text-sm">
                    &copy; 2025 Your Company. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer