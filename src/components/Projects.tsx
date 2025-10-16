import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  codeSnippet?: string;
  demoContent?: React.ReactNode;
  githubRepoName?: string;
}

const ProjectDialog: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription className="flex flex-wrap gap-1 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-portfolio-light-blue/10 text-portfolio-blue border-none">
              {tag}
            </Badge>
          ))}
        </DialogDescription>
      </DialogHeader>
      
      <Tabs defaultValue="overview" className="mt-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="demo">Live Demo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="h-64 bg-portfolio-blue/10 rounded-md flex items-center justify-center overflow-hidden">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="text-6xl font-bold text-portfolio-blue/20">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          <p className="text-portfolio-muted">{project.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="text-portfolio-blue border-portfolio-blue hover:bg-portfolio-blue hover:text-white"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                <Github size={16} />
                <span>View Full Repository</span>
              </a>
            </Button>
            
            {project.liveUrl && (
              <Button 
                variant="default" 
                size="sm" 
                className="bg-portfolio-blue hover:bg-portfolio-dark-blue"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                  <span>Visit Live Site</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>
          
          {project.githubRepoName && (
            <div className="bg-gray-50 p-4 rounded-md border mt-4">
              <p className="font-medium text-portfolio-dark-blue mb-2">Clone this repository:</p>
              <div className="bg-black text-white p-2 rounded font-mono text-sm overflow-auto">
                git clone https://github.com/{project.githubRepoName}.git
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="code" className="mt-4">
          <div className="bg-slate-900 text-white p-4 rounded-md overflow-auto max-h-96">
            <pre className="text-sm">
              <code>{project.codeSnippet || "Code snippet coming soon..."}</code>
            </pre>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button 
              asChild
              variant="default" 
              className="bg-portfolio-blue hover:bg-portfolio-dark-blue"
            >
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                <span>View Full Code on GitHub</span>
              </a>
            </Button>
            
            {project.githubRepoName && (
              <div className="w-full mt-2">
                <p className="text-sm text-portfolio-muted mb-2">Clone this repository:</p>
                <div className="bg-gray-50 p-2 rounded border font-mono text-xs overflow-auto">
                  git clone https://github.com/{project.githubRepoName}.git
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="demo" className="mt-4">
          {project.demoContent ? (
            <div className="bg-white rounded-md p-4 border">
              {project.demoContent}
            </div>
          ) : (
            project.liveUrl ? (
              <div className="space-y-4">
                <div className="aspect-video w-full bg-slate-100 rounded-md overflow-hidden">
                  <iframe 
                    src={project.liveUrl} 
                    title={`${project.title} Demo`} 
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <p className="text-sm text-portfolio-muted">
                  For the best experience, you can also visit the live demo directly:
                </p>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-portfolio-blue hover:bg-portfolio-dark-blue"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1">
                    <span>Open in New Tab</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            ) : (
              <div className="text-center py-8 text-portfolio-muted">
                <p>Live demo is not available for this project.</p>
                <p className="text-sm mt-2">Check out the code instead or visit the GitHub repository for complete details.</p>
              </div>
            )
          )}
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

const Project: React.FC<ProjectProps> = (project) => {
  const {
    title,
    description,
    tags,
    imageUrl,
    githubUrl,
    liveUrl,
  } = project;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-portfolio-blue/10 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="text-4xl font-bold text-portfolio-blue/20">
            {title.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-portfolio-light-blue/10 text-portfolio-blue border-none">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-portfolio-muted">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="text-portfolio-blue border-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            >
              <Github size={16} />
              <span>Code</span>
            </Button>
          </DialogTrigger>
          <ProjectDialog project={project} />
        </Dialog>

        {liveUrl && (
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-portfolio-blue hover:bg-portfolio-dark-blue"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </Button>
            </DialogTrigger>
            <ProjectDialog project={project} />
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
//     {
//       title: "Data Analysis Dashboard",
//       description: "A Python-based data analysis dashboard built with Dash and Plotly for visualizing complex datasets with interactive charts and filters.",
//       tags: ["Python", "Pandas", "Dash", "Plotly", "Data Analysis"],
//       githubUrl: "https://github.com/yourusername/data-analysis-dashboard",
//       githubRepoName: "yourusername/data-analysis-dashboard",
//       liveUrl: "https://example.com/data-dashboard",
//       codeSnippet: `# app.py
// import dash
// import dash_core_components as dcc
// import dash_html_components as html
// import plotly.express as px
// import pandas as pd

// # Load data
// df = pd.read_csv('data.csv')

// # Initialize the app
// app = dash.Dash(__name__)

// # Create layout
// app.layout = html.Div([
//     html.H1('Data Analysis Dashboard'),
//     dcc.Dropdown(
//         id='country-dropdown',
//         options=[{'label': i, 'value': i} for i in df['country'].unique()],
//         value='USA'
//     ),
//     dcc.Graph(id='graph-content')
// ])

// # Define callback
// @app.callback(
//     dash.dependencies.Output('graph-content', 'figure'),
//     [dash.dependencies.Input('country-dropdown', 'value')]
// )
// def update_graph(selected_country):
//     filtered_df = df[df['country'] == selected_country]
//     fig = px.line(
//         filtered_df, 
//         x='year', 
//         y='gdp', 
//         title=f'GDP Over Time: {selected_country}'
//     )
//     return fig

// if __name__ == '__main__':
//     app.run_server(debug=True)`,
//     },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application built with the MERN stack featuring product catalog, user authentication, cart management, and payment integration.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      githubUrl: "https://github.com/kalu-ifechukwu/mern-ecommerce",
      githubRepoName: "kalu-ifechukwu/mern-ecommerce",
      liveUrl: "https://kalu-mern-ecommerce.netlify.app",
      codeSnippet: `// ProductList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;`,
    },
//     {
//       title: "Automation Scripts",
//       description: "A collection of Python scripts for automating repetitive tasks such as file organization, data extraction, report generation, and more.",
//       tags: ["Python", "Automation", "Script"],
//       githubUrl: "https://github.com/yourusername/python-automation",
//       githubRepoName: "yourusername/python-automation",
//       codeSnippet: `# file_organizer.py
// import os
// import shutil
// from datetime import datetime

// def organize_files(directory):
//     """
//     Organize files in the given directory based on their file types.
//     """
//     # File type categories
//     extensions = {
//         'images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
//         'documents': ['.pdf', '.docx', '.xlsx', '.pptx', '.txt', '.csv'],
//         'videos': ['.mp4', '.mov', '.avi', '.mkv'],
//         'audio': ['.mp3', '.wav', '.aac', '.flac'],
//         'code': ['.py', '.js', '.html', '.css', '.java', '.cpp']
//     }
    
//     # Create directories if they don't exist
//     for category in extensions:
//         os.makedirs(os.path.join(directory, category), exist_ok=True)
    
//     # Create an 'others' directory for uncategorized files
//     others_dir = os.path.join(directory, 'others')
//     os.makedirs(others_dir, exist_ok=True)
    
//     # Organize files
//     organized_count = 0
//     for filename in os.listdir(directory):
//         filepath = os.path.join(directory, filename)
        
//         # Skip directories
//         if os.path.isdir(filepath):
//             continue
            
//         # Get file extension
//         _, ext = os.path.splitext(filename)
//         ext = ext.lower()
        
//         # Determine appropriate directory
//         destination_dir = others_dir
//         for category, exts in extensions.items():
//             if ext in exts:
//                 destination_dir = os.path.join(directory, category)
//                 break
        
//         # Move the file
//         if destination_dir != directory:
//             shutil.move(filepath, os.path.join(destination_dir, filename))
//             organized_count += 1
    
//     return organized_count

// if __name__ == "__main__":
//     import sys
    
//     if len(sys.argv) != 2:
//         print("Usage: python file_organizer.py <directory_path>")
//         sys.exit(1)
        
//     directory = sys.argv[1]
//     if not os.path.isdir(directory):
//         print(f"Error: {directory} is not a valid directory")
//         sys.exit(1)
        
//     count = organize_files(directory)
//     print(f"Successfully organized {count} files in {directory}")`,
//     },
    {
      title: "Task Management App",
      description: "A responsive task management application built with React, featuring task creation, scheduling, reminders, and collaboration tools.",
      tags: ["React", "Redux", "MongoDB", "Express", "Node.js"],
      githubUrl: "https://github.com/yourusername/task-management",
      githubRepoName: "yourusername/task-management",
      liveUrl: "https://example.com/taskmanager",
      codeSnippet: `// TaskForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState(new Date());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
      createdAt: new Date()
    };
    
    dispatch(addTask(newTask));
    
    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add New Task</h2>
      
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        ></textarea>
      </div>
      
      <div className="form-group">
        <label>Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Due Date</label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          minDate={new Date()}
        />
      </div>
      
      <button type="submit" className="btn-submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;`,
    },
//     {
//       title: "API Service",
//       description: "A RESTful API service built with Flask providing endpoints for data retrieval, processing, and authentication with comprehensive documentation.",
//       tags: ["Python", "Flask", "RESTful API", "JWT"],
//       githubUrl: "https://github.com/yourusername/flask-rest-api",
//       githubRepoName: "yourusername/flask-rest-api",
//       codeSnippet: `# app.py
// from flask import Flask, request, jsonify
// from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
// from flask_cors import CORS
// import os
// from datetime import timedelta
// import database

// app = Flask(__name__)
// CORS(app)

// # Configure JWT
// app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'dev-secret-key')
// app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
// jwt = JWTManager(app)

// # Initialize database connection
// db = database.get_db_connection()

// # Authentication routes
// @app.route('/api/auth/register', methods=['POST'])
// def register():
//     data = request.get_json()
    
//     # Validate required fields
//     required_fields = ['username', 'email', 'password']
//     for field in required_fields:
//         if field not in data:
//             return jsonify({"error": f"Missing required field: {field}"}), 400
    
//     # Check if user already exists
//     if database.user_exists(db, data['email']):
//         return jsonify({"error": "User with this email already exists"}), 409
    
//     # Create user
//     user_id = database.create_user(db, data)
    
//     return jsonify({"message": "User registered successfully", "user_id": user_id}), 201

// @app.route('/api/auth/login', methods=['POST'])
// def login():
//     data = request.get_json()
    
//     # Validate required fields
//     if not data or 'email' not in data or 'password' not in data:
//         return jsonify({"error": "Email and password are required"}), 400
    
//     # Authenticate user
//     user = database.authenticate_user(db, data['email'], data['password'])
    
//     if not user:
//         return jsonify({"error": "Invalid credentials"}), 401
    
//     # Generate access token
//     access_token = create_access_token(identity=user['id'])
    
//     return jsonify({
//         "message": "Login successful",
//         "access_token": access_token,
//         "user": {
//             "id": user['id'],
//             "username": user['username'],
//             "email": user['email']
//         }
//     })

// # Protected routes
// @app.route('/api/users/me', methods=['GET'])
// @jwt_required()
// def get_user_profile():
//     current_user_id = get_jwt_identity()
//     user = database.get_user_by_id(db, current_user_id)
    
//     if not user:
//         return jsonify({"error": "User not found"}), 404
    
//     # Remove sensitive information
//     user.pop('password', None)
    
//     return jsonify({"user": user})

// # Data routes
// @app.route('/api/data', methods=['GET'])
// @jwt_required()
// def get_data():
//     # Get user-specific data
//     user_id = get_jwt_identity()
//     data = database.get_user_data(db, user_id)
    
//     return jsonify({"data": data})

// @app.route('/api/data', methods=['POST'])
// @jwt_required()
// def create_data():
//     user_id = get_jwt_identity()
//     data = request.get_json()
    
//     # Validate data
//     if not data or 'title' not in data:
//         return jsonify({"error": "Data must include a title"}), 400
    
//     # Add the data
//     new_data_id = database.create_user_data(db, user_id, data)
    
//     return jsonify({"message": "Data created successfully", "id": new_data_id}), 201

// if __name__ == '__main__':
//     app.run(debug=True)`,
//     },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website built with React and Tailwind CSS to showcase my skills, projects, and professional information.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/portfolio-website",
      githubRepoName: "yourusername/portfolio-website",
      liveUrl: "https://example.com/portfolio",
      codeSnippet: `// Header.tsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={\`fixed top-0 w-full z-50 transition-all duration-300 \${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }\`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold text-portfolio-blue">
          Kalu <span className="text-portfolio-accent">Ifechukwu</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-portfolio-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;`,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg">Interested in seeing more of my work?</p>
          <Button 
            asChild
            variant="default" 
            className="bg-portfolio-blue hover:bg-portfolio-dark-blue"
          >
            <a 
              href="https://github.com/kalu-ifechukwu" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              <span>Visit My GitHub Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
