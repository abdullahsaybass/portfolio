// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Badge } from '../components/ui/badge';
// import { Separator } from '../components/ui/separator';
// import { 
//   ArrowLeft, 
//   Calendar, 
//   Clock, 
//   User, 
//   Target, 
//   Lightbulb, 
//   TrendingUp,
//   Users,
//   CheckCircle,
//   Quote,
//   Image as ImageIcon,
//   ArrowRight
// } from 'lucide-react';
// import { projects } from '../data/mock';

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const project = projects.find(p => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl text-white mb-4">Project not found</h1>
//           <Button onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-600">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Portfolio
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
//       {/* Navigation */}
//       <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
//         <div className="container mx-auto px-6 py-4">
//           <Button 
//             variant="ghost" 
//             onClick={() => navigate('/')}
//             className="text-gray-300 hover:text-white hover:bg-gray-800"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Portfolio
//           </Button>
//         </div>
//       </nav>

//       <div className="container mx-auto px-6 py-12">
//         {/* Hero Section */}
//         <div className="mb-12">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <Badge variant="outline" className="border-blue-500 text-blue-400 bg-blue-500/10">
//                 {project.type}
//               </Badge>
//               <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//                 {project.title}
//               </h1>
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, index) => (
//                   <Badge key={index} className="bg-gray-800 text-gray-300 hover:bg-gray-700">
//                     {tech}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-96 object-cover rounded-2xl shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//             </div>
//           </div>
//         </div>

//         {/* Project Info Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           <Card className="bg-gray-900 border-gray-800">
//             <CardContent className="p-6 text-center">
//               <User className="w-8 h-8 text-blue-400 mx-auto mb-3" />
//               <h3 className="text-white font-semibold mb-2">Client</h3>
//               <p className="text-gray-400">{project.client}</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-900 border-gray-800">
//             <CardContent className="p-6 text-center">
//               <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
//               <h3 className="text-white font-semibold mb-2">Duration</h3>
//               <p className="text-gray-400">{project.duration}</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-900 border-gray-800">
//             <CardContent className="p-6 text-center">
//               <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
//               <h3 className="text-white font-semibold mb-2">Year</h3>
//               <p className="text-gray-400">{project.year}</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Project Details */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           <Card className="bg-gray-900 border-gray-800">
//             <CardHeader>
//               <CardTitle className="text-white flex items-center">
//                 <Target className="w-5 h-5 text-red-400 mr-2" />
//                 Challenge
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-300 leading-relaxed">
//                 {project.challenges}
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-gray-900 border-gray-800">
//             <CardHeader>
//               <CardTitle className="text-white flex items-center">
//                 <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
//                 Solution
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-300 leading-relaxed">
//                 {project.solution}
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Project Overview */}
//         {project.overview && (
//           <Card className="bg-gray-900 border-gray-800 mb-12">
//             <CardHeader>
//               <CardTitle className="text-white text-xl">Project Overview</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-300 leading-relaxed text-lg">
//                 {project.overview}
//               </p>
//               {project.targetAudience && (
//                 <div className="mt-6">
//                   <h4 className="text-white font-semibold mb-3 flex items-center">
//                     <Users className="w-5 h-5 text-blue-400 mr-2" />
//                     Target Audience
//                   </h4>
//                   <p className="text-gray-400">
//                     {project.targetAudience}
//                   </p>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         )}

//         {/* Design Process */}
//         {project.designProcess && (
//           <Card className="bg-gray-900 border-gray-800 mb-12">
//             <CardHeader>
//               <CardTitle className="text-white text-xl">Design Process</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {project.designProcess.map((step, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
//                       {index + 1}
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <div className="flex items-center justify-between mb-2">
//                       <h4 className="text-white font-semibold">{step.step}</h4>
//                       <Badge variant="outline" className="border-gray-600 text-gray-400">
//                         {step.duration}
//                       </Badge>
//                     </div>
//                     <p className="text-gray-400">{step.description}</p>
//                   </div>
//                   {index < project.designProcess.length - 1 && (
//                     <div className="absolute left-5 mt-12 w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
//                   )}
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         )}

//         {/* Project Images Gallery */}
//         {project.projectImages && project.projectImages.length > 0 && (
//           <Card className="bg-gray-900 border-gray-800 mb-12">
//             <CardHeader>
//               <CardTitle className="text-white text-xl flex items-center">
//                 <ImageIcon className="w-6 h-6 text-purple-400 mr-3" />
//                 Project Gallery
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-8">
//               {project.projectImages.map((img, index) => (
//                 <div key={index} className="space-y-4">
//                   <img
//                     src={img.url}
//                     alt={img.caption}
//                     className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
//                   />
//                   <p className="text-gray-400 text-center italic">{img.caption}</p>
//                   {index < project.projectImages.length - 1 && (
//                     <Separator className="bg-gray-700" />
//                   )}
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         )}

//         {/* Key Features */}
//         {project.keyFeatures && (
//           <Card className="bg-gray-900 border-gray-800 mb-12">
//             <CardHeader>
//               <CardTitle className="text-white text-xl">Key Features</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid md:grid-cols-2 gap-4">
//                 {project.keyFeatures.map((feature, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
//                     <p className="text-gray-300">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Results Section */}
//         <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 mb-12">
//           <CardHeader>
//             <CardTitle className="text-white flex items-center text-xl">
//               <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
//               Results & Impact
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               {project.results}
//             </p>
//           </CardContent>
//         </Card>

//         {/* Client Testimonial */}
//         {project.testimonial && (
//           <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 mb-12">
//             <CardContent className="p-8">
//               <Quote className="w-8 h-8 text-blue-400 mb-4" />
//               <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
//                 "{project.testimonial.content}"
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={project.testimonial.avatar}
//                   alt={project.testimonial.author}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-white font-semibold">{project.testimonial.author}</p>
//                   <p className="text-gray-400 text-sm">{project.testimonial.role}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* More Projects CTA */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-6">Explore More Projects</h3>
//           <p className="text-gray-400 mb-8 text-lg">
//             Discover how I've helped other clients achieve their design goals
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               onClick={() => navigate('/')} 
//               className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-3 group"
//             >
//               View All Projects
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button 
//               variant="outline" 
//               className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3"
//             >
//               Get In Touch
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Background Elements */}
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;