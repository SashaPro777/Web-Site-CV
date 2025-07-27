import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import Certificates from './ui/Certificates';


import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart, 
  Car,
  Users,
  Globe,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { SiTelegram } from 'react-icons/si';


const ResumeWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/12aTk-6xoX9tCBJ2NRzx3bNMKlPg51aTX/view?usp=drivesdk', '_blank');
  };

  const skills = [
    { name: 'Python', level: 100, color: 'bg-blue-500' },
    { name: 'C++', level: 100, color: 'bg-purple-500' },
    { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
    { name: 'HTML', level: 100, color: 'bg-orange-500' },
    { name: 'CSS', level: 100, color: 'bg-cyan-500' },
    { name: 'React', level: 85, color: 'bg-blue-400' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Git', level: 88, color: 'bg-red-500' }
  ];

  const experiences = [
    {
      title: 'Forwarder driver',
      company: 'Local Delivery Service',
      location: 'Ukraine',
      period: '2018 - 2021',
      description: 'Managed timely delivery of packages . Developed strong time management and customer service skills.',
      skills: ['Time Management', 'Customer Service', 'Navigation', 'Problem Solving']
    },
    {
      title: 'Warehouse Worker',
      company: 'Logistics Company',
      location: 'Poland',
      period: '2021 - 2022',
      description: 'Handled inventory management, package sorting, and quality control. Improved efficiency and accuracy in warehouse operations.',
      skills: ['Inventory Management', 'Quality Control', 'Team Collaboration', 'Attention to Detail']
    }
  ];

 const certificates = [
  {
    name: 'Python Developer',
    link: 'https://www.sololearn.com/certificates/CC-GGH0FLYB'
  },
  {
    name: 'Introduction to Python',
    link: 'https://www.sololearn.com/certificates/CC-RUIELEW6'
  },
  {
    name: 'Coding Foundations',
    link: 'https://www.sololearn.com/certificates/CC-ABCMXLPX'
  },
  {
    name: 'Coding for Data',
    link: 'https://www.sololearn.com/certificates/CC-GF6HWNNG'
  },
  {
    name: 'Python Intermediate',
    link: 'https://www.sololearn.com/certificates/CC-MJ5ZWWCG'
  },
  {
    name: 'Project Planning with AI',
    link: 'https://www.sololearn.com/certificates/CC-O2SHMKVZ'
  },
  {
    name: 'JavaScript',
    link: 'https://www.sololearn.com/certificates/CC-FXT3IPAM'
  },
  {
    name: 'HTML',
    link: 'https://www.sololearn.com/certificates/CC-WM7JQTQP'
  },
  {
    name: 'SQL',
    link: 'https://www.sololearn.com/certificates/CC-MJ4YYWN9'
  },
  {
    name: 'Java',
    link: 'https://www.sololearn.com/certificates/CC-ANPRRNMN'
  }
];




  const navItems = [
    { id: 'about', label: 'About', icon: Users },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'additional', label: 'Additional', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sasha Khomriichuk
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 ${
                    activeSection === id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
            <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="mb-8 animate-fade-in">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-blue-100 ring-offset-4">
                <AvatarImage src="/images/profile-pic3.png" alt="Sasha Khomriichuk" />

                <AvatarFallback className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">SK</AvatarFallback>
              </Avatar>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Sasha Khomriichuk
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
                Front-End Developer
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>United Kingdom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={18} />
                  <span>24 years old</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
         <a href="mailto:khomriichuk@gmail.com">

  <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
    <Mail size={18} className="mr-2" />
    Email
  </Button>
</a>

<a
  href="https://www.linkedin.com/in/oleksandr-khomriichuk-520a48374/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
    <Linkedin size={18} className="mr-2" />
    LinkedIn
  </Button>

</a>

<a
  href="https://t.me/Sasha_Pro_7"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg" className="hover:bg-blue-50 hover:border-blue-300">
    <SiTelegram size={18} className="mr-2" />
    Telegram
  </Button>
</a>



            </div>
            <div className="animate-bounce">
              <ChevronDown size={24} className="mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate 24-year-old front-end developer from the Ukraine with a strong foundation in modern web technologies. 
                My journey in tech combines formal education in Computer Systems and Networks with hands-on experience in various 
                programming languages and frameworks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Having worked in diverse environments from courier services in Ukraine to warehouse operations in Poland, 
                I've developed excellent problem-solving skills, attention to detail, and the ability to work under pressure. 
                These experiences have shaped my approach to development - methodical, efficient, and always focused on delivering results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm constantly learning and expanding my skill set, with 10 programming certificates and a drive to stay 
                current with the latest technologies. I'm excited to bring my unique perspective and dedication to innovative 
                development projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                    <Badge variant="secondary" className="text-sm font-medium">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-3" />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">{exp.title}</CardTitle>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 flex items-center mt-1">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">Computer Systems and Networks</CardTitle>
                  <p className="text-gray-600 mt-1">Technical Education Program</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive education in computer systems, network architecture, and foundational programming concepts. 
                This program provided me with a solid understanding of how software and hardware interact, network protocols, 
                and system administration principles that complement my development skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* New Certificates Component Preview */}



      {/* Certificates Section */}
     <section id="certificates" className="py-16 px-4">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Certificates & Achievements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <Award size={16} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200">
                  {cert.name}
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* Additional Info Section */}
      <section id="additional" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Car size={24} className="text-blue-600" />
                  <CardTitle className="text-lg font-bold text-gray-800">Driver's License</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Valid driver's license with clean driving record. Available for roles requiring transportation or fieldwork.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Heart size={24} className="text-red-500" />
                  <CardTitle className="text-lg font-bold text-gray-800">Health & Fitness</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Excellent health condition with focus on maintaining physical and mental well-being for optimal performance.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe size={24} className="text-green-600" />
                  <CardTitle className="text-lg font-bold text-gray-800">Hobbies & Interests</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Passionate about technology trends, open-source contributions, gaming, and continuous learning through online courses and tech communities.</p>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users size={24} className="text-purple-600" />
                  <CardTitle className="text-lg font-bold text-gray-800">Volunteering</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Active volunteer in local community tech workshops, helping others learn programming basics and digital literacy skills.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
             Write me an email or download my resume.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" onClick={(e) => {
  e.preventDefault();
  window.location = "mailto:" + "khomriichuk" + "@" + "gmail.com";
}}>
  <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
    <Mail size={18} className="mr-2" />
    Email 
  </Button>
</a>

              <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <p className="text-gray-400">
            Sasha Khomriichuk. ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;