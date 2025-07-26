import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';
import RatingBar from '../../components/ui/RatingBar';
import ExpandableList from '../../components/ui/ExpandableList';

const Home = () => {
  const [expandedSections, setExpandedSections] = useState({
    aiTools: false,
    workflows: false,
    data: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const portfolioImages = [
    { src: "/images/img_image_project.png", alt: "Project 1" },
    { src: "/images/img_image_project_462x492.png", alt: "Project 2" },
    { src: "/images/img_image_project_1.png", alt: "Project 3" },
    { src: "/images/img_image_profile.png", alt: "Profile Project" },
    { src: "/images/img_image_project_554x592.png", alt: "Project 4" },
    { src: "/images/img_image_project_2.png", alt: "Project 5" },
    { src: "/images/img_image_jliaai4.png", alt: "Project 6" },
    { src: "/images/img_image_project_3.png", alt: "Project 7" },
    { src: "/images/img_image_project_4.png", alt: "Project 8" }
  ];

  const recentWorks = [
    { src: "/images/img_image_project_334x386.png", alt: "Recent Work 1" },
    { src: "/images/img_image_project_5.png", alt: "Recent Work 2" },
    { src: "/images/img_image_project_6.png", alt: "Recent Work 3" },
    { src: "/images/img_image_jliaai4_334x386.png", alt: "Recent Work 4" }
  ];

  const processSteps = [
    {
      number: "1",
      icon: "/images/img_1179440402.svg",
      title: "Define Your Vision",
      description: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly."
    },
    {
      number: "2", 
      icon: "/images/img_3553010246.svg",
      title: "Submit Your Request",
      description: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity."
    },
    {
      number: "3",
      icon: "/images/img_3380339736.svg", 
      title: "Project Delivered",
      description: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations."
    }
  ];

  const services = [
    {
      icon: "/images/img_1156950032.svg",
      title: "Influencer Marketing",
      description: "Connect with the right influencers to amplify your brand message and reach your target audience through authentic partnerships and strategic campaigns."
    },
    {
      icon: "/images/img_162505875.svg",
      title: "Web Development", 
      description: "Build responsive, fast, and user-friendly websites that convert visitors into customers using modern technologies and best practices."
    },
    {
      icon: "/images/img_3494739676.svg",
      title: "SEO Optimization",
      description: "Improve your website\'s visibility on search engines with comprehensive SEO strategies that drive organic traffic and boost your online presence."
    },
    {
      icon: "/images/img_3656879250.svg",
      title: "Automation",
      description: "Streamline your business processes with smart automation solutions that save time, reduce errors, and increase efficiency across all operations."
    },
    {
      icon: "/images/img_1179440402.svg",
      title: "UI/UX Design",
      description: "Create intuitive, engaging user experiences with beautiful interfaces that delight users and drive conversions through thoughtful design."
    },
    {
      icon: "/images/img_3553010246.svg",
      title: "Digital Marketing and Social Media Strategy",
      description: "Develop comprehensive digital marketing strategies that leverage social media platforms to build brand awareness and drive measurable results."
    }
  ];

  const testimonials = [
    {
      name: "Richards Johnson",
      review: "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
      rating: 5
    },
    {
      name: "June Lee",
      role: "CEO of GreenRoots",
      image: "/images/img_picture_client.png",
      review: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
      rating: 5
    },
    {
      name: "Jona Carter", 
      role: "Founder of EcoLux",
      image: "/images/img_picture_client_84x84.png",
      review: "Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
      rating: 5
    },
    {
      name: "Sofia Toms",
      role: "Founder at GreenK Studios", 
      image: "/images/img_picture_client_1.png",
      review: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
      rating: 5
    }
  ];

  const stats = [
    { number: "180+", description: "design projects completed." },
    { number: "96%", description: "Client satisfaction rate." },
    { number: "15+", description: "Years of experience" }
  ];

  const skillChips = [
    "Product Design",
    "Brand Identity Design", 
    "UX Design",
    "Branding",
    "Packaging Design",
    "Figma",
    "Photoshop"
  ];

  const serviceChips = [
    "Influencer Marketing",
    "Web Development",
    "SEO Optimization", 
    "Automation",
    "UI/UX Design",
    "Digital Marketing"
  ];

  const additionalServices = [
    { icon: "/images/img_136852161.png", text: "Copywriting" },
    { icon: "/images/img_3360272047.png", text: "Brand Graphics" },
    { icon: "/images/img_2160490005.png", text: "Brand Migration" },
    { icon: "/images/img_3472523684.png", text: "Package Design" },
    { icon: "/images/img_910706063.png", text: "Branding" },
    { icon: "/images/img_3005336362.png", text: "Slide Decks" },
    { icon: "/images/img_1028000027.png", text: "Optimization" },
    { icon: "/images/img_3656879250_white_a700.png", text: "Brand Landing Pages" },
    { icon: "/images/img_2705277321.png", text: "Social Media" },
    { icon: "/images/img_1529132500.png", text: "Icons" },
    { icon: "/images/img_3899066744.png", text: "Brand Visibility" },
    { icon: "/images/img_2590140196.png", text: "Brand Integrations" }
  ];

  const aiToolsData = [
    { icon: "/images/img_component_1_pink_400.svg", title: "Content\nGenerator" },
    { icon: "/images/img_component_1_blue_a400.svg", title: "SEO\nOptimizer" },
    { icon: "/images/img_component_1_yellow_a700.svg", title: "Social Media\nScheduler" },
    { icon: "/images/img_component_1_teal_400.svg", title: "Analytics\nTracker" },
    { icon: "/images/img_component_1_deep_orange_500.svg", title: "Email\nAutomation" },
    { icon: "/images/img_component_1_indigo_a100.svg", title: "Design\nAssistant" },
    { icon: "/images/img_component_1_green_a700.svg", title: "Data\nVisualizer" },
    { icon: "/images/img_component_1_red_800.svg", title: "Performance\nMonitor" }
  ];

  const workflowsData = [
    { icon: "/images/img_component_1_pink_400.svg", title: "Marketing\nCampaign" },
    { icon: "/images/img_component_1_blue_a400.svg", title: "Content\nProduction" },
    { icon: "/images/img_component_1_yellow_a700.svg", title: "Client\nOnboarding" },
    { icon: "/images/img_component_1_teal_400.svg", title: "Project\nManagement" },
    { icon: "/images/img_component_1_deep_orange_500.svg", title: "Quality\nAssurance" },
    { icon: "/images/img_component_1_indigo_a100.svg", title: "Brand\nConsistency" },
    { icon: "/images/img_component_1_green_a700.svg", title: "Feedback\nCollection" },
    { icon: "/images/img_component_1_red_800.svg", title: "Delivery\nProcess" }
  ];

  const dataSourcesData = [
    { icon: "/images/img_component_1_pink_400.svg", title: "Client\nDatabase" },
    { icon: "/images/img_component_1_blue_a400.svg", title: "Design\nAssets" },
    { icon: "/images/img_component_1_yellow_a700.svg", title: "Project\nFiles" },
    { icon: "/images/img_component_1_teal_400.svg", title: "Brand\nGuidelines" },
    { icon: "/images/img_component_1_deep_orange_500.svg", title: "Marketing\nMaterials" },
    { icon: "/images/img_component_1_indigo_a100.svg", title: "Analytics\nData" },
    { icon: "/images/img_component_1_green_a700.svg", title: "Feedback\nReports" },
    { icon: "/images/img_component_1_red_800.svg", title: "Performance\nMetrics" }
  ];

  return (
    <div className="w-full bg-primary overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-primary">
        <div className="absolute inset-0 bg-[url('/images/img_image.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-normal leading-tight text-primary">
                    <span className="block">Influence</span>
                    <span className="block">that you</span>
                    <span className="block">need</span>
                    <span className="block">Indeed</span>
                  </h1>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="primary" size="large">
                    Get Started
                  </Button>
                  <Button variant="primary" size="large">
                    View Projects
                  </Button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-8">
                  <div className="h-px w-24 bg-white-overlay-3"></div>
                  <div className="h-px w-24 bg-white-overlay-3"></div>
                </div>
              </div>
            </div>

            {/* Right Content - AI Panel */}
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="bg-[linear-gradient(180deg,#00000000_0%,_#000000_100%)] p-6 lg:p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <p className="text-lg font-mono uppercase text-muted mb-4">Make AI your own</p>
                  <img src="/images/img_component_1.svg" alt="AI Component" className="w-full max-w-sm mx-auto mb-6" />
                </div>
                
                <div className="space-y-6">
                  {/* AI Tools Section */}
                  <div className="space-y-4">
                    <button
                      onClick={() => toggleSection('aiTools')}
                      className="w-full flex justify-between items-center p-4 border border-[#5a5a5a60] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <span className="text-base font-mono uppercase text-primary">AI tools</span>
                      <span className="text-base font-mono uppercase text-muted">0 Selected</span>
                    </button>
                    
                    {expandedSections.aiTools && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {aiToolsData.map((tool, index) => (
                            <div key={index} className="bg-white-overlay-1 border border-white-overlay-4 rounded-lg p-3 text-center">
                              <img src={tool.icon} alt={tool.title} className="w-6 h-6 mx-auto mb-2" />
                              <p className="text-xs font-jakarta font-medium text-primary whitespace-pre-line">{tool.title}</p>
                              <div className="w-3 h-3 border border-white-overlay-4 rounded bg-overlay-1 mt-2 ml-auto"></div>
                            </div>
                          ))}
                        </div>
                        <Button variant="primary" size="medium" fullWidth>
                          Next
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Workflows Section */}
                  <div className="space-y-4">
                    <button
                      onClick={() => toggleSection('workflows')}
                      className="w-full flex justify-between items-center p-4 border border-[#5a5a5a60] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <span className="text-base font-mono uppercase text-primary">Your workflows</span>
                      <span className="text-base font-mono uppercase text-muted">0 Selected</span>
                    </button>
                    
                    {expandedSections.workflows && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {workflowsData.map((workflow, index) => (
                            <div key={index} className="bg-white-overlay-1 border border-white-overlay-4 rounded-lg p-3 text-center">
                              <img src={workflow.icon} alt={workflow.title} className="w-6 h-6 mx-auto mb-2" />
                              <p className="text-xs font-jakarta font-medium text-primary whitespace-pre-line">{workflow.title}</p>
                              <div className="w-3 h-3 border border-white-overlay-4 rounded bg-overlay-1 mt-2 ml-auto"></div>
                            </div>
                          ))}
                        </div>
                        <Button variant="primary" size="medium" fullWidth>
                          Next
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Data Sources Section */}
                  <div className="space-y-4">
                    <button
                      onClick={() => toggleSection('data')}
                      className="w-full flex justify-between items-center p-4 border border-[#5a5a5a60] rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <span className="text-base font-mono uppercase text-primary">Your data</span>
                      <span className="text-base font-mono uppercase text-muted">0 Selected</span>
                    </button>
                    
                    {expandedSections.data && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                          {dataSourcesData.map((dataSource, index) => (
                            <div key={index} className="bg-white-overlay-1 border border-white-overlay-4 rounded-lg p-3 text-center">
                              <img src={dataSource.icon} alt={dataSource.title} className="w-6 h-6 mx-auto mb-2" />
                              <p className="text-xs font-jakarta font-medium text-primary whitespace-pre-line">{dataSource.title}</p>
                              <div className="w-3 h-3 border border-white-overlay-4 rounded bg-overlay-1 mt-2 ml-auto"></div>
                            </div>
                          ))}
                        </div>
                        <Button variant="primary" size="medium" fullWidth>
                          Next
                        </Button>
                      </div>
                    )}
                    <div className="mt-16 flex justify-center"> {/* Adds spacing above the button and centers it */}
            <Button variant="primary" size="large">
              Submit
            </Button>
          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>

      {/* Projects Section */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary mb-6">
              Projects
            </h2>
            <p className="text-xl font-inter font-normal leading-8 text-tertiary max-w-2xl mx-auto">
              Want to build your own website? Check out projects showcasing our latest work
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-secondary rounded-[20px] p-6 lg:p-8 shadow-[16px_24px_20px_#00000066]">
              <h3 className="text-xl lg:text-2xl font-jakarta font-semibold text-primary mb-4">
                AI-Powered Brand Identity
              </h3>
              <div className="mb-6">
                <img 
                  src="/images/img_image_project.png" 
                  alt="AI-Powered Brand Identity Project"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-base font-inter font-normal leading-6 text-tertiary mb-6">
                Revolutionary brand identity design using artificial intelligence to create unique, 
                memorable visual identities that resonate with target audiences. This project combines 
                cutting-edge AI technology with creative design principles to deliver exceptional branding solutions.
              </p>
              <Button 
                variant="primary" 
                size="medium" 
                fullWidth
                onClick={() => window.location.href = '/blog/ai-brand-identity'}
              >
                Read More
              </Button>
            </div>

            {/* Project 2 */}
            <div className="bg-secondary rounded-[20px] p-6 lg:p-8 shadow-[16px_24px_20px_#00000066]">
              <h3 className="text-xl lg:text-2xl font-jakarta font-semibold text-primary mb-4">
                E-commerce Platform Redesign
              </h3>
              <div className="mb-6">
                <img 
                  src="/images/img_image_project_2.png" 
                  alt="E-commerce Platform Redesign Project"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-base font-inter font-normal leading-6 text-tertiary mb-6">
                Complete redesign of a major e-commerce platform focusing on user experience, 
                conversion optimization, and modern design aesthetics. The project resulted in 
                a 40% increase in user engagement and significantly improved conversion rates.
              </p>
              <Button 
                variant="primary" 
                size="medium" 
                fullWidth
                onClick={() => window.location.href = '/blog/ecommerce-redesign'}
              >
                Read More
              </Button>
            </div>

            {/* Project 3 */}
            <div className="bg-secondary rounded-[20px] p-6 lg:p-8 shadow-[16px_24px_20px_#00000066]">
              <h3 className="text-xl lg:text-2xl font-jakarta font-semibold text-primary mb-4">
                Digital Marketing Automation
              </h3>
              <div className="mb-6">
                <img 
                  src="/images/img_image_project_3.png" 
                  alt="Digital Marketing Automation Project"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-base font-inter font-normal leading-6 text-tertiary mb-6">
                Comprehensive digital marketing automation system that streamlines campaign management, 
                lead nurturing, and customer engagement. This solution has helped businesses reduce 
                manual work by 60% while improving campaign effectiveness and ROI.
              </p>
              <Button 
                variant="primary" 
                size="medium" 
                fullWidth
                onClick={() => window.location.href = '/blog/marketing-automation'}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Border Overlay */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>

      

{/* Meet Meily Section */}
<section className="relative w-full py-16 lg:py-24 my-16"> {/* Removed bg-primary, mx-4 sm:mx-6 lg:mx-8 */}
        {/* Full-width background color */}
        <div className="absolute inset-0 bg-primary"></div>
        
        {/* Content wrapper with max-width, auto-margins, and horizontal padding */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary">
                  Meet Meily
                </h2>
                <p className="text-base font-inter font-normal leading-7 text-primary max-w-2xl">
                  I am Meily, a passionate Brand Identity & Package Designer based in tokyo. I 
                  specialze in crafting bold visual identities and packaging that captivate and 
                  inspire, blending creativity with strategy to elevate brands.
                </p>
              </div>
              
              <ChipView items={skillChips} />
              
              <div className="space-y-8">
                <div className="h-px w-full bg-white-overlay-3"></div>
                
                <div className="space-y-4">
                  {[
                    { role: "Freelance", company: "GreenLeaf Co", period: "Currently" },
                    { role: "Brand Designer", company: "UrbanFit Studio", period: "2023-24" },
                    { role: "Package Designer", company: "GreenK Studio", period: "2020-22" }
                  ].map((job, index) => (
                    <div key={index} className="bg-primary rounded-lg p-4 shadow-[16px_24px_20px_#00000066]">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-inter font-normal text-tertiary">{job.role}</span>
                        <span className="text-base font-inter font-normal text-tertiary">{job.company}</span>
                        <span className="text-base font-inter font-normal text-tertiary">{job.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xl font-inter font-normal text-tertiary">Recent Works</span>
                <img src="/images/img_svg.svg" alt="Arrow" className="w-8 h-8" />
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/img_profile_pic.png" 
                alt="Meily Profile"
                className="w-full h-auto rounded border-radius-[4px] object-cover"
              />
            </div>
          </div>
          
          {/* Recent Works Grid */}
          <div className="mt-16">
            <div className="h-px w-full bg-white-overlay-3 mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {recentWorks.map((work, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={work.src} 
                    alt={work.alt}
                    className="w-full h-auto rounded border-radius-[4px] object-cover"
                  />
                  {index === 3 && (
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <img src="/images/img_arrow_right.svg" alt="Arrow Right" className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="outline" size="small" fullWidth>
                      <span className="flex items-center justify-center gap-2">
                        View Casestudy
                        <img src="/images/img_arrow_container.svg" alt="Arrow" className="w-6 h-6" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Border Overlay for Meet Meily */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>

      {/* Process Section */}
      <section className="relative w-full py-16 lg:py-24 my-16"> {/* Removed bg-primary, mx-4 sm:mx-6 lg:mx-8 */}
        {/* Full-width background color */}
        <div className="absolute inset-0 bg-primary"></div>
        
        {/* Content wrapper with max-width, auto-margins, and horizontal padding */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/img_process_pic.png" 
                alt="Process"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-2xl px-4 py-2">
                <div className="w-2 h-2 bg-white rounded"></div>
                <span className="text-base font-inter font-normal text-primary">Design process</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary">
                  Process
                </h2>
                <p className="text-xl font-inter font-normal leading-8 text-tertiary">
                  crafting bold visuals that inspire and elevate brands with 
                  thought process.
                </p>
              </div>
              
              <div className="h-px w-full bg-white-overlay-3"></div>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-secondary rounded-[30px] p-6 lg:p-8 shadow-[16px_24px_20px_#00000066]">
                    <div className="flex justify-between items-start mb-6">
                      <img src={step.icon} alt={`Step ${step.number}`} className="w-8 h-8" />
                      <span className="bg-secondary rounded-2xl px-4 py-2 text-base font-inter font-normal text-primary">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-inter font-medium text-primary mb-6">
                      {step.title}
                    </h3>
                    <div className="h-px w-full bg-white-overlay-3 mb-6"></div>
                    <p className="text-base font-inter font-normal leading-6 text-tertiary">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Border Overlay for Process Section */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>

      

      {/* Services Section */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary">
                  Services
                </h2>
                <p className="text-xl font-inter font-normal leading-8 text-tertiary">
                  Comprehensive digital solutions designed to elevate your business through innovative strategies and cutting-edge technology.
                </p>
              </div>
              
              <ChipView items={serviceChips} />
              
              <div className="h-px w-full bg-white-overlay-3"></div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/img_design_pic.png" 
                alt="Digital Services"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-secondary rounded-[20px] p-6 lg:p-8 shadow-[16px_24px_20px_#00000066]">
                <div className="flex items-center gap-4 mb-4">
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  <h3 className="text-xl lg:text-2xl font-jakarta font-semibold text-primary">
                    {service.title}
                  </h3>
                </div>
                <div className="h-px w-full bg-white-overlay-3 mb-4"></div>
                <p className="text-base font-inter font-normal leading-6 text-tertiary">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-12 space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="bg-secondary rounded-2xl px-4 py-3">
                <span className="text-base font-inter font-normal text-tertiary">Slide Decks</span>
              </div>
              {additionalServices.slice(0, 8).map((service, index) => (
                <div key={index} className="bg-secondary rounded-2xl px-4 py-3 flex items-center gap-2">
                  <img src={service.icon} alt={service.text} className="w-5 h-5" />
                  <span className="text-base font-inter font-normal text-tertiary">{service.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-overlay-3 rounded-2xl px-4 py-3">
                <span className="text-base font-inter font-normal text-tertiary">Brand Integrations</span>
              </div>
              {additionalServices.slice(8).map((service, index) => (
                <div key={index} className="bg-secondary rounded-2xl px-4 py-3 flex items-center gap-2">
                  <img src={service.icon} alt={service.text} className="w-5 h-5" />
                  <span className="text-base font-inter font-normal text-tertiary">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Border Overlay */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>


      {/* Client Reviews Section */}
      <section className="relative w-full py-16 lg:py-24 my-16"> {/* Removed bg-primary, border classes, mx-4 sm:mx-6 lg:mx-8 */}
        {/* Full-width background color */}
        <div className="absolute inset-0 bg-primary"></div>
        
        {/* Content wrapper with max-width, auto-margins, and horizontal padding */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/img_client_pic.png" 
                alt="Client Reviews"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-2xl px-4 py-2">
                <div className="w-2 h-2 bg-white rounded"></div>
                <span className="text-base font-inter font-normal text-primary">Reviews</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary">
                  Client Reviews
                </h2>
                <p className="text-xl font-inter font-normal leading-8 text-tertiary">
                  Real feedback from clients who trusted my design expertise 
                  to elevate their brands successfully.
                </p>
              </div>
              
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[linear-gradient(180deg,#0d0d0d_0%,_#0d0d0d00_100%)] rounded-lg p-6 shadow-[0px_4px_50px_#888888ff]">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-21 h-21 rounded-full mb-6"
                  />
                )}
                <div className="space-y-4">
                  <h4 className="text-xl lg:text-2xl font-inter font-medium text-primary">
                    {testimonial.name}
                  </h4>
                  {testimonial.role && (
                    <p className="text-base font-inter font-normal text-tertiary">
                      {testimonial.role}
                    </p>
                  )}
                  <div className="h-px w-full bg-white-overlay-3"></div>
                  <p className="text-base font-inter font-normal leading-7 text-primary">
                    {testimonial.review}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-inter font-medium text-tertiary">
                      {testimonial.rating}.0
                    </span>
                    <RatingBar rating={testimonial.rating} readonly size="medium" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="bg-secondary rounded-[18px] p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <h3 className="text-2xl lg:text-3xl font-inter font-medium text-primary">
                    {stat.number}
                  </h3>
                  <p className="text-xl font-inter font-normal text-secondary">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Border Overlay for Client Reviews */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>



      {/* FAQ Section */}
      <section className="relative w-full py-16 lg:py-24 bg-[linear-gradient(180deg,#00000000_0%,_#000000_100%)]">
        <div className="absolute inset-0 bg-[url('/images/img_image_1200x1920.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-2xl px-4 py-2">
                <div className="w-2 h-2 bg-white rounded"></div>
                <span className="text-base font-inter font-normal text-primary">FAQ'S</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-normal text-primary">
                  Answers
                </h2>
                <p className="text-xl font-inter font-normal leading-8 text-tertiary">
                  Find answers to common questions 
                </p>
              </div>
              
              <img 
                src="/images/img_design_pic_502x778.png" 
                alt="FAQ Design"
                className="w-full h-auto rounded-2xl object-cover"
              />
              
              <ChipView items={["Product Design", "Brand Identity Design", "Branding"]} />
              
              <div className="h-px w-full bg-white-overlay-3"></div>
              
              
            </div>
            
            {/* Right Content - FAQ */}
            <div className="w-full lg:w-1/2">
              <ExpandableList />
            </div>
          </div>
        </div>
        
        {/* Border Overlay */}
        <div className="absolute inset-4 border border-white-overlay-3 rounded-[48px] pointer-events-none"></div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-primary py-16 lg:py-24 border-t border-white-overlay-3">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Navigation Links Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-inter font-medium text-primary mb-6">Navigation</h3>
              <nav className="space-y-4">
                <a href="#services" className="block text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                  Services
                </a>
                <a href="#about" className="block text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                  About
                </a>
                <a href="#process" className="block text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                  Process
                </a>
                <a href="#portfolio" className="block text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                  Portfolio
                </a>
                <a href="#contact" className="block text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </nav>
            </div>
            
            {/* Contact Us Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-inter font-medium text-primary mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-inter font-medium text-primary mb-2">Company Name</h4>
                  <p className="text-base font-inter font-normal text-tertiary">Influyenze Co</p>
                </div>
                <div>
                  <h4 className="text-base font-inter font-medium text-primary mb-2">Email</h4>
                  <a href="mailto:contact@influyenze.co" className="text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                    contact@influyenze.co
                  </a>
                </div>
                <div>
                  <h4 className="text-base font-inter font-medium text-primary mb-2">Phone</h4>
                  <a href="tel:+1234567890" className="text-base font-inter font-normal text-tertiary hover:text-primary transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h4 className="text-base font-inter font-medium text-primary mb-2">Address</h4>
                  <p className="text-base font-inter font-normal text-tertiary">
                    123 Business Street<br />
                    Suite 456<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 mt-12 pt-8 border-t border-white-overlay-3">
            <a href="https://www.linkedin.com/company/influyenze-co" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-tertiary transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-tertiary transition-colors duration-200" aria-label="Instagram">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583-.072-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-tertiary transition-colors duration-200" aria-label="Facebook">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-tertiary transition-colors duration-200" aria-label="Twitter">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-white-overlay-3">
            <p className="text-base font-inter font-normal text-tertiary">
              All rights reserved © 2025 by influyenze.co
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
