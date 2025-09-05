 import { Link } from "react-router-dom";
import { School, Plus, BookOpen, Users, MapPin, Star, Linkedin, Github, Instagram, MessageSquare, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 flex flex-col overflow-x-hidden">
      <main className="flex-grow">
        {/* Hero Section with Enhanced Animations */}
        <div className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8 group">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <School className="h-12 w-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="h-6 w-6 text-yellow-400 animate-bounce" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                School Management System
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                Discover and manage schools across India. Add new schools to our directory
                or explore existing institutions with detailed information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/add-school">
                  <Button size="lg" className="group relative w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Plus className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-180 transition-transform duration-300" />
                    <span className="relative z-10 font-semibold">Add New School</span>
                  </Button>
                </Link>
                
                <Link to="/schools">
                  <Button size="lg" variant="outline" className="group relative w-full sm:w-auto border-2 border-purple-400 text-purple-600 hover:text-white bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <BookOpen className="mr-2 h-5 w-5 relative z-10 group-hover:scale-125 transition-transform duration-300" />
                    <span className="relative z-10 font-semibold">Browse Schools</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              A comprehensive solution for managing and discovering educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Feature Card 1 */}
            <Card className="group relative text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Plus className="h-8 w-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors duration-300">
                  Easy Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Simple form to add new schools with comprehensive details and image upload.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="group relative text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <MapPin className="h-8 w-8 text-white group-hover:scale-125 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 transition-colors duration-300">
                  Location Based
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Search and filter schools by city, state, and other location parameters.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="group relative text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Users className="h-8 w-8 text-white group-hover:scale-125 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors duration-300">
                  Detailed Info
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Complete school profiles with contact information, establishment year, and student count.
                </p>
              </CardContent>
            </Card>

            {/* Feature Card 4 */}
            <Card className="group relative text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Star className="h-8 w-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 transition-colors duration-300">
                  Modern Design
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Responsive and beautiful interface that works perfectly on all devices.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-10 md:p-16 text-center border border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5 animate-pulse"></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10">
              Ready to Get Started?
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-medium relative z-10">
              Join our platform to discover schools or add your institution to reach more students and parents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/add-school">
                <Button size="lg" className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Heart className="mr-2 h-5 w-5 relative z-10 group-hover:scale-125 text-pink-200 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold">Add Your School</span>
                </Button>
              </Link>
              
              <Link to="/schools">
                <Button size="lg" variant="outline" className="group relative border-2 border-gradient-to-r from-indigo-400 to-purple-400 text-purple-600 hover:text-white bg-white/80 dark:bg-gray-800/80 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Sparkles className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-180 text-purple-500 group-hover:text-white transition-all duration-300" />
                  <span className="relative z-10 font-semibold">Explore Schools</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Ultra Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 border-t border-purple-500/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Enhanced Copyright Text */}
            <div className="text-center sm:text-left">
              <p className="text-gray-300 text-lg font-semibold mb-2">
                © {new Date().getFullYear()} All Rights Reserved Shivam Bhardwaj.
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start">
                Built with <Heart className="h-4 w-4 text-red-400 mx-1 animate-pulse" /> for better education management
              </p>
            </div>
            
            {/* Ultra Enhanced Social Links */}
            <div className="flex gap-4">
              <a 
                href="http://www.linkedin.com/in/shivam-sharma-193226311" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-12 hover:scale-110 border border-blue-400/30 backdrop-blur-sm overflow-hidden"
                aria-label="LinkedIn Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-white relative z-10 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-blue-500/20 scale-0 group-hover:scale-100 blur-xl transition-transform duration-500"></div>
              </a>
              
              <a 
                href="https://github.com/Aiden781Xx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-12 hover:scale-110 border border-gray-400/30 backdrop-blur-sm overflow-hidden"
                aria-label="GitHub Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <Github className="h-6 w-6 text-gray-400 group-hover:text-white relative z-10 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gray-500/20 scale-0 group-hover:scale-100 blur-xl transition-transform duration-500"></div>
              </a>
              
              <a 
                href="https://www.instagram.com/__bhardwaj750" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-orange-600/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-12 hover:scale-110 border border-pink-400/30 backdrop-blur-sm overflow-hidden"
                aria-label="Instagram Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <Instagram className="h-6 w-6 text-pink-400 group-hover:text-white relative z-10 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 scale-0 group-hover:scale-100 blur-xl transition-transform duration-500"></div>
              </a>
              
              <a 
                href="https://wa.me/7505611192" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-4 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-12 hover:scale-110 border border-green-400/30 backdrop-blur-sm overflow-hidden"
                aria-label="WhatsApp Contact"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <MessageSquare className="h-6 w-6 text-green-400 group-hover:text-white relative z-10 group-hover:scale-125 transition-all duration-500" />
                <div className="absolute inset-0 rounded-2xl bg-green-500/20 scale-0 group-hover:scale-100 blur-xl transition-transform duration-500"></div>
              </a>
            </div>
          </div>
          
          {/* Ultra Enhanced Decorative Element */}
          <div className="mt-10 pt-8 border-t border-purple-400/20">
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg animate-pulse"></div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;